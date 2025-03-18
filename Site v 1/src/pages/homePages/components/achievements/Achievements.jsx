import classes from './achievements.module.scss'
import {Developer,Engineer ,Travelers} from "./dataAchievements";


import Card from "../../../../assets/components/card/Card";

export default function Achievements() {
  return (
    <>
      <section className={`${classes.achievements__section} section`}>
        <h2 className="section__title">Achievements</h2>
        <div className={`${classes.achievements__container} container`}>
          <div className={classes.achievements__block}>
            <div className={classes.achievements__card}>
            <Card keys={Developer.cardId} {...Developer} />
            </div>
            <div className={classes.achievements__card}>
            <Card keys={Engineer.cardId} {...Engineer}  />
            </div>
            <div className={classes.achievements__card}>
            <Card keys={Travelers.cardId} {...Travelers}/>
            </div>

          </div>
        </div>
      </section>
    </>
  );
} 
