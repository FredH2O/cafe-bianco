function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12 me-auto">
            <em className="text-white d-block mb-4">Where to find us?</em>

            <strong className="text-white">
              <i className="bi-geo-alt me-2"></i>
              123, Example St, Dublin, D01 1234
            </strong>

            <ul className="social-icon mt-4">
              <li className="social-icon-item">
                <a
                  href="https://www.facebook.com/"
                  className="social-icon-link bi-facebook"
                  target="_blank"
                ></a>
              </li>

              <li className="social-icon-item">
                <a
                  href="https://x.com/home"
                  target="_blank"
                  className="social-icon-link bi-twitter-x"
                ></a>
              </li>

              <li className="social-icon-item">
                <a
                  href="https://www.whatsapp.com/"
                  target="_blank"
                  className="social-icon-link bi-whatsapp"
                ></a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-12 mt-4 mb-3 mt-lg-0 mb-lg-0">
            <em className="text-white d-block mb-4">Contact</em>

            <p className="d-flex mb-1">
              <strong className="me-2">Phone:</strong>
              <a href="" className="site-footer-link">
                (01) 234 4567
              </a>
            </p>

            <p className="d-flex">
              <strong className="me-2">Email:</strong>

              <a href="mailto:info@yourgmail.com" className="site-footer-link">
                hello@bianco.ie
              </a>
            </p>
          </div>

          <div className="col-lg-5 col-12">
            <em className="text-white d-block mb-4">Opening Hours.</em>

            <ul className="opening-hours-list">
              <li className="d-flex">
                Monday - Friday
                <span className="underline"></span>
                <strong>7am - 6pm</strong>
              </li>

              <li className="d-flex">
                Saturday
                <span className="underline"></span>
                <strong>9am - 3pm</strong>
              </li>

              <li className="d-flex">
                Sunday
                <span className="underline"></span>
                <strong>9am - 2pm</strong>
              </li>
            </ul>
          </div>

          <div className="col-lg-8 col-12 mt-4">
            <p className="copyright-text mb-0">
              Copyrights ©
              <a
                rel="sponsored"
                href="https://github.com/FredH2O"
                target="_blank"
              >
                FredH2O
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
