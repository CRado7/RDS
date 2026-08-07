import React, { useState } from "react";
import "../styles/BrowserFrame.css";

/**
 * BrowserFrame
 * Wraps a list of website screenshots in a realistic browser chrome.
 * Click any screenshot to expand it in a modal.
 */
export default function BrowserFrame({ images, url = "radodesignstudio.com" }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const current = images[activeIdx];

  return (
    <div className="bf-wrap">
      {/* Chrome bar */}
      <div className="bf-chrome">
        <div className="bf-dots">
          <span className="bf-dot bf-dot--red" />
          <span className="bf-dot bf-dot--yellow" />
          <span className="bf-dot bf-dot--green" />
        </div>
        <div className="bf-url-bar">
          <svg className="bf-lock" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="6" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M3.5 6V4a2.5 2.5 0 015 0v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          <span className="bf-url-text">
            {current.url || url}
          </span>
        </div>
        <div className="bf-chrome-actions">
          {current.caption && (
            <span className="bf-page-label">{current.caption}</span>
          )}
        </div>
      </div>

      {/* Screenshot */}
      <div className="bf-screen" onClick={() => setModalOpen(true)}>
        <img
          src={current.src || current}
          alt={current.caption || "Website screenshot"}
          className="bf-screenshot"
        />
        <div className="bf-expand-hint">Click to expand</div>
      </div>

      {/* Thumbnail strip — only if more than one */}
      {images.length > 1 && (
        <div className="bf-strip">
          {images.map((img, i) => (
            <button
              key={i}
              className={`bf-thumb ${i === activeIdx ? "active" : ""}`}
              onClick={() => setActiveIdx(i)}
            >
              <img src={img.src || img} alt={img.caption || `Page ${i + 1}`} />
              {img.caption && <span className="bf-thumb-label">{img.caption}</span>}
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen modal */}
      {modalOpen && (
        <div className="bf-modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="bf-modal" onClick={e => e.stopPropagation()}>
            <button className="bf-modal-close" onClick={() => setModalOpen(false)}>×</button>
            {images.length > 1 && (
              <button className="bf-modal-prev" onClick={() => setActiveIdx(i => (i === 0 ? images.length - 1 : i - 1))}>‹</button>
            )}
            <img src={current.src || current} alt={current.caption || ""} className="bf-modal-img" />
            {current.caption && <p className="bf-modal-caption">{current.caption}</p>}
            {images.length > 1 && (
              <button className="bf-modal-next" onClick={() => setActiveIdx(i => (i === images.length - 1 ? 0 : i + 1))}>›</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
