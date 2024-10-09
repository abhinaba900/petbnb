import React from "react";
import "../components/css/CommonButton.css";

function CommonButton({ text }) {
  return (
    <div>
      <button className="navBtn btn-3d">
        <span className="front button-hover">{text}</span>
      </button>
    </div>
  );
}

export default CommonButton;
