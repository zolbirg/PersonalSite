import './qualification.css'
import { PiBriefcaseDuotone,PiCertificateDuotone} from "react-icons/pi";

export default function Qualification() {
            
            const tabs = document.querySelectorAll("[data-target]"),
        tabContents = document.querySelectorAll("[data-content]");

        tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target);

            tabContents.forEach((tabContent) => {
            tabContent.classList.remove("qualification__active");
            });
            target.classList.add("qualification__active");

            tabs.forEach((tab) => {
            tab.classList.remove("qualification__active");
            });
            tab.classList.add("qualification__active");
        });
        });

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
                <h3 className="qualification__title">Diploma in English </h3>
                <span className="qualification__subtitle">
                British Council, Kandy
                </span>
                <div className="qualification__calendar">
                {/* <i className="uil uil-calendar-alt" /> */}
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
                <h3 className="qualification__title">GCE Adavance Level</h3>
                <span className="qualification__subtitle">
                St.Anthonys College, Kandy
                </span>
                <div className="qualification__calendar">
                {/* <i className="uil uil-calendar-alt" /> */}
                2012 - 2014
                </div>
            </div>
            </div>
            {/*==================== QUALIFICATION 3 ====================*/}
            <div className="qualification__data">
            <div className='qualification__left'>
                <h3 className="qualification__title">
                BSc Management Information System
                </h3>
                <span className="qualification__subtitle">
                NSBM Green University
                </span>
                <div className="qualification__calendar">
                {/* <i className="uil uil-calendar-alt" /> */}
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
                Data Analyst Professional Certification
                </h3>
                <span className="qualification__subtitle">
                Google | Coursera - Online
                </span>
                <div className="qualification__calendar">
                {/* <i className="uil uil-calendar-alt" /> */}
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
                <h3 className="qualification__title">Trainee Banking Assistant</h3>
                <span className="qualification__subtitle">
                DFCC Head Office - Colombo
                </span>
                <div className="qualification__calendar">
                {/* <i className="uil uil-calendar-alt" /> */}
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
                <h3 className="qualification__title">Banking Assistant</h3>
                <span className="qualification__subtitle">
                DFCC Head Office - Colombo
                </span>
                <div className="qualification__calendar">
                {/* <i className="uil uil-calendar-alt" /> */}
                2019 - 2020
                </div>
            </div>
            </div>
            {/*==================== QUALIFICATION 3 ====================*/}
            <div className="qualification__data">
            <div className='qualification__left'>
                <h3 className="qualification__title">
                Data Analyst - Digital banking
                </h3>
                <span className="qualification__subtitle">
                DFCC Head Office - Colombo
                </span>
                <div className="qualification__calendar">
                {/* <i className="uil uil-calendar-alt" /> */}
                2020 - Present
                </div>
            </div>
            <div>
                <span className="qualification__rounder" />
                {/* <span class="qualification__line"></span> */}
            </div>
            </div>
        </div>
        </div>
    </div>
 </section>

    )
}