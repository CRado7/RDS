import { useParams, Link } from "react-router-dom";
import WorkDetailNav from "../components/WorkDetailNav";
import projectData from "../data/projectData";
import "../styles/WorkDetail.css";
import "../styles/WorkDetailSidebar.css"; // new sidebar styles

function WorkDetail() {
  const { slug } = useParams();
  const project = projectData.find((p) => p.slug === slug);

  if (!project) {
    return <div className="work-detail not-found">Project not found.</div>;
  }

  // Function to scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="work-detail-container">
      <WorkDetailNav />

      {/* Sidebar */}
      {project.content?.section && (
        <aside className="work-sidebar">
          <ul>
            <li onClick={() => scrollToSection("top")}>Top</li>
            {project.content.section.map((sec, idx) => (
              <li key={idx} onClick={() => scrollToSection(`section-${idx}`)}>
                {sec.title}
              </li>
            ))}
          </ul>
        <Link to="/our-work" className="back-link">
          ← Back to Our Work
        </Link>
        </aside>
      )}

      {/* Main Content */}
      <div className="work-detail">
        {/* Title */}
        <div className="work-detail-title">
          <h1>{project.title}</h1>
        </div>

        {/* Categories */}
        <div className="categories">
          {project.category.map((cat, idx) => (
            <span key={idx}>{cat}</span>
          ))}
        </div>

        {/* Hero Image */}
        <img src={project.imageUrl} alt={project.title} className="hero" id="top" />

        {/* Description */}
        <p className="description">{project.description}</p>

        {/* Content Sections */}
        {project.content?.section && (
          <div className="sections">
            {project.content.section.map((sec, idx) => (
              <div
                key={idx}
                className="section"
                id={`section-${idx}`}
              >
                <h2>{sec.title}</h2>
                <p>{sec.text}</p>
                {sec.image && (
                  <img
                    src={sec.image}
                    alt={sec.title}
                    className="section-image"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default WorkDetail;
