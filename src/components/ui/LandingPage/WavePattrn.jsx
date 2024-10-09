import React from "react";
import "../../css/WavePattrn.css";

function WavePattrn({ onlyref }) {
  return (
    <div>
      <div className="wave-pattern-wrapper" style={{ overflow: "hidden" }}>
        <svg
          width={"100%"}
          object-fit="cover"
          min-width={"100%"}
          style={{ paddingRight: "0" }}
          viewBox="0 0 1366 134"
          className="bottom-banner-svg-background"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1386 134H-18H-30V13.9999C164 -18.0001 272 13.9999 418 33.9999C564 53.9999 748 -32.0001 936 13.9999C1086.4 50.7999 1298.67 42.6666 1386 33.9999V134Z"
            fill="white"
          />
        </svg>
        <svg
          width={"100%"}
          viewBox="0 0 1366 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="bottom-banner-svg"
        >
          <path
            d="M-56 42.9998C-34.6667 25.6665 81.9507 -21.8057 266 16.9998C598 86.9998 672 4.99982 832 16.9998C947.675 25.6755 1168 94.9999 1400 36.9998"
            stroke="#FEDD00"
            stroke-width="4"
            stroke-linecap="round"
            stroke-dasharray="8 8"
          />
        </svg>
      </div>
    </div>
  );
}

export default WavePattrn;
