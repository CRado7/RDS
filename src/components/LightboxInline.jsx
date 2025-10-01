import React, { useState } from "react";
import "../styles/LightboxInline.css";

function LightboxInline({ images }) {
  if (!images || images.length === 0) return null;

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = images[currentIndex];

  return (
    <div className="lightbox-inline">
      {/* Main Image */}
      <div className="lightbox-main">
        <div className="lightbox-main-content">
            <img
            src={currentImage.src || currentImage}
            alt={currentImage.caption || `Image ${currentIndex + 1}`}
            className="lightbox-main-image"
            />
            {currentImage.caption && (
            <p className="lightbox-caption">{currentImage.caption}</p>
            )}
        </div>
    </div>

      {/* Thumbnails */}
      <div className="lightbox-thumbnails">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src || img}
            alt={img.caption || `Thumbnail ${idx + 1}`}
            className={`lightbox-thumbnail ${
              idx === currentIndex ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default LightboxInline;
