// https://react-slick.neostack.com/docs/get-started#installation


import classes from "./portfolio.module.css";
import PortfolioCard from "../../assets/components/portfolioCard/PortfolioCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {pet1, pet2 ,pet3 ,pet4,pet5,pet6} from "./portfolioData.js";


export default function Portfolio() {
  const title = "Box Office News!";
  const img =
    "https://i.pinimg.com/originals/cd/a5/a2/cda5a288883071b783cd97d68195df5f.jpg";
  const content =
    "dflng    nfjng jfngjnf jgjlslkf nsl lsnflgn lsnlf lsfnlgn sg slnflgnrlinrin ri sli nlir li  nslin l sn l isnlrngliw peokok[owh[j";

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section
      className={`${classes.services__main} section `}
      id="portfolio"
    >
      
      <div
        className={`${classes.services__container} container `}
      >
        <div className={classes.services__body}>
          <div className={classes.services__logo}>
            <h1 className={classes.services__story}>
              STORY
            </h1>
          </div>
          <div></div>

          <div className={classes.services__content}>
            <p>
              In velit arcu posuere integer. Dolor sit amet,
              consectetur nun adipiscing elit. Duis
              porttitor massa tellus hac vel ante sit sed
              scelerisque praesent duis volutpat laoreet.
              Nisl, sit molestie commodo congue. Etiam
              lectus risus in amet. Commodo molestie fames
              etiam aenean sed. Pellentesque et venenatis
              amet, tellus hac vel adipiscing sit. Placerat
              vitae nisl viverra faucibus tincidunt
              habitasse amet. Nunc, velit nunc, scelerisque
              imperdiet nunc.
            </p>
          </div>
        </div>
        <div className={classes.services__clider}>
          <Slider {...settings}>
            <div>
              <h3>
                {" "}
                <PortfolioCard
                  keys={pet1.title} {...pet1}
                />
              </h3>
            </div>
            <div>
              <h3>
                {" "}
                <PortfolioCard
                keys={pet2.title} {...pet2}
                />
              </h3>
            </div>
            <div>
              <h3>
                {" "}
                <PortfolioCard
                 keys={pet3.title} {...pet3}
                />
              </h3>
            </div>
            <div>
              <h3>
                {" "}
                <PortfolioCard
                  keys={pet4.title} {...pet4}
                />
              </h3>
            </div>
            <div>
              <h3>
                {" "}
                <PortfolioCard
                 keys={pet5.title} {...pet5}
                />
              </h3>
            </div>
            <div>
              <h3>
                {" "}
                <PortfolioCard
                 keys={pet6.title} {...pet6}
                />
              </h3>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
