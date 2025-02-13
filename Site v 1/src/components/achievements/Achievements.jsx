
export default function Achievements () {
  
  return (
    <>

      <section className="section">
    
          <h2 className="section__title">Achievements</h2>
          <span className="section__subtitle">достижения</span>
          <div className="container">

          </div>
        <div className="container text-center px-6 ">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4">
              <div className="card bg-base-100 w-96  shadow-sm">
                <figure className="px-10 pt-10">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body   items-center text-center">
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
            </div>
            <div className="col-span-4">
              <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-2xl">
                    Engineer
                  </h2>
                  <p>
                    A card component has a figure, a body
                    part, and inside body there are title
                    and actions parts
                  </p>
                  <div className="card-actions">
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button
                      className="btn btn-success"
                      onClick={() =>
                        document
                          .getElementById("my_modal_2")
                          .showModal()
                      }
                    >
                      open modal
                    </button>
                    <dialog
                      id="my_modal_2"
                      className="modal"
                    >
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">
                          Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!
                          Hello!
                          Hello!
                          v

                          Hello!
                          Hello!
                          v
                          v
                          v
                          vv

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
            </div>
            <div className="col-span-4">
              <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-2xl">
                    Trevalers
                  </h2>
                  <p>
                    A card component has a figure, a body
                    part, and inside body there are title
                    and actions parts
                  </p>
                  <div className="card-actions">
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button
                      className="btn btn-success"
                      onClick={() =>
                        document
                          .getElementById("my_modal_3")
                          .showModal()
                      }
                    >
                      open modal
                    </button>
                    <dialog
                      id="my_modal_3"
                      className="modal"
                    >
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">
                        A card component has a figure, a body
                    part, and inside body there are title
                    and actions partsA card component has a figure, a body
                    part, and inside body there are title
                    and actions partsA card component has a figure, a body
                    part, and inside body there are title
                    and actions partsA card component has a figure, a body
                    part, and inside body there are title
                    and actions partsA card component has a figure, a body
                    part, and inside body there are title
                    and actions parts
                        </h3>
                        <p className="py-4">
                        Press ESC key or click the button
                        below to close
                        </p>
                        <div className="modal-action">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-success ">
                              Close
                            </button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
