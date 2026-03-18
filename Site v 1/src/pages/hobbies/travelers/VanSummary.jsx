import classes from './travelers.module.scss';
import { TRAVEL_IMAGES, FALLBACK_IMAGE } from './travelImages.js';
import { calcTravelDuration } from './travelDuration.js';

function VanPhoto({ src, alt }) {
  const handleError = (e) => {
    e.target.onerror = null;
    e.target.src = FALLBACK_IMAGE;
  };
  return (
    <div className={classes.vanPhoto}>
      <img
        src={src}
        alt={alt}
        className={classes.vanPhotoImg}
        onError={handleError}
      />
    </div>
  );
}

export default function VanSummary({ days } = {}) {
  const fallback = calcTravelDuration();
  const safeDays = days ?? fallback.days;

  return (
    <section className="section">
      <div className="container">
        <div className={classes.vanGrid}>
          <div>
            <h2 className={classes.vanTitle}>
              Автодом, который я построил сам
            </h2>
            <p className={classes.vanText}>
              Машина — Ford Transit. Из пустого фургона он превратился в компактную
              квартиру: спальное место, кухня, автономное питание, рабочая зона.
              Все решения рождались из реальных сценариев жизни и удалённой работы
              в дороге.
            </p>
            <p className={classes.vanText}>
              За несколько лет маршрут и быт не раз менялись, но идея оставалась
              одной: дом, который может уехать почти куда угодно и при этом
              остаётся удобным местом, где хочется жить.
            </p>
            <dl className={classes.vanFacts}>
              <div className={classes.vanFact}>
                <dt className={classes.vanFactDt}>Машина</dt>
                <dd className={classes.vanFactDd}>Ford Transit</dd>
              </div>
              <div className={classes.vanFact}>
                <dt className={classes.vanFactDt}>Дней в дороге</dt>
                <dd className={classes.vanFactDd}>{safeDays}</dd>
              </div>
              <div className={classes.vanFact}>
                <dt className={classes.vanFactDt}>Страны</dt>
                <dd className={classes.vanFactDd}>≈15</dd>
              </div>
            </dl>
          </div>
          <div className={classes.vanPhotos}>
            <VanPhoto src={TRAVEL_IMAGES.vanExterior} alt="Автодом снаружи" />
            <VanPhoto src={TRAVEL_IMAGES.vanInterior} alt="Интерьер автодома" />
          </div>
        </div>
      </div>
    </section>
  );
}
