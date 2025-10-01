import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/ContentPageLayout.css";

const ContentPageLayout = ({ title }) => {
  const navItems = [
    { label: "about us", path: "/about-us" },
    { label: "our work", path: "/our-work" },
    { label: "our services", path: "/our-services" },
    { label: "packages", path: "/packages" },
    { label: "contact", path: "/contact" },
  ];

  return (
    <div className="fullscreen-nav">
      {/* Top-left square */}
      <NavLink to="/" className="home-square" />

      {/* Navigation */}
      <nav className="nav-links">
        {navItems.map((item, idx) => (
          <React.Fragment key={item.path}>
            <NavLink to={item.path}>{item.label}</NavLink>
            {idx < navItems.length - 1 && <span className="nav-separator">|</span>}
          </React.Fragment>
        ))}
      </nav>

      {/* Title under nav */}
      {title && <h1 className="page-title">{title}</h1>}
    </div>
  );
};

export default ContentPageLayout;

