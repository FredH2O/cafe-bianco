function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12 me-auto">
            <h4>
              <em className="text-white d-block mb-4">Where to find us?</em>
            </h4>

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
                  rel="noreferrer"
                  aria-label="Visit our facebook page!!"
                ></a>
              </li>

              <li className="social-icon-item">
                <a
                  href="https://x.com/home"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-link bi-twitter-x"
                  aria-label="Visit our x / twitter page!!"
                ></a>
              </li>

              <li className="social-icon-item">
                <a
                  href="https://www.whatsapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-link bi-whatsapp"
                  aria-label="Message us on Whatsapp!!"
                ></a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-12 mt-4 mb-3 mt-lg-0 mb-lg-0 d-flex flex-column align-items-center">
            <h4>
              <em className="text-white d-block mb-4">Contact</em>
            </h4>

            <p className="d-flex mb-1">
              <strong className="me-2">Phone:</strong>
              <a href="telephone" rel="noreferrer" className="site-footer-link">
                (01) 234 4567
              </a>
            </p>

            <p className="d-flex">
              <strong className="me-2">Email:</strong>
              <a
                href="mailto:info@yourgmail.com"
                rel="noreferrer"
                className="site-footer-link"
              >
                hello@bianco.ie
              </a>
            </p>
          </div>

          <div className="col-lg-5 col-12 d-flex flex-column align-items-center">
            <h4>
              <em className="text-white d-block mb-4">Opening Hours</em>
            </h4>

            <ul className="opening-hours-list">
              <li className="d-flex justify-content-between">
                Mon - Fri
                <strong>
                  <span className="ms-5">7:00 am - 6:00 pm</span>
                </strong>
              </li>
              <li className="d-flex justify-content-between">
                Saturday
                <strong>
                  <span className="ms-5">10:00 am - 6:00 pm</span>
                </strong>
              </li>
              <li className="d-flex justify-content-between">
                Sunday
                <strong>
                  <span className="ms-5">11:00 am - 3:00 pm</span>
                </strong>
              </li>
            </ul>
          </div>

          <div className="col-lg-12 col-12 mt-5 d-flex justify-content-center m-auto">
            <p className="copyright-text mb-0">
              Copyrights &copy;
              <a
                rel="noreferrer"
                href="https://github.com/FredH2O"
                target="_blank"
              >
                FredH2O
              </a>
              <i class="bi bi-github"></i>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
