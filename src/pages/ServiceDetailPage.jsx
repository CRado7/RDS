// src/pages/ServiceDetailsPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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

  const pageTitle = `${service.title} | Rado Design Studio`;
  const pageDescription = service.intro || "Custom design and development solutions tailored to your brand.";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={`https://radodesignstudio.com/og-${service.url}.jpg`} />
        <meta property="og:url" content={`https://radodesignstudio.com/our-services/${service.url}`} />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="service-details-page">
        <ContentPageLayout title={service.title} titleClassName="service-details-title"/>

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
            <div className="hot-link two-items">
              <Link to="/our-services" className="back-link">
              ← Back to All Services
              </Link>
              <Link to="/contact" className="contact-link">
              Contact Us →
              </Link>
            </div>
      </div>
    </>
  );
};

export default ServiceDetailsPage;
