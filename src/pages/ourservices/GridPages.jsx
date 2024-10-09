import React from "react";
import DogBoarding from "../../assets/Dog Boarding.png";
import DogWalking from "../../assets/Dog Walking.png";
import DogGrooming from "../../assets/Pet Grooming.png";
import DogDayCare from "../../assets/Dog Day Care.png";

function GridPages() {
  const handleFocus = (event) => {
    event.currentTarget.style.border = "2px solid #4f006d";
  };

  const handleBlur = (event) => {
    event.currentTarget.style.border = "";
  };
  function valueGenerator() {
    const values = [500, 800, 1100, 1400];
    let index = 0;

    return function () {
      const value = values[index];
      index = (index + 1) % values.length; // Reset after 3 iterations
      return value;
    };
  }
  const getNextValue = valueGenerator();
  return (
    <>
      <div className="grid pr-3">
        <div className="row g-0 m-0 p-0 ">
          <div className="col-12 col-md-6 col-lg-3 mx-auto">
            <div
              className="service-card mx-auto"
              data-aos="zoom-in-up"
              data-aos-offset="0"
              data-aos-easing="ease-in-sine"
              data-aos-duration={getNextValue()}
            >
              <img
                loading="lazy"
                src={DogBoarding}
                alt="dog-boarding"
                className="img-fluid-background img-fluid"
              />
              <div
                className="service-card-heading-wrapper hover-arrow"
                tabIndex={0}
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                <p className="service-card-heading">Dog Boarding</p>
                <span className="service-card-icon arrow">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 3.75L14.25 9M14.25 9L9 14.25M14.25 9L3.75 9"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 padding-left mt-sm-4 mt-lg-0 mt-md-0   mx-auto">
            <div
              className="service-card m-auto"
              data-aos="zoom-in-up"
              data-aos-offset="0"
              data-aos-easing="ease-in-sine"
              data-aos-duration={getNextValue()}
            >
              <img
                loading="lazy"
                src={DogDayCare}
                alt="dog-day-care"
                className="img-fluid-background img-fluid"
              />
              <div
                className="service-card-heading-wrapper hover-arrow"
                tabIndex={0}
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                <p className="service-card-heading">Dog Day Care</p>
                <span className="service-card-icon arrow">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 3.75L14.25 9M14.25 9L9 14.25M14.25 9L3.75 9"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 padding-left mx-auto mt-sm-4 mt-md-4 mt-lg-0">
            <div
              className="service-card m-auto"
              data-aos="zoom-in-up"
              data-aos-offset="0"
              data-aos-easing="ease-in-sine"
              data-aos-duration={getNextValue()}
            >
              <img
                loading="lazy"
                src={DogWalking}
                alt="dog-walking"
                className="img-fluid-background img-fluid"
              />
              <div
                className="service-card-heading-wrapper hover-arrow"
                tabIndex={0}
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                <p className="service-card-heading">Dog Walking</p>
                <span className="service-card-icon arrow">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 3.75L14.25 9M14.25 9L9 14.25M14.25 9L3.75 9"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 padding-left mt-md-4 mt-lg-0 mt-sm-4 ">
            <div
              className="service-card m-auto"
              data-aos="zoom-in-up"
              data-aos-offset="0"
              data-aos-easing="ease-in-sine"
              data-aos-duration={getNextValue()}
            >
              <img
                loading="lazy"
                src={DogGrooming}
                alt="dog-grooming"
                className="img-fluid-background img-fluid "
              />
              <div
                className="service-card-heading-wrapper hover-arrow"
                tabIndex={0}
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                <p className="service-card-heading">Pet Grooming</p>
                <span className="service-card-icon arrow">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 3.75L14.25 9M14.25 9L9 14.25M14.25 9L3.75 9"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GridPages;
