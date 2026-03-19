import { useEffect, useRef, useState } from 'react';
import projectClasses from '../../../ProjectPages.module.scss';
import classes from './BullAndMoo.module.scss';
import { COLORS, generateSecret, evaluateGuess, getAttemptLimit } from './gameLogic';
import bullIcon from '../../../../../assets/icons/bull.png';
import cowIcon from '../../../../../assets/icons/cow.png';

// ── Default settings ───────────────────────────────────────────────────────
const DEFAULT_SETTINGS = {
    mode: 'numbers',
    length: 4,
    digitsMode: 'unique',
    attemptLimitType: 'auto',
    fixedAttempts: 8,
};

// ── Helpers ────────────────────────────────────────────────────────────────
function pluralAttempts(n) {
    if (n === 1) return 'попытку';
    if (n >= 2 && n <= 4) return 'попытки';
    return 'попыток';
}

function modeLabel(mode) {
    return mode === 'numbers' ? 'Числа' : mode === 'colors' ? 'Цвета' : 'Слова';
}

// ── GameSetup ──────────────────────────────────────────────────────────────
function GameSetup({ settings, onChange, onStart }) {
    const limit =
        settings.attemptLimitType === 'auto'  ? settings.length * 2 :
        settings.attemptLimitType === 'fixed' ? settings.fixedAttempts : '∞';

    return (
        <div className={classes.setupPanel}>
            <p className={classes.setupDescription}>
                Угадай загаданную последовательность.&nbsp;
                <span className={`${classes.iconInline} ${classes.iconInlineBull}`}>
                    <img src={bullIcon} alt="Бык" />
                </span>
                &nbsp;— верный символ на верном месте.&nbsp;
                <span className={`${classes.iconInline} ${classes.iconInlineCow}`}>
                    <img src={cowIcon} alt="Корова" />
                </span>
                &nbsp;— символ есть, но стоит не там.
            </p>

            {/* Mode */}
            <div className={classes.settingGroup}>
                <span className={classes.settingLabel}>Режим</span>
                <div className={classes.toggleGroup}>
                    {['numbers', 'colors', 'words'].map(m => (
                        <button
                            key={m}
                            className={`${classes.toggleBtn} ${settings.mode === m ? classes.toggleBtnActive : ''}`}
                            onClick={() => onChange({ mode: m })}
                        >
                            {modeLabel(m)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Length */}
            <div className={classes.settingGroup}>
                <span className={classes.settingLabel}>Длина: {settings.length}</span>
                <div className={classes.toggleGroup}>
                    {[3, 4, 5, 6, 7, 8].map(n => (
                        <button
                            key={n}
                            className={`${classes.toggleBtn} ${settings.length === n ? classes.toggleBtnActive : ''}`}
                            onClick={() => onChange({ length: n })}
                        >
                            {n}
                        </button>
                    ))}
                </div>
            </div>

            {/* Digits mode (numbers only) */}
            {settings.mode === 'numbers' && (
                <div className={classes.settingGroup}>
                    <span className={classes.settingLabel}>Повторы цифр</span>
                    <div className={classes.toggleGroup}>
                        <button
                            className={`${classes.toggleBtn} ${settings.digitsMode === 'unique' ? classes.toggleBtnActive : ''}`}
                            onClick={() => onChange({ digitsMode: 'unique' })}
                        >
                            Без повторов
                        </button>
                        <button
                            className={`${classes.toggleBtn} ${settings.digitsMode === 'repeat' ? classes.toggleBtnActive : ''}`}
                            onClick={() => onChange({ digitsMode: 'repeat' })}
                        >
                            С повторами
                        </button>
                    </div>
                </div>
            )}

            {/* Attempt limit */}
            <div className={classes.settingGroup}>
                <span className={classes.settingLabel}>
                    Лимит попыток:{' '}
                    <span className={classes.settingValue}>{limit}</span>
                </span>
                <div className={classes.toggleGroup}>
                    <button
                        className={`${classes.toggleBtn} ${settings.attemptLimitType === 'auto' ? classes.toggleBtnActive : ''}`}
                        onClick={() => onChange({ attemptLimitType: 'auto' })}
                    >
                        Авто (длина×2)
                    </button>
                    <button
                        className={`${classes.toggleBtn} ${settings.attemptLimitType === 'fixed' ? classes.toggleBtnActive : ''}`}
                        onClick={() => onChange({ attemptLimitType: 'fixed' })}
                    >
                        Фиксированный
                    </button>
                    <button
                        className={`${classes.toggleBtn} ${settings.attemptLimitType === 'none' ? classes.toggleBtnActive : ''}`}
                        onClick={() => onChange({ attemptLimitType: 'none' })}
                    >
                        Без лимита
                    </button>
                </div>
                {settings.attemptLimitType === 'fixed' && (
                    <div className={classes.fixedRow}>
                        <label className={classes.fixedLabel}>Количество попыток:</label>
                        <input
                            className={classes.fixedInput}
                            type="number"
                            min={1}
                            max={50}
                            value={settings.fixedAttempts}
                            onChange={e =>
                                onChange({ fixedAttempts: Math.max(1, Math.min(50, Number(e.target.value))) })
                            }
                        />
                    </div>
                )}
            </div>

            <button className={classes.startBtn} onClick={onStart}>
                Начать игру
            </button>
        </div>
    );
}

// ── ColorPicker ────────────────────────────────────────────────────────────
function ColorPicker({ sequence, length, onAdd, onRemove, onSubmit }) {
    const canAdd    = sequence.length < length;
    const canSubmit = sequence.length === length;

    return (
        <div className={classes.colorPicker}>
            <div className={classes.colorSequence}>
                {Array.from({ length }).map((_, i) => {
                    const colorId = sequence[i];
                    const color   = COLORS.find(c => c.id === colorId);
                    return (
                        <div
                            key={i}
                            className={`${classes.colorSlot} ${color ? classes.colorSlotFilled : ''}`}
                            style={color ? { background: color.hex } : undefined}
                            title={color ? color.labelRu : undefined}
                        >
                            {color && <span className={classes.colorSymbol}>{color.symbol}</span>}
                        </div>
                    );
                })}
            </div>

            <div className={classes.colorPalette}>
                {COLORS.map(color => (
                    <button
                        key={color.id}
                        className={classes.colorToken}
                        style={{ background: color.hex }}
                        onClick={() => canAdd && onAdd(color.id)}
                        disabled={!canAdd}
                        title={color.labelRu}
                    >
                        <span className={classes.colorSymbol}>{color.symbol}</span>
                    </button>
                ))}
            </div>

            <div className={classes.colorActions}>
                <button
                    className={classes.actionBtn}
                    onClick={onRemove}
                    disabled={sequence.length === 0}
                >
                    ← Стереть
                </button>
                <button
                    className={classes.submitBtn}
                    onClick={onSubmit}
                    disabled={!canSubmit}
                >
                    Проверить
                </button>
            </div>
        </div>
    );
}

// ── AttemptRow ─────────────────────────────────────────────────────────────
function AttemptRow({ attempt, mode, isLast }) {
    const renderValue = () => {
        if (mode === 'colors') {
            return (
                <div className={classes.attemptColors}>
                    {attempt.value.map((colorId, i) => {
                        const color = COLORS.find(c => c.id === colorId);
                        return (
                            <span
                                key={i}
                                className={classes.attemptColorDot}
                                style={{ background: color?.hex }}
                                title={color?.labelRu}
                            >
                                {color?.symbol}
                            </span>
                        );
                    })}
                </div>
            );
        }
        return (
            <span className={classes.attemptValue}>
                {attempt.value.join('')}
            </span>
        );
    };

    return (
        <div className={`${classes.attemptRow} ${isLast ? classes.attemptRowLast : ''}`}>
            <div className={classes.attemptValueCell}>{renderValue()}</div>
            <div className={classes.attemptResult}>
                <span className={classes.bullsBadge} title="Быки">
                    <img src={bullIcon} alt="Бык" className={classes.iconSmall} />
                    <span className={classes.badgeNumber}>{attempt.bulls}</span>
                </span>
                <span className={classes.cowsBadge} title="Коровы">
                    <img src={cowIcon} alt="Корова" className={classes.iconSmall} />
                    <span className={classes.badgeNumber}>{attempt.cows}</span>
                </span>
            </div>
        </div>
    );
}

// ── GameBoard ──────────────────────────────────────────────────────────────
function GameBoard({ settings, attempts, onGuess, onReset, onNewSettings }) {
    const [inputValue, setInputValue] = useState('');
    const [colorSeq,   setColorSeq]   = useState([]);
    const [error,      setError]      = useState('');
    const inputRef   = useRef(null);
    const historyRef = useRef(null);

    const limit     = getAttemptLimit(settings.attemptLimitType, settings.length, settings.fixedAttempts);
    const remaining = limit !== null ? limit - attempts.length : null;

    // Reset input after each submitted attempt
    useEffect(() => {
        setInputValue('');
        setColorSeq([]);
        setError('');
        if (settings.mode !== 'colors' && inputRef.current) inputRef.current.focus();
    }, [attempts.length, settings.mode]);

    // Auto-scroll history to bottom
    useEffect(() => {
        if (historyRef.current) {
            historyRef.current.scrollTop = historyRef.current.scrollHeight;
        }
    }, [attempts]);

    const validateAndSubmit = () => {
        let guess;

        if (settings.mode === 'colors') {
            if (colorSeq.length !== settings.length) {
                setError(`Выберите ${settings.length} ${settings.length === 1 ? 'цвет' : 'цвета'}`);
                return;
            }
            guess = [...colorSeq];

        } else if (settings.mode === 'numbers') {
            const val = inputValue.trim();
            if (!/^\d+$/.test(val))                                   { setError('Только цифры'); return; }
            if (val.length !== settings.length)                       { setError(`Введите ровно ${settings.length} цифр`); return; }
            if (settings.digitsMode === 'unique' && new Set(val).size !== val.length) {
                setError('Цифры не должны повторяться'); return;
            }
            guess = val.split('');

        } else {
            // words
            const val = inputValue.trim().toUpperCase().replace(/Ё/g, 'Е');
            if (!/^[А-ЯЁ]+$/.test(val))         { setError('Только русские буквы'); return; }
            if (val.length !== settings.length)  { setError(`Введите ровно ${settings.length} букв`); return; }
            guess = val.split('');
        }

        setError('');
        onGuess(guess);
    };

    const handleNumberInput = e => {
        setInputValue(e.target.value.replace(/\D/g, '').slice(0, settings.length));
        setError('');
    };

    const handleWordInput = e => {
        setInputValue(
            e.target.value.replace(/[^а-яёА-ЯЁ]/g, '').slice(0, settings.length).toUpperCase()
        );
        setError('');
    };

    const handleKeyDown = e => { if (e.key === 'Enter') validateAndSubmit(); };

    return (
        <div className={classes.gameBoard}>
            {/* ── Header ── */}
            <div className={classes.boardHeader}>
                <div className={classes.boardInfo}>
                    <span className={classes.boardMode}>{modeLabel(settings.mode)}</span>
                    <span className={classes.boardLength}>× {settings.length}</span>
                    {remaining !== null && (
                        <span className={`${classes.boardRemaining} ${remaining <= 2 ? classes.boardRemainingLow : ''}`}>
                            {remaining} попыток
                        </span>
                    )}
                </div>
                <div className={classes.boardActions}>
                    <button className={classes.actionBtn} onClick={onReset}       title="Заново с теми же настройками">Заново</button>
                    <button className={classes.actionBtn} onClick={onNewSettings} title="Изменить настройки">Настройки</button>
                </div>
            </div>

            {/* ── History ── */}
            <div className={classes.attemptsHistory} ref={historyRef}>
                {attempts.length === 0
                    ? <div className={classes.noAttempts}>Сделайте первую попытку</div>
                    : attempts.map((attempt, idx) => (
                        <AttemptRow
                            key={attempt.id}
                            attempt={attempt}
                            mode={settings.mode}
                            isLast={idx === attempts.length - 1}
                        />
                    ))
                }
            </div>

            {/* ── Input area ── */}
            <div className={classes.inputArea}>
                {error && <div className={classes.errorMsg}>{error}</div>}

                {settings.mode === 'colors' ? (
                    <ColorPicker
                        sequence={colorSeq}
                        length={settings.length}
                        onAdd={id => { setColorSeq(prev => [...prev, id]); setError(''); }}
                        onRemove={() => setColorSeq(prev => prev.slice(0, -1))}
                        onSubmit={validateAndSubmit}
                    />
                ) : (
                    <div className={classes.textInputRow}>
                        <input
                            ref={inputRef}
                            className={classes.guessInput}
                            type="text"
                            value={inputValue}
                            onChange={settings.mode === 'numbers' ? handleNumberInput : handleWordInput}
                            onKeyDown={handleKeyDown}
                            placeholder={settings.mode === 'numbers'
                                ? `${settings.length} цифр`
                                : `${settings.length} букв`}
                            maxLength={settings.length}
                            autoComplete="off"
                            autoCorrect="off"
                            spellCheck="false"
                        />
                        <button
                            className={classes.submitBtn}
                            onClick={validateAndSubmit}
                            disabled={inputValue.length !== settings.length}
                        >
                            OK
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

// ── GameSummary ────────────────────────────────────────────────────────────
function GameSummary({ settings, secret, attempts, status, onPlayAgain, onNewSettings }) {
    const won = status === 'won';

    const renderSecret = () => {
        if (settings.mode === 'colors') {
            return (
                <div className={classes.summarySecret}>
                    {secret.map((colorId, i) => {
                        const color = COLORS.find(c => c.id === colorId);
                        return (
                            <span
                                key={i}
                                className={classes.summaryColorDot}
                                style={{ background: color?.hex }}
                                title={color?.labelRu}
                            >
                                {color?.symbol}
                            </span>
                        );
                    })}
                </div>
            );
        }
        return <span className={classes.summarySecretText}>{secret.join('')}</span>;
    };

    return (
        <div className={classes.gameSummary}>
            <div className={`${classes.summaryStatus} ${won ? classes.summaryStatusWon : classes.summaryStatusLost}`}>
                {won ? 'Угадал!' : 'Не угадал'}
            </div>

            <p className={classes.summaryStats}>
                {won
                    ? `Использовано ${attempts.length} ${pluralAttempts(attempts.length)}`
                    : `Использовано попыток: ${attempts.length}`}
            </p>

            <div className={classes.summaryReveal}>
                <span className={classes.summaryRevealLabel}>Загаданная последовательность</span>
                {renderSecret()}
            </div>

            <div className={classes.summaryBtns}>
                <button className={classes.startBtn}  onClick={onPlayAgain}>
                    Ещё раз
                </button>
                <button className={classes.actionBtn} onClick={onNewSettings}>
                    Настройки
                </button>
            </div>
        </div>
    );
}

// ── Main component ─────────────────────────────────────────────────────────
export default function BullAndMoo() {
    const titleRef = useRef(null);

    const [screen,   setScreen]   = useState('setup');
    const [settings, setSettings] = useState(DEFAULT_SETTINGS);
    const [secret,   setSecret]   = useState([]);
    const [attempts, setAttempts] = useState([]);
    const [status,   setStatus]   = useState('idle');

    // Intersection-observer fade-in for the title
    useEffect(() => {
        const el = titleRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add(projectClasses['is-visible']);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.1 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const handleSettingsChange = patch => setSettings(prev => ({ ...prev, ...patch }));

    const startGame = (currentSettings = settings) => {
        const newSecret = generateSecret(
            currentSettings.mode,
            currentSettings.length,
            currentSettings.digitsMode,
        );
        setSecret(newSecret);
        setAttempts([]);
        setStatus('in_progress');
        setScreen('game');
    };

    const handleGuess = guess => {
        const result      = evaluateGuess(secret, guess);
        const newAttempts = [...attempts, { id: Date.now(), value: guess, bulls: result.bulls, cows: result.cows }];
        setAttempts(newAttempts);

        const limit = getAttemptLimit(settings.attemptLimitType, settings.length, settings.fixedAttempts);

        if (result.bulls === settings.length) {
            setStatus('won');
            setScreen('summary');
        } else if (limit !== null && newAttempts.length >= limit) {
            setStatus('lost');
            setScreen('summary');
        }
    };

    const handleReset       = () => startGame(settings);
    const handleNewSettings = () => { setScreen('setup'); setStatus('idle'); };

    return (
        <section className={`${projectClasses.project__section} ${classes.sectionFullHeight} section`}>
            <div className={projectClasses.bg__shapes} aria-hidden="true">
                <div className={`${projectClasses.shape} ${projectClasses.shape__1}`} />
                <div className={`${projectClasses.shape} ${projectClasses.shape__2}`} />
                <div className={`${projectClasses.shape} ${projectClasses.shape__3}`} />
            </div>

            <h2
                ref={titleRef}
                className={`${projectClasses.project__title} ${projectClasses['animate-in']}`}
            >
                Bull &amp; Moo
            </h2>

            <div className={`${projectClasses.project__container} container`}>
                <div className={classes.gameRoot}>
                    {screen === 'setup' && (
                        <GameSetup
                            settings={settings}
                            onChange={handleSettingsChange}
                            onStart={() => startGame(settings)}
                        />
                    )}
                    {screen === 'game' && (
                        <GameBoard
                            settings={settings}
                            attempts={attempts}
                            onGuess={handleGuess}
                            onReset={handleReset}
                            onNewSettings={handleNewSettings}
                        />
                    )}
                    {screen === 'summary' && (
                        <GameSummary
                            settings={settings}
                            secret={secret}
                            attempts={attempts}
                            status={status}
                            onPlayAgain={handleReset}
                            onNewSettings={handleNewSettings}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}
