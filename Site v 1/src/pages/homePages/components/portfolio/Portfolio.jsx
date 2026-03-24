import { useEffect, useMemo, useState } from "react";
import classes from "./portfolio.module.scss";
import ProjectCard from "../../../../assets/components/projectCard/ProjectCard.jsx";
import ScrollReveal from "../../../../assets/components/animations/ScrollReveal.jsx";
import { Link } from "react-router-dom";
import { F1Bingo, BullAndMoo, ColorSwitch, nameProject3 } from "../../../portfolio/ProjectDate.js";

const projects = [F1Bingo, BullAndMoo, ColorSwitch, nameProject3];

export default function Portfolio() {
    const getSlidesToShow = () => (window.innerWidth < 960 ? 1 : 2);
    const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const onResize = () => setSlidesToShow(getSlidesToShow());
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const maxIndex = useMemo(
        () => Math.max(0, projects.length - slidesToShow),
        [slidesToShow]
    );

    useEffect(() => {
        setCurrentIndex((prev) => Math.min(prev, maxIndex));
    }, [maxIndex]);

    const goPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    };

    const goNext = () => {
        setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    };

    const slideWidth = 100 / slidesToShow;
    const offset = currentIndex * slideWidth;

    return (
        <section className={`${classes.portfolio__section} section`} id="portfolio">
            <div className={`${classes.portfolio__container} container sectionGlass`}>
                <ScrollReveal direction="up" className={classes.portfolio__header}>
                    <h2 className={classes.portfolio__title}>My Projects</h2>
                </ScrollReveal>

                <ScrollReveal direction="scale" delay={0.15} className={classes.portfolio__slider}>
                    <div className={classes.slider__wrapper}>
                        <div className={classes.slider__viewport}>
                            <div
                                className={classes.slider__track}
                                style={{ transform: `translateX(-${offset}%)` }}
                            >
                                {projects.map((project) => (
                                    <div
                                        key={project.titleName}
                                        className={classes.portfolio__slide}
                                        style={{ flex: `0 0 ${slideWidth}%` }}
                                    >
                                        <ProjectCard {...project} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={classes.slider__controls}>
                            <button
                                type="button"
                                className={classes.slider__arrow}
                                onClick={goPrev}
                                aria-label="Предыдущий слайд"
                            >
                                ‹
                            </button>
                            <button
                                type="button"
                                className={classes.slider__arrow}
                                onClick={goNext}
                                aria-label="Следующий слайд"
                            >
                                ›
                            </button>
                        </div>
                    </div>

                    <div className={classes.slider__dots}>
                        {Array.from({ length: maxIndex + 1 }).map((_, dotIndex) => (
                            <button
                                key={dotIndex}
                                type="button"
                                className={`${classes.slider__dot} ${dotIndex === currentIndex ? classes.slider__dotActive : ""}`}
                                onClick={() => setCurrentIndex(dotIndex)}
                                aria-label={`Показать слайд ${dotIndex + 1}`}
                            />
                        ))}
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.3} className={classes.portfolio__cta}>
                    <Link to="/Project" className={classes.portfolio__button}>
                        Узнать больше
                    </Link>
                </ScrollReveal>
            </div>
        </section>
    );
}
