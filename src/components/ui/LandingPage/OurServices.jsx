import React from "react";
import "../../css/OurServices.css";
import GridPages from "../../../pages/ourservices/GridPages";

function OurServices({}) {
  return (
    <div className="our-services container-fluid scroll-to-view">
      <div className="text-wrapper">
        <p
          className="section-heading"
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
        >
          Our Services
        </p>
        <h2
          className="section-title"
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
        >
          Our Pet Care Services
        </h2>
        <p
          className="section-paragraph"
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="pet-services-wrapper">
        <GridPages />
      </div>
    </div>
  );
}

export default OurServices;
