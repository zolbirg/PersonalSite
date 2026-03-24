import { Link } from 'react-router-dom';
import { SOCIAL_LINKS_CONTACT, SOCIAL_LINKS_NETWORKS } from '../../../constants/socialLinks.jsx';
import classes from './footer.module.scss';

const FOOTER_NAV = [
  { label: 'Home', to: '/' },
  { label: 'Me', to: '/me?tab=developer' },
  { label: 'Project', to: '/Project' },
  { label: 'Contact', to: '/#contact' },
];

const year = new Date().getFullYear();

function isExternalHttp(href) {
  return href.startsWith('http://') || href.startsWith('https://');
}

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={`container ${classes.inner}`}>
        <p className={classes.copy}>© {year} Kanin Roman</p>

        <nav className={classes.nav} aria-label="Быстрые ссылки">
          <ul className={classes.navList}>
            {FOOTER_NAV.map(({ label, to }) => (
              <li key={to}>
                <Link className={classes.navLink} to={to}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={classes.socialRow}>
          <ul className={classes.socialGroup}>
            {SOCIAL_LINKS_CONTACT.map(({ href, Icon, ariaLabel }) => (
              <li key={href}>
                <a
                  className={classes.socialLink}
                  href={href}
                  {...(isExternalHttp(href)
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  aria-label={ariaLabel}
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
          <div className={classes.socialDivider} role="separator" aria-hidden="true" />
          <ul className={classes.socialGroup}>
            {SOCIAL_LINKS_NETWORKS.map(({ href, Icon, ariaLabel }) => (
              <li key={href}>
                <a
                  className={classes.socialLink}
                  href={href}
                  {...(isExternalHttp(href)
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  aria-label={ariaLabel}
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
