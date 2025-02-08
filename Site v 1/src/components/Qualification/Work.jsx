import { IoCalendarOutline } from "react-icons/io5";

export default function Work(){

    return(
        <div className="qualification__content"  >
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
                {/* <span className="qualification__line" /> */}
            </div>
            </div>
        </div>
    )
}