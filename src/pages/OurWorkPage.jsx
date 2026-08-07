import React from "react";
import { NavLink, Link } from "react-router-dom";
import SEO from "../components/SEO";
import { metaData } from "../data/metaData";
import ContentPageLayout from "../components/ContentPageLayout";
import projectData from "../data/projectData";
import "../styles/OurWorkPage.css";

const OurWork = () => (
  <>
    <SEO meta={metaData.ourWork} />
    <div>
      <ContentPageLayout title="Our Work" />
      <section className="our-work-container">
        <div className="projects-grid">
          <h1>All Projects</h1>
          {projectData.map((project) => (
            <NavLink
              key={project.id}
              to={`/our-work/${project.slug}`}
              className="project-item"
              data-title={project.title}
            >
              <img src={project.imageUrl} alt={project.title} />
            </NavLink>
          ))}
        </div>
      </section>
      <div className="hot-link">
        <Link to="/our-services">Our Services →</Link>
      </div>
    </div>
  </>
);

export default OurWork;
