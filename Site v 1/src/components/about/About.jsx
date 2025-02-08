import classes from './about.module.css'
import photo from '../../assets/img/photo.jpg'

import Button from '../../assets/components/button/Button'

import { useState } from 'react'


export default function About(){

    const [contentDownload, setContentDownload] = useState(null);

    function handleClick(type){
        setContentDownload(type)
       
    }

    return(
         <section className="section" id="about">
            <h2 className="section__title">About Me</h2>
            {/* <span className="section__subtitle">My Introduction</span> */}
            <div className={`${classes.about__container} container `}>
            {/* <div className="about__container container "> */}
                <img src={photo} alt="" className={classes.about__img} />
                <div className={classes.about__data}>
                <p className={classes.about__description}>
                    Пердприниматель более 4 бизнесов в различных направвлениях.
                    своими руками построил Автодом и уехал в путешествие проехав 15 стран 
                    120 т.км и 3 года в пути.
                    сейчвс являюсть Frontaend разработчиком
                </p>
                <div className={classes.about__info}>
                    <div>
                    <span className={classes.about__info_title}>10+</span>
                    <span className={classes.about__info_name}>
                        лет <br /> управления 
                    </span>
                    </div>
                    <div>
                    <span className={classes.about__info_title}>03+</span>
                    <span className={classes.about__info_name}>
                        лет <br /> путешествий
                    </span>
                    </div>
                    <div>
                    <span className={classes.about__info_title}>02+</span>
                    <span className={classes.about__info_name}>
                        лет
                        <br />
                        Програмист
                    </span>
                    </div>
                </div>
                <div className={classes.about__buttons}>

                    <a download={contentDownload} href={contentDownload} >
                    <Button onClick={() => handleClick('#')}>Download CV.pdf</Button>

                    </a>
                    
                </div>
                </div>
            </div>
        </section>
      
    )
}