import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ meta }) => {
  const versionQuery = `?v=${Date.now()}`; // optional cache-busting

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:url" content={`${meta.url}${versionQuery}`} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />

      {/* Canonical */}
      <link rel="canonical" href={`${meta.url}${versionQuery}`} />
    </Helmet>
  );
};

export default SEO;
