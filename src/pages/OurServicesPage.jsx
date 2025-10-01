// src/pages/OurServicesPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import ContentPageLayout from "../components/ContentPageLayout";
import ourServicesData from "../data/ourServicesData";
import "../styles/OurServicesPage.css";

const OurServicesPage = () => {
  return (
    <div>
      <ContentPageLayout title="Services" />

      <section className="services-container">
        {ourServicesData.map((service) => (
          <div key={service.id} className="service-card">
            <h2>{service.title}</h2>
            <p>{service.hoverStatement}</p>
            <Link to={`/our-services/${service.url}`} className="service-link">
              Learn More →
            </Link>
          </div>
        ))}
      </section>
      <Link to="/packages" className="hot-link">
            See Our Service Packages →
        </Link>
    </div>
  );
};

export default OurServicesPage;

