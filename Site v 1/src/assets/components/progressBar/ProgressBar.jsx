import { motion } from 'framer-motion';
import classes from "./progressBar.module.scss";

export default function ProgressBar({ percent, children }) {
  return (
    <div className={classes.progress__container}>
      <motion.div
        className={classes.progress__bar}
        initial={{ width: '0%' }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </div>
  );
}
