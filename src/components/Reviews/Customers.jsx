export default function Customers() {
  return (
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
  );
}
