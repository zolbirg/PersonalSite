import classes from './travelers.module.scss';
import { calcTravelDuration, pluralizeRu } from './travelDuration.js';

export default function RouteMapSection({ years } = {}) {
  const safeYears = years ?? calcTravelDuration().years;

  return (
    <section className="section">
      <div className="container">
        <div className={classes.mapBlock}>
          <header className={classes.mapHeader}>
            <div>
              <h2 className={classes.mapTitle}>Карта маршрута</h2>
              <p className={classes.mapSub}>
                Упрощённая схема пути: от России через Кавказ и Турцию, Балканы,
                Среднюю Азию и обратно в Петербург.
              </p>
            </div>
          </header>
          <div className={classes.mapFrame}>
            <img
              src="/images/travel/route-map.png"
              alt="Схематичная карта маршрута: Россия → Кавказ → Турция/Кипр → Балканы → Россия → Казахстан/Киргизия/Узбекистан/Таджикистан/Памир → обратно в Россию, Петербург"
              className={classes.mapImage}
            />
          </div>
          <footer className={classes.mapFooter}>
            Полный маршрут за {safeYears} {pluralizeRu(safeYears, ['год', 'года', 'лет'])}: десятки тысяч
            километров и десятки границ.
            Точные цифры можно добавить отдельно, когда они будут подсчитаны.
          </footer>
        </div>
      </div>
    </section>
  );
}
