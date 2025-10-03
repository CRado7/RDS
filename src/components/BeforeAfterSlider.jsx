// src/components/BeforeAfterSlider.jsx
import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import "../styles/BeforeAfterSlider.css";

export default function BeforeAfterSlider({ before, after }) {
  return (
    <div className="before-after-container">
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src={before}
            alt="Before"
            style={{ objectFit: "cover" }}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={after}
            alt="After"
            style={{ objectFit: "cover" }}
          />
        }
        position={50} // start in the middle
        onlyHandleDraggable={true} // keeps drag restricted to handle
        className="react-compare-slider"
      />

      {/* Overlay captions */}
      <div className="caption-overlay">
        <span className="before-label">Before</span>
        <span className="after-label">After</span>
      </div>
    </div>
  );
}
