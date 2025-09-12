import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/WorkDetailNav.css";

const WorkDetailNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "about us", path: "/about-us" },
    { label: "our work", path: "/our-work" },
    { label: "our services", path: "/our-services" },
    { label: "packages", path: "/packages" },
    { label: "contact", path: "/contact" },
  ];

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="wd-nav">
      {/* Home square */}
      <Link to="/" className="wd-home-square" />

      {/* Hamburger for mobile */}
      <button
        className={`wd-menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation */}
      <nav className={`wd-nav-links ${menuOpen ? "show" : ""}`}>
        {navItems.map((item, idx) => (
          <React.Fragment key={item.path}>
            <NavLink to={item.path} onClick={() => setMenuOpen(false)}>
              {item.label}
            </NavLink>
            {idx < navItems.length - 1 && (
              <span className="wd-nav-separator">|</span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </header>
  );
};

export default WorkDetailNav;
