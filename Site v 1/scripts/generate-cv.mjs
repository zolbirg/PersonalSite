/**
 * После `vite build`: поднимает vite preview, рендерит /cv в PDF (без start-server-and-test — на новых Windows нет wmic).
 */
import { spawn } from 'child_process';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const pdfOut = path.join(rootDir, 'public', 'cv.pdf');
const viteCli = path.join(rootDir, 'node_modules', 'vite', 'bin', 'vite.js');
const previewPort = process.env.CV_PREVIEW_PORT ?? '4176';
const previewHost = process.env.CV_PREVIEW_HOST ?? 'localhost';
const previewUrl = `http://${previewHost}:${previewPort}/cv`;

function waitForOk(url, maxMs = 120000) {
    const start = Date.now();
    return new Promise((resolve, reject) => {
        const tick = async () => {
            if (Date.now() - start > maxMs) {
                reject(new Error(`Timeout waiting for ${url}`));
                return;
            }
            try {
                const res = await fetch(url);
                if (res.ok) {
                    resolve();
                    return;
                }
            } catch {
                /* retry */
            }
            setTimeout(tick, 400);
        };
        tick();
    });
}

function killPreview(child) {
    if (!child.pid) return;
    try {
        if (process.platform === 'win32') {
            spawn('taskkill', ['/pid', String(child.pid), '/f', '/t'], {
                stdio: 'ignore',
                windowsHide: true,
            });
        } else {
            child.kill('SIGTERM');
        }
    } catch {
        /* ignore */
    }
}

const preview = spawn(process.execPath, [viteCli, 'preview', '--port', previewPort, '--strictPort'], {
    cwd: rootDir,
    stdio: 'pipe',
    env: process.env,
});
preview.stdout?.on('data', (d) => process.stdout.write(d));
preview.stderr?.on('data', (d) => process.stderr.write(d));

preview.on('error', (err) => {
    console.error(err);
    process.exit(1);
});

try {
    await waitForOk(previewUrl);

    const launchOpts = {
        headless: true,
        timeout: 120000,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    };
    let browser;
    if (process.env.PUPPETEER_EXECUTABLE_PATH) {
        browser = await puppeteer.launch({
            ...launchOpts,
            executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
        });
    } else if (process.platform === 'win32') {
        try {
            browser = await puppeteer.launch({ ...launchOpts, channel: 'chrome' });
        } catch {
            browser = await puppeteer.launch(launchOpts);
        }
    } else {
        browser = await puppeteer.launch(launchOpts);
    }
    try {
        const page = await browser.newPage();
        await page.goto(previewUrl, { waitUntil: 'load', timeout: 120000 });
        await page.waitForSelector('article', { timeout: 30000 });
        await page.pdf({
            path: pdfOut,
            format: 'A4',
            printBackground: true,
            preferCSSPageSize: true,
            margin: { top: '0', right: '0', bottom: '0', left: '0' },
        });
        console.log(`Wrote ${pdfOut}`);
    } finally {
        await browser.close();
    }
} finally {
    killPreview(preview);
}
