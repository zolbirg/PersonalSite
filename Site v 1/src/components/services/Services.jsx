import './services.css'

export default function Services (){

    const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

    return(
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">Достижения</span>
        <div className="services__container container grid">
            {/*==================== SERVICES 1 ====================*/}
            <div className="services__content">
            <div>
                {/* <i className="uil uil-analytics skills__icon" /> */}
                <h3 className="services__title">
                Data Analyst
                <br />
                </h3>
            </div>
            <span className="button button--flex button--small button--link services__button">
                View more
                {/* <i className="uil uil-arrow-right button__icon" /> */}
            </span>
            <div className="services__modal">
                <div className="services__modal-content">
                <h4 className="services__modal-title">
                    Data Analyst <br />
                </h4>
                <i className="uil uil-times services__modal-close" />
                <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                    {/* <i className="uil uil-check-circle services__modal-icon" /> */}
                    <p>I analize data systems.</p>
                    </li>
                    <li className="services__modal-service">
                    {/* <i className="uil uil-check-circle services__modal-icon" /> */}
                    <p>Automating information retrieval.</p>
                    </li>
                    <li className="services__modal-service">
                    {/* <i className="uil uil-check-circle services__modal-icon" /> */}
                    <p>Systematically applying statistical and logical techniques.</p>
                    </li>
                    <li className="services__modal-service">
                    {/* <i className="uil uil-check-circle services__modal-icon" /> */}
                    <p>
                        Visualizing graphs, charts and preparing reports and dashboards.
                    </p>
                    </li>
                </ul>
                </div>
            </div>
            </div>
            {/*==================== SERVICES 2 ====================*/}
            <div className="services__content">
            <div>
                {/* <i className="uil uil-money-bill skills__icon" /> */}
                <h3 className="services__title">
                Banker
                <br />{" "}
                </h3>
            </div>
            <span className="button button--flex button--small button--link services__button">
                View more
                {/* <i className="uil uil-arrow-right button__icon" /> */}
            </span>
            <div className="services__modal">
                <div className="services__modal-content">
                <h4 className="services__modal-title">
                    Banker
                    <br />
                </h4>
                {/* <i className="uil uil-times services__modal-close" /> */}
                <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                    {/* <i className="uil uil-check-circle services__modal-icon" /> */}
                    <p>
                        Assiting both personal and commercial clients with financial
                        questions and needs.
                    </p>
                    </li>
                    <li className="services__modal-service">
                    {/* <i className="uil uil-check-circle services__modal-icon" /> */}
                    <p>Maintain customer acoounts and help resolve disputes.</p>
                    </li>
                    <li className="services__modal-service">
                    {/* <i className="uil uil-check-circle services__modal-icon" /> */}
                    <p>
                        Refer customers to loan officers or other financial specialist.
                    </p>
                    </li>
                    <li className="services__modal-service">
                    {/* <i className="uil uil-check-circle services__modal-icon" /> */}
                    <p>Systematically applying statistical and logical techniques.</p>
                    </li>
                </ul>
                </div>
            </div>
            </div>
            {/*==================== SERVICES 3 ====================*/}
            <div className="services__content">
            <div>
                {/* <i className="uil uil-arrow services__icon" /> */}
                <h3 className="services__title">
                Web Developer
                <br />
                </h3>
            </div>
            <span className="button button--flex button--small button--link services__button">
                View more
                {/* <i className="uil uil-arrow-right button__icon" /> */}
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
                    {/* <i className="uil uil-check-circle services__modal-icon" /> */}
                    <p>I develop the user interface.</p>
                    </li>
                    <li className="services__modal-service">
                    {/* <i className="uil uil-check-circle services__modal-icon" /> */}
                    <p>Webpage development.</p>
                    </li>
                    <li className="services__modal-service">
                    {/* <i className="uil uil-check-circle services__modal-icon" /> */}
                    <p>I create Ux element interactions.</p>
                    </li>
                    <li className="services__modal-service">
                    {/* <i className="uil uil-check-circle services__modal-icon" /> */}
                    <p>Well trained in WordPress.</p>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
     </section>


    )
}