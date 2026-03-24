import { motion } from 'framer-motion';
import classes from './achievements.module.scss';
import { Developer, Engineer, Travelers } from './dataAchievements';
import Card from '../../../../assets/components/card/Card';
import ScrollReveal from '../../../../assets/components/animations/ScrollReveal.jsx';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Achievements() {
  return (
    <section className={`${classes.achievements__section} section`} id="my-way">
      <div className={`${classes.achievements__container} container sectionGlass`}>
        <h2 className={classes.achievements__title}>My Way</h2>
        <p className={classes.achievements__subtitle}>Три направления опыта: инженерия, разработка и путешествия.</p>
        <motion.div
          className={classes.achievements__block}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className={classes.achievements__card} variants={cardVariants}>
            <Card keys={Engineer.cardId} {...Engineer} linkTo="/me?tab=engineer" />
          </motion.div>
          <motion.div className={classes.achievements__card} variants={cardVariants}>
            <Card keys={Developer.cardId} {...Developer} linkTo="/me?tab=developer" />
          </motion.div>
          <motion.div className={classes.achievements__card} variants={cardVariants}>
            <Card keys={Travelers.cardId} {...Travelers} linkTo="/me?tab=travelers" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
