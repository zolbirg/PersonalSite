import { motion } from 'framer-motion';
import "./contact.css";

import { FaVk } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import { FaGithub, FaTelegram, FaLocationDot, FaBriefcase, FaShareNodes } from "react-icons/fa6";
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

const EMAIL = 'kaninroman@mail.ru';
const PHONE_DISPLAY = '(+7) 951 676-53-35';
const PHONE_TEL = '+79516765335';

const socialLinks = [
  { href: 'https://t.me/zolbirg', label: 'Telegram', icon: FaTelegram, external: true },
  { href: 'https://vk.com/zolbirg', label: 'ВКонтакте', icon: FaVk, external: true },
  { href: `mailto:${EMAIL}`, label: 'Электронная почта', icon: MdAlternateEmail, external: false },
  { href: 'https://github.com/zolbirg', label: 'GitHub', icon: FaGithub, external: true },
  { href: 'https://www.codewars.com/users/Zolbirg', label: 'Codewars', icon: SiCodewars, external: true },
];

export default function Contact() {
  return (
    <section className="section" id="contact">
      <ScrollReveal direction="up">
        <h2 className="section__title">Contact</h2>
      </ScrollReveal>

      <div className="container">
        <div className="contact__panel sectionGlass">
          <motion.div
            className="contact__block"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div className="contact__information" variants={itemVariants}>
              <FaLocationDot className="contact__icon" aria-hidden />
              <div>
                <h3 className="contact__title">Location</h3>
                <span className="contact__subtitle">Saint-Petersburg, Russia</span>
              </div>
            </motion.div>

            <motion.div className="contact__information" variants={itemVariants}>
              <FaBriefcase className="contact__icon" aria-hidden />
              <div>
                <h3 className="contact__title">Format</h3>
                <span className="contact__subtitle">
                  Открыт к full‑time, part‑time и проектной работе. Лучше всего писать в Telegram или на почту.
                </span>
              </div>
            </motion.div>

            <motion.div className="contact__information" variants={itemVariants}>
              <MdEmail className="contact__icon" aria-hidden />
              <div>
                <h3 className="contact__title">E-mail</h3>
                <a className="contact__subtitle contact__link" href={`mailto:${EMAIL}`}>
                  Kaninroman@mail.ru
                </a>
              </div>
            </motion.div>

            <motion.div className="contact__information" variants={itemVariants}>
              <MdCall className="contact__icon" aria-hidden />
              <div>
                <h3 className="contact__title">Call me</h3>
                <a className="contact__subtitle contact__link" href={`tel:${PHONE_TEL}`}>
                  {PHONE_DISPLAY}
                </a>
              </div>
            </motion.div>

            <motion.div className="contact__information" variants={itemVariants}>
              <FaShareNodes className="contact__icon" aria-hidden />
              <div>
                <h3 className="contact__title">Social</h3>
                <nav className="social__nav" aria-label="Профили и мессенджеры">
                  <ul className="social__link">
                    {socialLinks.map(({ href, label, icon: Icon, external }) => (
                      <li key={href}>
                        <a
                          href={href}
                          aria-label={label}
                          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        >
                          <Icon aria-hidden />
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
