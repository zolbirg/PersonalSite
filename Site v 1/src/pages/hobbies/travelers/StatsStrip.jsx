import classes from './travelers.module.scss';

export default function StatsStrip({ stats }) {
  return (
    <section className="section">
      <div className="container">
        <div className={classes.statsGrid}>
          {stats.map((item) => (
            <div key={item.id} className={classes.statCard}>
              <div className={classes.statLabel}>{item.label}</div>
              <div className={classes.statValue}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
