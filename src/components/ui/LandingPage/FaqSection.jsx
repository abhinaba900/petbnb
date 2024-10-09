import React from "react";
import "../../css/FaqSection.css";
import FaqContainer from "../../../pages/faq/FaqContainer";

function FaqSection({}) {
  return (
    <section className="faq-section-wrapper container-fluid scroll-to-view">
      <p
        className="section-heading"
        // data-aos="fade-left"
        // data-aos-offset="0"
        // data-aos-easing="ease-in-sine"
        // data-aos-duration="1400"
      >
        Frequently asked questions
      </p>
      <h2
        className="section-title"
        // data-aos="fade-right"
        // data-aos-offset="0"
        // data-aos-easing="ease-in-sine"
        // data-aos-duration="1400"
      >
        Everything You Need to Know
      </h2>
      <FaqContainer />
    </section>
  );
}

export default FaqSection;
