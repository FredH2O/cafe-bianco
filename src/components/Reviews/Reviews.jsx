import Customers from "./Customers";

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
            <Customers />
          </div>
        </div>
      </div>
    </section>
  );
}
