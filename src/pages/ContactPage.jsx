import React from "react";
import SEO from "../components/SEO";
import { metaData } from "../data/metaData";
import ContentPageLayout from "../components/ContentPageLayout";
import "../styles/ContactPage.css";

const Contact = () => {
  const versionQuery = `?v=${Date.now()}`;
  return (
    <>
      <SEO meta={metaData.contact} />

      <div>
        <ContentPageLayout title="Contact" />

        <section className="container contact-container page-content">
          <p className="contact-tagline">If it ain't Rado, it ain't rad.</p>
          <a href="mailto:hello@radodesignstudio.com">email</a>
          <a href="tel:+17743923956">phone</a>
        </section>
      </div>
    </>
  );
};

export default Contact;
