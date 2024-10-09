import React, { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "https://cdn.skypack.dev/gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FadeInOnScroll = () => {
  
  useLayoutEffect(() => {
    const boxes = gsap.utils.toArray(".scroll-to-view");

    boxes.forEach((box) => {
      console.log(box, "boxes in gsap");

      gsap.fromTo(
        box,
        { opacity: 0, y: 80 }, // Initial state
        {
          opacity: 1,
          y: 0, // Final state
          scrollTrigger: {
            trigger: box,
            start: "top center+=50%",
            end: "bottom center+=50%",
            scrub: true,
            markers: false, // Turn markers on for debugging if needed
          },
        }
      );
    });

    const refreshScrollTrigger = () => {
      setTimeout(() => {
        ScrollTrigger.refresh(); // Ensure ScrollTrigger refreshes after the layout
      }, 100); // You can adjust this delay
    };

    window.addEventListener("load", refreshScrollTrigger);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Clean up triggers
      window.removeEventListener("load", refreshScrollTrigger); // Clean up event listener
    };
  }, []);

  return null;
};

export default FadeInOnScroll;
