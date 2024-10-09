import React, { useEffect, useRef } from "react";
import Navbar from "../../Navbar";
import HeroSection from "./HeroSection";
import WavePattrn from "./WavePattrn";
import AboutUs from "./AboutUs";
import OurServices from "./OurServices";
import HowItWorks from "./HowItWorks";
import BestSitters from "./BestSitters";
import TestMonials from "./TestMonials";
import FaqSection from "./FaqSection";
import FooterWavePattrn from "./FooterWavePattrn";
import Footer from "../../Footer";

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

function LandingPage() {
  // const onlyref = useRef([]); // Ref to store multiple elements

  // useEffect(() => {
  //   // Trigger the animation when component mounts
  //   animateOnly();
  //   window.scrollTo(0, 0);
  // }, []);

  // const animateOnly = () => {
  //   const elements = document.querySelectorAll(".scroll-to-view"); // Replace with your actual class name

  //   elements.forEach((onlyItem) => {
  //     // Set initial styles
  //     const anim = gsap.fromTo(
  //       onlyItem,
  //       { autoAlpha: 0, y: 50 },
  //       { duration: 1, autoAlpha: 1, y: 0 }
  //     );

  //     // Create ScrollTrigger animation
  //     ScrollTrigger.create({
  //       trigger: onlyItem,
  //       start: "top 90%", // Trigger when the top of the element is at 90% of the viewport height
  //       end: "bottom 10%", // End when the bottom of the element is at 10% of the viewport height
  //       scrub: 0.7, // Smoothly transition based on scroll
  //       onload: () => {
  //         gsap.to(onlyItem, {
  //           opacity: 1,
  //           visibility: "visible",
  //           duration: 1.5,
  //           animation: anim,
  //           ease: "power2.out",
  //         });
  //       },
  //       onEnter: () => {
  //         gsap.to(onlyItem, {
  //           opacity: 1,
  //           visibility: "visible",
  //           duration: 2,
  //           ease: "power2.out",
  //         });
  //       },
  //       onLeave: () => {
  //         gsap.to(onlyItem, {
  //           opacity: 0,
  //           visibility: "hidden",
  //           duration: 1.5,
  //           ease: "power2.out",
  //         });
  //       },
  //       onEnterBack: () => {
  //         gsap.to(onlyItem, {
  //           opacity: 1,
  //           visibility: "visible",
  //           duration: 1.5,
  //           ease: "power2.out",
  //         });
  //       },
  //       onLeaveBack: () => {
  //         gsap.to(onlyItem, {
  //           opacity: 0,
  //           visibility: "hidden",
  //           duration: 1.5,
  //           ease: "power2.out",
  //         });
  //       },
  //     });
  //   });
  // };

  return (
    <div>
      <Navbar />
      <HeroSection />
      <WavePattrn />
      <AboutUs />
      <OurServices />
      <HowItWorks />
      <BestSitters />
      <TestMonials />
      <FaqSection />
      <FooterWavePattrn />
      <Footer />
    </div>
  );
}

export default LandingPage;
