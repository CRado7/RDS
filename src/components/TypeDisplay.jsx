import React, { useState, useRef } from "react";
import "../styles/TypeDisplay.css";

/**
 * TypeDisplay
 *
 * Pass fonts in projectData like:
 *   {
 *     title: "Typography",
 *     imageDisplay: ["type-display"],
 *     fonts: [
 *       {
 *         name: "Archivo Black",
 *         googleFont: "Archivo+Black",   // Google Fonts family param (optional)
 *         role: "Display / Headings",
 *         weights: ["400"],
 *       },
 *       {
 *         name: "DM Mono",
 *         googleFont: "DM+Mono:wght@300;400;500",
 *         role: "Body / UI",
 *         weights: ["300", "400", "500"],
 *       },
 *     ]
 *   }
 *
 * If googleFont is provided the component injects the @import.
 * Custom/uploaded fonts: use name exactly matching a @font-face
 * you've already loaded in your global CSS.
 */

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const NUMS  = "0123456789";
const SPEC  = "!@#$%&*()—";

function FontCard({ font }) {
  const [weight, setWeight] = useState(font.weights?.[0] || "400");
  const [style, setStyle]   = useState("normal");

  // Inject Google Font if specified and not already loaded
  React.useEffect(() => {
    if (!font.googleFont) return;
    const id = `gf-${font.googleFont.replace(/\W/g, "-")}`;
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id   = id;
    link.rel  = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${font.googleFont}&display=swap`;
    document.head.appendChild(link);
  }, [font.googleFont]);

  const fontStyle = {
    fontFamily: `'${font.name}', sans-serif`,
    fontWeight: weight,
    fontStyle: style,
  };

  return (
    <div className="td-card">
      {/* Header */}
      <div className="td-header">
        <div className="td-meta">
          <span className="td-name">{font.name}</span>
          {font.role && <span className="td-role">{font.role}</span>}
        </div>

        {/* Weight + style toggles */}
        <div className="td-controls">
          {font.weights && font.weights.length > 1 && (
            <div className="td-weight-group">
              {font.weights.map(w => (
                <button
                  key={w}
                  className={`td-weight-btn ${weight === w ? "active" : ""}`}
                  onClick={() => setWeight(w)}
                >
                  {w}
                </button>
              ))}
            </div>
          )}
          <button
            className={`td-italic-btn ${style === "italic" ? "active" : ""}`}
            onClick={() => setStyle(s => s === "italic" ? "normal" : "italic")}
            title="Toggle italic"
          >
            i
          </button>
        </div>
      </div>

      {/* Specimen */}
      <div className="td-specimen">
        {/* Hero size */}
        <div className="td-hero-line" style={fontStyle}>Aa</div>

        {/* Alphabet rows */}
        <div className="td-alpha-section">
          <span className="td-alpha-label">Uppercase</span>
          <p className="td-alpha" style={fontStyle}>{UPPER}</p>
        </div>
        <div className="td-alpha-section">
          <span className="td-alpha-label">Lowercase</span>
          <p className="td-alpha" style={fontStyle}>{LOWER}</p>
        </div>
        <div className="td-alpha-section">
          <span className="td-alpha-label">Numbers &amp; Symbols</span>
          <p className="td-alpha" style={fontStyle}>{NUMS} {SPEC}</p>
        </div>

        {/* Size scale */}
        <div className="td-scale">
          {[72, 48, 36, 24, 18, 14].map(size => (
            <div key={size} className="td-scale-row">
              <span className="td-scale-label">{size}px</span>
              <span className="td-scale-text" style={{ ...fontStyle, fontSize: `${size}px` }}>
                The quick brown fox
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TypeDisplay({ fonts }) {
  if (!fonts || fonts.length === 0) return null;
  return (
    <div className="td-wrap">
      {fonts.map((font, i) => (
        <FontCard key={i} font={font} />
      ))}
    </div>
  );
}
