import classes from './aboutSection.module.scss';
import photo1 from '../../../../assets/img/personalFoto2.png';

import AboutComponent from './aboutComponent/AboutComponent.jsx';
import Skills from './skills/Skills.jsx';
import Qualification from './Qualification/Qualification.jsx';
import ScrollReveal from '../../../../assets/components/animations/ScrollReveal.jsx';

import { useState } from 'react';

export default function AboutSection() {
    const [tab, setTab] = useState('About');

    const active = `${classes.about__toggle_title} button button__active `;
    const noActive = `${classes.about__toggle_title} button`;

    return (
        <section className="section" id="about">
            <div className={`${classes.about__container} container sectionGlass`}>
                <ScrollReveal direction="left" className={classes.about__img_container}>
                    <img src={photo1} alt="" className={classes.about__img} />
                </ScrollReveal>

                <ScrollReveal direction="right" delay={0.1} className={classes.about__data}>
                    <div className={classes.about__toggle}>
                        <div
                            onClick={() => setTab('About')}
                            className={tab === 'About' ? active : noActive}
                        >
                            {' '}
                            About
                        </div>

                        <div
                            onClick={() => setTab('Skills')}
                            className={tab === 'Skills' ? active : noActive}
                        >
                            Skills
                        </div>

                        <div
                            onClick={() => setTab('Qualification')}
                            className={
                                tab === 'Qualification' ? active : noActive
                            }
                        >
                            Qualification
                        </div>
                    </div>
                    <div className="cont">
                        {tab === 'About' && <AboutComponent />}
                        {tab === 'Skills' && <Skills />}
                        {tab === 'Qualification' && <Qualification />}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
