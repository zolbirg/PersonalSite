import ScrollReveal from '../../assets/components/animations/ScrollReveal.jsx';
import TravelersHero from './travelers/TravelersHero.jsx';
import VanSummary from './travelers/VanSummary.jsx';
import TravelTimeline from './travelers/TravelTimeline.jsx';
import RouteMapSection from './travelers/RouteMapSection.jsx';
import PhotoGallery from './travelers/PhotoGallery.jsx';
import StatsStrip from './travelers/StatsStrip.jsx';
import ReflectionSection from './travelers/ReflectionSection.jsx';
import classes from './travelers/travelers.module.scss';
import { TRAVEL_IMAGES } from './travelers/travelImages.js';
import { useTravelDuration } from './travelers/useTravelDuration.js';

const travelStages = [
  {
    id: 'stage-1',
    period: 'Старт путешествия',
    years: 'первые месяцы',
    title: 'Первый большой выезд: Кавказ и Турция',
    countries: ['Грузия', 'Турция', 'Северный Кипр'],
    summary:
      'После постройки автодома на базе Ford Transit 2009 года я отправился в первый большой выезд. Через Кавказ и Грузию вышел к Турции, а затем добрался до Северного Кипра. Это был тест и для дома, и для меня: бытовые мелочи, границы, первые серьёзные перевалы.',
    notes:
      'Обратный путь тоже прошёл через Турцию — уже с пониманием, где комфортно ночевать, как заправляться и как планировать день так, чтобы успевать и работать, и ехать.',
    photos: [
      { id: 's1-1', src: TRAVEL_IMAGES.mountainsCaucasus, alt: 'Горы Кавказа' },
      { id: 's1-2', src: TRAVEL_IMAGES.coastTurkey, alt: 'Стоянка у моря в Турции' },
    ],
  },
  {
    id: 'stage-2',
    period: 'дальше по Европе',
    years: 'первый год',
    title: 'Балканы: от Болгарии до Боснии',
    countries: ['Болгария', 'Сербия', 'Черногория', 'Босния и Герцеговина'],
    summary:
      'Следующим большим этапом стали Балканы. Я пересекал Болгарию, Сербию, Черногорию и Боснию, много времени проводил в горных регионах и на побережье. Маршрут получился петляющим, с постоянными остановками в маленьких городах и у диких парковок.',
    notes:
      'Обратно в Россию возвращался примерно тем же маршрутом, уже с обкатанными ночёвками и любимыми точками на карте.',
    photos: [
      { id: 's2-1', src: TRAVEL_IMAGES.balkanRoad, alt: 'Серпантин в горах Черногории' },
      { id: 's2-2', src: TRAVEL_IMAGES.mountainLake, alt: 'Горное озеро на Балканах' },
    ],
  },
  {
    id: 'stage-3',
    period: '1.5 года позже',
    years: 'примерно 1.5 года в пути',
    title: 'Возвращение и зимовка в Сочи',
    countries: ['Россия (Юг, Сочи)'],
    summary:
      'Через полтора года дороги я вернулся в Россию и впервые по‑настоящему «осел» — зимовал в Сочи. Автодом превратился в стабильный дом и рабочее место: здесь меньше километров, больше быта, настройки комфорта и экспериментов с автономностью.',
    notes:
      'Этот период показал, что дом на колёсах может быть не только про движение, но и про устойчивый ритм жизни в одном регионе.',
    photos: [
      { id: 's3-1', src: TRAVEL_IMAGES.winterCoast, alt: 'Зимний пейзаж у моря' },
    ],
  },
  {
    id: 'stage-4',
    period: 'большая экспедиция',
    years: 'следующее лето',
    title: 'Россия, Казахстан, Киргизия, Узбекистан, Таджикистан и Памирский тракт',
    countries: ['Россия', 'Казахстан', 'Киргизия', 'Узбекистан', 'Таджикистан'],
    summary:
      'Из Сочи маршрут пошёл дальше по России до Тюмени, затем к границе с Казахстаном. После Казахстана — Киргизия, Узбекистан и Таджикистан. Кульминацией стал проезд по Памирскому тракту — высокогорной дороге, где тестируется всё: мотор, подвеска, автономность и нервная система.',
    notes:
      'Через Памир мы вернулись обратно в Киргизию. Это самый «экспедиционный» отрезок маршрута — с затяжными перевалами, тонкой линией цивилизации и ощущением очень большой планеты.',
    photos: [
      { id: 's4-1', src: TRAVEL_IMAGES.highMountains, alt: 'Памирский тракт и высокие перевалы' },
      { id: 's4-2', src: TRAVEL_IMAGES.desertRoad, alt: 'Дорога через степи Казахстана' },
    ],
  },
  {
    id: 'stage-5',
    period: 'возвращение домой',
    years: 'финальный этап',
    title: 'Домой в Петербург через Челябинск',
    countries: ['Россия (Сибирь, Урал, Питер)'],
    summary:
      'Финальный участок пути — возвращение домой в Санкт‑Петербург через Челябинск и дальше по России. После Памира и Средней Азии российские трассы ощущались почти как «магистраль домой», но по дороге всё равно были остановки, встречи и новые места.',
    notes:
      'Это не финал истории, а точка с запятой. Просто одна большая петля по планете замкнулась в стартовой точке.',
    photos: [
      { id: 's5-1', src: TRAVEL_IMAGES.highway, alt: 'Трасса на Урале' },
    ],
  },
];

const galleryImages = [
  { id: 'g-1', stageId: 'stage-1', tag: 'Кавказ', src: TRAVEL_IMAGES.nightMountains, alt: 'Ночёвка в горах Кавказа' },
  { id: 'g-2', stageId: 'stage-1', tag: 'Турция', src: TRAVEL_IMAGES.coastTurkey, alt: 'Стоянка у моря в Турции' },
  { id: 'g-3', stageId: 'stage-2', tag: 'Балканы', src: TRAVEL_IMAGES.balkanMountains, alt: 'Узкая дорога в горах Балкан' },
  { id: 'g-4', stageId: 'stage-3', tag: 'Россия', src: TRAVEL_IMAGES.hero, alt: 'Автодом у моря' },
  { id: 'g-5', stageId: 'stage-4', tag: 'Средняя Азия', src: TRAVEL_IMAGES.roadMountains, alt: 'Высокогорная дорога Памира' },
  { id: 'g-6', stageId: 'stage-4', tag: 'Средняя Азия', src: TRAVEL_IMAGES.lakeKyrgyz, alt: 'Стоянка у озера в Киргизии' },
  { id: 'g-7', stageId: 'stage-5', tag: 'Россия', src: TRAVEL_IMAGES.mountainsRussia, alt: 'Трасса в горах России' },
];

export default function TravelersPageContent() {
  const { years, days } = useTravelDuration();

  const stats = [
    { id: 'st-1', label: 'Страны', value: '≈15' },
    { id: 'st-6', label: 'Регионов России', value: '40+' },
    { id: 'st-3', label: 'Пробег', value: '120 000+ км' },
    { id: 'st-2', label: 'Дни в автодоме', value: `${days.toLocaleString('ru-RU')}` },
    { id: 'st-4', label: 'Максимальная высота', value: 'Ак-Байтал — 4655 м' },
    { id: 'st-5', label: 'Морей и заливов', value: '10+' },
    { id: 'st-8', label: 'Перевалов', value: '40+' },
    { id: 'st-7', label: 'Историй', value: '100+' },
  ];

  return (
    <div className={classes.page}>
      <TravelersHero years={years} days={days} />
      <ScrollReveal direction="up" delay={0.1}>
        <VanSummary days={days} />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.1}>
        <TravelTimeline stages={travelStages} years={years} />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.1}>
        <RouteMapSection years={years} />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.1}>
        <PhotoGallery images={galleryImages} />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.1}>
        <StatsStrip stats={stats} />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.1}>
        <ReflectionSection years={years} />
      </ScrollReveal>
    </div>
  );
}

