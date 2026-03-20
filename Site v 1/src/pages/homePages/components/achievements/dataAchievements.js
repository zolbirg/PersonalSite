

/** Фоны карточек: тематические изображения под смысл блока (можно заменить на локальные из /public) */
const CARD_IMAGES = {
  developer:
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
  engineer:
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  travelers:
    "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&q=80",
};

export const Developer = {
  cardId: "Developer",
  title: "Frontend‑разработка",
  text: "Собираю интерфейсы на React уже больше двух лет — от лендингов до компактных SPA. Держу в фокусе скорость, чистоту кода и то, чтобы продуктом было приятно пользоваться.",
  contentType: ["React/Vite", "Redux Toolkit", "UI‑анимации"],
  backgroundImage: CARD_IMAGES.developer,
};

export const Engineer = {
  cardId: "Engineer",
  title: "Инженерный бэкграунд",
  text: "Шесть с лишним лет инженерии и проектного управления: вижу систему целиком, заранее прикидываю риски и довожу сложные задачи до конкретного результата.",
  contentType: ["проектирование", "управление", "процессы"],
  backgroundImage: CARD_IMAGES.engineer,
};

export const Travelers = {
  cardId: "Travelers",
  title: "Путешествия и автономность",
  text: "Три года в автодоме, пятнадцать стран и свыше 120 тысяч километров по дороге. Работаю удалённо, быстро встраиваюсь в новое и держу ритм без лишнего контроля со стороны.",
  contentType: ["remote‑work", "самоорганизация", "опыт"],
  backgroundImage: CARD_IMAGES.travelers,
};
