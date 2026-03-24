import { FaVk } from 'react-icons/fa';
import { FaGithub, FaTelegram } from 'react-icons/fa6';
import { MdAlternateEmail, MdCall } from 'react-icons/md';
import { SiCodewars } from 'react-icons/si';

/** Почта и телефон — слева от разделителя на главной и в футере */
export const SOCIAL_LINKS_CONTACT = [
  { href: 'mailto:kaninroman@mail.ru', Icon: MdAlternateEmail, ariaLabel: 'Электронная почта' },
  { href: 'tel:+79516765335', Icon: MdCall, ariaLabel: 'Телефон' },
];

/** Соцсети и профили — справа от разделителя */
export const SOCIAL_LINKS_NETWORKS = [
  { href: 'https://t.me/zolbirg', Icon: FaTelegram, ariaLabel: 'Telegram' },
  { href: 'https://vk.com/zolbirg', Icon: FaVk, ariaLabel: 'ВКонтакте' },
  { href: 'https://github.com/zolbirg', Icon: FaGithub, ariaLabel: 'GitHub' },
  { href: 'https://www.codewars.com/users/Zolbirg', Icon: SiCodewars, ariaLabel: 'Codewars' },
];

/** Плоский список: контакты, затем сети (для обратной совместимости) */
export const SOCIAL_LINKS = [...SOCIAL_LINKS_CONTACT, ...SOCIAL_LINKS_NETWORKS];
