import { motion } from 'framer-motion';
import classes from "./skillsComponent.module.scss";
import { IoLogoNodejs } from "react-icons/io";
import { FaHtml5, FaCss3Alt, FaReact, FaSass, FaGitSquare } from "react-icons/fa";
import { SiTypescript, SiRedux, SiBootstrap, SiTailwindcss } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import ProgressComponent from "../../../../../../assets/components/progressComponent/ProgressComponent";

const iconContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const iconVariants = {
  hidden:  { opacity: 0, scale: 0.6 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
};

const ICONS = [
  <FaHtml5 />, <FaCss3Alt />, <IoLogoNodejs />, <SiTypescript />,
  <FaReact />, <FaSass />, <SiRedux />, <SiBootstrap />,
  <SiTailwindcss />, <VscVscode />, <FaGitSquare />,
];

export default function Developer() {
  return (
    <>
      <div className={`${classes.skills__list} grid`}>
        <ProgressComponent percent={80}>Html</ProgressComponent>
        <ProgressComponent percent={70}>Css</ProgressComponent>
        <ProgressComponent percent={60}>JavaScript</ProgressComponent>
        <ProgressComponent percent={40}>TypeScript</ProgressComponent>
        <ProgressComponent percent={50}>React</ProgressComponent>
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
