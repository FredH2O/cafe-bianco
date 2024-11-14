import MapComponent from "./MapComponent";

export default function Contact() {
  return (
    <section className="contact-section section-padding" id="section_5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <em className="text-white">Say Hello</em>
            <h2 className="text-white mb-4 pb-lg-2">Contact</h2>
          </div>

          <div className="col-lg-6 col-12">
            <form
              action="#"
              method="post"
              className="custom-form contact-form"
              role="form"
            >
              <div className="row">
                <div className="col-lg-6 col-12">
                  <label for="name" className="form-label">
                    Name <sup className="text-danger">*</sup>
                  </label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Jackson"
                    required=""
                  />
                </div>

                <div className="col-lg-6 col-12">
                  <label for="email" className="form-label">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    pattern="[^ @]*@[^ @]*"
                    className="form-control"
                    placeholder="Jack@gmail.com"
                    required=""
                  />
                </div>

                <div className="col-12">
                  <label for="message" className="form-label">
                    How can we help?
                  </label>

                  <textarea
                    name="message"
                    rows="4"
                    className="form-control"
                    id="message"
                    placeholder="Message"
                    required=""
                  ></textarea>
                </div>
              </div>

              <div className="col-lg-5 col-12 mx-auto mt-3">
                <button type="submit" className="form-control">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="col-lg-6 col-12 mt-5">
            <MapComponent />
          </div>
        </div>
      </div>
    </section>
  );
}
