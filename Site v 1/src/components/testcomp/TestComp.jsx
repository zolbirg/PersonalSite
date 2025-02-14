import "./testcomp.css";

export default function TestComp() {
  return (
    <><section className="section">
        <div className="container">
                <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative justify-center w-full">
                <div className="card bg-base-100 w-96  shadow-sm text-center">
                <figure className="px-10 pt-10">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body   items-center">
                  <h2 className="card-title text-2xl">
                    Developer
                  </h2>
                  <p>
                    A card component has a figure, a body
                    part, and inside body there are title
                    and actions parts
                  </p>
                  <div className="card-actions">
                    <button
                      className="btn btn-success "
                      onClick={() =>
                        document
                          .getElementById("my_modal_1")
                          .showModal()
                      }
                    >
                      open modal
                    </button>
                    <dialog
                      id="my_modal_1"
                      className="modal"
                    >
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">
                          Hello!
                        </h3>
                        <p className="py-4">
                          Press ESC key or click the button
                          below to close
                        </p>
                        <div className="modal-action">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-success">
                              Close
                            </button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>
                </div>
              </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative justify-center w-full">
                <div className="card bg-base-100 w-96  shadow-sm text-center">
                <figure className="px-10 pt-10">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body   items-center">
                  <h2 className="card-title text-2xl">
                    Developer
                  </h2>
                  <p>
                    A card component has a figure, a body
                    part, and inside body there are title
                    and actions parts
                  </p>
                  <div className="card-actions">
                    <button
                      className="btn btn-success "
                      onClick={() =>
                        document
                          .getElementById("my_modal_1")
                          .showModal()
                      }
                    >
                      open modal
                    </button>
                    <dialog
                      id="my_modal_1"
                      className="modal"
                    >
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">
                          Hello!
                        </h3>
                        <p className="py-4">
                          Press ESC key or click the button
                          below to close
                        </p>
                        <div className="modal-action">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-success">
                              Close
                            </button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>
                </div>
              </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative justify-center w-full">
                <div className="card bg-base-100 w-96  shadow-sm text-center">
                <figure className="px-10 pt-10">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body   items-center">
                  <h2 className="card-title text-2xl">
                    Developer
                  </h2>
                  <p>
                    A card component has a figure, a body
                    part, and inside body there are title
                    and actions parts
                  </p>
                  <div className="card-actions">
                    <button
                      className="btn btn-success "
                      onClick={() =>
                        document
                          .getElementById("my_modal_1")
                          .showModal()
                      }
                    >
                      open modal
                    </button>
                    <dialog
                      id="my_modal_1"
                      className="modal"
                    >
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">
                          Hello!
                        </h3>
                        <p className="py-4">
                          Press ESC key or click the button
                          below to close
                        </p>
                        <div className="modal-action">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-success">
                              Close
                            </button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>
                </div>
              </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative  justify-center w-full">
                <div className="card bg-base-100 w-96  shadow-sm text-center">
                <figure className="px-10 pt-10">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body   items-center">
                  <h2 className="card-title text-2xl">
                    Developer
                  </h2>
                  <p>
                    A card component has a figure, a body
                    part, and inside body there are title
                    and actions parts
                  </p>
                  <div className="card-actions">
                    <button
                      className="btn btn-success "
                      onClick={() =>
                        document
                          .getElementById("my_modal_1")
                          .showModal()
                      }
                    >
                      open modal
                    </button>
                    <dialog
                      id="my_modal_1"
                      className="modal"
                    >
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">
                          Hello!
                        </h3>
                        <p className="py-4">
                          Press ESC key or click the button
                          below to close
                        </p>
                        <div className="modal-action">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-success">
                              Close
                            </button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>
                </div>
              </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                </div>
        </div>
    </section>
    </>
  );
}
