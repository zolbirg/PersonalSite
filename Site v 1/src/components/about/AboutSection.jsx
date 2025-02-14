import classes from "./aboutSection.module.css";
// import photo from '../../assets/img/photo.jpg'
// import photo2 from '../../assets/img/photo2.png'
import photo1 from "../../assets/img/perfil.png";

import About from "./aboutComponent/About.jsx"
import Skills from "./skills/Skills.jsx";
import Qualification from "./Qualification/Qualification.jsx";

// import Button from '../../assets/components/button/Button'

import { useState } from "react";
export default function AboutSection() {
  const [tab, setTab] = useState("About");

  return (
    <section className="section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className={`${classes.about__container} container `}>
        <div className={classes.about__img_container}>
          <img
            src={photo1}
            alt=""
            className={classes.about__img}
          />
        </div>

        <div className={classes.about__data}>
          <div className={classes.about__toggle}>
            <div
              onClick={() => setTab("About")}
              className={
                tab === "About"
                  ? "button button__active "
                  : "button"
              }
            >
              About
            
            </div>

            <div
              onClick={() => setTab("Skills")}
              className={
                tab === "Skills"
                 ? "button button__active "
                  : "button"
              }
            >
              Skills
            
            </div>

            <div
              onClick={() => setTab("Qualification")}
              className={
                tab === "Qualification"
                 ? "button button__active "
                  : "button"
              }
            >
              Qualification
              
            </div>
          </div>
          <div className="cont">
            
              {tab === "About" && <About />}
              {tab === "Skills" && <Skills/>}
              {tab === "Qualification" && <Qualification />}
              
          </div>
        </div>
        
      </div>
    </section>
  );
}
