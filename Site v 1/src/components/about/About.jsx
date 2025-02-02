import'./about.css'

 import photo from '../../assets/img/photo.jpg'


export default function About(){


    return(
         <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            {/* <span className="section__subtitle">My Introduction</span> */}
            <div className="about__container container ">
                <img src={photo} alt="" className="about__img" />
                <div className="about__data">
                <p className="about__description">
                    Пердприниматель более 4 бизнесов в различных направвлениях.
                    своими руками построил Автодом и уехал в путешествие проехав 15 стран 
                    120 т.км и 3 года в пути.
                    сейчвс являюсть Frontaend разработчиком
                </p>
                <div className="about__info">
                    <div>
                    <span className="about__info-title">10+</span>
                    <span className="about__info-name">
                        лет <br /> управления 
                    </span>
                    </div>
                    <div>
                    <span className="about__info-title">03+</span>
                    <span className="about__info-name">
                        лет <br /> путешествий
                    </span>
                    </div>
                    <div>
                    <span className="about__info-title">02+</span>
                    <span className="about__info-name">
                        лет
                        <br />
                        Програмист
                    </span>
                    </div>
                </div>
                <div className="about__buttons">
                    <a download="#" href="#" className="button">
                    Download CV.pdf
            
                    </a>
                </div>
                </div>
            </div>
        </section>
      
    )
}