import classes from "./navBar.module.css";
import { useState , useEffect } from "react";

export default function NavBar() {
  const [tab, setTab] = useState("home");
  const [navbar, setNavbar] = useState(false)
  const [navbarLogo, setNavbarLogo] = useState("")

 
//navbar scroll changeBackground function
  const changeBackground = () => {
    console.log(window.scrollY)
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
      <a href="#home"
          onClick={() => setTab("home")}
          className={classes.logo }>
        {navbarLogo}
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
    </section>
  );
}
