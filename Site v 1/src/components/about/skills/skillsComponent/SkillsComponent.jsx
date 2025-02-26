import classes from './skillsComponent.module.css'
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { useState } from "react";
import Developer from "./Developer";
import Engineer from "./Engineer";
import Travelers from "./Travelers";


export default function SkillsComponent ({isActive,title,subTitle,content}){
    const [contentType, setContentType] =
    useState("Developer");

    return(
<>
<div>
        <div className={classes.skills__header}>
          <div>
            <h1
              className={
                isActive 
                   ? ` ${classes.skills__title} button button__active `
                : ` ${classes.skills__title} button`
              }
            >
             {title}
            </h1>
            <span className={classes.skills__subtitle}>
              {subTitle}
            </span>
          </div>
          <HiMiniArrowsUpDown
            className={classes.skills__arrow}
          />
        </div>
        {content === "Developer" && <Developer />}
        {content === "Engineer" && <Engineer />}
      
      </div>

</>
    )
}