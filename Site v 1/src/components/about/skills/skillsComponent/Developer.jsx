import classes from "./skillsComponent.module.css";
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


import ProgressComponent from "../../../../assets/progressComponent/ProgressComponent";




export default function Developer(){

    return(
    <>
        <div className={` ${classes.skills__list} grid `}>
                    <ProgressComponent percent={80}>Html</ProgressComponent>
                    <ProgressComponent percent={70}>Css</ProgressComponent>
                    <ProgressComponent percent={60}>JavaScript</ProgressComponent>
                    <ProgressComponent percent={40}>TypeScript</ProgressComponent>
                    <ProgressComponent percent={50}>React</ProgressComponent>
                   
                    </div>
                    <div className={classes.skills__logo_fa}>
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