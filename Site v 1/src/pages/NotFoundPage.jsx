import classes from "./notFoundPage.module.scss";


export default function NotFoundPage() {
  return (
    <>
      <section className={classes.page_404}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className={classes.four_zero_four_bg}>
                  <h1 className="text-center ">404</h1>
                </div>
                <div className={classes.contant_box_404}>
                  <h3 className="h2">
                    Страница потерялся!
                  </h3>
                  <p>
                    Твоя кнопку жмякать / моя новую тебе искать.
                  </p>
                  <a href="/" className={classes.link_404}>
                    Go to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    
  );
}
