import classes from "./services.module.css";
// import Button from "../../assets/components/button/Button";
// import Modal from "../../assets/components/Modal/Modal";

export default function Services() {
  return (
    <section
      className={`${classes.section__main} section `}
      id="services"
    >
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">цели</span>
      <div
        className={`${classes.services__container} container `}
      >
        {/*==================== SERVICES 1 ====================*/}
        <div className="flex w-full flex-col lg:flex-row">
  <div className="card bg-base-300 rounded-box grid h-180 grow place-items-center">
  <h1 className={classes.services__story}>STORY</h1>
  </div>
  <div className="divider lg:divider-horizontal"></div>
  <div className="card bg-base-300 rounded-box grid h-180 grow place-items-center max-w-120 ">
      <div>
        <p>In velit arcu posuere integer. Dolor sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus hac vel ante sit sed scelerisque praesent duis volutpat laoreet.

Nisl, sit molestie commodo congue. Etiam lectus risus in amet. Commodo molestie fames etiam aenean sed. Pellentesque et venenatis amet, tellus hac vel adipiscing sit. Placerat vitae nisl viverra faucibus tincidunt habitasse amet. Nunc, velit nunc, scelerisque imperdiet nunc.</p>
      </div>

  </div>
</div>
    
          {/* <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">
                Hello there
              </h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in.
                Quaerat fugiat ut assumenda excepturi
                exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <Button className="btn btn-primary">
                Get Started
              </Button>
            </div>
          </div> */}
        </div>
        
      
    </section>
  );
}
