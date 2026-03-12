import { motion } from 'framer-motion';
import classes from "./skillsComponent.module.scss";
import { IoIosAirplane } from "react-icons/io";
import { TbCamper } from "react-icons/tb";
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
            <h3>
              Более 120т.км на машине и еще больше самолетом
            </h3>
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
              <span>---</span>
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
          <p>
            15 странии и бла бла бла
            <br />
            вствить флаги стран
          </p>
        </div>
      </div>
    </>
  );
}
