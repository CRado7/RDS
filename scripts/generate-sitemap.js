import { writeFileSync } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";

import ourServicesData from "../src/data/ourServicesData.js";
import projectData from "../src/data/projectData.js";

const BASE_URL = "https://radodesignstudio.com";

async function generateSitemap() {
  const smStream = new SitemapStream({ hostname: BASE_URL });

  // 1️⃣ Static pages
  const staticRoutes = [
    "/",
    "/about-us",
    "/our-work",
    "/our-services",
    "/packages",
    "/contact",
  ];

  staticRoutes.forEach((path) =>
    smStream.write({
      url: path,
      changefreq: "monthly",
      priority: 0.8,
    })
  );

  // 2️⃣ Dynamic service pages
  ourServicesData.forEach((service) => {
    if (service.url) {
      smStream.write({
        url: `/our-services/${service.url}`,
        changefreq: "monthly",
        priority: 0.7,
      });
    }
  });

  // 3️⃣ Dynamic project pages
  projectData.forEach((project) => {
    if (project.slug) {
      smStream.write({
        url: `/our-work/${project.slug}`,
        changefreq: "monthly",
        priority: 0.7,
      });
    }
  });

  smStream.end();

  // 4️⃣ Save the file
  const sitemapOutput = "./dist/sitemap.xml";
  const xml = await streamToPromise(smStream).then((data) => data.toString());
  writeFileSync(sitemapOutput, xml);

  console.log("✅ Sitemap successfully generated:", sitemapOutput);
}

generateSitemap().catch(console.error);
