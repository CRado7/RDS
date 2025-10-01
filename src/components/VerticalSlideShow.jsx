import React, { useState } from "react";
import "../styles/VerticalSlideshow.css";

const VerticalSlideshow = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="slideshow-container">
      <div className="slideshow-content">
        {/* Slides */}
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`slide-box ${idx === activeIndex ? "slide-box-active" : ""}`}
            dangerouslySetInnerHTML={{ __html: slide.content }}
          />
        ))}

        {/* Navigation */}
        <div className="dot-nav">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`dot ${idx === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(idx)}
            >
              {idx < slides.length - 1 && <div className="line" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalSlideshow;

