import classes from "./aboutComponetn.module.css";


import Button from "../../../assets/components/button/Button";

import { useState } from "react";

export default function AboutComponetn() {
  const [contentDownload, setContentDownload] =
    useState(null);

  function handleClick(type) {
    setContentDownload(type);
  }
  return (
    <section >
      <div className={classes.about__data}>
        <div className={classes.about__list} >
          
            <ul>
              <li >
              {" "}
                <strong > Birthday:</strong>{" "}
                <span>11 May 1991</span>
              </li>
              <li >
              {" "}
                <strong>City:</strong>{" "}
                <span>Saint-Petersburg, Russia</span>
              </li>
              <li >
              {" "}
                <strong>Freelance:</strong>{" "}
                <span>Available</span>
              </li>
              <li >
              {" "}
                <strong>Email:</strong>{" "}
                <span>Kaninroman@mail.ru</span>
              </li>
            </ul>
          </div>
        

        <p className={classes.about__description}>
          Пердприниматель более 4 бизнесов в различных
          направвлениях. своими руками построил Автодом и
          уехал в путешествие проехав 15 стран 120 т.км и 3
          года в пути. сейчвс являюсть Frontaend
          разработчиком
        </p>
        <div className={classes.about__info}>
          <div>
            <span className={classes.about__info_title}>
              10+
            </span>
            <span className={classes.about__info_name}>
              лет <br /> управления
            </span>
          </div>
          <div>
            <span className={classes.about__info_title}>
              3+
            </span>
            <span className={classes.about__info_name}>
              лет <br /> путешествий
            </span>
          </div>
          <div>
            <span className={classes.about__info_title}>
              2+
            </span>
            <span className={classes.about__info_name}>
              лет
              <br />
              Програмист
            </span>
          </div>
        </div>
        <div className={classes.about__buttons}>
          <a
            download={contentDownload}
            href={contentDownload}
          >
            <Button onClick={() => handleClick("#")}>
              Download CV.pdf
            </Button>
          </a>
        </div>
        </div>
    </section>
  );
}
