import classes from "./skillsComponent.module.scss";
import ProgressComponent from "../../../../assets/progressComponent/ProgressComponent";


import {
 
  SiAutocad,
  SiCoreldraw,
  SiAdobephotoshop,
} from "react-icons/si";

export default function Engineer(){

    return(
        <>
        
        <div className={` ${classes.skills__list} grid `}>
         
          <ProgressComponent percent={80}>AutoCad</ProgressComponent>
          <ProgressComponent percent={90}>Kompas 3d</ProgressComponent>
          <ProgressComponent percent={80}>CorellDrow</ProgressComponent>
          <ProgressComponent percent={60}>PhotoShop</ProgressComponent>
              
            </div>
            <div className={classes.skills__logo_fa}>
              <SiAutocad />
              <SiCoreldraw />
              <SiAdobephotoshop />
            </div>
        </>


    )
}