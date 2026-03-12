import classes from "./portfolio.module.scss";
import ProjectCard from "../../../../assets/components/projectCard/ProjectCard.jsx";
import ScrollReveal from "../../../../assets/components/animations/ScrollReveal.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { projects } from "./portfolioData.js";

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 960,
            settings: { slidesToShow: 1 },
        },
    ],
};

export default function Portfolio() {
    return (
        <section className={`${classes.portfolio__section} section`} id="portfolio">
            <div className={`${classes.portfolio__container} container`}>
                <ScrollReveal direction="up" className={classes.portfolio__header}>
                    <h2 className={classes.portfolio__title}>My Projects</h2>
                </ScrollReveal>

                <ScrollReveal direction="scale" delay={0.15} className={classes.portfolio__slider}>
                    <Slider {...sliderSettings}>
                        {projects.map((project) => (
                            <div key={project.titleName} className={classes.portfolio__slide}>
                                <ProjectCard {...project} />
                            </div>
                        ))}
                    </Slider>
                </ScrollReveal>
            </div>
        </section>
    );
}
