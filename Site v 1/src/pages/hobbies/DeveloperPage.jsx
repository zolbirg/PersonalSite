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
import { FiMail, FiGithub, FiFileText, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { useLayoutEffect } from 'react';

import ScrollReveal from '../../assets/components/animations/ScrollReveal.jsx';
import photo1 from '../../assets/img/personalFoto2.png';
import { CV_PAGE_PATH } from '../../constants/cv.js';
import {
  CV_CONTACT,
  CV_DEVELOPER_HERO_INTRO,
  CV_TIMELINE,
  CV_VALUES,
  CV_SKILLS_CORE,
  CV_SKILLS_LEARNING,
  CV_CASE_STEPS,
  CV_CASE_PROJECT,
} from '../../data/cvData.js';
import classes from './developerPage.module.scss';

function CaseProjectLink({ className, children }) {
  if (CV_CASE_PROJECT.url) {
    return (
      <a href={CV_CASE_PROJECT.url} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link to={CV_CASE_PROJECT.path} className={className}>
      {children}
    </Link>
  );
}

const SKILL_ICONS = {
  JavaScript: SiJavascript,
  React: SiReact,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  SCSS: SiSass,
  Redux: SiRedux,
  Git: SiGit,
  Vite: SiVite,
  TypeScript: SiTypescript,
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
};

const mailHref = `mailto:${CV_CONTACT.email}`;

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
            <h1 className={classes.hero__name}>{CV_CONTACT.nameRu}</h1>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.15}>
            <p className={classes.hero__role}>{CV_CONTACT.role}</p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.25}>
            <p className={classes.hero__desc}>{CV_DEVELOPER_HERO_INTRO}</p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.35}>
            <div className={classes.hero__buttons}>
              <Link
                to={CV_PAGE_PATH}
                className={`${classes.btn} ${classes['btn--primary']}`}
              >
                <FiFileText />
                Резюме (печать PDF)
              </Link>
              <a href={mailHref} className={`${classes.btn} ${classes['btn--outline']}`}>
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
              alt={CV_CONTACT.nameRu}
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
          {CV_TIMELINE.map((item, i) => (
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
          {CV_VALUES.map((v, i) => (
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
                {CV_SKILLS_CORE.map((label) => {
                  const Icon = SKILL_ICONS[label];
                  return (
                    <span key={label} className={classes.skillTag}>
                      {Icon ? <Icon /> : null}
                      {label}
                    </span>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div>
              <p className={classes.skillsGroup__label}>Сейчас изучаю</p>
              <div className={classes.skillsGrid}>
                {CV_SKILLS_LEARNING.map((label) => {
                  const Icon = SKILL_ICONS[label];
                  return (
                    <span key={label} className={`${classes.skillTag} ${classes['skillTag--learning']}`}>
                      {Icon ? <Icon /> : null}
                      {label}
                    </span>
                  );
                })}
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
            <CaseProjectLink className={classes.caseIntro__badge}>
              {CV_CASE_PROJECT.title}
              <FiExternalLink />
            </CaseProjectLink>
          </div>
        </ScrollReveal>

        <div className={classes.caseSteps}>
          {CV_CASE_STEPS.map((step, i) => (
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
          <CaseProjectLink className={classes.caseLink}>
            Открыть проект
            <FiArrowRight />
          </CaseProjectLink>
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
            <a href={mailHref} className={`${classes.btn} ${classes['btn--primary']}`}>
              <FiMail />
              Написать на почту
            </a>
            <Link
              to={CV_PAGE_PATH}
              className={`${classes.btn} ${classes['btn--outline']}`}
            >
              <FiFileText />
              Резюме (печать PDF)
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className={classes.socialLinks}>
            {CV_CONTACT.githubUrl ? (
              <a
                href={CV_CONTACT.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.socialLink}
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
            ) : null}
            <a
              href={mailHref}
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
