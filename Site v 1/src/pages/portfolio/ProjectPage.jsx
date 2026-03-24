import { useLayoutEffect } from 'react';
import classes from './ProjectPages.module.scss';
import portfolioClasses from '../homePages/components/portfolio/portfolio.module.scss';
import ScrollReveal from '../../assets/components/animations/ScrollReveal.jsx';
import { F1Bingo, BullAndMoo, ColorSwitch, nameProject3 } from './ProjectDate.js';
import ProjectComponents from './projectComponents/projectComponents.jsx';

export default function ProjectPage() {
    useLayoutEffect(() => {
        if (typeof window === 'undefined') return;

        // Иногда браузер восстанавливает scroll-позицию при возврате в историю.
        // Нам нужно каждый раз начинать страницу с верха.
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, []);

    return (
        <section
            className={`${classes.projectPageSection} ${portfolioClasses.portfolio__section} section`}
        >
            <div className={`${portfolioClasses.portfolio__container} container sectionGlass`}>
                <ScrollReveal direction="up" className={portfolioClasses.portfolio__header}>
                    <h2 className={portfolioClasses.portfolio__title}>My Projects</h2>
                </ScrollReveal>

                <div className={classes.projectList}>
                    <ProjectComponents index={0} {...F1Bingo} />
                    <ProjectComponents index={1} {...BullAndMoo} />
                    <ProjectComponents index={2} {...ColorSwitch} />
                    <ProjectComponents index={3} {...nameProject3} />
                </div>
            </div>
        </section>
    );
}
