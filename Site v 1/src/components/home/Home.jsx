import React from 'react';
import'./home.css'

import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaVk } from "react-icons/fa";
import TextTransition, { presets } from 'react-text-transition';


const TEXTS = ['E N G I N E E R', 'WEB DEVELOPER', 'T R A V E L E R S'];

export default function Home(){
  
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

    return (
        <section id="home" className="section hero-section">
        <div className="container">
          <div className="hero-content text-center">
            <h1>KANIN ROMAN</h1>
            <h2>
              {/* https://www.npmjs.com/package/react-text-transition */}
              <TextTransition  springConfig={presets.slow}>{TEXTS[index % TEXTS.length]}</TextTransition>
            </h2>
            <p>
              Инженер и WEB разработчик, делаю вещи и заставляю их работать.
              <br /> Воплощая ваши мечты в реальность.
            </p>
            <ul className="social-link">
              <li>
                <a href="#">
                  {/* <https://react-icons.github.io/react-icons/ */}
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                <FaVk />
                </a>
              </li>
              <li>
                <a href="#">
                <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="down-arrow">
          <a data-scroll="" href="#about" className="arrow-animated">
            Scroll Down <i className="ti-arrow-down" />
          </a>
        </div>
      </section>
      
    );
  }
  
  
  