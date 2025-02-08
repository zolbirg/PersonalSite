import './qualification.css'
import { PiBriefcaseDuotone,PiCertificateDuotone} from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";

export default function Qualification() {
        

    return (
<section className="qualification__section">
    <h2 className="section__title">Qualification</h2>
    <span className="section__subtitle">Мой путь</span>
    <div className="qualification__container container">
        <div className="qualification__tabs">
        <div
            className="qualification__button button--flex qualification__active"
            data-target="#education"
        >
            
             Education
            <PiCertificateDuotone />
        </div>
        <div className="qualification__button button--flex" data-target="#work">
            
        <PiBriefcaseDuotone />
            Work
        </div>
        </div>
        <div className="qualification__sections">
        {/*==================== QUALIFICATION CONTENT 1 ====================*/}
        <div
            className="qualification__content qualification__active"
            data-content=""
            id="education"
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
        {/*==================== QUALIFICATION CONTENT 2 ====================*/}
        <div className="qualification__content" data-content="" id="work">
            {/*==================== QUALIFICATION 1 ====================*/}
            <div className="qualification__data">
            <div className='qualification__left'>
                <h3 className="qualification__title">ИП Канин Р.И.</h3>
                <span className="qualification__subtitle">
                LabDecor-пр-во дверей
                </span>
                <div className="qualification__calendar">
                <IoCalendarOutline />
                2017 - 2019
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
            <div className='qualification__right'>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
            </div>
            <div >
                <h3 className="qualification__title">ИП Канин Р.И.</h3>
                <span className="qualification__subtitle">
                MacroWood -лазерная резка пр-во детских игрушек
                </span>
                <div className="qualification__calendar">
                <IoCalendarOutline />
                2019 - 2020
                </div>
            </div>
            </div>
            {/*==================== QUALIFICATION 3 ====================*/}
            <div className="qualification__data">
            <div className='qualification__left'>
                <h3 className="qualification__title">
                ИП Канин Р.И.
                </h3>
                <span className="qualification__subtitle">
                Кафе Kit 
                </span>
                <div className="qualification__calendar">
                <IoCalendarOutline />
                2020 - Present
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
            <div className='qualification__right'>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
            </div>
            <div >
                <h3 className="qualification__title">ооо Best-Quest </h3>
                <span className="qualification__subtitle">
                рук проектов
                </span>
                <div className="qualification__calendar">
                <IoCalendarOutline />
                2019 - 2020
                </div>
            </div>
            </div>

             {/*==================== QUALIFICATION 5 ====================*/}
             <div className="qualification__data">
            <div className='qualification__left'>
                <h3 className="qualification__title">
                ИП Канин Р.И.
                </h3>
                <span className="qualification__subtitle">
                еще варианты пакмман контейнеры 
                </span>
                <div className="qualification__calendar">
                <IoCalendarOutline />
                2020 - Present
                </div>
            </div>
            <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
            </div>
            </div>
        </div>
        </div>
    </div>
 </section>

    )
}