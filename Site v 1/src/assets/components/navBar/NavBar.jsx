import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import classes from "./navBar.module.scss";
import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ME_TABBAR_VISIBILITY_EVENT } from '../../../pages/hobbies/meProfileNavEvents.js';

const NAV_ITEMS = [
  { id: 'home',      label: 'Home',      to: '/',          hash: null },
  { id: 'about',     label: 'Me',        to: '/me?tab=developer', hash: null },
  { id: 'portfolio', label: 'Project', to: '/Project',   hash: null },
  { id: 'contact',   label: 'Contact',   to: '/#contact',  hash: 'contact' },
];

const ME_INLINE_TABS = [
  { id: 'engineer', label: 'Engineer', tab: 'engineer' },
  { id: 'developer', label: 'Developer', tab: 'developer' },
  { id: 'travelers', label: 'Traveler', tab: 'travelers' },
];

const COMPACT_QUERY = '(max-width: 767.98px)';

function useMatchMedia(query) {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    mql.addEventListener('change', onChange);
    setMatches(mql.matches);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}

export default function NavBar() {
  const [tab, setTab] = useState("home");
  const [navbar, setNavbar] = useState(false);
  const [navbarLogo, setNavbarLogo] = useState("");
  const [meTabBarVisible, setMeTabBarVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("theme") === "light" ? "light" : "dark";
  });
  const navigate = useNavigate();
  const location = useLocation();
  const isCompact = useMatchMedia(COMPACT_QUERY);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Sync active tab with current route (handles back/forward navigation)
  useEffect(() => {
    if (location.pathname === '/Project') {
      setTab('portfolio');
    } else if (location.pathname === '/me') {
      setTab('about');
    } else if (location.pathname === '/') {
      const hashId = location.hash.slice(1);
      setTab(hashId || 'home');
    } else if (location.pathname === '/ColorSwitch') {
      setTab('colorswitch');
    } else if (location.pathname === '/BullAndMoo') {
      setTab('bullandmoo');
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

  useEffect(() => {
    if (location.pathname !== '/me') {
      setMeTabBarVisible(true);
      return;
    }

    const onVisibility = (e) => {
      if (e instanceof CustomEvent && typeof e.detail?.visible === 'boolean') {
        setMeTabBarVisible(e.detail.visible);
      }
    };

    window.addEventListener(ME_TABBAR_VISIBILITY_EVENT, onVisibility);
    return () => window.removeEventListener(ME_TABBAR_VISIBILITY_EVENT, onVisibility);
  }, [location.pathname]);

  useEffect(() => {
    if (!isCompact) closeMenu();
  }, [isCompact, closeMenu]);

  useEffect(() => {
    closeMenu();
  }, [location.pathname, location.search, location.hash, closeMenu]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen, closeMenu]);

  const handleNavClick = (e, item) => {
    setTab(item.id);

    if (item.id === 'home') {
      if (location.pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (item.id === 'about') {
      window.scrollTo(0, 0);
    }

    if (item.id === 'portfolio') {
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

  const handleNavClickCompact = (e, item) => {
    handleNavClick(e, item);
    closeMenu();
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

  const meQueryTab =
    location.pathname === '/me' ? new URLSearchParams(location.search).get('tab') : null;

  const meActiveTab =
    meQueryTab && ['engineer', 'developer', 'travelers'].includes(meQueryTab)
      ? meQueryTab
      : 'developer';

  const showMeInlineTabs = location.pathname === '/me' && !meTabBarVisible;
  const showMeTabsInDrawer = isCompact && showMeInlineTabs;

  const mobileOverlay = isCompact && menuOpen && typeof document !== 'undefined'
    ? createPortal(
        <>
          <button
            type="button"
            className={classes.mobileBackdrop}
            aria-label="Закрыть меню"
            onClick={closeMenu}
          />
          <aside
            id="site-nav-drawer"
            className={classes.drawer}
            role="navigation"
            aria-label="Основная навигация"
          >
            {showMeTabsInDrawer && (
              <div className={classes.drawerSection}>
                <p className={classes.drawerSectionTitle}>Профиль</p>
                <div className={classes.drawerTabs}>
                  {ME_INLINE_TABS.map(({ id, label, tab }) => {
                    const isActive = meActiveTab === tab;
                    return (
                      <Link
                        key={id}
                        to={`/me?tab=${tab}`}
                        className={
                          isActive
                            ? `${classes.meInlineTab} ${classes.meInlineTab_active}`
                            : classes.meInlineTab
                        }
                        onClick={() => {
                          window.scrollTo(0, 0);
                          closeMenu();
                        }}
                      >
                        {label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            <div className={classes.drawerSection}>
              <p className={classes.drawerSectionTitle}>Разделы</p>
              <nav className={classes.drawerNav} aria-label="Разделы сайта">
                {NAV_ITEMS.map((item) => {
                  const { id, label, to } = item;
                  const isActive = tab === id;
                  const itemClass = isActive
                    ? `${classes.drawerLink} ${classes.drawerLink_active}`
                    : classes.drawerLink;

                  return (
                    <span key={id} className={classes.drawerItem}>
                      <Link
                        to={to}
                        className={itemClass}
                        onClick={(e) => handleNavClickCompact(e, item)}
                      >
                        {label}
                      </Link>
                      {isActive && (
                        <motion.span
                          className={classes.nav__indicator}
                          layoutId="nav-indicator-mobile"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </span>
                  );
                })}
              </nav>
            </div>
          </aside>
        </>,
        document.body
      )
    : null;

  return (
    <section className={navbar ? `${classes.head} ${classes.head__active}` : classes.head}>
      <div className={classes.head__brand}>
        <Link to="/" onClick={(e) => handleNavClick(e, NAV_ITEMS[0])} className={classes.logo}>
          {navbarLogo}
        </Link>
      </div>

      <div
        className={
          showMeInlineTabs && !isCompact
            ? classes.head__center
            : `${classes.head__center} ${classes.head__center_hiddenMobile}`
        }
        aria-hidden={!showMeInlineTabs || isCompact}
      >
        {showMeInlineTabs && !isCompact && (
          <div
            className={classes.meInlineTabs}
            role="tablist"
            aria-label="Профиль — вкладки"
          >
            {ME_INLINE_TABS.map(({ id, label, tab }) => {
              const isActive = meActiveTab === tab;
              return (
                <Link
                  key={id}
                  to={`/me?tab=${tab}`}
                  role="tab"
                  aria-selected={isActive}
                  className={
                    isActive
                      ? `${classes.meInlineTab} ${classes.meInlineTab_active}`
                      : classes.meInlineTab
                  }
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        )}
      </div>

      <div className={classes.head__toolbar}>
        <nav className={classes.navbarDesktop} aria-label="Основная навигация">
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
        </nav>

        <button
          type="button"
          onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
          className={classes.themeToggle}
          aria-label="Переключить тему"
        >
          <span className={classes.themeToggle__thumb} />
        </button>

        <button
          type="button"
          className={`${classes.burger} ${menuOpen ? classes.burger_open : ''}`}
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
          aria-controls="site-nav-drawer"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className={classes.burgerLine} />
          <span className={classes.burgerLine} />
          <span className={classes.burgerLine} />
        </button>
      </div>

      {mobileOverlay}
    </section>
  );
}
