import ScrollReveal from "../../../../assets/components/animations/ScrollReveal.jsx";
import classes from "./highlights.module.scss";

const SLOGAN = "От идеи до реализации — без лишнего шума.";

/** Статичная схема «экран / макет» — без Lottie и без частиц. */
function InterfaceFigure() {
  return (
    <svg
      className={classes.highlights__figureSvg}
      viewBox="0 0 320 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hlStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(44, 218, 160, 0.85)" />
          <stop offset="100%" stopColor="rgba(44, 218, 160, 0.2)" />
        </linearGradient>
        <linearGradient id="hlFill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(44, 218, 160, 0.12)" />
          <stop offset="100%" stopColor="rgba(44, 218, 160, 0.02)" />
        </linearGradient>
      </defs>
      <rect
        x="18"
        y="28"
        width="284"
        height="144"
        rx="14"
        fill="url(#hlFill)"
        stroke="url(#hlStroke)"
        strokeWidth="1.25"
      />
      <line x1="18" y1="52" x2="302" y2="52" stroke="rgba(44, 218, 160, 0.22)" strokeWidth="1" />
      <circle cx="36" cy="40" r="4" fill="rgba(44, 218, 160, 0.45)" />
      <circle cx="52" cy="40" r="4" fill="rgba(44, 218, 160, 0.28)" />
      <circle cx="68" cy="40" r="4" fill="rgba(44, 218, 160, 0.16)" />
      <rect x="36" y="68" width="120" height="8" rx="3" fill="rgba(44, 218, 160, 0.35)" />
      <rect x="36" y="86" width="200" height="6" rx="2" fill="rgba(44, 218, 160, 0.18)" />
      <rect x="36" y="98" width="160" height="6" rx="2" fill="rgba(44, 218, 160, 0.12)" />
      <rect x="36" y="118" width="248" height="40" rx="6" fill="rgba(20, 22, 22, 0.45)" stroke="rgba(44, 218, 160, 0.15)" strokeWidth="1" />
      <rect x="48" y="130" width="72" height="4" rx="1" fill="rgba(44, 218, 160, 0.25)" />
      <rect x="48" y="140" width="96" height="4" rx="1" fill="rgba(44, 218, 160, 0.14)" />
    </svg>
  );
}

export default function Highlights() {
  return (
    <section
      className={`${classes.highlights__section} section`}
      aria-label="Визуальный акцент"
    >
      <div className={`${classes.highlights__container} container sectionGlass`}>
        <div className={classes.highlights__frame}>
          <div className={classes.highlights__diagonal} aria-hidden="true" />

          <div className={classes.highlights__content}>
            <ScrollReveal direction="left" className={classes.highlights__copy}>
              <blockquote className={classes.highlights__quote}>
                <span className={classes.highlights__accent} aria-hidden="true" />
                <p className={classes.highlights__slogan}>{SLOGAN}</p>
              </blockquote>
            </ScrollReveal>

            <div className={classes.highlights__figure}>
              <InterfaceFigure />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
