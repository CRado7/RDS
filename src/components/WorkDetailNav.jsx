import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/WorkDetailNav.css";

const WorkDetailNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { label: "About", path: "/about-us" },
    { label: "Work", path: "/our-work" },
    { label: "Services", path: "/our-services" },
    { label: "Packages", path: "/packages" },
    { label: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className="wd-nav">
      <Link to="/" className="wd-home-square">RADO</Link>
      <button className={`wd-menu-toggle ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span /><span /><span />
      </button>
      <nav className={`wd-nav-links ${menuOpen ? "show" : ""}`}>
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} onClick={() => setMenuOpen(false)}>{item.label}</NavLink>
        ))}
      </nav>
    </header>
  );
};

export default WorkDetailNav;
