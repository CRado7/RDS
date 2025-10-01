import React from "react";
import ContentPageLayout from "../components/ContentPageLayout";
import "../styles/ContactPage.css";

const Contact = () => {
  return (
    <div>
      <ContentPageLayout title="Contact" />

      <section className="container contact-container page-content">
        <p className="contact-tagline">If it ain't Rado, it ain't rad.</p>
        <a href="mailto:christopher.ferraro34@gmail.com">email</a>
        <a href="tel:+7743923956">phone</a>
      </section>
    </div>
  );
};

export default Contact;
