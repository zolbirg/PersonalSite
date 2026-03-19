import { motion } from 'framer-motion';
import classes from "./skillsComponent.module.scss";
import { SiAutocad, SiCoreldraw, SiAdobephotoshop, SiAdobelightroom, SiFigma, SiBlender } from "react-icons/si";
import ProgressComponent from "../../../../../../assets/components/progressComponent/ProgressComponent";

const iconContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const iconVariants = {
  hidden:  { opacity: 0, scale: 0.6 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
};

const ICONS = [
  <SiAutocad />,
  <SiCoreldraw />,
  <SiAdobephotoshop />,
  <SiAdobelightroom />,
  <SiFigma />,
  <SiBlender />,
];

export default function Engineer() {
  return (
    <>
      <div className={`${classes.skills__list} grid`}>
        <ProgressComponent percent={80}>AutoCad</ProgressComponent>
        <ProgressComponent percent={90}>Kompas 3d</ProgressComponent>
        <ProgressComponent percent={80}>CorellDrow</ProgressComponent>
        <ProgressComponent percent={60}>PhotoShop</ProgressComponent>
      </div>

      <motion.div
        className={classes.skills__logo_fa}
        variants={iconContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {ICONS.map((icon, i) => (
          <motion.span
            key={i}
            variants={iconVariants}
            whileHover={{ scale: 1.35, color: 'var(--color-accent)' }}
            transition={{ type: 'spring', stiffness: 400, damping: 12 }}
          >
            {icon}
          </motion.span>
        ))}
      </motion.div>
    </>
  );
}
