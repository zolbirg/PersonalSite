import './contact.css';


export default function Contact () {

    return(
        
  <section className="contact section" id="contact">
    <h2 className="section__title">Contact me</h2>
    <span className="section__subtitle">Get in touch</span>
    <div className="contact__container container grid">
      <div>
        <div className="contact__information">
          {/* <i className="uil uil-phone-alt contact__icon" /> */}
          <div>
            <h3 className="contact__title">Call me</h3>
            <span className="contatc__subtitle">(+7) 7777777</span>
          </div>
        </div>
        <div className="contact__information">
          {/* <i className="uil uil-envelope contact__icon" /> */}
          <div>
            <h3 className="contact__title">E-mail</h3>
            <span className="contatc__subtitle">Kaninroman@mail.ru</span>
          </div>
        </div>
        <div className="contact__information">
          {/* <i className="uil uil-map-marker contact__icon" /> */}
          <div>
            <h3 className="contact__title">Location</h3>
            <span className="contatc__subtitle">Russia, Saint Peterburg </span>
          </div>
        </div>
      </div>
      <form action="" className="contact__form grid">
        <div className="contact__inputs grid">
          <div className="contact__content">
            <label htmlFor="" className="contact__label">
              Name
            </label>
            <input type="text" className="contact__input" />
          </div>
          <div className="contact__content">
            <label htmlFor="" className="contact__label">
              E-mail
            </label>
            <input type="email" className="contact__input" />
          </div>
        </div>
        <div className="contact__content">
          <label htmlFor="" className="contact__label">
            Subject
          </label>
          <input type="text" className="contact__input" />
        </div>
        <div className="contact__content">
          <label htmlFor="" className="contact__label">
            Description
          </label>
          <textarea
            name=""
            id=""
            cols={0}
            rows={7}
            className="contact__input"
            defaultValue={""}
          />
        </div>
        <div>
          <a href="#" className="button button--flex">
            Send message
            <i className="uil uil-message button__icon" />
          </a>
        </div>
      </form>
    </div>
  </section>


    )
};