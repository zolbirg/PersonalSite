
import {
 
  SiAutocad,
  SiCoreldraw,
  SiAdobephotoshop,
} from "react-icons/si";

export default function Engineer(){

    return(
        <>
        
        <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">AutoCad</h3>
                  <span className="skills__number">
                    80%
                  </span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__AutoCad" />
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">
                    Kompas 3д
                  </h3>
                  <span className="skills__number">
                    90%
                  </span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__kompas" />
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">
                    Coreldraw
                  </h3>
                  <span className="skills__number">
                    80%
                  </span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__Coreldraw" />
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">
                    PhotoShop
                  </h3>
                  <span className="skills__number">
                    60%
                  </span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__PhotoShop" />
                </div>
              </div>
            </div>
            <div className="skills__logo">
              <SiAutocad />
              <SiCoreldraw />
              <SiAdobephotoshop />
            </div>
        </>


    )
}