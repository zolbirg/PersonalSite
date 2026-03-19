import { useRef } from 'react';
import Button from '../button/Button';
import classes from './projectCard.module.scss';
import { Link } from 'react-router-dom';

export default function ProjectCard({ srcImg, titleName, description, srcLink }) {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        card.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 8}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
        if (cardRef.current) {
            cardRef.current.style.transform =
                'perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)';
        }
    };

    return (
        <div
            className={classes.project_card}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className={classes.project_img}>
                <img src={srcImg} alt={titleName} />
                <div className={classes.img__overlay} />
            </div>
            <div className={classes.project_info}>
                <div className={classes.name__box}>
                    <h2 className={classes.name}>{titleName}</h2>
                </div>
            </div>
            <div className={classes.description}>
                <p>{description}</p>
                <Button className='button'>
                    {srcLink.startsWith('http') ? (
                        <a href={srcLink} target="_blank" rel="noopener noreferrer">
                            Show more
                        </a>
                    ) : (
                        <Link to={srcLink}>Show more</Link>
                    )}
                </Button>
            </div>
        </div>
    );
}
