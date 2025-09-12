import React from "react";
import { NavLink, Link } from "react-router-dom";
import ContentPageLayout from "../components/ContentPageLayout";
import projectData from "../data/projectData"; 
import "../styles/OurWorkPage.css";

const OurWork = () => {
  const recentProjects = projectData.filter((project) => project.recent);
  const allProjects = projectData;

  return (
    <div>
      <ContentPageLayout title="Our Work" />

      <section className="our-work-container">

        {/* Grid of recent project images */}
        <div className="projects-grid">
          <h1>Recent Projects</h1>
          {recentProjects.map((project) => (
            <NavLink 
              key={project.id} 
              to={`/our-work/${project.slug}`} 
              className="project-item"
            >
              <img src={project.imageUrl} alt={project.title} />
            </NavLink>
          ))}
        </div>

        {/* All projects displayed in creative grid */}
        <div className="projects-text-grid">
          <h1>All Projects</h1>
          {allProjects.map((project) => (
            <NavLink 
              key={project.id} 
              to={`/our-work/${project.slug}`} 
              className="project-text-card"
            >
              {project.title}
            </NavLink>
          ))}
        </div>

      </section>
      <Link to="/our-services" className="hot-link">
            See Our Services →
        </Link>
    </div>
  );
};

export default OurWork;
