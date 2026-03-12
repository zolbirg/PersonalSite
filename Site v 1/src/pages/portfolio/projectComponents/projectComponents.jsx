import { useEffect, useRef } from 'react';
import classes from './projectComponents.module.scss';
import ProjectCard from '../../../assets/components/projectCard/ProjectCard';
import { FaGithub, FaLayerGroup, FaStar, FaCalendarDays } from 'react-icons/fa6';

export default function ProjectComponents({ stack, price, date, git, index = 0, ...props }) {
    const wrapperRef = useRef(null);

    const stackItems = stack
        ? stack.split(',').map(s => s.trim()).filter(s => s && s !== '—')
        : [];

    useEffect(() => {
        const el = wrapperRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add(classes['is-visible']);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.15 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={wrapperRef}
            className={`${classes.project__wrapper} ${classes[`delay_${index}`]}`}
        >
            <div className={classes.project__block}>
                <ProjectCard {...props} />
            </div>

            <div className={classes.project__description}>
                <div className={classes.meta__item}>
                    <FaLayerGroup className={classes.meta__icon} />
                    <div>
                        <span className={classes.meta__label}>Stack</span>
                        <div className={classes.badge__group}>
                            {stackItems.length > 0 ? (
                                stackItems.map((tech, i) => (
                                    <span key={i} className={classes.badge}>{tech}</span>
                                ))
                            ) : (
                                <span className={classes.badge}>{stack || '—'}</span>
                            )}
                        </div>
                    </div>
                </div>

                <div className={classes.meta__item}>
                    <FaStar className={classes.meta__icon} />
                    <div>
                        <span className={classes.meta__label}>Complexity</span>
                        <span className={classes.meta__value}>{price}</span>
                    </div>
                </div>

                <div className={classes.meta__item}>
                    <FaCalendarDays className={classes.meta__icon} />
                    <div>
                        <span className={classes.meta__label}>Date</span>
                        <span className={classes.meta__value}>{date}</span>
                    </div>
                </div>

                <a
                    className={classes.git__btn}
                    href={git}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View on GitHub"
                >
                    <FaGithub />
                    <span>GitHub</span>
                </a>
            </div>
        </div>
    );
}
