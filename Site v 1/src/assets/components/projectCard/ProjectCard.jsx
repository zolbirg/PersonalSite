import Button from '../button/Button';
import classes from './projectCard.module.scss';
import { Link } from 'react-router-dom';

export default function ProjectCard({ srcImg, titleName, description,srcLink }) {
    return (
        <>
            <div className={classes.project_card}>
                <div className={classes.project_img}>
                    <img src={srcImg} />
                </div>
                <div className={classes.project_info}>
                    <div className={classes.name__box}>
                        <h2 className={classes.name}>{titleName}</h2>
                    </div>
                </div>
                <div className={classes.description}>
                    <p>{description}</p>
                    <Button className='button'>
                        <Link to={srcLink}>Show more</Link>
                    </Button>
                </div>
            </div>
        </>
    );
}
