import classes from './travelers.module.scss';
import { TRAVEL_IMAGES, FALLBACK_IMAGE } from './travelImages.js';
import { calcTravelDuration, pluralizeRu } from './travelDuration.js';

export default function TravelersHero({ years } = {}) {
  const needsFallback = years == null;
  const fallback = needsFallback ? calcTravelDuration() : null;

  const safeYears = years ?? fallback.years;

  return (
    <section className={`section ${classes.hero}`}>
      <div className="container">
        <div className={classes.heroGrid}>
          <div>
            <p className={classes.heroBadge}>
              Vanlife
            </p>
            <h1 className={classes.heroTitle}>
              {safeYears} {pluralizeRu(safeYears, ['год', 'года', 'лет'])} жизни в&nbsp;автодоме
            </h1>
            <p className={classes.heroLead}>
              Несколько лет назад я своими руками построил автодом на базе Ford
              Transit 2009 года и уехал в длительное путешествие. Кавказ, Турция
              и Кипр, Балканы, Средняя Азия и Памирский тракт — дом на колёсах
              стал одновременно и жильём, и офисом, и способом смотреть мир.
            </p>
            <div className={classes.heroTags}>
              <span className={classes.heroTag}>≈15 стран</span>
              <span className={classes.heroTag}>120 000+ км пути</span>
              <span className={classes.heroTag}>Полноценная жизнь и работа в дороге</span>
            </div>
            <div className={classes.heroFlags} role="list" aria-label="Страны маршрута">
              {[
                { code: 'ru', name: 'Россия' },
                { code: 'ge', name: 'Грузия' },
                { code: 'tr', name: 'Турция' },
                { code: 'cy', name: 'Северный Кипр' },
                { code: 'bg', name: 'Болгария' },
                { code: 'rs', name: 'Сербия' },
                { code: 'me', name: 'Черногория' },
                { code: 'ba', name: 'Босния' },
                { code: 'kz', name: 'Казахстан' },
                { code: 'kg', name: 'Киргизия' },
                { code: 'uz', name: 'Узбекистан' },
                { code: 'tj', name: 'Таджикистан' },
              ].map(({ code, name }) => (
                <span key={code} className={classes.heroFlag} role="listitem" title={name}>
                  <img
                    src={`https://flagcdn.com/w40/${code}.png`}
                    srcSet={`https://flagcdn.com/w80/${code}.png 2x`}
                    width={20}
                    height={15}
                    alt=""
                    loading="lazy"
                    className={classes.heroFlagImg}
                  />
                </span>
              ))}
            </div>
          </div>
          <div className={classes.heroImageWrap}>
            <div className={classes.heroImage}>
              <img
                src={TRAVEL_IMAGES.hero}
                alt="Автодом в путешествии"
                className={classes.heroImageImg}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = FALLBACK_IMAGE;
                }}
              />
            </div>
            <div className={classes.heroOrb1} aria-hidden />
            <div className={classes.heroOrb2} aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
