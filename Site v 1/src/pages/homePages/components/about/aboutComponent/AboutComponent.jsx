import classes from './aboutComponent.module.scss';

import Button from '../../../../../assets/components/button/Button';
import ScrollReveal from '../../../../../assets/components/animations/ScrollReveal.jsx';
import AnimatedCounter from '../../../../../assets/components/animations/AnimatedCounter.jsx';

export default function AboutComponent() {
    return (
        <section className={classes.about__section}>
            <div className={classes.about__data}>
                <h1>Kanin Roman</h1>
                <div className={classes.about__list}>
                    <ul>
                        <li>
                            <strong> Birthday:</strong> <span>11 May 1991</span>
                        </li>
                        <li>
                            <strong>City:</strong>{' '}
                            <span>Saint-Petersburg, Russia</span>
                        </li>
                        <li>
                            <strong>Email:</strong>{' '}
                            <span>Kaninroman@mail.ru</span>
                        </li>
                    </ul>
                </div>

                <p className={classes.about__description}>
                    Более 10 лет запускал и развивал разные бизнесы, а также
                    управлял командами. Собрал собственный автодом и за 3 года
                    проехал 15 стран и больше 120&nbsp;000 км. Сейчас сфокусирован
                    на frontend‑разработке и создании удобных, понятных интерфейсов.
                </p>

                <ScrollReveal direction="up" delay={0.2} className={classes.about__info}>
                    <div>
                        <span className={classes.about__info_title}>
                            <AnimatedCounter target={10} suffix="+" />
                        </span>
                        <span className={classes.about__info_name}>
                            лет <br /> управления
                        </span>
                    </div>

                    <div>
                        <span className={classes.about__info_title}>
                            <AnimatedCounter target={6} suffix="+" duration={1.4} />
                        </span>
                        <span className={classes.about__info_name}>
                            лет
                            <br />
                            Инженер
                        </span>
                    </div>

                    <div>
                        <span className={classes.about__info_title}>
                            <AnimatedCounter target={2} suffix="+" duration={1.0} />
                        </span>
                        <span className={classes.about__info_name}>
                            лет <br /> Программирования
                        </span>
                    </div>
                </ScrollReveal>

                <div className={classes.about__buttons}>
                    <a href="/cv.pdf" download="Kanin_Roman_CV.pdf">
                        <Button>Download CV.pdf</Button>
                    </a>
                </div>
            </div>
        </section>
    );
}
