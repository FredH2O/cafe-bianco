import Slider from "./Slider";
import "./Hero.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Hero() {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();

    setClick(true);

    setTimeout(() => {
      navigate("/menu");
    }, 2000);
  }

  function handleAnimationEnd() {
    setClick(false);
  }

  return (
    <section
      className="hero-section d-flex justify-content-center align-items-center"
      id="section_1"
    >
      <div className="hero-content">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 mx-auto">
            <em className="small-text">Welcome to</em>
            <h1>Café Bianco</h1>
            <p className="text-white mb-4 pb-lg-2">
              your <em>favourite</em> coffee <em>chillax'</em> destination!
            </p>
            <Link
              to="/about"
              className="btn custom-btn custom-border-btn smoothscroll me-3"
              href="#section_2"
            >
              Our Story
            </Link>
            <Link
              to="/menu"
              onClick={handleClick}
              onAnimationEnd={handleAnimationEnd}
              className={`animate__animated ${
                click ? "animate__hinge" : ""
              } btn custom-btn smoothscroll me-2 mb-2`}
              href="#section_3"
            >
              <strong>Check Menu</strong>
            </Link>
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
