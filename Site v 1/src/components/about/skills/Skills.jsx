import classes from "./skills.module.css";

import Developer from "./skillsComponent/Developer";
import Engineer from "./skillsComponent/Engineer";
import Travelers from "./skillsComponent/Travelers";

import { HiMiniArrowsUpDown } from "react-icons/hi2";

import { useState } from "react";

export default function Skills() {
  const [contentType, setContentType] =
    useState("Developer");

  return (
    <section className="section" id="skills">
      {/*==================== SKILL-1 ====================*/}

      <div  onClick={() => setContentType("Developer")}>
        <div className={classes.skills__header}>
          <div>
            {/* <h1 className={classes.skills__title}> */}
            <h1 className= {contentType === "Developer"
                 ? "button button__active "
                  : "button"}>
              Web Developer
            </h1>
            <span className={classes.skills__subtitle}>
              Более 2х лет
            </span>
          </div>
          <HiMiniArrowsUpDown
            className={classes.skills__arrow}
          />
        </div>
        {contentType === "Developer" && <Developer />}
      </div>

      {/*==================== SKILLS 2 ====================*/}
      <div onClick={() => setContentType("Engineer")}>
        <div className={classes.skills__header}>
          <div>
            <h1 className={contentType === "Engineer"
                 ? "button button__active "
                  : "button"}>
              Engineer
            </h1>
            <span className={classes.skills__subtitle}>
              Более 10 лет.{" "}
            </span>
          </div>
          <HiMiniArrowsUpDown
            className={classes.skills__arrow}
          />
        </div>
        {contentType === "Engineer" && <Engineer />}
      </div>

      {/*==================== SKILLS 3 ====================*/}

      <div onClick={() => setContentType("Travelers")}>
        <div className={classes.skills__header}>
          <div>
            <h1 className={contentType === "Travelers"
                 ? "button button__active "
                  : "button"}>
              Travelers
            </h1>
            <span className={classes.skills__subtitle}>
              Более 3 лет.{" "}
            </span>
          </div>
          <HiMiniArrowsUpDown
            className={classes.skills__arrow}
          />
        </div>
        {contentType === "Travelers" && <Travelers />}
      </div>
    </section>
  );
}
