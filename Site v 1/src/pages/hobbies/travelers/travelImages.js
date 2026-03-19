/**
 * Временные изображения для страницы путешествий.
 * Все URL — рабочие Unsplash (проверенный формат). При ошибке загрузки подставляется fallback.
 */
const W = (width = 800) => (id) =>
  `https://images.unsplash.com/photo-${id}?w=${width}&q=80&fit=crop`;

const w800 = W(800);
const w1200 = W(1200);

// Проверенные Unsplash ID (формат: timestamp-hash)
export const TRAVEL_IMAGES = {
  hero: '/images/travel/hero.png',
  vanExterior: '/images/travel/van-exterior.png',
  vanInterior: '/images/travel/van-interior.png',
  mountainsCaucasus: w800('1519904988953-9c424351e41f'),
  coastTurkey: w800('1527004013197-933c4bb611af'),
  balkanRoad: w800('1569336415962-a4bd9f69cd83'),
  mountainLake: w800('1476514525535-07fb3b4ae5f1'),
  winterCoast: w800('1491002056526-fcf25a6dd8b8'),
  highMountains: w800('1464822759023-fed622ff2c3b'),
  desertRoad: w800('1509316785399-9d6378e1b7ef'),
  roadMountains: w800('1506905925346-21bda4d32df4'),
  highway: w800('1569336415962-a4bd9f69cd83'),
  mountainsRussia: w800('1519681393784-d120267933ba'),
  nightMountains: w800('1506905925346-21bda4d32df4'),
  balkanMountains: w800('1605649487212-47bdab064df7'),
  lakeKyrgyz: w800('1476514525535-07fb3b4ae5f1'),
};

export const FALLBACK_IMAGE =
  'https://placehold.co/800x600/2a332a/8e958e?text=Фото';
