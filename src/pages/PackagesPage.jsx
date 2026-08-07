import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { metaData } from "../data/metaData";
import ContentPageLayout from "../components/ContentPageLayout";
import packagesData from "../data/packagesData";
import "../styles/PackagesPage.css";

const PackagesPage = () => {
  return (
    <>
      <SEO meta={metaData.packages} />
      <div>
        <ContentPageLayout title="Packages" />

        <section className="packages-container">
          <p><span className="trade-label big">//</span> is cashflow tight but you still need something? <a href="#trade-section" className="trade-label big">Check this out</a>.</p>

          <div className="package-section">
            <h2 className="vertical-text-package">{packagesData.brandPackages.heading}</h2>
            <div className="package-list">
              {packagesData.brandPackages.packages.map((pkg, idx) => (
                <div key={idx} className={`package-card ${pkg.astrix ? "astrix" : ""}`}>
                  <h3>{pkg.name}</h3>
                  <p className="package-content">{pkg.content}</p>
                  <p className="package-description">{pkg.description}</p>
                  {pkg.startsAt
                    ? <p className="package-price">From ${pkg.price.toLocaleString()}</p>
                    : <p className="package-price">${pkg.price.toLocaleString()}</p>
                  }
                  {pkg.footnote && <p className="package-footnote">{pkg.footnote}</p>}
                </div>
              ))}
            </div>
            <p className="footnote">
              Don't see a <span className="underline">Brand Package</span> that fits?
              That's fine — <Link to="/contact">let's talk</Link> and figure something out.
            </p>
          </div>

          <div className="seperator-line"></div>

          <div className="package-section">
            <h2 className="vertical-text-package">{packagesData.webPackages.heading}</h2>
            <div className="package-list">
              {packagesData.webPackages.packages.map((pkg, idx) => (
                <div key={idx} className={`package-card ${pkg.astrix ? "astrix" : ""}`}>
                  <h3>{pkg.name}</h3>
                  <p className="package-content">{pkg.content}</p>
                  <p className="package-description">{pkg.description}</p>
                  {pkg.startsAt
                    ? <p className="package-price">From ${pkg.price.toLocaleString()}</p>
                    : <p className="package-price">${pkg.price.toLocaleString()}</p>
                  }
                  {pkg.footnote && <p className="package-footnote">{pkg.footnote}</p>}
                </div>
              ))}
            </div>
            <p className="footnote">
              Don't see a <span className="underline">Website Package</span> that fits?
              That's fine — <Link to="/contact">let's talk</Link> and figure something out.
            </p>
          </div>

          <div className="seperator-line"></div>

          <div className="package-section">
            <h2 className="vertical-text-package">{packagesData.creativeSupport.heading}</h2>
            <div className="package-list">
              {packagesData.creativeSupport.packages.map((pkg, idx) => (
                <div key={idx} className={`package-card ${pkg.astrix ? "astrix" : ""}`}>
                  <h3>{pkg.name}</h3>
                  <p className="package-content">{pkg.hours}</p>
                  <p className="package-description">
                    <strong>Good for:</strong> {pkg.idealFor}
                  </p>
                  {pkg.hourly
                    ? <p className="package-price">${pkg.price.toLocaleString()} <span className="package-hourly">(${pkg.hourly}/hr)</span></p>
                    : <p className="package-price">${pkg.price.toLocaleString()}</p>
                  }
                  {pkg.footnote && <p className="package-footnote">{pkg.footnote}</p>}
                </div>
              ))}
            </div>
            <p className="footnote">
              Not sure which fits? <Link to="/contact">Reach out</Link> and I'll point you in the right direction.
            </p>
          </div>

          <div className="seperator-line"></div>

          {/* ── Trade of Services ── */}
          <div className="trade-section" id="trade-section">
            <div className="trade-inner">
              <span className="trade-label">// another option</span>
              <h2 className="trade-heading">Let's make a deal.</h2>
              <p className="trade-body">
                <span className="trade-label big">Running a small business</span> means money doesn't always flow on a
                convenient schedule — I get it. If you've got something to bring
                to the table, I'm open to talking about a <span className="trade-label big">trade of services</span>. Good design for
                good work, <span className="trade-label big">straight across</span>. Send me a quick note with what you
                do and what you're thinking and we'll figure out if it makes
                sense for both of us.
              </p>
              <a
                href="mailto:hello@radodesignstudio.com?subject=Trade%20Proposal"
                className="trade-link"
              >
                Send a proposal
              </a>
            </div>
          </div>

          <div className="seperator-line"></div>

        </section>

        <div className="hot-link two-items">
          <Link to="/" className="back-link">← Home</Link>
          <Link to="/contact" className="contact-link">Contact →</Link>
        </div>
      </div>
    </>
  );
};

export default PackagesPage;
