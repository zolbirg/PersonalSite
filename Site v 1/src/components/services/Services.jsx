import classes from "./services.module.css";
import Button from "../../assets/components/button/Button";
// import Modal from "../../assets/components/Modal/Modal";



export default function Services() {


  return (
    <section className="section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">Достижения</span>
      <div className={`${classes.services__container} container grid`}>
        {/*==================== SERVICES 1 ====================*/}
        <div className={classes.services__content}>
          <div>
            <h3 className={classes.services__title}>
              Data Analyst
              <br />
            </h3>
            <Button onClick={"#"}>View more</Button>
          </div>
          {/* <span className="button button--flex button--small button--link services__button">
            
          </span> */}
      
           {/* <div className="services__modal"> 
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                Data Analyst <br />
              </h4>
              <i className="uil uil-times services__modal-close" />
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <p>I analize data systems.</p>
                </li>
                <li className="services__modal-service">
                  <p>Automating information retrieval.</p>
                </li>
                <li className="services__modal-service">
                  <p>
                    Systematically applying statistical and
                    logical techniques.
                  </p>
                </li>
                <li className="services__modal-service">
                  <p>
                    Visualizing graphs, charts and preparing
                    reports and dashboards.
                  </p>
                </li>
              </ul>
            </div>
          </div>  */}
         </div>
        {/*==================== SERVICES 2 ====================*/}
        <div className={classes.services__content}>
          <div>
            <h3 className={classes.services__title}>
              Banker
              <br />{" "}
            </h3>
          </div>
          <span className="button button--flex button--small button--link services__button">
            <Button onClick={"#"}>View more</Button>
          </span>
          <div className="services__modal">
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                Banker
                <br />
              </h4>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <p>
                    Assiting both personal and commercial
                    clients with financial questions and
                    needs.
                  </p>
                </li>
                <li className="services__modal-service">
                  <p>
                    Maintain customer acoounts and help
                    resolve disputes.
                  </p>
                </li>
                <li className="services__modal-service">
                  <p>
                    Refer customers to loan officers or
                    other financial specialist.
                  </p>
                </li>
                <li className="services__modal-service">
                  <p>
                    Systematically applying statistical and
                    logical techniques.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*==================== SERVICES 3 ====================*/}
        <div className={classes.services__content}>
          <div>
            <h3 className={classes.services__title}>
              Web Developer
              <br />
            </h3>
          </div>
          <span className="button button--flex button--small button--link services__button">
            <Button onClick={"#"}>View more</Button>
          </span>
          <div className="services__modal">
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                Web Developer
                <br />
              </h4>
              <i className="uil uil-times services__modal-close" />
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <p>I develop the user interface.</p>
                </li>
                <li className="services__modal-service">
                  <p>Webpage development.</p>
                </li>
                <li className="services__modal-service">
                  <p>I create Ux element interactions.</p>
                </li>
                <li className="services__modal-service">
                  <p>Well trained in WordPress.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
