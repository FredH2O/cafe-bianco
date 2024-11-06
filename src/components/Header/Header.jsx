import logo from "../../../src/assets/images/cafe-bianco-logo.png";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a
            className="navbar-brand d-flex align-items-center"
            href="index.html"
          >
            <img
              src={logo}
              className="navbar-brand-image img-fluid"
              alt="Barista Cafe Template"
            />
            Bianco
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-lg-auto">
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_1">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_2">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_3">
                  Menu
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_4">
                  Reviews
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_5">
                  Contact
                </a>
              </li>
            </ul>

            <div className="ms-lg-3">
              <a
                className="btn custom-btn custom-border-btn"
                href="reservation.html"
              >
                Reservation
                <i className="bi-arrow-up-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
