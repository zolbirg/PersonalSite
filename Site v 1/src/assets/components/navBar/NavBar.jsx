import { motion } from 'framer-motion';
import classes from "./navBar.module.scss";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { id: 'home',      label: 'Home',      to: '/',          hash: null },
  { id: 'about',     label: 'Me',        to: '/developer', hash: null },
  { id: 'portfolio', label: 'Portfolio', to: '/Project',   hash: null },
  { id: 'contact',   label: 'Contact',   to: '/#contact',  hash: 'contact' },
];

const MORE_ITEMS = [
  { id: 'engineer', label: 'Engineer', to: '/engineer' },
  { id: 'travelers', label: 'Travelers', to: '/travelers' },
  { id: 'colorswitch', label: 'ColorSwitch', to: '/ColorSwitch' },
  { id: 'bullandmoo', label: 'BullAndMoo', to: '/BullAndMoo' },
];

export default function NavBar() {
  const [tab, setTab] = useState("home");
  const [navbar, setNavbar] = useState(false);
  const [navbarLogo, setNavbarLogo] = useState("");
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("theme") === "light" ? "light" : "dark";
  });
  const navigate = useNavigate();
  const location = useLocation();

  // Sync active tab with current route (handles back/forward navigation)
  useEffect(() => {
    if (location.pathname === '/Project') {
      setTab('portfolio');
    } else if (location.pathname === '/developer') {
      setTab('about');
    } else if (location.pathname === '/') {
      const hashId = location.hash.slice(1);
      setTab(hashId || 'home');
    } else {
      const moreMatch = MORE_ITEMS.find((x) => x.to === location.pathname);
      if (moreMatch) setTab(moreMatch.id);
    }
  }, [location.pathname, location.hash]);

  // Scroll to hash section after cross-page navigation
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  const handleNavClick = (e, item) => {
    setTab(item.id);
    setIsMoreOpen(false);

    if (item.id === 'home') {
      if (location.pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (item.id === 'about') {
      // Повторный заход/клик по "Me" иногда приводит к восстановлению scroll-состояния браузером.
      // Сбрасываем позицию к началу, чтобы страница каждый раз начиналась сверху.
      window.scrollTo(0, 0);
    }

    if (item.id === 'portfolio') {
      // Повторный кликинг по пункту может не размонтировать компонент, а браузер/роутер восстанавливает scroll.
      window.scrollTo(0, 0);
    }

    if (item.hash) {
      e.preventDefault();
      if (location.pathname === '/') {
        document.getElementById(item.hash)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(`/#${item.hash}`);
      }
    }
  };

  const changeBackground = () => setNavbar(window.scrollY >= 66);
  const changeLogo = () => setNavbarLogo(window.scrollY >= 60 ? '.Kanin' : '');

  useEffect(() => {
    document.documentElement.classList.toggle("theme-light", theme === "light");
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

  useEffect(() => {
    if (!isMoreOpen) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsMoreOpen(false);
    };

    const onPointerDown = (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      if (target.closest(`.${classes.more}`)) return;
      setIsMoreOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('pointerdown', onPointerDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('pointerdown', onPointerDown);
    };
  }, [isMoreOpen]);

  const handleMoreItemClick = (e, item) => {
    setTab(item.id);
    setIsMoreOpen(false);
  };

  return (
    <section className={navbar ? `${classes.head} ${classes.head__active}` : classes.head}>
      <Link to="/" onClick={(e) => handleNavClick(e, NAV_ITEMS[0])} className={classes.logo}>
        {navbarLogo}
      </Link>

      <nav className={classes.navbar}>
        {NAV_ITEMS.map((item) => {
          const { id, label, to } = item;
          const isActive = tab === id;
          const itemClass = isActive ? 'button button__active' : 'button';

          return (
            <span key={id} className={classes.nav__item}>
              <Link to={to} onClick={(e) => handleNavClick(e, item)} className={itemClass}>
                {label}
              </Link>
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

        <div className={classes.more}>
          <button
            type="button"
            className={classes.more__button}
            onClick={() => setIsMoreOpen((v) => !v)}
            aria-haspopup="menu"
            aria-expanded={isMoreOpen}
            aria-label="More pages"
          >
            <span className={classes.burger} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>

          {isMoreOpen && (
            <div className={classes.more__menu} role="menu" aria-label="More pages menu">
              {MORE_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  to={item.to}
                  role="menuitem"
                  className={classes.more__link}
                  onClick={(e) => handleMoreItemClick(e, item)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>

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
