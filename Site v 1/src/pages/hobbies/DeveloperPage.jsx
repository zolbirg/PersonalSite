import { Link } from 'react-router-dom';
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiVite,
  SiRedux,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiSass,
} from 'react-icons/si';
import { FiMail, FiGithub, FiDownload, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { useLayoutEffect } from 'react';

import ScrollReveal from '../../assets/components/animations/ScrollReveal.jsx';
import photo1 from '../../assets/img/personalFoto2.png';
import classes from './developerPage.module.scss';

// ── Static data ────────────────────────────────────────────────────────────────

const TIMELINE = [
  {
    year: '2011',
    title: 'Первый бизнес',
    desc: 'Запускал и развивал разные предприятия, управлял командами до 20 человек. Научился думать задачей, а не инструментом.',
  },
  {
    year: '2018',
    title: 'Инженер',
    desc: 'Шесть лет работы в технической сфере: реальные проекты, документация, ответственность за результат.',
  },
  {
    year: '2022',
    title: 'Старт в программировании',
    desc: 'HTML, CSS, JavaScript — первые pet‑проекты и курсы. Понял, что разработка — это именно то, где сходятся логика и творчество.',
  },
  {
    year: 'сейчас',
    title: 'Frontend‑разработчик',
    desc: 'React, SCSS, Redux — строю интерфейсы, которые работают и выглядят хорошо. Открыт к командной работе и новым проектам.',
  },
];

const VALUES = [
  {
    icon: '🎯',
    title: 'Задача бизнеса — прежде всего',
    desc: 'Понимаю, что интерфейс — это инструмент. Фокусируюсь на том, что реально нужно бизнесу и пользователю, а не на красивых деталях ради деталей.',
    tag: 'Для клиента',
    tagMod: 'client',
  },
  {
    icon: '⏱',
    title: 'Сроки и ответственность',
    desc: 'Привык работать с планами и дедлайнами. Если что‑то идёт не так — говорю об этом заранее, а не в день сдачи.',
    tag: 'Для клиента',
    tagMod: 'client',
  },
  {
    icon: '💬',
    title: 'Понятная коммуникация',
    desc: 'Умею объяснять технические решения простыми словами. Без жаргона, по делу — чтобы обе стороны понимали, что и зачем делается.',
    tag: 'Для клиента',
    tagMod: 'client',
  },
  {
    icon: '✨',
    title: 'Чистый и читаемый код',
    desc: 'Пишу так, чтобы другой разработчик мог разобраться без пояснений. SOLID, KISS, осмысленные имена — не пустые слова, а каждодневная практика.',
    tag: 'Для команды',
    tagMod: 'team',
  },
  {
    icon: '🤝',
    title: 'Работа в команде',
    desc: 'Опыт управления людьми даёт понимание процессов с обеих сторон. Умею слушать, объяснять и находить компромисс без конфликтов.',
    tag: 'Для команды',
    tagMod: 'team',
  },
  {
    icon: '📈',
    title: 'Быстрый рост',
    desc: 'Постоянно изучаю что‑то новое. TypeScript, Next.js и Node.js уже в процессе — прогресс каждую неделю, а не раз в полгода.',
    tag: 'Для команды',
    tagMod: 'team',
  },
];

const SKILLS_CORE = [
  { icon: <SiJavascript />, label: 'JavaScript' },
  { icon: <SiReact />, label: 'React' },
  { icon: <SiHtml5 />, label: 'HTML5' },
  { icon: <SiCss3 />, label: 'CSS3' },
  { icon: <SiSass />, label: 'SCSS' },
  { icon: <SiRedux />, label: 'Redux' },
  { icon: <SiGit />, label: 'Git' },
  { icon: <SiVite />, label: 'Vite' },
];

const SKILLS_LEARNING = [
  { icon: <SiTypescript />, label: 'TypeScript' },
  { icon: <SiNextdotjs />, label: 'Next.js' },
  { icon: <SiNodedotjs />, label: 'Node.js' },
];

const CASE_STEPS = [
  {
    num: '01',
    title: 'Задача',
    desc: 'Сделать классическую игру «Быки и коровы» не просто рабочей, но по‑настоящему приятной для использования: с настройками, историей ходов и понятным UX.',
  },
  {
    num: '02',
    title: 'Подход',
    desc: 'Вынес всю логику в отдельный модуль gameLogic.js, разделил UI на смысловые блоки — настройки, игровое поле, история. Добавил плавные переходы и цветовой режим.',
  },
  {
    num: '03',
    title: 'Результат',
    desc: 'Полнофункциональная игра с тремя режимами (числа, цвета, слова), ограничением попыток, историей ходов и чистой компонентной архитектурой.',
  },
];

// ── Component ──────────────────────────────────────────────────────────────────

export default function DeveloperPage() {
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    // React Router + браузерная история могут восстанавливать позицию скролла.
    // Нам нужно всегда начинать страницу с верха.
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <main className={classes.page}>
      {/* ── Hero ── */}
      <section className={classes.hero}>
        <div>
          <div className={classes.hero__badge}>Открыт к предложениям</div>

          <ScrollReveal direction="left" delay={0.05}>
            <h1 className={classes.hero__name}>Канин Роман</h1>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.15}>
            <p className={classes.hero__role}>Frontend‑разработчик · React</p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.25}>
            <p className={classes.hero__desc}>
              Более 3 лет в разработке. Строю понятные, быстрые и красивые веб‑приложения.
              Бизнес‑опыт позволяет мыслить задачей, а не только кодом — поэтому мои
              интерфейсы работают на пользователя, а не просто выглядят красиво.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.35}>
            <div className={classes.hero__buttons}>
              <a href="/cv.pdf" download="Kanin_Roman_CV.pdf" className={`${classes.btn} ${classes['btn--primary']}`}>
                <FiDownload />
                Скачать CV
              </a>
              <a href="mailto:Kaninroman@mail.ru" className={`${classes.btn} ${classes['btn--outline']}`}>
                <FiMail />
                Написать мне
              </a>
              <Link to="/Project" className={`${classes.btn} ${classes['btn--ghost']}`}>
                Портфолио
                <FiArrowRight />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="scale" delay={0.1}>
          <div className={classes.hero__avatar} aria-hidden="true">
            <img
              src={photo1}
              alt="Канин Роман"
              className={classes.hero__avatarImg}
            />
          </div>
        </ScrollReveal>
      </section>

      {/* ── Story / Timeline ── */}
      <section className={classes.section}>
        <ScrollReveal direction="up">
          <div className={classes.sectionHead}>
            <h2 className={classes.sectionTitle}>Моя <span>история</span></h2>
            <p className={classes.sectionSub}>
              Путь от первого бизнеса до фронтенд‑разработки — каждый этап оставил что‑то ценное.
            </p>
            <div className={classes.divider} />
          </div>
        </ScrollReveal>

        <div className={classes.timeline}>
          {TIMELINE.map((item, i) => (
            <ScrollReveal key={item.year} direction="left" delay={i * 0.12}>
              <div className={classes.timeline__item}>
                <span className={classes.timeline__dot} aria-hidden="true" />
                <p className={classes.timeline__year}>{item.year}</p>
                <h3 className={classes.timeline__title}>{item.title}</h3>
                <p className={classes.timeline__desc}>{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Values ── */}
      <section className={classes.section}>
        <ScrollReveal direction="up">
          <div className={classes.sectionHead}>
            <h2 className={classes.sectionTitle}>Почему <span>я</span></h2>
            <p className={classes.sectionSub}>
              Честно о том, что я приношу в команду и проект.
            </p>
            <div className={classes.divider} />
          </div>
        </ScrollReveal>

        <div className={classes.valuesGrid}>
          {VALUES.map((v, i) => (
            <ScrollReveal key={v.title} direction="up" delay={i * 0.08}>
              <div className={classes.valueCard}>
                <span className={classes.valueCard__icon} aria-hidden="true">{v.icon}</span>
                <span className={`${classes.valueCard__tag} ${classes[`valueCard__tag--${v.tagMod}`]}`}>
                  {v.tag}
                </span>
                <h3 className={classes.valueCard__title}>{v.title}</h3>
                <p className={classes.valueCard__desc}>{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Skills ── */}
      <section className={classes.section}>
        <ScrollReveal direction="up">
          <div className={classes.sectionHead}>
            <h2 className={classes.sectionTitle}>Стек и <span>инструменты</span></h2>
            <p className={classes.sectionSub}>
              Технологии, с которыми работаю каждый день, и то, что активно изучаю прямо сейчас.
            </p>
            <div className={classes.divider} />
          </div>
        </ScrollReveal>

        <div className={classes.skillsWrapper}>
          <ScrollReveal direction="up" delay={0.1}>
            <div>
              <p className={classes.skillsGroup__label}>Основной стек</p>
              <div className={classes.skillsGrid}>
                {SKILLS_CORE.map((s) => (
                  <span key={s.label} className={classes.skillTag}>
                    {s.icon}
                    {s.label}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div>
              <p className={classes.skillsGroup__label}>Сейчас изучаю</p>
              <div className={classes.skillsGrid}>
                {SKILLS_LEARNING.map((s) => (
                  <span key={s.label} className={`${classes.skillTag} ${classes['skillTag--learning']}`}>
                    {s.icon}
                    {s.label}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Mini-case ── */}
      <section className={classes.section}>
        <ScrollReveal direction="up">
          <div className={classes.sectionHead}>
            <h2 className={classes.sectionTitle}>Как я <span>работаю</span></h2>
            <p className={classes.sectionSub}>
              Разбор одного проекта: задача, подход, результат.
            </p>
            <div className={classes.divider} />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.05}>
          <div className={classes.caseIntro}>
            <Link to="/BullAndMoo" className={classes.caseIntro__badge}>
              Быки и коровы
              <FiExternalLink />
            </Link>
          </div>
        </ScrollReveal>

        <div className={classes.caseSteps}>
          {CASE_STEPS.map((step, i) => (
            <ScrollReveal key={step.num} direction="up" delay={i * 0.12}>
              <div className={classes.caseStep}>
                <div className={classes.caseStep__num} aria-hidden="true">{step.num}</div>
                <h3 className={classes.caseStep__title}>{step.title}</h3>
                <p className={classes.caseStep__desc}>{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.3}>
          <Link to="/BullAndMoo" className={classes.caseLink}>
            Посмотреть игру
            <FiArrowRight />
          </Link>
        </ScrollReveal>
      </section>

      {/* ── CTA ── */}
      <section className={classes.cta}>
        <ScrollReveal direction="up">
          <h2 className={classes.cta__title}>
            Давайте <span>работать</span> вместе
          </h2>
          <p className={classes.cta__desc}>
            Открыт к предложениям о работе, фриланс‑проектам и интересным задачам.
            Напишите мне — отвечу быстро.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <div className={classes.cta__buttons}>
            <a href="mailto:Kaninroman@mail.ru" className={`${classes.btn} ${classes['btn--primary']}`}>
              <FiMail />
              Написать на почту
            </a>
            <a href="/cv.pdf" download="Kanin_Roman_CV.pdf" className={`${classes.btn} ${classes['btn--outline']}`}>
              <FiDownload />
              Скачать CV
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className={classes.socialLinks}>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.socialLink}
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="mailto:Kaninroman@mail.ru"
              className={classes.socialLink}
              aria-label="Email"
            >
              <FiMail />
            </a>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
