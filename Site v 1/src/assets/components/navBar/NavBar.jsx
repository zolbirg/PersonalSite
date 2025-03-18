// https://www.youtube.com/watch?v=qXAVnsPCOt4

import classes from "./navBar.module.scss";
import { useState , useEffect } from "react";
import { HiLink } from "react-icons/hi2";
import {Link} from 'react-router-dom'


export default function NavBar() {
  const [tab, setTab] = useState("home");
  const [navbar, setNavbar] = useState(false)
  const [navbarLogo, setNavbarLogo] = useState("")

 
//navbar scroll changeBackground function
  const changeBackground = () => {
   
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  //logo scroll function
  const changeLogo = () => {
    if (window.scrollY >= 60) {
      setNavbarLogo('.Kanin')
    } else{
      setNavbarLogo('')
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
    
  })


  useEffect(() => {
    changeLogo()
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeLogo)
  })

  return (
    <section className={navbar ? `${classes.head} ${classes.head__active} `: classes.head}>
      <Link to="/"
          onClick={() => setTab("home")}
          className={classes.logo }>
        {navbarLogo}
      </Link>
      <nav className={classes.navbar}>
        <Link
          to="/#home"
          onClick={() => setTab("home")}
          className={
            tab === "home"
              ? "button button__active "
              : "button"
          }
        >
          {" "}
          Home
        </Link>
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
        <Link
          to="/Project"
          onClick={() => setTab("Project")}
          className={
            tab === "Project"
              ? "button button__active "
              : "button"
          }
        >
          Project
        </Link>
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
    </section>
  );
}
