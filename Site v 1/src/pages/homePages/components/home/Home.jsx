import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import classes from './home.module.scss';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import {
  SOCIAL_LINKS_CONTACT,
  SOCIAL_LINKS_NETWORKS,
} from '../../../../constants/socialLinks.jsx';

const TEXTS = ['E N G I N E E R', 'WEB DEVELOPER', 'T R A V E L E R S'];

const TITLE = 'KANIN ROMAN';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055 } },
};

const charVariants = {
  hidden:  { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.3 } },
};

const fadeUp = (delay) => ({
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } },
});

const socialItemVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const socialContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 1.4 } },
};

export default function Home() {
  const [index, setIndex] = useState(0);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((i) => i + 1), 3000);
    return () => clearInterval(intervalId);
  }, []);

  const titleChars = TITLE.split('').map((char, i) => (
    <motion.span
      key={i}
      variants={shouldReduce ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : charVariants}
      style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : undefined }}
    >
      {char}
    </motion.span>
  ));

  return (
    <section className={`${classes.hero__section} section`} id="home">
      <div className="container">
        <div className={classes.hero__content}>
          <motion.h1
            variants={shouldReduce ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } } : containerVariants}
            initial="hidden"
            animate="visible"
          >
            {titleChars}
          </motion.h1>

          <motion.h2
            variants={fadeUp(shouldReduce ? 0.2 : 0.75)}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              key={index % TEXTS.length}
              initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              {TEXTS[index % TEXTS.length]}
            </motion.span>
          </motion.h2>

          <motion.p
            variants={fadeUp(shouldReduce ? 0.3 : 1.0)}
            initial="hidden"
            animate="visible"
          >
            Инженер и frontend‑разработчик.
            <br />
            Помогаю переводить идеи в быстрые и понятные веб‑приложения.
          </motion.p>

          <motion.div
            className={classes.hero__cta}
            variants={fadeUp(shouldReduce ? 0.4 : 1.15)}
            initial="hidden"
            animate="visible"
          >
            <a href="#portfolio" className={classes.hero__btnPrimary}>Смотреть проекты</a>
            <a href="#contact" className={classes.hero__btnGhost}>Связаться</a>
          </motion.div>

          <motion.ul
            className={`${classes.social__link} ${classes.socialRow}`}
            variants={socialContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {SOCIAL_LINKS_CONTACT.map(({ href, Icon, ariaLabel }) => (
              <motion.li
                key={href}
                variants={socialItemVariants}
                whileHover={{ scale: 1.25, rotate: 8 }}
                transition={{ type: 'spring', stiffness: 400, damping: 12 }}
              >
                <a href={href} aria-label={ariaLabel}>
                  <Icon />
                </a>
              </motion.li>
            ))}
            <motion.li
              className={classes.socialDivider}
              variants={socialItemVariants}
              aria-hidden
            >
              <span className={classes.socialDividerBar} />
            </motion.li>
            {SOCIAL_LINKS_NETWORKS.map(({ href, Icon, ariaLabel }) => (
              <motion.li
                key={href}
                variants={socialItemVariants}
                whileHover={{ scale: 1.25, rotate: 8 }}
                transition={{ type: 'spring', stiffness: 400, damping: 12 }}
              >
                <a href={href} aria-label={ariaLabel}>
                  <Icon />
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      <div className={classes.down__arrow}>
        <a data-scroll="" href="#about" aria-label="Прокрутить к разделу About">
          <DotLottieReact
            src="https://lottie.host/3c10e1d6-dc45-46b3-be7f-dcf149686794/n7M1q0mnR5.lottie"
            loop
            autoplay
            className={classes.scroll__lottie}
          />
        </a>
      </div>
    </section>
  );
}
