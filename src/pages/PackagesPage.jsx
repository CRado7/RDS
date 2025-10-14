// src/pages/PackagesPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ContentPageLayout from "../components/ContentPageLayout";
import packagesData from "../data/packagesData";
import "../styles/PackagesPage.css";

const PackagesPage = () => {
  return (
    <>
      <Helmet>
        <title>Packages | Web & Branding Plans for Every Stage | Rado Design Studio</title>
        <meta
          name="description"
          content="Choose a creative package tailored to your brand’s journey—from starter sites to full-scale brand and eCommerce builds. Simple, scalable, and strategic."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.radodesignstudio.com/packages" />
      </Helmet>
      
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
            <p className="footnote">Don't see a <span className="underline">Brand Package</span> that works for you? Thats fine! <Link to="/contact">Lets get in touch</Link> and work something out.</p>
          </div>

          <div className="seperator-line"></div>

          {/* Website Packages */}
          <div className="package-section">
            <h2 className="vertical-text-package">{packagesData.webPackages.heading}</h2>
            <div className="package-list">
              {packagesData.webPackages.packages.map((pkg, idx) => (
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
            <p className="footnote">Don't see a <span className="underline">Web Package</span> that works for you? Thats fine! <Link to="/contact">Lets get in touch</Link> and work something out.</p>
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
              <p className="footnote">Don't see a <span className="underline">Creative Support Package</span> that works for you? Thats fine! <Link to="/contact">Lets get in touch</Link> and work something out.</p>
          </div>
        </section>
        <div className="hot-link two-items">
              <Link to="/" className="back-link">
              ← Back to Home
              </Link>
              <Link to="/contact" className="contact-link">
              Contact Us →
              </Link>
          </div>
      </div>
    </>
  );
};

export default PackagesPage;
