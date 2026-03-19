import { useEffect, useLayoutEffect, useRef } from 'react';
import classes from './ProjectPages.module.scss';
import { F1Bingo, BullAndMoo, ColorSwitch, nameProject3 } from './ProjectDate.js';
import ProjectComponents from './projectComponents/projectComponents.jsx';

export default function ProjectPage() {
    const titleRef = useRef(null);

    useLayoutEffect(() => {
        if (typeof window === 'undefined') return;

        // Иногда браузер восстанавливает scroll-позицию при возврате в историю.
        // Нам нужно каждый раз начинать страницу с верха.
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, []);

    useEffect(() => {
        const el = titleRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add(classes['is-visible']);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.1 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section className={`${classes.project__section} section`}>
            <div className={classes.bg__shapes} aria-hidden="true">
                <div className={`${classes.shape} ${classes.shape__1}`} />
                <div className={`${classes.shape} ${classes.shape__2}`} />
                <div className={`${classes.shape} ${classes.shape__3}`} />
            </div>

            <h2
                ref={titleRef}
                className={`${classes.project__title} ${classes['animate-in']}`}
            >
                My Projects
            </h2>

            <div className={`${classes.project__container} container`}>
                <ProjectComponents index={0} {...F1Bingo} />
                <ProjectComponents index={1} {...BullAndMoo} />
                <ProjectComponents index={2} {...ColorSwitch} />
                <ProjectComponents index={3} {...nameProject3} />
            </div>
        </section>
    );
}
