import classes from "../skills.module.css";
import {
  IoLogoNodejs
} from "react-icons/io";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaSass,
  FaGitSquare,
} from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiBootstrap,
  SiTailwindcss,
 
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";




export default function Developer(){

    return(
    <>
        <div className={` ${classes.skills__list} grid `}>
                      <div>
                        <div className={classes.skills__titles}>
                          <h3 className={classes.skills__name}>HTML</h3>
                          <span className={classes.skills__number}>
                            80%
                          </span>
                        </div>
                        <progress className={` ${classes.progress__color} progress `} value={80} max="100"></progress>

                      </div>
                      <div >
                        <div className={classes.skills__titles}>
                          <h3 className={classes.skills__name}>CSS</h3>
                          <span className={classes.skills__number}>
                            70%
                          </span>
                        </div>
                        <progress className={` ${classes.progress__color} progress `} value={70} max="100"></progress>
                      </div>
                      <div >
                        <div className={classes.skills__titles}>
                          <h3 className={classes.skills__name}>
                            JavaScript
                          </h3>
                          <span className={classes.skills__number}>
                            60%
                          </span>
                        </div>
                        <progress className={` ${classes.progress__color} progress `} value={60} max="100"></progress>
                      </div>
                      <div >
                        <div className={classes.skills__titles}>
                          <h3 className={classes.skills__name}>
                            TypeScript
                          </h3>
                          <span className={classes.skills__number}>
                            40%
                          </span>
                        </div>
                        <progress className={` ${classes.progress__color} progress `} value={40} max="100"></progress>
                      </div>
                      <div >
                        <div className={classes.skills__titles}>
                          <h3 className={classes.skills__name}>React</h3>
                          <span className={classes.skills__number}>
                            40%
                          </span>
                        </div>
                        <progress className={` ${classes.progress__color} progress `} value={40} max="100"></progress>
                      </div>
                    </div>
                    <div className={classes.skills__logo}>
                      <FaHtml5 />
                      <FaCss3Alt />
                      <IoLogoNodejs />
                      <SiTypescript />
                      <FaReact />
                      <FaSass />
                      <SiRedux />
                      <SiBootstrap />
                      <SiTailwindcss />
                      <VscVscode />
                      <FaGitSquare />
                    </div>
   </>
                 
    )
}