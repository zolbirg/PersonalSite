import classes from './notFoundPage.module.scss'

import Button from '../assets/components/button/Button';

export default function NotFoundPage(){
    return (
      
        <div className={classes.block}>
          <h1>404</h1>
          <h2>Нету такой страницы, родной...</h2>
          <img src="/src/assets/img/ku.png" alt="" />
        </div>
    );
}


