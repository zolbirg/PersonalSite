import classes from "./qualification.module.css";

// import { IoCalendarOutline } from "react-icons/io5";


export default function Work(){

    return(
        <div className="qualification__content"  >
            {/*==================== QUALIFICATION 1 ====================*/}
            <div className={classes.qualification__data}>
            <div className={classes.qualification__left}>
                <h3 className={classes.qualification__title}>ИП Канин Р.И.</h3>
                <span className={classes.qualification__subtitle}>
                LabDecor-пр-во дверей
                </span>
                <div className={classes.qualification__calendar}>
                {/* <IoCalendarOutline /> */}
                2017 - 2019
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
            <div className={classes.qualification__right}>
                <span className={classes.qualification__rounder}/>
                <span className={classes.qualification__line} />
            </div>
            <div >
                <h3 className={classes.qualification__title}>ИП Канин Р.И.</h3>
                <span className={classes.qualification__subtitle}>
                MacroWood -лазерная резка пр-во детских игрушек
                </span>
                <div className={classes.qualification__calendar}>
                {/* <IoCalendarOutline /> */}
                2019 - 2020
                </div>
            </div>
            </div>
            {/*==================== QUALIFICATION 3 ====================*/}
            <div className={classes.qualification__data}>
            <div className={classes.qualification__left}>
                <h3 className={classes.qualification__title}>
                ИП Канин Р.И.
                </h3>
                <span className={classes.qualification__subtitle}>
                Кафе Kit 
                </span>
                <div className={classes.qualification__calendar}>
                {/* <IoCalendarOutline /> */}
                2020 - Present
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
            <div className={classes.qualification__right}>
                <span className={classes.qualification__rounder} />
                <span className={classes.qualification__line} />
            </div>
            <div >
                <h3 className={classes.qualification__title}>ооо Best-Quest </h3>
                <span className={classes.qualification__subtitle}>
                рук проектов
                </span>
                <div className={classes.qualification__calendar}>
                {/* <IoCalendarOutline /> */}
                2019 - 2020
                </div>
            </div>
            </div>

             {/*==================== QUALIFICATION 5 ====================*/}
             <div className={classes.qualification__data}>
            <div className={classes.qualification__left}>
                <h3 className={classes.qualification__title}>
                ИП Канин Р.И.
                </h3>
                <span className={classes.qualification__subtitle}>
                еще варианты пакмман контейнеры 
                </span>
                <div className={classes.qualification__calendar}>
                {/* <IoCalendarOutline /> */}
                2020 - Present
                </div>
            </div>
            <div>
                <span className={classes.qualification__rounder} />
                {/* <span className="qualification__line" /> */}
            </div>
            </div>
        </div>
    )
}