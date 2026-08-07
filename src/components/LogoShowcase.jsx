import React, { useState } from "react";
import "../styles/LogoShowcase.css";

/**
 * LogoShowcase
 *
 * Background options: black (#0A0A0A) | mid-grey (#555555) | white (#FFFFFF)
 *
 * Clicking any logo in the secondary row swaps it into the hero panel.
 *
 * SVG color handling:
 *   - On dark bg  → CSS filter: invert(1)
 *   - On mid bg   → CSS filter: invert(1)
 *   - On white bg → CSS filter: none
 *
 * For logos where auto-invert isn't right, pass svgVariants in the image object:
 *   { caption, dark: darkSrc, mid: midSrc, light: lightSrc }
 */
export default function LogoShowcase({ images }) {
  const [activeBg, setActiveBg] = useState("black");
  // heroIndex tracks which image from the original array is in the hero slot
  const [heroIndex, setHeroIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const bgOptions = [
    { id: "black",   label: "Black",    bg: "#0A0A0A", filter: "invert(1)" },
    { id: "midgrey", label: "Mid Grey", bg: "#555555", filter: "invert(1)" },
    { id: "white",   label: "White",    bg: "#FFFFFF", filter: "none"      },
  ];

  const current = bgOptions.find(b => b.id === activeBg);

  const resolveSrc = (img) => {
    if (img.dark && img.mid && img.light) {
      return activeBg === "white"   ? img.light
           : activeBg === "midgrey" ? img.mid
           : img.dark;
    }
    return img.src || img;
  };

  const resolveFilter = (img) => {
    if (img.dark && img.mid && img.light) return "none";
    return current.filter;
  };

  const labelColor = current.bg === "#FFFFFF" ? "#0A0A0A" : "#F0EDEA";

  const hero = images[heroIndex];
  const secondaryImages = images
    .map((img, i) => ({ img, originalIndex: i }))
    .filter(({ originalIndex }) => originalIndex !== heroIndex);

  return (
    <div className="logo-showcase">

      {/* BG switcher */}
      <div className="logo-bg-switcher">
        <span className="logo-switcher-label">Background</span>
        {bgOptions.map(opt => (
          <button
            key={opt.id}
            className={`logo-bg-btn ${activeBg === opt.id ? "active" : ""}`}
            style={{
              background: opt.bg,
              borderColor: activeBg === opt.id
                ? (opt.bg === "#E8FF3A" ? "#E8FF3A" : "#E8FF3A")
                : "#A8A49F"
            }}
            onClick={() => setActiveBg(opt.id)}
            aria-label={opt.label}
            title={opt.label}
          />
        ))}
        <span className="logo-bg-active-label">{current.label}</span>
      </div>

      {/* Hero logo */}
      <div className="logo-hero-panel" style={{ background: current.bg }}>
        <img
          src={resolveSrc(hero)}
          alt={hero.caption || "Primary Logo"}
          className="logo-hero-img"
          style={{ filter: resolveFilter(hero), transition: "filter 0.3s ease" }}
        />
        {hero.caption && (
          <span className="logo-panel-label" style={{ color: labelColor }}>
            {hero.caption}
          </span>
        )}
      </div>

      {/* Secondary logos */}
      {secondaryImages.length > 0 && (
        <div className="logo-secondary-row" style={{ background: current.bg }}>
          {secondaryImages.map(({ img, originalIndex }) => (
            <div
              key={originalIndex}
              className="logo-secondary-panel logo-secondary-panel--clickable"
              style={{ background: current.bg }}
              onClick={() => setHeroIndex(originalIndex)}
              title={img.caption ? `Feature "${img.caption}"` : "Feature this logo"}
            >
              <img
                src={resolveSrc(img)}
                alt={img.caption || `Logo variant`}
                className="logo-secondary-img"
                style={{ filter: resolveFilter(img), transition: "filter 0.3s ease" }}
              />
              {img.caption && (
                <span className="logo-panel-label" style={{ color: labelColor }}>
                  {img.caption}
                </span>
              )}
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
