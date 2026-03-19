// ── Colour palette ────────────────────────────────────────────────────────
export const COLORS = [
    { id: 'red',    hex: '#e74c3c', labelRu: 'Красный',    symbol: '●' },
    { id: 'blue',   hex: '#3498db', labelRu: 'Синий',      symbol: '■' },
    { id: 'green',  hex: '#27ae60', labelRu: 'Зелёный',    symbol: '▲' },
    { id: 'yellow', hex: '#f1c40f', labelRu: 'Жёлтый',     symbol: '◆' },
    { id: 'purple', hex: '#9b59b6', labelRu: 'Фиолетовый', symbol: '★' },
    { id: 'orange', hex: '#e67e22', labelRu: 'Оранжевый',  symbol: '⬟' },
    { id: 'cyan',   hex: '#1abc9c', labelRu: 'Бирюзовый',  symbol: '⬡' },
    { id: 'pink',   hex: '#e91e8c', labelRu: 'Розовый',    symbol: '♥' },
];

// Words normalised: Ё → Е (avoids keyboard layout issues)
export const WORDS_BY_LENGTH = {
    3: ['КОТ','ДОМ','РОТ','НОС','МЕЧ','ЛУК','СОН','ДУБ','МЯЧ','РАК','ЖУК','ЛЕД','ВОЛ','ГОЛ','КИТ','ЛЕС','ВОР','ЛОБ','РОГ','НОЖ'],
    4: ['ВОЛК','СТОЛ','КОНЬ','ЛИСТ','МОСТ','ОКНО','СОЛЬ','РЫБА','РОЗА','СВЕТ','ТЕНЬ','ЗИМА','ЛОСЬ','КРАН','ГРОМ','ПУТЬ','НОЧЬ','ДЕНЬ','ДУГА','РОСТ'],
    5: ['ЗАМОК','ВЕТЕР','ГРОЗА','ЗЕМЛЯ','КНИГА','ЛИМОН','ПАРУС','СЛОВО','ТАЙНА','ГОЛОС','БЕРЕГ','ДОЖДЬ','ОГОНЬ','ГОРОД','ПЛАМЯ'],
    6: ['БЕРЕЗА','ЗВЕЗДА','ЛОШАДЬ','МОЛНИЯ','НЕБЕСА','РАДУГА','СКАЗКА','ЯБЛОНЯ','ДЕРЕВО','ЛИСТЬЯ','ОБЛАКА','РАКЕТА','СОЛНЦЕ','ВЕСНОЙ','ЗАКАТЫ'],
    7: ['ЖУРАВЛЬ','ЗЕРКАЛО','ИСТОРИЯ','ПРИРОДА','РАССВЕТ','ДЕРЕВНЯ','СВОБОДА','МОЛЧАТЬ','ПОЛНОЧЬ','ЛАДОШКА','ОСКОЛОК','ЖЕЛАНИЕ','МЕЧТАТЬ','ХОРОВОД','КАНИКУЛ'],
    8: ['ГОРИЗОНТ','ТРОПИНКА','ФАНТАЗИЯ','МОЛЧАНИЕ','СКОРОСТЬ','ПРОГУЛКА','КОРЗИНКА','НОЧЛЕЖКА','КАСТРЮЛЯ','СВЕЖЕСТЬ','КРЕПОСТЬ','ЖЕСТОКИЙ','КРАСИВЫЙ','ХОЛОДНЫЙ','КАРТИНКА'],
};

// ── Secret generation ──────────────────────────────────────────────────────
export function generateSecret(mode, length, digitsMode) {
    if (mode === 'numbers') return _generateNumbers(length, digitsMode);
    if (mode === 'colors')  return _generateColors(length);
    if (mode === 'words')   return _generateWord(length);
    return [];
}

function _generateNumbers(length, digitsMode) {
    if (digitsMode === 'unique') {
        const digits = ['0','1','2','3','4','5','6','7','8','9'];
        _shuffle(digits);
        return digits.slice(0, length);
    }
    return Array.from({ length }, () => String(Math.floor(Math.random() * 10)));
}

function _generateColors(length) {
    const pool = [...COLORS];
    _shuffle(pool);
    return pool.slice(0, length).map(c => c.id);
}

function _generateWord(length) {
    const words = WORDS_BY_LENGTH[length] ?? [];
    if (!words.length) return [];
    return words[Math.floor(Math.random() * words.length)].split('');
}

function _shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// ── Core evaluation ────────────────────────────────────────────────────────
// Works with any array of comparable primitives.
// Returns { bulls, cows }.
export function evaluateGuess(secret, guess) {
    const n = secret.length;
    let bulls = 0;
    const secretRem = [];
    const guessRem  = [];

    for (let i = 0; i < n; i++) {
        if (secret[i] === guess[i]) {
            bulls++;
        } else {
            secretRem.push(secret[i]);
            guessRem.push(guess[i]);
        }
    }

    const freq = {};
    for (const s of secretRem) freq[s] = (freq[s] ?? 0) + 1;

    let cows = 0;
    for (const g of guessRem) {
        if (freq[g] > 0) { cows++; freq[g]--; }
    }

    return { bulls, cows };
}

// ── Attempt-limit helper ───────────────────────────────────────────────────
// Returns null when there is no limit.
export function getAttemptLimit(type, length, fixed) {
    if (type === 'auto')  return length * 2;
    if (type === 'fixed') return fixed;
    return null;
}
