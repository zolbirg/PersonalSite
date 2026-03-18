import { Link } from 'react-router-dom';
import classes from './travelers.module.scss';
import { calcTravelDuration, pluralizeRu } from './travelDuration.js';

export default function ReflectionSection({ years } = {}) {
  const safeYears = years ?? calcTravelDuration().years;

  return (
    <section className={`section ${classes.reflectionWrap}`}>
      <div className="container">
        <div className={classes.reflectionBlock}>
          <h2 className={classes.reflectionTitle}>
            Что дали эти {safeYears} {pluralizeRu(safeYears, ['год', 'года', 'лет'])}
          </h2>
          <p className={classes.reflectionText}>
            Жизнь в автодоме — это не только про красивые виды и свободу. Это
            ещё и про дисциплину, планирование и умение договариваться с собой,
            когда твой дом постоянно меняет адрес.
          </p>
          <p className={classes.reflectionText}>
            За эти годы я научился жить и работать в очень разных условиях: от
            зимовки в Сочи до высокогорных дорог Памира. Автодом стал нормальным
            рабочим местом, а маршрут — способом выстраивать долгие задачи и
            смотреть на них с расстояния в сотни километров.
          </p>
          <p className={classes.reflectionText}>
            Эта страница — не полный путевой дневник, а скорее карта главных
            узлов маршрута. Если хочется нырнуть глубже в детали, могу отдельно
            рассказать про конкретные страны, участки пути или техническую
            сторону автодома.
          </p>
          <p className={classes.reflectionMuted}>
            Если тебе откликается такой формат жизни и работы — можно обсудить
            это лично.
          </p>
          <Link to="/#contact" className={classes.reflectionLink}>
            Перейти к контактам
          </Link>
        </div>
      </div>
    </section>
  );
}
