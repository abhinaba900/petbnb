import React from "react";
import Image1 from "../../../assets/how it works main image.png";
import Steps from "../../../assets/how it works steps.png";
import "../../css/HowItWorks.css";

function HowItWorks({}) {
  return (
    <div className="scroll-to-view">
      <section className="how-it-works">
        <div className="container-fluid">
          <div className="row w-100 mx-auto">
            <div className="col-md-12 g-0 col-lg-6 col-xl-6 col-sm-12">
              <div className="form-heading-wrapper">
                <div className="title-wrapper">
                  <p
                    className="section-heading"
                    // data-aos="fade-right"
                    // data-aos-offset="0"
                    // data-aos-easing="ease-in-sine"
                    // data-aos-duration="1000"
                  >
                    How It Works
                  </p>
                  <h2
                    className="section-title"
                    // data-aos="fade-right"
                    // data-aos-offset="0"
                    // data-aos-easing="ease-in-sine"
                    // data-aos-duration="1000"
                  >
                    Our Simple, Safe Process for Ensuring the Best Pet Care
                  </h2>
                  <div className="steps-wrapper d-flex">
                    <img
                      loading="lazy"
                      src={Steps}
                      className="img-fluid steps-img"
                      alt="side steps"
                      // data-aos="fade-right"
                      // data-aos-offset="0"
                      // data-aos-easing="ease-in-sine"
                      // data-aos-duration="1400"
                    />
                    <div className="steps-container">
                      <div
                        className="steps"
                        // data-aos="fade-left"
                        // data-aos-offset="0"
                        // data-aos-easing="ease-in-sine"
                        // data-aos-duration="1400"
                      >
                        <div className="steps-text-wrapper">
                          <p className="steps-heading">
                            01. <span>Find a verified Host</span>
                          </p>
                          <p className="steps-paragraph">
                            Search and find pet sitters, boarders, and dog
                            walkers near you
                          </p>
                        </div>
                      </div>
                      <div
                        className="steps"
                        // data-aos="fade-left"
                        // data-aos-offset="0"
                        // data-aos-easing="ease-in-sine"
                        // data-aos-duration="1400"
                      >
                        <div className="steps-text-wrapper">
                          <p className="steps-heading">
                            02. <span>Book and Pay</span>
                          </p>
                          <p className="steps-paragraph">
                            Select the perfect professional for your pet's needs
                            and pay through our safe online system
                          </p>
                        </div>
                      </div>
                      <div
                        className="steps"
                        // data-aos="fade-left"
                        // data-aos-offset="0"
                        // data-aos-easing="ease-in-sine"
                        // data-aos-duration="1400"
                      >
                        <div className="steps-text-wrapper">
                          <p className="steps-heading">
                            03. <span>Peace of Mind</span>
                          </p>
                          <p className="steps-paragraph">
                            Relax while your pet enjoys premium care
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="book-now btn-3d navBtn button-hover"
                    // data-aos="fade-up"
                    // data-aos-offset="0"
                    // data-aos-easing="ease-in-sine"
                    // data-aos-duration="1400"
                  >
                    <span className="front button-hover">
                      Book a Pet Sitter Now
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-12 g-0 col-lg-6 col-xl-6 col-sm-12">
              <div className="how-it-works-right">
                <div className="how-it-works-right-wrapper">
                  <div
                    className="parent-img-wrapper"
                    // data-aos="fade-left"
                    // data-aos-offset="0"
                    // data-aos-easing="ease-in-sine"
                    // data-aos-duration="1500"
                  >
                    <img
                      loading="lazy"
                      src={Image1}
                      className="parent-image img-fluid"
                      alt="parent image"
                    />
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

export default HowItWorks;
