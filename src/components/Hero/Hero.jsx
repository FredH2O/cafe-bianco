import Slider from "./Slider";

function Hero() {
  return (
    <section
      className="hero-section d-flex justify-content-center align-items-center"
      id="section_1"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 mx-auto">
            <em className="small-text">Welcome to</em>

            <h1>Café Bianco</h1>

            <p className="text-white mb-4 pb-lg-2">
              your <em>favourite</em> coffee <em>chillax'</em> destination!
            </p>

            <a
              className="btn custom-btn custom-border-btn smoothscroll me-3"
              href="#section_2"
            >
              Our Story
            </a>

            <a
              className="btn custom-btn smoothscroll me-2 mb-2"
              href="#section_3"
            >
              <strong>Check Menu</strong>
            </a>
          </div>
        </div>
      </div>
      <div className="hero-slides">
        <Slider />
      </div>
    </section>
  );
}

export default Hero;
