import "./Skills.css";

import Developer from "./Developer";
import Engineer from "./Engineer";
import Travelers from "./Travelers";


import { HiMiniArrowsUpDown } from "react-icons/hi2";

import { useState } from "react";

export default function Skills() {
  const [contentType, setContentType] = useState('Developer');
  

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">
        Технические навыки
      </span>
      <div className="skills__container container grid">
        
          {/*==================== SKILL-1 ====================*/}

          <div 
          
          onClick={() => setContentType("Developer" )}
          className="skills__content ">
            <div
              className="skills__header"
            >
              <div>
                <h1 className="skills__title">
                  Web Developer
                </h1>
                <span className="skills__subtitle">
                  Более 2х лет
                </span>
              </div>
              <HiMiniArrowsUpDown className="skills__arrow " />
            </div>
            {contentType === "Developer" && <Developer /> }
            
          </div>

          {/*==================== SKILLS 2 ====================*/}
          <div 
          
          onClick={() => setContentType("Engineer" )}
          className="skills__content ">
            <div className="skills__header">
              <div>
                <h1 className="skills__title">Engineer</h1>
                <span className="skills__subtitle">
                  Более 10 лет.{" "}
                </span>
              </div>
              <HiMiniArrowsUpDown className="skills__arrow " />
            </div>
            {contentType === "Engineer" && <Engineer /> }
            
          </div>
        
       
          {/*==================== SKILLS 3 ====================*/}
          
          <div 
          
          onClick={() => setContentType("Travelers" )}
          className="skills__content ">
            <div className="skills__header">
              <div>
                <h1 className="skills__title">Travelers</h1>
                <span className="skills__subtitle">
                  Более 3 лет.{" "}
                </span>
              </div>
              <HiMiniArrowsUpDown className="skills__arrow " />
            </div>
            {contentType === "Travelers" && <Travelers /> }
            
          </div>
        
      </div>
    </section>
  );
}
