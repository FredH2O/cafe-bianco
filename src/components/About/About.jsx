export default function About() {
  return (
    <section className="about-section section-padding" id="section_2">
      <div className="section-overlay"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="ratio ratio-1x1">
              <video
                autoplay=""
                loop=""
                muted=""
                className="custom-video"
                poster=""
              >
                <source
                  src="videos/pexels-mike-jones-9046237.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              <div className="about-video-info d-flex flex-column">
                <h4 className="mt-auto">We Started Since 1992.</h4>

                <h4>Best Cafe in Dublin.</h4>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-12 mt-4 mt-lg-0 mx-auto">
            <em className="text-white">Ola!</em>

            <h2 className="text-white mb-3">Café Bianco</h2>

            <p className="text-white">
              The café had been in the town for as long as anyone could
              remember, and it had become a beloved institution among the
              locals.
            </p>

            <p className="text-white">
              The café was run by a friendly and hospitable couple, Mr. and Mrs.
              Johnson. Barista Cafe is free Bootstrap 5 HTML layout provided by{" "}
              <a rel="nofollow" href="https://www.tooplate.com" target="_blank">
                Tooplate
              </a>
              .
            </p>

            <a
              href="#barista-team"
              className="smoothscroll btn custom-btn custom-border-btn mt-3 mb-4"
            >
              Meet Baristas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
