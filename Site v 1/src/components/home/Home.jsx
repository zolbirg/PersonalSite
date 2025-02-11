 import React from 'react';
import classes from'./home.module.css'

import { FaInstagram, FaVk, FaArrowCircleDown } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

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
        <section className={` ${classes.hero__section} section`} id="home">
        <div className="container">
          <div className={classes.hero__content}>
            <h1>KANIN ROMAN</h1>
            <h2>
              {/* https://www.npmjs.com/package/react-text-transition */}
              <TextTransition  springConfig={presets.slow}>{TEXTS[index % TEXTS.length]}</TextTransition>
            </h2>
            <p>
              Инженер и WEB разработчик, делаю вещи и заставляю их работать.
              <br /> Воплощая ваши мечты в реальность.
            </p>
            <ul className={classes.social__link}>
              <li>
                <a href="#">
                  {/* <https://react-icons.github.io/react-icons/ */}
                  <FaInstagram />
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
          </div>
        </div>
        <div className={classes.down__arrow}>
          <a data-scroll="" href="#about" className={classes.arrow__animated}>
            Down 
            <FaArrowCircleDown  className={classes.arrow__fa}/>
          </a>
        </div>
      </section>
      
    );
  }
  
  
  