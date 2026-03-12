import classes from "./portfolio.module.scss";
import PortfolioCard from "../../../../assets/components/portfolioCard/PortfolioCard.jsx";
import ScrollReveal from "../../../../assets/components/animations/ScrollReveal.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { pet1, pet2, pet3, pet4, pet5, pet6 } from "./portfolioData.js";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Portfolio() {
  return (
    <section className={`${classes.services__main} section`} id="portfolio">
      <div className={`${classes.services__container} container`}>
        <ScrollReveal direction="up" className={classes.services__body}>
          <div className={classes.services__header}>
            <h2 className={classes.services__title}>My Projects</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="scale" delay={0.15} className={classes.services__clider}>
          <Slider {...sliderSettings}>
            <div><h3><PortfolioCard keys={pet1.title} {...pet1} /></h3></div>
            <div><h3><PortfolioCard keys={pet2.title} {...pet2} /></h3></div>
            <div><h3><PortfolioCard keys={pet3.title} {...pet3} /></h3></div>
            <div><h3><PortfolioCard keys={pet4.title} {...pet4} /></h3></div>
            <div><h3><PortfolioCard keys={pet5.title} {...pet5} /></h3></div>
            <div><h3><PortfolioCard keys={pet6.title} {...pet6} /></h3></div>
          </Slider>
        </ScrollReveal>
      </div>
    </section>
  );
}
