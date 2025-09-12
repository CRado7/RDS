import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

export default function HomePage() {
  const homePageLinks = [
    { name: "about us", url: "/about-us" },
    { name: "our work", url: "/our-work" },
    { name: "our services", url: "/our-services" },
    { name: "packages", url: "/packages" },
    { name: "contact", url: "/contact" },
  ];

  const heroText = "RadoDesignStudio";
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Full background grid
  const rows = 5; // adjust based on screen height
  const cols = 100; // adjust based on screen width
  const [squares, setSquares] = useState(
    Array.from({ length: rows * cols }, (_, i) => ({
      id: i,
      active: false,
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setSquares((prev) =>
        prev.map((sq) =>
          Math.random() > 0.96 // ~4% chance to flip
            ? { ...sq, active: !sq.active }
            : sq
        )
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Background grid */}
      <div className="background-grid">
        {squares.map((sq, i) => (
          <div
            key={sq.id}
            className={`grid-square ${sq.active ? "active" : ""}`}
            style={{
              gridRow: Math.floor(i / cols) + 1,
              gridColumn: (i % cols) + 1,
            }}
            onMouseEnter={() =>
              setSquares((prev) =>
                prev.map((p) =>
                  p.id === sq.id ? { ...p, active: true } : p
                )
              )
            }
            onMouseLeave={() =>
              setSquares((prev) =>
                prev.map((p) =>
                  p.id === sq.id ? { ...p, active: false } : p
                )
              )
            }
          />
        ))}
      </div>

      {/* Hero content */}
      <header className="hero">
        <h1>
          {heroText.split("").map((char, index) => {
            let offset = 0;
            if (hoveredIndex !== null) {
              const distance = Math.abs(index - hoveredIndex);
              if (distance === 0) offset = -8;
              else if (distance === 1) offset = -6;
              else if (distance === 2) offset = -4;
              else if (distance === 3) offset = -2;
            }

            return (
              <span
                key={index}
                className="hero-letter"
                style={{ transform: `translateY(${offset}px)` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {char}
              </span>
            );
          })}
        </h1>
      </header>

      {/* Navigation links */}
      <main className="links-grid">
        {homePageLinks.map((link) => (
          <Link to={link.url} key={link.name} className="link-card">
            {link.name}
          </Link>
        ))}
      </main>
    </div>
  );
}
