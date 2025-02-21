import "./contact.css";

import {
  FaInstagram,
  FaVk,
} from "react-icons/fa";
import { FaGithub, FaTelegram, FaLocationDot,FaLink,} from "react-icons/fa6";
import { MdAlternateEmail,MdEmail, MdCall, } from "react-icons/md";


export default function Contact() {
  return (
    <section className="section"  id="contact">
      <h2 className="section__title">Contact</h2>
      <div className="contact__container container">
        
          <div className="contact__block">
            <div className="contact__information">
          <FaLocationDot className="contact__icon"/>
            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">
                Saint-Petersburg, Russia
              </span>
            </div>

            </div>
            <div className="contact__information">
            <MdEmail className="contact__icon" />
            <div>
              <h3 className="contact__title">E-mail</h3>
              <span className="contact__subtitle">
                Kaninroman@mail.ru
              </span>
            </div>
            </div>
          </div>
          <div className="contact__block">
            <div className="contact__information">
            <MdCall className="contact__icon" />
            <div>
              <h3 className="contact__title">Call me</h3>
              <span className="contact__subtitle">
                (+7) 951 676-53-35
              </span>
            </div>
            </div>

            <div className="contact__information">
            <FaLink className="contact__icon" />
            <div>
              <h3 className="contact__title">Link</h3>
              <span >
                <ul className="social__link">
                  <li>
                    <a href="https://t.me/zolbirg">
                      {/* <https://react-icons.github.io/react-icons/ */}
                      <FaTelegram />
                    </a>
                  </li>
                  <li>
                    <a href="https://vk.com/zolbirg">
                      <FaVk />
                    </a>
                  </li>
                  
                  <li>
                    <a href="https://github.com/zolbirg">
                      <FaGithub />
                    </a>
                  </li>
                  <li>
                    <a href="mailto:kaninroman@mail.ru">
                      <MdAlternateEmail />
                     
                    </a>
                  </li>
                </ul>
              </span>
            </div>
            </div>
          
        </div>
      </div>
    </section>
  );
}
