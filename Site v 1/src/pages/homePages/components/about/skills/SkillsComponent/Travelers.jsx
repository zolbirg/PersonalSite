import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import classes from "./skillsComponent.module.scss";
import { IoIosAirplane } from "react-icons/io";
import { TbCamper, TbMap2 } from "react-icons/tb";
import ProgressBar from "../../../../../../assets/components/progressBar/ProgressBar";

const iconVariants = {
  hidden:  { opacity: 0, scale: 0.6 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
};

export default function Travelers() {
  return (
    <>
      <div className={`${classes.skills__list} grid`}>
        <div>
          <div className={classes.skills__list}>
            <motion.div
              className={classes.skills__logo_fa}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ staggerChildren: 0.12 }}
            >
              <motion.span
                variants={iconVariants}
                whileHover={{ scale: 1.35, color: 'var(--color-accent)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 12 }}
              >
                <TbCamper />
              </motion.span>
              <motion.span
                variants={iconVariants}
                whileHover={{ scale: 1.35, color: 'var(--color-accent)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 12 }}
                aria-hidden
              >
                <TbMap2 />
              </motion.span>
              <motion.span
                variants={iconVariants}
                whileHover={{ scale: 1.35, color: 'var(--color-accent)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 12 }}
              >
                <IoIosAirplane />
              </motion.span>
            </motion.div>
          </div>
          <ProgressBar percent={100} />
        </div>
        <div>
          <p className={classes.skills__travelersDescription}>
            За три года в дороге я выстроил устойчивую систему удаленной работы: планирование задач, приоритизация и дисциплина даже в постоянной смене локаций.
            Такой ритм развил стрессоустойчивость, гибкость в принятии решений и навык быстро включаться в новые условия без потери качества результата.
          </p>
          <div className={classes.skills__statsBadges} role="list" aria-label="Статистика путешествий">
            <span className={classes.skills__statsBadge} role="listitem">15 стран</span>
            <span className={classes.skills__statsBadge} role="listitem">120 т.км</span>
            <span className={classes.skills__statsBadge} role="listitem">3 года путешествий</span>
          </div>
          <div className={classes.skillsFlags} role="list" aria-label="Страны маршрута">
            {[
              { code: 'ru', name: 'Россия' },
              { code: 'ge', name: 'Грузия' },
              { code: 'tr', name: 'Турция' },
              { code: 'cy', name: 'Северный Кипр' },
              { code: 'bg', name: 'Болгария' },
              { code: 'rs', name: 'Сербия' },
              { code: 'me', name: 'Черногория' },
              { code: 'ba', name: 'Босния' },
              { code: 'kz', name: 'Казахстан' },
              { code: 'kg', name: 'Киргизия' },
              { code: 'uz', name: 'Узбекистан' },
              { code: 'tj', name: 'Таджикистан' },
            ].map(({ code, name }) => (
              <span key={code} className={classes.skillsFlag} role="listitem" title={name}>
                <img
                  src={`https://flagcdn.com/w40/${code}.png`}
                  srcSet={`https://flagcdn.com/w80/${code}.png 2x`}
                  width={20}
                  height={15}
                  alt=""
                  loading="lazy"
                  className={classes.skillsFlagImg}
                />
              </span>
            ))}
          </div>
          <Link to="/me?tab=travelers" className={classes.skills__link}>
            Подробнее о путешествиях →
          </Link>
        </div>
      </div>
    </>
  );
}
