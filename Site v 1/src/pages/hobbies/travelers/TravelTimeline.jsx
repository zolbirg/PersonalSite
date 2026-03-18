import classes from './travelers.module.scss';
import { FALLBACK_IMAGE } from './travelImages.js';
import { calcTravelDuration, pluralizeRu } from './travelDuration.js';

function StageCard({ stage }) {
  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src = FALLBACK_IMAGE;
  };
  return (
    <article id={stage.id} className={classes.stageCard}>
      <div className={classes.stageMeta}>
        {stage.years} · {stage.period}
      </div>
      <h3 className={classes.stageCardTitle}>{stage.title}</h3>
      <div className={classes.stageCountries}>
        {stage.countries.map((country) => (
          <span key={country} className={classes.stageCountry}>
            {country}
          </span>
        ))}
      </div>
      <p className={classes.stageSummary}>{stage.summary}</p>
      {stage.notes && (
        <p className={classes.stageNotes}>{stage.notes}</p>
      )}
      {stage.photos?.length > 0 && (
        <div className={classes.stagePhotos}>
          {stage.photos.map((photo) => (
            <div key={photo.id} className={classes.stagePhoto}>
              <img
                src={photo.src}
                alt={photo.alt}
                className={classes.stagePhotoImg}
                onError={handleImgError}
              />
            </div>
          ))}
        </div>
      )}
    </article>
  );
}

export default function TravelTimeline({ stages, years } = {}) {
  const safeYears = years ?? calcTravelDuration().years;

  return (
    <section id="travel-timeline" className="section">
      <div className="container">
        <header className={classes.timelineHeader}>
          <h2 className={classes.timelineTitle}>
            Маршрут за {safeYears} {pluralizeRu(safeYears, ['год', 'года', 'лет'])}
          </h2>
          <p className={classes.timelineIntro}>
            История путешествия удобно разбита на этапы. Каждый — это своя
            география, свой ритм жизни и свои уроки. Вместе они складываются в
            одну длинную петлю по Евразии.
          </p>
        </header>
        <div className={classes.timelineTrack}>
          <div className={classes.timelineLine} aria-hidden />
          <div className={classes.timelineList}>
            {stages.map((stage, index) => (
              <div key={stage.id} className={classes.timelineItem}>
                <div className={classes.timelineDot} aria-hidden />
                <StageCard stage={stage} />
                {index === stages.length - 1 && (
                  <div className={classes.timelineFooter}>
                    Финальная точка — Санкт‑Петербург. Но путешествие как образ
                    жизни на этом не заканчивается.
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
