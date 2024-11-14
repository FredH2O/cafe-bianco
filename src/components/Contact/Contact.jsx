import MapComponent from "./MapComponent";
import Form from "./Form.jsx";

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
            <Form />
          </div>

          <div className="col-lg-6 col-12 mt-5">
            <MapComponent />
          </div>
        </div>
      </div>
    </section>
  );
}
