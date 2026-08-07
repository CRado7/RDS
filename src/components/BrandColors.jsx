import React from "react";
import "../styles/BrandColors.css";

/**
 * BrandColors
 *
 * Pass colors in projectData like:
 *   {
 *     title: "Brand Colors",
 *     imageDisplay: ["brand-colors"],
 *     colors: [
 *       { name: "Midnight", hex: "#0A0A0A" },
 *       { name: "Acid", hex: "#E8FF3A" },
 *       { name: "Off White", hex: "#F0EDEA" },
 *     ]
 *   }
 *
 * Automatically converts hex → RGB → CMYK and renders swatches.
 */

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return { r, g, b };
}

function rgbToCmyk({ r, g, b }) {
  if (r === 0 && g === 0 && b === 0) return { c: 0, m: 0, y: 0, k: 100 };
  const rp = r / 255, gp = g / 255, bp = b / 255;
  const k = 1 - Math.max(rp, gp, bp);
  const c = ((1 - rp - k) / (1 - k)) || 0;
  const m = ((1 - gp - k) / (1 - k)) || 0;
  const y = ((1 - bp - k) / (1 - k)) || 0;
  return {
    c: Math.round(c * 100),
    m: Math.round(m * 100),
    y: Math.round(y * 100),
    k: Math.round(k * 100),
  };
}

// Decide whether text on this background should be dark or light
function contrastColor(hex) {
  const { r, g, b } = hexToRgb(hex);
  // Luminance formula
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.5 ? "#0A0A0A" : "#F0EDEA";
}

function ColorCard({ color }) {
  const rgb = hexToRgb(color.hex);
  const cmyk = rgbToCmyk(rgb);
  const fg = contrastColor(color.hex);

  return (
    <div className="bc-card">
      {/* Swatch */}
      <div className="bc-swatch" style={{ background: color.hex }}>
        <span className="bc-swatch-name" style={{ color: fg }}>{color.name}</span>
        <span className="bc-swatch-hex"  style={{ color: fg }}>{color.hex.toUpperCase()}</span>
      </div>

      {/* Values */}
      <div className="bc-values">
        <div className="bc-value-row">
          <span className="bc-value-label">RGB</span>
          <span className="bc-value-data">{rgb.r}, {rgb.g}, {rgb.b}</span>
        </div>
        <div className="bc-value-row">
          <span className="bc-value-label">CMYK</span>
          <span className="bc-value-data">{cmyk.c}, {cmyk.m}, {cmyk.y}, {cmyk.k}</span>
        </div>
        <div className="bc-value-row">
          <span className="bc-value-label">HEX</span>
          <span className="bc-value-data">{color.hex.toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
}

export default function BrandColors({ colors }) {
  if (!colors || colors.length === 0) return null;
  return (
    <div className="bc-wrap">
      {colors.map((color, i) => (
        <ColorCard key={i} color={color} />
      ))}
    </div>
  );
}
