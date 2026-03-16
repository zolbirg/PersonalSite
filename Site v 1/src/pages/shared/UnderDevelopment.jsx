import { Link } from 'react-router-dom';
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import classes from './underDevelopment.module.scss';

const DEFAULT_DESCRIPTION = 'Скоро здесь появится контент.';

export default function UnderDevelopment({ title, description = DEFAULT_DESCRIPTION }) {
  return (
    <section className={classes.wrapper}>
      <div className="container">
        <div className={classes.block}>
          <HiOutlineWrenchScrewdriver className={classes.icon} aria-hidden />
          <h1 className={classes.title}>{title}</h1>
          <p className={classes.description}>{description}</p>
          <Link to="/" className={classes.link}>
            На главную
          </Link>
        </div>
      </div>
    </section>
  );
}
