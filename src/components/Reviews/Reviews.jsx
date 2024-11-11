import Customer1 from "../../assets/images/reviews/customer1.png";
import Customer2 from "../../assets/images/reviews/customer2.png";
import Customer3 from "../../assets/images/reviews/customer3.png";
import Customer4 from "../../assets/images/reviews/customer4.png";

export default function Reviews() {
  return (
    <section
      className="reviews-section section-padding section-bg"
      id="section_4"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-12 text-center mb-4 pb-lg-2">
            <em className="text-white">Reviews by Customers</em>

            <h2 className="text-white">Testimonials</h2>
          </div>

          <div className="timeline">
            <div className="timeline-container timeline-container-left">
              <div className="timeline-content">
                <div className="reviews-block">
                  <div className="reviews-block-image-wrap d-flex align-items-center">
                    <img
                      src={Customer1}
                      className="reviews-block-image img-fluid"
                      alt=""
                    />

                    <div className="">
                      <h6 className="text-white mb-0">Sandra</h6>
                      <em className="text-white"> Customers</em>
                    </div>
                  </div>

                  <div className="reviews-block-info">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    <div className="d-flex border-top pt-3 mt-4">
                      <strong className="text-white">
                        4.5 <small className="ms-2">Rating</small>
                      </strong>

                      <div className="reviews-group ms-auto">
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-container timeline-container-right">
              <div className="timeline-content">
                <div className="reviews-block">
                  <div className="reviews-block-image-wrap d-flex align-items-center">
                    <img
                      src={Customer2}
                      className="reviews-block-image img-fluid"
                      alt=""
                    />

                    <div className="">
                      <h6 className="text-white mb-0">Don</h6>
                      <em className="text-white"> Customers</em>
                    </div>
                  </div>

                  <div className="reviews-block-info">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    <div className="d-flex border-top pt-3 mt-4">
                      <strong className="text-white">
                        4.5 <small className="ms-2">Rating</small>
                      </strong>

                      <div className="reviews-group ms-auto">
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-container timeline-container-left">
              <div className="timeline-content">
                <div className="reviews-block">
                  <div className="reviews-block-image-wrap d-flex align-items-center">
                    <img
                      src={Customer3}
                      className="reviews-block-image img-fluid"
                      alt=""
                    />

                    <div className="">
                      <h6 className="text-white mb-0">Olivia</h6>
                      <em className="text-white"> Customers</em>
                    </div>
                  </div>

                  <div className="reviews-block-info">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    <div className="d-flex border-top pt-3 mt-4">
                      <strong className="text-white">
                        4.5 <small className="ms-2">Rating</small>
                      </strong>

                      <div className="reviews-group ms-auto">
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-container timeline-container-right">
              <div className="timeline-content">
                <div className="reviews-block">
                  <div className="reviews-block-image-wrap d-flex align-items-center">
                    <img
                      src={Customer4}
                      className="reviews-block-image img-fluid"
                      alt=""
                    />

                    <div className="">
                      <h6 className="text-white mb-0">Don</h6>
                      <em className="text-white"> Customers</em>
                    </div>
                  </div>

                  <div className="reviews-block-info">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    <div className="d-flex border-top pt-3 mt-4">
                      <strong className="text-white">
                        4.5 <small className="ms-2">Rating</small>
                      </strong>

                      <div className="reviews-group ms-auto">
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star-fill"></i>
                        <i className="bi-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
