import { useEffect, useRef } from 'react';
import classes from './projectComponents.module.scss';
import ProjectCard from '../../../assets/components/projectCard/ProjectCard';
import { FaGithub } from 'react-icons/fa6';

export default function ProjectComponents({ description, git, index = 0, ...props }) {
    const wrapperRef = useRef(null);

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
                <ProjectCard {...props} description={description} />
            </div>

            <div className={classes.project__description}>
                {description ? (
                    <p className={classes.description__text}>{description}</p>
                ) : null}

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
