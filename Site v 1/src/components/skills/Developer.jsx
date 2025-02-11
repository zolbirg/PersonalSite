
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
        <div className="skills__list grid">
                      <div className="skills__data">
                        <div className="skills__titles">
                          <h3 className="skills__name">HTML</h3>
                          <span className="skills__number">
                            80%
                          </span>
                        </div>
                        <div className="skills__bar">
                          <span className="skills__percentage skills__HTML" />
                        </div>
                      </div>
                      <div className="skills__data">
                        <div className="skills__titles">
                          <h3 className="skills__name">CSS</h3>
                          <span className="skills__number">
                            70%
                          </span>
                        </div>
                        <div className="skills__bar">
                          <span className="skills__percentage skills__CSS" />
                        </div>
                      </div>
                      <div className="skills__data">
                        <div className="skills__titles">
                          <h3 className="skills__name">
                            JavaScript
                          </h3>
                          <span className="skills__number">
                            60%
                          </span>
                        </div>
                        <div className="skills__bar">
                          <span className="skills__percentage skills__JavaScript" />
                        </div>
                      </div>
                      <div className="skills__data">
                        <div className="skills__titles">
                          <h3 className="skills__name">
                            TypeScript
                          </h3>
                          <span className="skills__number">
                            40%
                          </span>
                        </div>
                        <div className="skills__bar">
                          <span className="skills__percentage skills__TypeScript" />
                        </div>
                      </div>
                      <div className="skills__data">
                        <div className="skills__titles">
                          <h3 className="skills__name">React</h3>
                          <span className="skills__number">
                            40%
                          </span>
                        </div>
                        <div className="skills__bar">
                          <span className="skills__percentage skills__React" />
                        </div>
                      </div>
                    </div>
                    <div className="skills__logo">
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