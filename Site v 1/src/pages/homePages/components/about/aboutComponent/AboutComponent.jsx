import classes from './aboutComponent.module.scss';

import Button from '../../../../../assets/components/button/Button';

export default function AboutComponent() {
    return (
        <section>
            <div className={classes.about__data}>
                <h1>Kanin Roman</h1>
                <div className={classes.about__list}>
                    <ul>
                        <li>
                            {' '}
                            <strong> Birthday:</strong> <span>11 May 1991</span>
                        </li>
                        <li>
                            {' '}
                            <strong>City:</strong>{' '}
                            <span>Saint-Petersburg, Russia</span>
                        </li>
                        <li>
                            {' '}
                            <strong>Freelance:</strong> <span>Available</span>
                        </li>
                        <li>
                            {' '}
                            <strong>Email:</strong>{' '}
                            <span>Kaninroman@mail.ru</span>
                        </li>
                    </ul>
                </div>

                <p className={classes.about__description}>
                    Предприниматель более 4 бизнесов в различных направлениях.
                    Своими руками построил Автодом и уехал в путешествие, проехав
                    15 стран, 120 т.км и 3 года в пути. Сейчас являюсь Frontend
                    разработчиком.
                </p>
                <div className={classes.about__info}>
                    <div>
                        <span className={classes.about__info_title}>10+</span>
                        <span className={classes.about__info_name}>
                            лет <br /> управления
                        </span>
                    </div>

                    <div>
                        <span className={classes.about__info_title}>6+</span>
                        <span className={classes.about__info_name}>
                            лет
                            <br />
                            Инженер
                        </span>
                    </div>
                    <div>
                        <span className={classes.about__info_title}>2+</span>
                        <span className={classes.about__info_name}>
                            лет <br /> Программирования
                        </span>
                    </div>
                </div>
                <div className={classes.about__buttons}>
                    <a href="/cv.pdf" download="Kanin_Roman_CV.pdf">
                        <Button>Download CV.pdf</Button>
                    </a>
                </div>
            </div>
        </section>
    );
}
