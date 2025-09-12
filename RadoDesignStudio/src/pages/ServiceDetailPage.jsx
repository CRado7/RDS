// src/pages/ServiceDetailsPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import ourServicesData from "../data/ourServicesData";
import ContentPageLayout from "../components/ContentPageLayout";
import "../styles/ServiceDetailPage.css";

const ServiceDetailsPage = () => {
  const { serviceUrl } = useParams();
  const service = ourServicesData.find((s) => s.url === serviceUrl);

  if (!service) {
    return (
      <div className="not-found">
        <ContentPageLayout title="Service Not Found" />
        <Link to="/services" className="back-link">
          ← Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div>
      <ContentPageLayout title={service.title} />

      <section className="service-details-container">
        <p className="service-intro">{service.intro}</p>

        <div className="service-type-list">
          {service.serviceType.service.map((item, index) => (
            <div key={index} className="service-type-card">
              <h2>{item.title}</h2>
              <p>{item.serviceDetails}</p>
            </div>
          ))}
        </div>
      </section>
          <div className="services-contact-links">
            <Link to="/our-services" className="back-link">
            ← Back to All Services
            </Link>
            <Link to="/contact" className="contact-link">
            Contact Us →
            </Link>
          </div>
    </div>
  );
};

export default ServiceDetailsPage;
