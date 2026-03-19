

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
  text: "Более 2 лет собираю интерфейсы на React: от лендингов до небольших SPA. Слежу за скоростью загрузки, читаемостью кода и удобством для пользователя.",
  contentType: ["React/Vite", "Redux Toolkit", "UI‑анимации"],
  backgroundImage: CARD_IMAGES.developer,
};

export const Engineer = {
  cardId: "Engineer",
  title: "Инженерный бэкграунд",
  text: "Более 6 лет инженерного опыта и управления проектами. Привык мыслить системно, считать риски и доводить сложные задачи до результата.",
  contentType: ["проектирование", "управление", "процессы"],
  backgroundImage: CARD_IMAGES.engineer,
};

export const Travelers = {
  cardId: "Travelers",
  title: "Путешествия и автономность",
  text: "3 года жизни в автодоме, 15 стран и 120 000+ км. Умею работать удалённо, быстро адаптироваться и организовывать себя без внешнего контроля.",
  contentType: ["remote‑work", "самоорганизация", "опыт"],
  backgroundImage: CARD_IMAGES.travelers,
};
