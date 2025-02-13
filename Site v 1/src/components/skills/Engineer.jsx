import classes from "./skills/skills.module.css";


import {
 
  SiAutocad,
  SiCoreldraw,
  SiAdobephotoshop,
} from "react-icons/si";

export default function Engineer(){

    return(
        <>
        
        <div className={` ${classes.skills__list} grid `}>
              <div>
                <div className={classes.skills__titles}>
                  <h3 className={classes.skills__name}>AutoCad</h3>
                  <span className={classes.skills__number}>
                    80%
                  </span>
                </div>
                <progress className="progress progress-success  " value={80} max="100"></progress>
              </div>
              <div >
                <div className={classes.skills__titles}>
                  <h3 className={classes.skills__name}>Kompas 3d</h3>
                  <span className={classes.skills__number}>
                    90%
                  </span>
                </div>
                <progress className="progress progress-success  " value={90} max="100"></progress>
              </div>
              <div >
                <div className={classes.skills__titles}>
                  <h3 className={classes.skills__name}>CorellDrow</h3>
                  <span className={classes.skills__number}>
                    80%
                  </span>
                </div>
                <progress className="progress progress-success  " value={80} max="100"></progress>
              </div>
              <div >
                <div className={classes.skills__titles}>
                  <h3 className={classes.skills__name}>PhotoShop</h3>
                  <span className={classes.skills__number}> 
                    60%
                  </span>
                </div>
                <progress className="progress progress-success  " value={60} max="100"></progress>
              </div>
            </div>
            <div className={classes.skills__logo}>
              <SiAutocad />
              <SiCoreldraw />
              <SiAdobephotoshop />
            </div>
        </>


    )
}