import reviews from "./CustomersReviews.json";
import _ from "lodash";
import ReactRating from "react-rating";

// Lodash library used here

export default function Customers() {
  const randomReview = _.shuffle(reviews);

  return (
    <>
      {randomReview.map((customer, index) => (
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
                  src={`${process.env.PUBLIC_URL}/${customer.img}`}
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
                    {
                      <ReactRating
                        initialRating={customer.star}
                        readonly
                        emptySymbol={<i className="bi-star"></i>}
                        fullSymbol={<i className="bi bi-star-fill"></i>}
                        placeholderSymbol={<i className="bi bi-star-half"></i>}
                      />
                    }
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
