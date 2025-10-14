import React from "react";
import { Helmet } from "react-helmet-async";
import ContentPageLayout from "../components/ContentPageLayout";
import "../styles/ContactPage.css";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Let’s Build Something Together | Rado Design Studio</title>
        <meta
          name="description"
          content="Ready to start your next project? Get in touch with Rado Design Studio to discuss web design, branding, or creative development built around your goals."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.radodesignstudio.com/contact" />
      </Helmet>
      
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
