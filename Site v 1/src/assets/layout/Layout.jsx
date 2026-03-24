import { Outlet } from 'react-router-dom';
import NavBar from '../components/navBar/NavBar';
import Footer from '../components/footer/Footer';
import ScrollToTopButton from '../components/scrollToTopButton/ScrollToTopButton';
import classes from './layout.module.scss';

export default function Layout() {
    return (
        <div className={classes.pageRoot}>
            <NavBar />
            <main className={classes.main}>
                <Outlet />
            </main>
            <Footer />
            <ScrollToTopButton />
        </div>
    );
}
