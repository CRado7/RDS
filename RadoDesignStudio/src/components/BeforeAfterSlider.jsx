import React from "react";
import ReactCompareImage from "react-compare-image";
import "../styles/BeforeAfterSlider.css";

export default function BeforeAfterSlider({ before, after }) {
  return (
    <div className="before-after-container">
      {/* Blur overlay */}
      <div className="blur-overlay" />

      {/* React Compare Image Slider */}
      <ReactCompareImage
        leftImage={before}
        rightImage={after}
        sliderLineColor="var(--color-main)"
        sliderLineWidth={2}
        handleSize={30}
        className="react-compare-image"
      />

      {/* Captions overlay */}
      <div className="caption-overlay">
        <span className="before-label">Before</span>
        <span className="after-label">After</span>
      </div>
    </div>
  );
}
