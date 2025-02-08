import { IoCalendarOutline } from "react-icons/io5";

export default function Education(){
    return(
        <div
            className="qualification__content"
           
        >
            {/*==================== QUALIFICATION 1 ====================*/}
            <div className="qualification__data">
            <div  className='qualification__left'>
                <h3 className="qualification__title">Школа №174</h3>
                <span className="qualification__subtitle">
                Спб. центр ра-н
                </span>
                <div className="qualification__calendar">
                <IoCalendarOutline />
                2011 - 2012
                </div>
            </div>
            <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
            </div>
            </div>
            {/*==================== QUALIFICATION 2 ====================*/}
            <div className="qualification__data">
            <div />
            <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
            </div>
            <div className='qualification__right'>
                <h3 className="qualification__title">КСИиГХ</h3>
                <span className="qualification__subtitle">
                СПБ колледж 
                </span>
                <div className="qualification__calendar">
                <IoCalendarOutline />
                2012 - 2014
                </div>
            </div>
            </div>
            {/*==================== QUALIFICATION 3 ====================*/}
            <div className="qualification__data">
            <div className='qualification__left'>
                <h3 className="qualification__title">
                СЗТУ
                </h3>
                <span className="qualification__subtitle">
                СПБ.тех универ
                </span>
                <div className="qualification__calendar">
                <IoCalendarOutline />
                2015 - 2018
                </div>
            </div>
            <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
            </div>
            </div>
            {/*==================== QUALIFICATION 4 ====================*/}
            <div className="qualification__data">
            <div />
            <div>
                <span className="qualification__rounder" />
                {/* <span class="qualification__line"></span> */}
            </div>
            <div className='qualification__right'>
                <h3 className="qualification__title">
                хз тут чет про доп курсы
                </h3>
                <span className="qualification__subtitle">
                бла бла
                </span>
                <div className="qualification__calendar">
                <IoCalendarOutline />
                2021
                </div>
            </div>
            </div>
        </div>
    )}