import { motion } from 'framer-motion';
import { useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import DeveloperPage from './DeveloperPage.jsx';
import EngineerPage from './EngineerPage.jsx';
import TravelersPage from './TravelersPage.jsx';
import { ME_TABBAR_VISIBILITY_EVENT } from './meProfileNavEvents.js';
import classes from './mePage.module.scss';

const VALID_TABS = ['engineer', 'developer', 'travelers'];
const DEFAULT_TAB = 'developer';

const TABS = [
  { id: 'engineer', label: 'Engineer' },
  { id: 'developer', label: 'Developer' },
  { id: 'travelers', label: 'Traveler' },
];

export default function MePage() {
  const tabBarRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');

  const tab = useMemo(() => {
    return VALID_TABS.includes(tabParam) ? tabParam : DEFAULT_TAB;
  }, [tabParam]);

  useEffect(() => {
    if (!tabParam || !VALID_TABS.includes(tabParam)) {
      setSearchParams({ tab: DEFAULT_TAB }, { replace: true });
    }
  }, [tabParam, setSearchParams]);

  useEffect(() => {
    const node = tabBarRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        window.dispatchEvent(
          new CustomEvent(ME_TABBAR_VISIBILITY_EVENT, {
            detail: { visible: entry.isIntersecting },
          }),
        );
      },
      { threshold: 0, rootMargin: '-52px 0px 0px 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const setTab = (next) => {
    setSearchParams({ tab: next });
    window.scrollTo(0, 0);
  };

  const activeClass = `${classes.tab} button button__active`;
  const idleClass = `${classes.tab} button`;

  return (
    <div className={classes.meRoot}>
      <div
        ref={tabBarRef}
        className={classes.tabBar}
        role="tablist"
        aria-label="Профиль"
      >
        {TABS.map(({ id, label }) => (
          <span key={id} className={classes.tabItem}>
            <button
              type="button"
              role="tab"
              aria-selected={tab === id}
              className={tab === id ? activeClass : idleClass}
              onClick={() => setTab(id)}
            >
              {label}
            </button>
            {tab === id && (
              <motion.span
                className={classes.tabIndicator}
                layoutId="me-tab-indicator"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </span>
        ))}
      </div>

      {tab === 'engineer' && <EngineerPage />}
      {tab === 'developer' && <DeveloperPage />}
      {tab === 'travelers' && <TravelersPage />}
    </div>
  );
}
