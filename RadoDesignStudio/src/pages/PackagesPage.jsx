// src/pages/PackagesPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import ContentPageLayout from "../components/ContentPageLayout";
import packagesData from "../data/packagesData";
import "../styles/PackagesPage.css";

const PackagesPage = () => {
  return (
    <div>
      <ContentPageLayout title="Packages" />

      <section className="packages-container">
        {/* Brand Packages */}
        <div className="package-section">
          <h2 className="vertical-text-package">{packagesData.brandPackages.heading}</h2>
          <div className="package-list">
            {packagesData.brandPackages.packages.map((pkg, idx) => (
              <div key={idx} className={`package-card ${pkg.astrix ? "astrix" : ""}`}>
                <h3>{pkg.name}</h3>
                <p className="package-content">{pkg.content}</p>
                <p className="package-description">{pkg.description}</p>
                {pkg.startsAt && <p className="package-price">Starting at ${pkg.price}</p>}
                {!pkg.startsAt && <p className="package-price">${pkg.price}</p>}
                {pkg.footnote && <p className="package-footnote">{pkg.footnote}</p>}
              </div>
            ))}
          </div>
        </div>
        
        <div className="seperator-line"></div>

        {/* Creative Support Packages */}
        <div className="package-section">
          <h2 className="vertical-text-package">{packagesData.creativeSupport.heading}</h2>
          <div className="package-list">
            {packagesData.creativeSupport.packages.map((pkg, idx) => (
              <div key={idx} className={`package-card ${pkg.astrix ? "astrix" : ""}`}>
                <h3>{pkg.name}</h3>
                <p className="package-content">{pkg.hours}</p>
                <p>Ideal For:</p>
                <p className="package-description">{pkg.idealFor}</p>
                {pkg.hourly && <p className="package-price">${pkg.price} (${pkg.hourly}/hr)</p>}
                {!pkg.hourly && <p className="package-price">${pkg.price}</p>}
                {pkg.footnote && <p className="package-footnote">{pkg.footnote}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="services-contact-links">
            <Link to="/" className="back-link">
            ← Back to Home
            </Link>
            <Link to="/contact" className="contact-link">
            Contact Us →
            </Link>
        </div>
    </div>
  );
};

export default PackagesPage;
