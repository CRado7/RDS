import React from "react";
import SEO from "../components/SEO";
import { metaData } from "../data/metaData";
import ContentPageLayout from "../components/ContentPageLayout";
import "../styles/ContactPage.css";

const Contact = () => (
  <>
    <SEO meta={metaData.contact} />
    <div>
      <ContentPageLayout title="Contact" />
      <section className="container contact-container page-content">
        <p className="contact-tagline">
          If it ain't Rado, it ain't rad.
        </p>
        <p className="contact-body">
          No intake forms. No discovery calls with 12 people on them.
          Just shoot me a message and tell me what you're working on.
        </p>
        <a href="mailto:hello@radodesignstudio.com">Email me</a>
        <a href="tel:+17743923956">Give me a call</a>
      </section>
    </div>
  </>
);

export default Contact;
