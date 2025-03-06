// import { IoCalendarOutline } from "react-icons/io5";
import classes from "../qualification.module.scss";

export default function Education(){
    return(
        <div
            className="qualification__content"
           
        >
            {/*==================== QUALIFICATION 1 ====================*/}
            <div className={classes.qualification__data}>
            <div  className={classes.qualification__left}>
                <h3 className={classes.qualification__title}>Школа №174</h3>
                <span className={classes.qualification__subtitle}>
                Спб. центр ра-н
                </span>
                <div className={classes.qualification__calendar }>
                {/* <IoCalendarOutline /> */}
                2011 - 2012
                </div>
            </div>
            <div>
                <span className={classes.qualification__rounder} />
                <span className={classes.qualification__line} />
            </div>
            </div>
            {/*==================== QUALIFICATION 2 ====================*/}
            <div className={classes.qualification__data}>
            <div />
            <div>
                <span className={classes.qualification__rounder} />
                <span className={classes.qualification__line} />
            </div>
            <div className={classes.qualification__right}>
                <h3 className={classes.qualification__title}>КСИиГХ</h3>
                <span className={classes.qualification__subtitle}>
                СПБ колледж 
                </span>
                <div className={classes.qualification__calendar}>
                {/* <IoCalendarOutline /> */}
                2012 - 2014
                </div>
            </div>
            </div>
            {/*==================== QUALIFICATION 3 ====================*/}
            <div className={classes.qualification__data}>
            <div  className={classes.qualification__left}>
                <h3 className={classes.qualification__title}>СЗТУ</h3>
                <span className={classes.qualification__subtitle}>
                Спб.тех универ
                </span>
                <div className={classes.qualification__calendar}>
                {/* <IoCalendarOutline /> */}
                2011 - 2012
                </div>
            </div>
            <div>
                <span className={classes.qualification__rounder} />
                <span className={classes.qualification__line} />
            </div>
            </div>
            {/*==================== QUALIFICATION 4 ====================*/}
            <div className={classes.qualification__data}>
            <div />
            <div>
                <span className={classes.qualification__rounder} />
                {/* <span class="qualification__line"></span> */}
            </div>
            <div className={classes.qualification__right}>
                <h3 className={classes.qualification__title}>
                хз тут чет про доп курсы
                </h3>
                <span className={classes.qualification__subtitle}>
                бла бла
                </span>
                <div className={classes.qualification__calendar}>
                {/* <IoCalendarOutline /> */}
                2021
                </div>
            </div>
            </div>
        </div>
    )}