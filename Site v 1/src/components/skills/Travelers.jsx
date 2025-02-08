import {IoIosAirplane} from "react-icons/io";



import { TbCamper } from "react-icons/tb";



export default function Travelers() {

    return(
        <>
        <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles skills__travel ">
                  <h3 className="skills__name">
                    Более 120т.км на машине и еще больше
                    самолетом
                  </h3>
                  <div className="skills__logo">
                    <TbCamper />
                    ---
                    <IoIosAirplane />
                  </div>
                  {/* <span className="skills__number">90%</span> */}
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__km" />
                </div>
              </div>
              <div>
                <p>
                  15 странии и бла бла бла
                  <br />
                  вствить флаги стран
                </p>
              </div>
            </div>       
        </>
    )
}