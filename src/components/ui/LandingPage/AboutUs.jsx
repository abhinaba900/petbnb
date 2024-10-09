import React from "react";
import "../../css/AboutUs.css";
import AboutUsIcon from "../../../assets/about us svg.png";
function AboutUs() {
  return (
    <div className="scroll-to-view">
      <section className="about-us">
        <div className="container-fluid">
          <div className="row w-100 h-full mx-auto">
            <div className="col-md-12 col-lg-6 col-xl-6 g-0 col-sm-12 w-md-100">
              <div
                className="banner-img-wrapper"
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
              >
                <div className="relative-imgs about-us-image-">
                  <img
                    loading="lazy"
                    src={AboutUsIcon}
                    alt=""
                    className="img-fluid m-auto d-block"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 col-xl-6 g-0 col-sm-12 d-flex align-items-center justify-content-center">
              <div
                className="content-heading-wrapper"
                data-aos="fade-left"
                data-aos-offset="0"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
              >
                <div className="banner-title-wrapper">
                  <p className="section-heading">About Us</p>
                  <h2 className="about-us-heading section-title">
                    Caring for Pets Like Family
                  </h2>
                  <p className="about-us-paragraph section-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div
                    data-aos="fade-in-up"
                    data-aos-offset="0"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000"
                  >
                    <button className="about-us-button navBtn button-hover btn-3d">
                      <span className="front">Learn More About Us</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
