import classes from "./portfolioCard.module.scss";
import Button from "../button/Button";

export default function PortfolioCard({img,title,content,link}) {
  return (
    <>
      <div className={classes.pt__body}>
        <img
          className={classes.pt__img}
          src={img}
        />
        <div className={classes.pt__block}>
          <div>
            <h1 className={classes.pt__title}>
              {title}
            </h1>
            <p className={classes.pt__content}>
              {content}
            </p>
          </div>
          <div>
            <Button >Get Started</Button>
          </div>
        </div>
      </div>
    </>
  );
}
