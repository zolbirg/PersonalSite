import classes from "./header.module.css";
import { useState } from "react";

const Header = () => {
  const [tab, setTab] = useState("Home");

  return (
    <header className={classes.header}>
      <a href="#home" className={classes.logo}>
        .Kanin
      </a>
      <nav className={classes.navbar}>
        <a
          href="#home"
          onClick={() => setTab("home")}
          className={
            tab === "home"
              ? "button button__active "
              : "button"
          }
        >
          {" "}
          Home
        </a>
        <a
          href="#about"
          onClick={() => setTab("about")}
          className={
            tab === "about"
              ? "button button__active "
              : "button"
          }
        >
          Me
        </a>
        {/* <a href="#skills">Skills</a> */}
        <a
          href="#portfolio"
          onClick={() => setTab("portfolio")}
          className={
            tab === "portfolio"
              ? "button button__active "
              : "button"
          }
        >
          Portfolio
        </a>
        <a
          href="#contact"
          onClick={() => setTab("contact")}
          className={
            tab === "contact"
              ? "button button__active "
              : "button"
          }
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
