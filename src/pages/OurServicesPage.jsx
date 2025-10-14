// src/pages/OurServicesPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ContentPageLayout from "../components/ContentPageLayout";
import ourServicesData from "../data/ourServicesData";
import "../styles/OurServicesPage.css";

const OurServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Services | Web Design, Branding & Custom Development | Rado Design Studio</title>
        <meta
          name="description"
          content="From web design and development to brand strategy and custom creative solutions—discover how Rado Design Studio transforms ideas into timeless digital experiences."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.radodesignstudio.com/our-services" />
      </Helmet>
      
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
    </>
  );
};

export default OurServicesPage;

