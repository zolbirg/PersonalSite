import { motion } from 'framer-motion';
import classes from "./navBar.module.scss";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { id: 'home',      label: 'Home',      to: '/',           hash: null },
  { id: 'about',     label: 'Me',        to: '/#about',     hash: 'about' },
  { id: 'portfolio', label: 'Portfolio', to: '/#portfolio', hash: 'portfolio' },
  { id: 'Project',   label: 'Project',   to: '/Project',    hash: null },
  { id: 'contact',   label: 'Contact',   to: '/#contact',   hash: 'contact' },
];

export default function NavBar() {
  const [tab, setTab] = useState("home");
  const [navbar, setNavbar] = useState(false);
  const [navbarLogo, setNavbarLogo] = useState("");
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("theme") === "light" ? "light" : "dark";
  });
  const navigate = useNavigate();
  const location = useLocation();

  // Sync active tab with current route (handles back/forward navigation)
  useEffect(() => {
    if (location.pathname === '/Project') {
      setTab('Project');
    } else if (location.pathname === '/') {
      const hashId = location.hash.slice(1);
      setTab(hashId || 'home');
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

    if (item.id === 'home') {
      if (location.pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
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
