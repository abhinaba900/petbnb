import { div } from "framer-motion/client";
import React from "react";
// Add a CSS file for styling

const FilterLoader = () => {
  return (
    <div>
      <div className="skeleton-loader">
        <div className="skeleton-img"></div>
        <div className="skeleton-info">
          <div className="skeleton-title"></div>
          <div className="skeleton-rating"></div>
          <div className="skeleton-location"></div>
          <div className="skeleton-experience"></div>
          <div className="skeleton-services"></div>
        </div>
      </div>
      <div className="skeleton-loader">
        <div className="skeleton-img"></div>
        <div className="skeleton-info">
          <div className="skeleton-title"></div>
          <div className="skeleton-rating"></div>
          <div className="skeleton-location"></div>
          <div className="skeleton-experience"></div>
          <div className="skeleton-services"></div>
        </div>
      </div>
      <div className="skeleton-loader">
        <div className="skeleton-img"></div>
        <div className="skeleton-info">
          <div className="skeleton-title"></div>
          <div className="skeleton-rating"></div>
          <div className="skeleton-location"></div>
          <div className="skeleton-experience"></div>
          <div className="skeleton-services"></div>
        </div>
      </div>
    </div>
  );
};

export default FilterLoader;
