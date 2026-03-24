import { useCallback, useEffect, useState } from 'react';
import classes from './scrollToTopButton.module.scss';

const SCROLL_THRESHOLD = 280;

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > SCROLL_THRESHOLD);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <button
            type="button"
            className={`${classes.root} ${visible ? classes.root_visible : ''}`}
            onClick={scrollToTop}
            aria-label="Прокрутить страницу наверх"
        >
            <svg
                className={classes.icon}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
            >
                <path
                    d="M12 5.5L5 12.5L6.41 13.91L12 8.32L17.59 13.91L19 12.5L12 5.5Z"
                    fill="currentColor"
                />
            </svg>
        </button>
    );
}
