import { Link } from 'react-router-dom';

import classes from './aboutComponent.module.scss';

import { CV_PAGE_PATH } from '../../../../../constants/cv.js';
import {
    CV_CONTACT,
    CV_ABOUT_SUMMARY,
    CV_YEARS,
} from '../../../../../data/cvData.js';
import ScrollReveal from '../../../../../assets/components/animations/ScrollReveal.jsx';
import AnimatedCounter from '../../../../../assets/components/animations/AnimatedCounter.jsx';

export default function AboutComponent() {
    return (
        <section className={classes.about__section}>
            <div className={classes.about__data}>
                <h1>{CV_CONTACT.nameEn}</h1>
                <div className={classes.about__list}>
                    <ul>
                        <li>
                            <strong> Birthday:</strong> <span>{CV_CONTACT.birthday}</span>
                        </li>
                        <li>
                            <strong>City:</strong>{' '}
                            <span>{CV_CONTACT.cityEn}</span>
                        </li>
                        <li>
                            <strong>Email:</strong>{' '}
                            <span>{CV_CONTACT.email}</span>
                        </li>
                    </ul>
                </div>

                <p className={classes.about__description}>{CV_ABOUT_SUMMARY}</p>

                <ScrollReveal direction="up" delay={0.2} className={classes.about__info}>
                    <div>
                        <span className={classes.about__info_title}>
                            <AnimatedCounter target={CV_YEARS.management} suffix="+" />
                        </span>
                        <span className={classes.about__info_name}>
                            лет <br /> управления
                        </span>
                    </div>

                    <div>
                        <span className={classes.about__info_title}>
                            <AnimatedCounter target={CV_YEARS.engineer} suffix="+" duration={1.4} />
                        </span>
                        <span className={classes.about__info_name}>
                            лет
                            <br />
                            Инженер
                        </span>
                    </div>

                    <div>
                        <span className={classes.about__info_title}>
                            <AnimatedCounter target={CV_YEARS.programming} suffix="+" duration={1.0} />
                        </span>
                        <span className={classes.about__info_name}>
                            лет <br /> Программирования
                        </span>
                    </div>
                </ScrollReveal>

                <div className={classes.about__buttons}>
                    <Link className={classes.cvDownloadLink} to={CV_PAGE_PATH}>
                        Open CV (print to PDF)
                    </Link>
                </div>
            </div>
        </section>
    );
}
