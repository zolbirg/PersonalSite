import classes from "./aboutSection.module.scss";
import photo1 from "../../../../assets/img/personalFoto2.png";

import AboutComponent from "./aboutComponent/AboutComponent.jsx";
import Skills from "./skills/Skills.jsx";
import Qualification from "./Qualification/Qualification.jsx";


import { useState } from "react";

export default function AboutSection() {
  const [tab, setTab] = useState("About");

  const active = `${classes.about__toggle_title} button button__active `
  const noActive= `${classes.about__toggle_title} button`

  return (
    <section className="section" id="about">
      <h2 className="section__title">About Me</h2>
      <div
        className={`${classes.about__container} container `}
      >
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
                  ? active
                  : noActive
              } > About
            </div>

            <div
              onClick={() => setTab("Skills")}
              className={
                tab === "Skills"
                ? active
                : noActive
              }
            >
              Skills
            </div>

            <div
              onClick={() => setTab("Qualification")}
              className={
                tab === "Qualification"
                ? active
                : noActive
              }
            >
              Qualification
            </div>
          </div>
          <div className="cont">
            {tab === "About" && <AboutComponent />}
            {tab === "Skills" && <Skills />}
            {tab === "Qualification" && <Qualification />}
          </div>
        </div>
      </div>
    </section>
  );
}
