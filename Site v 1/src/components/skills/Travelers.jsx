import classes from "./skills/skills.module.css";

import {IoIosAirplane} from "react-icons/io";



import { TbCamper } from "react-icons/tb";



export default function Travelers() {

    return(
        <>
        <div className={` ${classes.skills__list} grid `}>
              <div >
                <div className={` ${classes.skills__list} ${classes.skills__travel}`} >
                  <h3 className={classes.skills__name}>
                    Более 120т.км на машине и еще больше
                    самолетом
                  </h3>
                  <div className={classes.skills__logo}>
                    <TbCamper />
                    ---
                    <IoIosAirplane />
                  </div>
                  
                </div>
                <progress className="progress progress-success  " value={50} max="100"></progress>
              </div>
              <div>
                <p>
                  15 странии и бла бла бла
                  <br />
                  вствить флаги стран
                </p>
              </div>
            </div>       
        </>
    )
}