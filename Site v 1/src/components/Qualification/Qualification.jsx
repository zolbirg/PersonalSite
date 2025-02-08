import "./qualification.css";
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
    <section className="qualification__section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">Мой путь</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            onClick={() => setTab("education")}
            className={
              tab === "education"
                ? `qualification__button button--flex qualification__active `
                : " qualification__button button--flex "
            }
          >
            Education
            <PiCertificateDuotone />
          </div>
          <div
            onClick={() => setTab("work")}
            className={
              tab === "work"
                ? `qualification__button button--flex qualification__active `
                : " qualification__button button--flex "
            }
          >
            <PiBriefcaseDuotone />
            Work
          </div>
        </div>
        <div className="qualification__sections">
          {tab === "education" && <Education />}
          {tab === "work" && <Work />}
        </div>
      </div>
    </section>
  );
}
