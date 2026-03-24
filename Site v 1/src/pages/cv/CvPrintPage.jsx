import { useLayoutEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

import {
    CV_CONTACT,
    CV_ABOUT_SUMMARY,
    CV_TIMELINE,
    CV_RESUME_HIGHLIGHTS,
    CV_SKILLS_CORE,
    CV_SKILLS_LEARNING,
    CV_CASE_STEPS,
    CV_CASE_PROJECT,
} from '../../data/cvData.js';
import classes from './cvPrintPage.module.scss';

export default function CvPrintPage() {
    useLayoutEffect(() => {
        if (typeof window === 'undefined') return;
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, []);

    const caseFullUrl = useMemo(() => {
        if (typeof window === 'undefined') return '';
        if (CV_CASE_PROJECT.url) return CV_CASE_PROJECT.url;
        if (CV_CASE_PROJECT.path) return `${window.location.origin}${CV_CASE_PROJECT.path}`;
        return '';
    }, []);

    const mailHref = `mailto:${CV_CONTACT.email}`;
    const phoneHref = `tel:${CV_CONTACT.phone.replace(/\s/g, '')}`;

    return (
        <div className={classes.root}>
            <div className={classes.toolbar}>
                <button type="button" className={classes.printBtn} onClick={() => window.print()}>
                    Печать / PDF
                </button>
                <Link to="/" className={classes.backLink}>
                    На главную
                </Link>
            </div>

            <article className={classes.sheet}>
                <header className={classes.header}>
                    <div className={classes.headerText}>
                        <h1 className={classes.name}>{CV_CONTACT.nameRu}</h1>
                        <p className={classes.role}>{CV_CONTACT.role}</p>
                        <ul className={classes.contacts}>
                            <li>
                                <span className={classes.contactLabel}>Город</span> {CV_CONTACT.cityRu}
                            </li>
                            <li>
                                <span className={classes.contactLabel}>Телефон</span>{' '}
                                <a href={phoneHref}>{CV_CONTACT.phone}</a>
                            </li>
                            <li>
                                <span className={classes.contactLabel}>Email</span>{' '}
                                <a href={mailHref}>{CV_CONTACT.email}</a>
                            </li>
                            {CV_CONTACT.githubUrl ? (
                                <li>
                                    <span className={classes.contactLabel}>GitHub</span>{' '}
                                    <a href={CV_CONTACT.githubUrl} target="_blank" rel="noopener noreferrer">
                                        {CV_CONTACT.githubUrl}
                                    </a>
                                </li>
                            ) : null}
                        </ul>
                    </div>
                </header>

                <section className={classes.section}>
                    <h2 className={classes.sectionTitle}>О себе</h2>
                    <p className={classes.summary}>{CV_ABOUT_SUMMARY}</p>
                </section>

                <section className={classes.section}>
                    <h2 className={classes.sectionTitle}>Навыки</h2>
                    <p className={classes.skillsLabel}>Основной стек</p>
                    <p className={classes.skillLine}>{CV_SKILLS_CORE.join(' · ')}</p>
                    <p className={classes.skillsLabel}>Изучаю</p>
                    <p className={classes.skillLine}>{CV_SKILLS_LEARNING.join(' · ')}</p>
                </section>

                <section className={classes.section}>
                    <h2 className={classes.sectionTitle}>Опыт и путь</h2>
                    <ul className={classes.timeline}>
                        {CV_TIMELINE.map((item) => (
                            <li key={`${item.year}-${item.title}`} className={classes.timelineItem}>
                                <span className={classes.timelineYear}>{item.year}</span>
                                <span className={classes.timelineBody}>
                                    <strong>{item.title}</strong> — {item.desc}
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className={classes.section}>
                    <h2 className={classes.sectionTitle}>Акценты</h2>
                    <ul className={classes.bullets}>
                        {CV_RESUME_HIGHLIGHTS.map((text) => (
                            <li key={text}>{text}</li>
                        ))}
                    </ul>
                </section>

                <section className={`${classes.section} ${classes.caseSection}`}>
                    <h2 className={classes.sectionTitle}>Пример работы: {CV_CASE_PROJECT.title}</h2>
                    {caseFullUrl ? (
                        <p className={classes.caseLink}>
                            <a href={caseFullUrl}>{caseFullUrl}</a>
                        </p>
                    ) : null}
                    <ol className={classes.caseSteps}>
                        {CV_CASE_STEPS.map((step) => (
                            <li key={step.num}>
                                <strong>
                                    {step.num}. {step.title}
                                </strong>
                                <span className={classes.caseDesc}> {step.desc}</span>
                            </li>
                        ))}
                    </ol>
                </section>
            </article>
        </div>
    );
}
