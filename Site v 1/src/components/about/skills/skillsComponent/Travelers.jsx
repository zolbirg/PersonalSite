import classes from "./skillsComponent.module.css";

import {IoIosAirplane} from "react-icons/io";



import { TbCamper } from "react-icons/tb";
import ProgressBar from "../../../../assets/progressBar/ProgressBar";



export default function Travelers() {

    return(
        <>
        <div className={` ${classes.skills__list} grid `}>
              <div >
                <div className={classes.skills__list} >
                  <h3 >
                    Более 120т.км на машине и еще больше
                    самолетом
                  </h3>
                  <div className={classes.skills__logo_fa}>
                    <TbCamper />
                    ---
                    <IoIosAirplane />
                  </div>
                  
                </div>
                <ProgressBar percent={100} > </ProgressBar>
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