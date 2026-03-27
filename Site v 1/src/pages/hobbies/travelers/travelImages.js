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
  hero: '/images/travel/common/hero.png',
  vanExterior: '/images/travel/common/van-exterior.png',
  vanInterior: '/images/travel/common/van-interior.png',
  mountainsCaucasus: '/images/travel/caucasus/mountains-caucasus.png',
  coastTurkey: '/images/travel/turkey-cyprus/coast-turkey.png',
  balkanRoad: '/images/travel/balkans/balkan-road.png',
  mountainLake: '/images/travel/balkans/mountain-lake.png',
  winterCoast: '/images/travel/russia/winter-coast.jpg',
  highMountains: '/images/travel/central-asia/pamir-pass.png',
  desertRoad: '/images/travel/central-asia/pamir-road-truck.png',
  roadMountains: '/images/travel/central-asia/road-mountains.jpg',
  highway: '/images/travel/russia/highway.jpg',
  mountainsRussia: '/images/travel/russia/mountains-russia.jpg',
  nightMountains: '/images/travel/caucasus/night-mountains.jpg',
  balkanMountains: '/images/travel/balkans/balkan-mountains.jpg',
  lakeKyrgyz: '/images/travel/central-asia/lake-kyrgyz.jpg',
};

export const FALLBACK_IMAGE =
  'https://placehold.co/800x600/2a332a/8e958e?text=Фото';
