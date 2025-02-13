import classes from "./qualification.module.css";
import {
  PiBriefcaseDuotone,
  PiCertificateDuotone,
} from "react-icons/pi";
import Work from "./Work.jsx";
import Education from "./Education.jsx";

import { useState } from "react";



export default function Qualification() {
  const [tab, setTab] = useState("education");

  return (
    <section className={` ${classes.qualification__section} section`}>
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">Мой путь</span>
      <div className="container">
        <div className={classes.qualification__tabs}>
          <div
            onClick={() => setTab("education")}
            className={
              tab === "education"
                ? `${classes.qualification__button} ${classes.qualification__active }`
                : classes.qualification__button
            }
          >
            Education
            <PiCertificateDuotone />
          </div>
          <div
            onClick={() => setTab("work")}
            className={
              tab === "work"
                ? `${classes.qualification__button} ${classes.qualification__active }`
                : classes.qualification__button
            }
          >
            <PiBriefcaseDuotone />
            Work
          </div>
        </div>
        <div>
          {tab === "education" && <Education />}
          {tab === "work" && <Work />}
        </div>
      </div>
    </section>
  );
}
