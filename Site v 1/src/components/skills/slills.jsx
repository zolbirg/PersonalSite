import './Skills.css'
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { IoLogoNodejs,IoIosAirplane } from "react-icons/io";
import { FaHtml5 ,FaCss3Alt,FaReact,FaSass, FaGitSquare} from "react-icons/fa";
import { SiTypescript,SiRedux, SiBootstrap, SiTailwindcss,SiAutocad, SiCoreldraw, SiAdobephotoshop} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbCamper} from "react-icons/tb";

// import Collapsible from 'react-collapsible';

export default function Skills(){


    return(

<section className="skills section" id="skills">
    <h2 className="section__title">Skills</h2>
    <span className="section__subtitle">Технические навыки</span>
    <div className="skills__container container grid">
        <div>
        
        {/*==================== SKILL-1 ====================*/}
        
        <div className="skills__content skills__open " >
            <div className="skills__header">
            {/* <i className="uil uil-analytics skills__icon" /> */}
            <div>
                <h1 className="skills__title">Web Developer</h1>
                <span className="skills__subtitle">Более 2х лет</span>
            </div>
            <HiMiniArrowsUpDown className='skills__arrow ' />
            </div>
            <div className="skills__list grid">
            <div className="skills__data">
                <div className="skills__titles">
                <h3 className="skills__name">HTML</h3>
                <span className="skills__number">60%</span>
                </div>
                <div className="skills__bar">
                <span className="skills__percentage skills__HTML" />
                </div>
            </div>
            <div className="skills__data">
                <div className="skills__titles">
                <h3 className="skills__name">CSS</h3>
                <span className="skills__number">70%</span>
                </div>
                <div className="skills__bar">
                <span className="skills__percentage skills__CSS" />
                </div>
            </div>
            <div className="skills__data">
                <div className="skills__titles">
                <h3 className="skills__name">JavaScript</h3>
                <span className="skills__number">60%</span>
                </div>
                <div className="skills__bar">
                <span className="skills__percentage skills__JavaScript" />
                </div>
            </div>
            <div className="skills__data">
                <div className="skills__titles">
                <h3 className="skills__name">TypeScript</h3>
                <span className="skills__number">40%</span>
                </div>
                <div className="skills__bar">
                <span className="skills__percentage skills__TypeScript" />
                </div>
            </div>
            <div className="skills__data">
                <div className="skills__titles">
                <h3 className="skills__name">React</h3>
                <span className="skills__number">40%</span>
                </div>
                <div className="skills__bar">
                <span className="skills__percentage skills__React" />
                </div>
            </div>
            </div>
            <div className='skills__logo'>
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
        </div>
        
        {/*==================== SKILLS 2 ====================*/}
        <div className="skills__content  skills__open">
            <div className="skills__header">
            {/* <i className="uil uil-money-bill skills__icon" /> */}
            <div>
                <h1 className="skills__title">Engineer</h1>
                <span className="skills__subtitle">Более 10 лет. </span>
            </div>
            <HiMiniArrowsUpDown className='skills__arrow ' />
            </div>
            <div className="skills__list grid">
            <div className="skills__data">
                <div className="skills__titles">
                <h3 className="skills__name">AutoCad</h3>
                <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                <span className="skills__percentage skills__AutoCad" />
                </div>
            </div>
            <div className="skills__data">
                <div className="skills__titles">
                <h3 className="skills__name">Kompas 3д</h3>
                <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                <span className="skills__percentage skills__kompas" />
                </div>
            </div>
            <div className="skills__data">
                <div className="skills__titles">
                <h3 className="skills__name">Coreldraw</h3>
                <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                <span className="skills__percentage skills__Coreldraw" />
                </div>
            </div>
            <div className="skills__data">
                <div className="skills__titles">
                <h3 className="skills__name">PhotoShop</h3>
                <span className="skills__number">60%</span>
                </div>
                <div className="skills__bar">
                <span className="skills__percentage skills__PhotoShop" />
                </div>
            </div>
            </div>
            <div className='skills__logo'>
            <SiAutocad />
            <SiCoreldraw />
            <SiAdobephotoshop />
           
            </div>
        </div>
       
        </div>
        <div>
        {/*==================== SKILLS 3 ====================*/}
        <div className="skills__content skills__open">
        {/* <div className="skills__content skills__close"> */}
            <div className="skills__header">
            <i className="uil uil-brackets-curly skills__icon" />
            <div>
                <h1 className="skills__title">Travelers</h1>
                <span className="skills__subtitle">Более 3 лет. </span>
            </div>
            <HiMiniArrowsUpDown className='skills__arrow ' />
            </div>
            <div className="skills__list grid">
            
            <div className="skills__data">
                <div className="skills__titles skills__travel ">
                <h3 className="skills__name">Более 120т.км на машине и еще больше самолетом</h3>
                <div className='skills__logo'>
                <TbCamper />---
                <IoIosAirplane />
                    </div>
                {/* <span className="skills__number">90%</span> */}
                </div>
                <div className="skills__bar">
                <span className="skills__percentage skills__km" />
                </div>
            </div>
            <div>
                <p>15 странии и бла  бла  бла
                    <br />вствить флаги стран
                </p>
                
            </div>
            
            </div>
        </div>
        </div>
    </div>
</section>

    )
}