import classes from './achievements.module.css'
import {ways,ways2 ,ways3} from "./dataAchievements";


import Card from "../../assets/components/card/Card";

export default function Achievements() {
  return (
    <>
      <section className="section">
        <h2 className="section__title">Achievements</h2>
        <span className="section__subtitle">
          достижения
        </span>
       
        <div className="container text-center px-6 ">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4">
            <Card keys={ways.cardId} {...ways} />
            </div>
            <div className="col-span-4">
            <Card keys={ways2.cardId} {...ways2}  />
            </div>
            <div className="col-span-4">
            <Card keys={ways3.cardId} {...ways3}/>
            </div>

          </div>
        </div>
      </section>
    </>
  );
} 
