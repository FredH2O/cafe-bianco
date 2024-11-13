import reviews from "./CustomersReviews.json";

export default function Customers() {
  return (
    <>
      {reviews.map((customer, index) => (
        <div
          className={`timeline-container ${
            index % 2 === 0
              ? "timeline-container-left"
              : "timeline-container-right"
          }`}
          key={index}
        >
          <div className="timeline-content">
            <div className="reviews-block">
              <div className="reviews-block-image-wrap d-flex align-items-center">
                <img
                  src={customer.img}
                  className="reviews-block-image img-fluid"
                  alt=""
                />

                <div className="">
                  <h6 className="text-white mb-0">{customer.name}</h6>
                  <em className="text-white">{customer.occupation}</em>
                </div>
              </div>

              <div className="reviews-block-info">
                <p>{customer.review}</p>

                <div className="d-flex border-top pt-3 mt-4">
                  <strong className="text-white">
                    {customer.star} <small className="ms-2">Rating</small>
                  </strong>

                  <div className="reviews-group ms-auto">
                    {Array.from({ length: 5 }, (_, i) => {
                      const currentRating = i + 1;
                      if (customer.star >= currentRating) {
                        return <i key={i} className="bi-star-fill"></i>;
                      }

                      if (customer.star >= currentRating - 0.5) {
                        return <i key={i} className="bi-star-half"></i>;
                      } else {
                        return <i key={i} className="bi-star"></i>;
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
