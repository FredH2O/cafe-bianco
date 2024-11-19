import { Link } from "react-router-dom";
import logo from "../../../src/assets/images/cafe-bianco-logo.png";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-absolute">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={logo}
              className="navbar-brand-image img-fluid"
              alt="Barista Cafe Template"
            />
            Bianco
          </Link>

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
                <Link className="nav-link click-scroll" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link click-scroll" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link click-scroll" to="/menu">
                  Menu
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link click-scroll" to="/reviews">
                  Reviews
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link click-scroll" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            <div className="ms-lg-3">
              <Link
                to="/reservation"
                className="btn custom-btn custom-border-btn"
                href="reservation.html"
              >
                Reservation
                <i className="bi-arrow-up-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
