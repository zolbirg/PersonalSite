import classes from "./qualification.module.css";
import {
  PiBriefcaseDuotone,
  PiCertificateDuotone,
} from "react-icons/pi";
import Work from "./QualificationComponent/Work.jsx";
import Education from "./QualificationComponent/Education.jsx";

import { useState } from "react";

export default function Qualification() {
  const [tab, setTab] = useState("education");

  return (
    <section className={classes.qualification__section}>
      <div className={classes.qualification__tabs}>
        <div
          onClick={() => setTab("education")}
          className={
            tab === "education"
              ? `${classes.qualification__name} button button__active `
              : `${classes.qualification__name} button `
          }
        >
            <PiCertificateDuotone  className={classes.qualification__icon} /> 
            Education
          
        </div>
        <div
          onClick={() => setTab("work")}
          className={
            tab === "work"
              ? `${classes.qualification__name} button button__active `
              : `${classes.qualification__name} button `
          }
        >
          <PiBriefcaseDuotone className={classes.qualification__icon}/>
          Work
        </div>
      </div>
      <div>
        {tab === "education" && <Education />}
        {tab === "work" && <Work />}
      </div>
    </section>
  );
}
