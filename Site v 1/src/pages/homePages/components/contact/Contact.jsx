import { motion } from 'framer-motion';
import "./contact.css";

import { FaInstagram, FaVk } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import { FaGithub, FaTelegram, FaLocationDot, FaLink } from "react-icons/fa6";
import { MdAlternateEmail, MdEmail, MdCall } from "react-icons/md";
import ScrollReveal from '../../../../assets/components/animations/ScrollReveal.jsx';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Contact() {
  return (
    <section className="section" id="contact">
      <ScrollReveal direction="up">
        <h2 className="section__title">Contact</h2>
      </ScrollReveal>

      <div className="container">
        <motion.div
          className="contact__block"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div className="contact__information" variants={itemVariants}>
            <FaLocationDot className="contact__icon" />
            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">Saint-Petersburg, Russia</span>
            </div>
          </motion.div>

          <motion.div className="contact__information" variants={itemVariants}>
            <FaLink className="contact__icon" />
            <div>
              <h3 className="contact__title">Format</h3>
              <span className="contact__subtitle">
                Открыт к full‑time, part‑time и проектной работе. Лучше всего писать в Telegram или на почту.
              </span>
            </div>
          </motion.div>

          <motion.div className="contact__information" variants={itemVariants}>
            <MdEmail className="contact__icon" />
            <div>
              <h3 className="contact__title">E-mail</h3>
              <span className="contact__subtitle">Kaninroman@mail.ru</span>
            </div>
          </motion.div>

          <motion.div className="contact__information" variants={itemVariants}>
            <MdCall className="contact__icon" />
            <div>
              <h3 className="contact__title">Call me</h3>
              <span className="contact__subtitle">(+7) 951 676-53-35</span>
            </div>
          </motion.div>

          <motion.div className="contact__information" variants={itemVariants}>
            <FaLink className="contact__icon" />
            <div>
              <h3 className="contact__title">Link</h3>
              <span>
                <ul className="social__link">
                  <li><a href="https://t.me/zolbirg"><FaTelegram /></a></li>
                  <li><a href="https://vk.com/zolbirg"><FaVk /></a></li>
                  <li><a href="mailto:kaninroman@mail.ru"><MdAlternateEmail /></a></li>
                  <li><a href="https://github.com/zolbirg"><FaGithub /></a></li>
                  <li><a href="https://www.codewars.com/users/Zolbirg"><SiCodewars /></a></li>
                </ul>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
