import React, { useRef, useState } from "react";
import "../styles/Filmstrip.css";

/**
 * Filmstrip
 * Horizontal scroll strip for social media / event assets.
 * Images sit at a fixed height, natural width, with snap scrolling.
 * Click any image to expand in a full-screen modal.
 */
export default function Filmstrip({ images }) {
  const [modalIdx, setModalIdx] = useState(null);
  const stripRef = useRef(null);

  if (!images || images.length === 0) return null;

  const openModal = (i) => setModalIdx(i);
  const closeModal = () => setModalIdx(null);
  const prev = () => setModalIdx(i => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setModalIdx(i => (i === images.length - 1 ? 0 : i + 1));

  const scrollLeft = () => stripRef.current?.scrollBy({ left: -280, behavior: "smooth" });
  const scrollRight = () => stripRef.current?.scrollBy({ left: 280, behavior: "smooth" });

  return (
    <div className="filmstrip-wrap">
      {/* Scroll arrows */}
      <button className="fs-arrow fs-arrow--left" onClick={scrollLeft} aria-label="Scroll left">‹</button>
      <button className="fs-arrow fs-arrow--right" onClick={scrollRight} aria-label="Scroll right">›</button>

      {/* Scroll hint — visible on mobile only */}
      <div className="fs-scroll-hint">← Swipe to browse →</div>

      {/* Strip */}
      <div className="filmstrip-strip" ref={stripRef}>
        {images.map((img, i) => (
          <div key={i} className="fs-item" onClick={() => openModal(i)}>
            <div className="fs-img-wrap">
              <img
                src={img.src || img}
                alt={img.caption || `Asset ${i + 1}`}
                className="fs-img"
              />
              <div className="fs-overlay">
                <span className="fs-zoom">↗</span>
              </div>
            </div>
            {img.caption && (
              <span className="fs-caption">{img.caption}</span>
            )}
          </div>
        ))}
      </div>

      {/* Count label */}
      <div className="fs-count">
        {images.length} {images.length === 1 ? "asset" : "assets"}
      </div>

      {/* Modal */}
      {modalIdx !== null && (
        <div className="fs-modal-overlay" onClick={closeModal}>
          <div className="fs-modal" onClick={e => e.stopPropagation()}>
            <button className="fs-modal-close" onClick={closeModal}>×</button>
            {images.length > 1 && (
              <button className="fs-modal-prev" onClick={prev}>‹</button>
            )}
            <img
              src={images[modalIdx].src || images[modalIdx]}
              alt={images[modalIdx].caption || ""}
              className="fs-modal-img"
            />
            {images[modalIdx].caption && (
              <p className="fs-modal-caption">{images[modalIdx].caption}</p>
            )}
            {images.length > 1 && (
              <button className="fs-modal-next" onClick={next}>›</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
