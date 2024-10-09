import React from "react";

// FullStar Component
const FullStar = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.00005 11.5134L10.7667 13.1867C11.2734 13.4934 11.8934 13.04 11.7601 12.4667L11.0267 9.32005L13.4734 7.20005C13.9201 6.81338 13.6801 6.08005 13.0934 6.03338L9.87338 5.76005L8.61338 2.78671C8.38672 2.24671 7.61338 2.24671 7.38672 2.78671L6.12672 5.75338L2.90672 6.02671C2.32005 6.07338 2.08005 6.80672 2.52672 7.19338L4.97338 9.31338L4.24005 12.46C4.10672 13.0334 4.72672 13.4867 5.23338 13.18L8.00005 11.5134Z"
      fill="#FD9642"
    />
  </svg>
);

// EmptyStar Component
const EmptyStar = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.00005 11.5134L10.7667 13.1867C11.2734 13.4934 11.8934 13.04 11.7601 12.4667L11.0267 9.32005L13.4734 7.20005C13.9201 6.81338 13.6801 6.08005 13.0934 6.03338L9.87338 5.76005L8.61338 2.78671C8.38672 2.24671 7.61338 2.24671 7.38672 2.78671L6.12672 5.75338L2.90672 6.02671C2.32005 6.07338 2.08005 6.80672 2.52672 7.19338L4.97338 9.31338L4.24005 12.46C4.10672 13.0334 4.72672 13.4867 5.23338 13.18L8.00005 11.5134Z"
      fill="#C0C4C8"
    />
  </svg>
);

// DynamicRating Component
const DynamicRating = ({ rating, maxStars = 5 }) => {
  // Convert rating string to number, if necessary
  const numericRating = Number(rating.split("(")[0]);

  // Determine the number of full stars
  const fullStars = Math.floor(numericRating);

  // Check if we need a half star or not (for example, 4.5 should show 5 full stars)
  const needsExtraStar = numericRating % 1 >= 0.5 ? 1 : 0;

  // Empty stars would be the difference between maxStars and the sum of full stars and extra half star
  const emptyStars = maxStars - fullStars - needsExtraStar;

  return (
    <div style={{ display: "flex" }}>
      {Array(fullStars)
        .fill()
        .map((_, index) => (
          <FullStar key={index} />
        ))}
      {needsExtraStar === 1 && <FullStar />}
      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <EmptyStar key={index} />
        ))}
    </div>
  );
};

export default DynamicRating;
