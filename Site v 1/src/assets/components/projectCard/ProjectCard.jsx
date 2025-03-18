import Button from "../button/Button";
import classes from "./projectCard.module.scss";

export default function ProjectCard({srcImg,titleName,price,description,srcLink}) {
  return (
    <>
      <div className={classes.project_card}>
        <div className={classes.project_img}>
          <img src={srcImg} />
        </div>
        <div className={classes.project_info}>
          <h2 className={classes.name}>
           {titleName}
          </h2>

          <h3 className={classes.price}>Сложность</h3>
          <h3 className={classes.price_value}>{price} попугая</h3>
         
        </div>
        <div className={classes.description}>
          <p>
           {description}
          </p>
         <Button>Show more</Button>
        </div>
      </div>
    </>
  );
}
