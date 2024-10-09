import React, { useEffect } from "react";
import $ from "jquery";
import "../../components/css/FaqContainer.css";

function FaqContainer() {
  //   function valueGenerator() {
  //     const values = [1400, 1700, 2000, 2300, 2600];
  //     let index = 0;

  //     return function() {
  //         const value = values[index];
  //         index = (index + 1) % values.length;  // Reset after 3 iterations
  //         return value;
  //     };
  // }
  // const getNextValue = valueGenerator();

  useEffect(() => {
    // jQuery function to toggle accordion content
    $(".accordion-items").click(function () {
      const accordionItem = $(this); // Targeting the entire accordion item
      const accordionContent = accordionItem.find(".accordion-content");

      // If already open, close it
      if (accordionItem.hasClass("active-accordion")) {
        accordionContent.slideUp(300);
        accordionItem.removeClass("active-accordion");
      } else {
        // Close all other open items
        $(".accordion-content").slideUp(300);
        $(".accordion-items").removeClass("active-accordion");

        // Open the clicked item
        accordionContent.slideDown(300);
        accordionItem.addClass("active-accordion");
      }
    });
  }, []);

  const data = [
    {
      id: 1,
      title: "What is the universe?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      title: "What is dark matter?",
      content:
        "Dark matter is a form of matter that cannot be seen directly but can be inferred by its influence.",
    },
    {
      id: 3,
      title: "What is the Big Bang?",
      content:
        "The Big Bang is the event that marked the beginning of the universe, approximately 13.8 billion years ago.",
    },
    {
      id: 4,
      title: "What is dark energy?",
      content:
        "Dark energy is a form of energy that is believed to make up 68% of the total energy of the universe.",
    },
    {
      id: 5,
      title: "What is the cosmic horizon?",
      content:
        "The cosmic horizon is the farthest limit that can be seen from Earth due to the universe's expansion.",
    },
  ];

  return (
    <div className="accordion-container">
      {data.map((item, index) => (
        <div
          key={item?.id + index}
          className={`accordion-items`}
          // data-aos="fade-up"
          // data-aos-offset="0"
          // data-aos-easing="ease-in-sine"
          // data-aos-duration={getNextValue()}
        >
          <div className="accordion-title">
            <span>{item.title}</span>
            <span className="accordion-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.589 13.089C10.4327 13.2453 10.2208 13.333 9.99985 13.333C9.77888 13.333 9.56696 13.2453 9.41068 13.089L4.69652 8.37488C4.61693 8.29801 4.55344 8.20605 4.50977 8.10438C4.46609 8.00271 4.4431 7.89336 4.44214 7.78271C4.44118 7.67206 4.46226 7.56233 4.50417 7.45992C4.54607 7.3575 4.60795 7.26446 4.68619 7.18622C4.76443 7.10797 4.85748 7.04609 4.95989 7.00419C5.0623 6.96229 5.17204 6.94121 5.28269 6.94217C5.39333 6.94313 5.50268 6.96612 5.60435 7.00979C5.70603 7.05347 5.79798 7.11695 5.87485 7.19654L9.99985 11.3215L14.1248 7.19655C14.282 7.04475 14.4925 6.96075 14.711 6.96265C14.9295 6.96455 15.1385 7.05219 15.293 7.2067C15.4475 7.3612 15.5352 7.57021 15.5371 7.78871C15.539 8.00721 15.455 8.21771 15.3032 8.37488L10.589 13.089Z"
                  fill="#84898D"
                />
              </svg>
            </span>
          </div>
          <div className="accordion-content mt-2">{item.content}</div>
        </div>
      ))}
    </div>
  );
}

export default FaqContainer;
