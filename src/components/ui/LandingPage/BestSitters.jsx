import React from "react";
import "../../css/BestSitters.css";
import SwiperComponent from "../../../pages/SwiperComponent";
function BestSitters({}) {
  return (
    <div className="best-sitters scroll-to-view">
      <div className="container-fluid ">
        <p
          className="section-heading mb-2"
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
        >
          Our Best Sitters
        </p>
        <h2
          className="section-title mb-2"
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
        >
          Meet Our Top-Rated Pet Sitters
        </h2>
        <SwiperComponent type="best-sitters" />
      </div>
    </div>
  );
}

export default BestSitters;
