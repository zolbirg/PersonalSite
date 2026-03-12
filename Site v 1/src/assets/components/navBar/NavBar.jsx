import { motion } from 'framer-motion';
import classes from "./navBar.module.scss";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const NAV_ITEMS = [
  { id: 'home',      label: 'Home',      type: 'link',   to: '/#home' },
  { id: 'about',     label: 'Me',        type: 'anchor', href: '#about' },
  { id: 'portfolio', label: 'Portfolio', type: 'anchor', href: '#portfolio' },
  { id: 'Project',   label: 'Project',   type: 'link',   to: '/Project' },
  { id: 'contact',   label: 'Contact',   type: 'anchor', href: '#contact' },
];

export default function NavBar() {
  const [tab, setTab] = useState("home");
  const [navbar, setNavbar] = useState(false);
  const [navbarLogo, setNavbarLogo] = useState("");
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("theme") === "light" ? "light" : "dark";
  });

  const changeBackground = () => {
    setNavbar(window.scrollY >= 66);
  };

  const changeLogo = () => {
    setNavbarLogo(window.scrollY >= 60 ? '.Kanin' : '');
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("theme-light");
    } else {
      root.classList.remove("theme-light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  useEffect(() => {
    changeLogo();
    window.addEventListener("scroll", changeLogo);
    return () => window.removeEventListener("scroll", changeLogo);
  }, []);

  return (
    <section className={navbar ? `${classes.head} ${classes.head__active}` : classes.head}>
      <Link to="/" onClick={() => setTab("home")} className={classes.logo}>
        {navbarLogo}
      </Link>

      <nav className={classes.navbar}>
        {NAV_ITEMS.map(({ id, label, type, to, href }) => {
          const isActive = tab === id;
          const itemClass = isActive ? 'button button__active' : 'button';

          return (
            <span key={id} className={classes.nav__item}>
              {type === 'link' ? (
                <Link to={to} onClick={() => setTab(id)} className={itemClass}>
                  {label}
                </Link>
              ) : (
                <a href={href} onClick={() => setTab(id)} className={itemClass}>
                  {label}
                </a>
              )}
              {isActive && (
                <motion.span
                  className={classes.nav__indicator}
                  layoutId="nav-indicator"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </span>
          );
        })}

        <button
          type="button"
          onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
          className={classes.themeToggle}
          aria-label="Toggle theme"
        >
          <span className={classes.themeToggle__thumb} />
        </button>
      </nav>
    </section>
  );
}
