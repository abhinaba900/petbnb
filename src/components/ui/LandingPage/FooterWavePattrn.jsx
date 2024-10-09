import React from "react";
import "../../css/FooterWavePattrn.css";

function FooterWavePattrn() {
  return (
    <div className="footer-wave-pattern-wrapper" >
      <svg
        viewBox="0 0 1366 134"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="bottom-banner-svg-background"
      >
        <path
          d="M-25 5.93148e-05L1379 0.000182056L1391 0.000183105L1391 120C1197 152 1089 120 943 100C797 80.0001 613 166 425 120C274.6 83.2001 62.3334 91.3334 -25 100L-25 5.93148e-05Z"
          fill="white"
        />
      </svg>
      <svg
        viewBox="0 0 1366 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="bottom-banner-svg"
      >
        <path
          d="M-45 42.8618C-23.6667 25.5284 92.9507 -21.9438 277 16.8618C609 86.8618 683 4.86176 843 16.8618C958.675 25.5374 1179 94.8618 1411 36.8618"
          stroke="#FEDD00"
          stroke-width="4"
          stroke-linecap="round"
          stroke-dasharray="8 8"
        />
      </svg>
    </div>
  );
}

export default FooterWavePattrn;
