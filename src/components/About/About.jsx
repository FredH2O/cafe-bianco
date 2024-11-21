import video from "../../assets/videos/video1.mp4";
import "./About.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick((e) => !e);
  }

  function handleAnimationEnd() {
    setClick(false);
  }

  return (
    <section className="about-section section-padding" id="section_2">
      <div className="section-overlay"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="ratio ratio-1x1">
              <video
                autoPlay
                loop
                muted
                className="custom-video"
                style={{ pointerEvents: "none" }}
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="about-video-info d-flex flex-column">
                <h4 className="mt-auto">Est. 1992</h4>

                <h4>Home of Dublin's Favourite Coffee</h4>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-12 mt-4 mt-lg-0 mx-auto">
            <em className="text-white">Ola!</em>

            <h2 className="text-white mb-3">Café Bianco</h2>

            <p className="text-white">
              Café Bianco has grown into a beloved community landmark, warmly
              welcoming locals and visitors alike.
            </p>

            <p className="text-white">
              The café is managed with dedication and care by Mr. and Mrs.
              McKeogh, who bring a personal touch to each guest's experience.
            </p>

            <Link
              to="/barista"
              href="#barista-team"
              onClick={handleClick}
              onAnimationEnd={handleAnimationEnd}
              className={`animate__animated ${
                click ? "animate__hinge" : ""
              } smoothscroll btn custom-btn custom-border-btn mt-3 mb-4 hover-shake`}
            >
              Meet Baristas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
