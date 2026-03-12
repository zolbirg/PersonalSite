import { useEffect, useRef } from 'react';
import projectClasses from '../../../ProjectPages.module.scss';
import classes from './BullAndMoo.module.scss';

export default function BullAndMoo() {
    const titleRef = useRef(null);

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
                Bull & Moo
            </h2>

            <div className={`${projectClasses.project__container} container`}>
                <div className={classes.gamePlaceholder} aria-hidden="true">
                    {/* Плейсхолдер для игры — позже заменим на игру */}
                </div>
            </div>
        </section>
    );
}
