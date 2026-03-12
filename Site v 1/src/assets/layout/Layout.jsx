import { Outlet } from 'react-router-dom';
import NavBar from '../components/navBar/NavBar';
import classes from './layout.module.scss';

export default function Layout() {
    return (
        <div className={classes.pageRoot}>
            <NavBar />
            <Outlet />
        </div>
    );
}
