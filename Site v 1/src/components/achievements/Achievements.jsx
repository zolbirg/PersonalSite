import classes from './achievements.module.scss'
import {ways,ways2 ,ways3} from "./dataAchievements";


import Card from "../../assets/components/card/Card";

export default function Achievements() {
  return (
    <>
      <section className={`${classes.achievements__section} section`}>
        <h2 className="section__title">Achievements</h2>
        <div className={`${classes.achievements__container} container`}>
          <div className={classes.achievements__block}>
            <div className={classes.achievements__card}>
            <Card keys={ways.cardId} {...ways} />
            </div>
            <div className={classes.achievements__card}>
            <Card keys={ways2.cardId} {...ways2}  />
            </div>
            <div className={classes.achievements__card}>
            <Card keys={ways3.cardId} {...ways3}/>
            </div>

          </div>
        </div>
      </section>
    </>
  );
} 
