import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import WorkDetailNav from "../components/WorkDetailNav";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import LightboxInline from "../components/LightBoxInline";
import Box3D from "../components/Box3D";
import projectData from "../data/projectData";
import "../styles/WorkDetail.css";
import "../styles/WorkDetailSidebar.css";

function WorkDetail() {
  const { slug } = useParams();
  const project = projectData.find((p) => p.slug === slug);
  const [activeSection, setActiveSection] = useState("top");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isBeforeAfter, setIsBeforeAfter] = useState(false); 
  const [activeSides, setActiveSides] = useState({}); // <-- store sides per image
  const sectionRefs = useRef({});

  if (!project) {
    return <div className="work-detail not-found">Project not found.</div>;
  }

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.15 }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [project]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
  }, [modalOpen]);

  const openModal = (images, idx, beforeAfter = false) => {
    setCurrentImages(images);
    setCurrentIndex(idx);
    setIsBeforeAfter(beforeAfter);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setIsBeforeAfter(false);
  };

  const showPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev === currentImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="work-detail-container">
      <WorkDetailNav />

      {/* Sidebar */}
      {project.content?.section && (
        <aside className="work-sidebar">
          <ul>
            <li
              onClick={() => scrollToSection("top")}
              className={activeSection === "top" ? "active" : ""}
            >
              Top
            </li>
            {project.content.section.map((sec, idx) => (
              <li
                key={idx}
                onClick={() => scrollToSection(`section-${idx}`)}
                className={activeSection === `section-${idx}` ? "active" : ""}
              >
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
      <div
        className="work-detail"
        ref={(el) => (sectionRefs.current["top"] = el)}
      >
        <div className="work-detail-title" id="top">
          <h1>{project.title}</h1>
        </div>

        {/* Categories */}
        <div className="categories">
          {project.category.map((cat, idx) => (
            <span key={idx}>{cat}</span>
          ))}
        </div>

        {/* Hero Image */}
        <picture>
          <source
            srcSet={
              Array.isArray(project.mobileBanner)
                ? project.mobileBanner[0]
                : project.mobileBanner
            }
            media="(max-width: 768px)"
          />
          <img
            src={
              Array.isArray(project.banner)
                ? project.banner[0]
                : project.banner
            }
            alt={project.title}
            className="hero"
          />
        </picture>

        {/* Description */}
        <p className="description">{project.description}</p>

        {/* Content Sections */}
        {project.content.section.map((sec, idx) => (
          <div
            key={idx}
            className="section"
            id={`section-${idx}`}
            ref={(el) => (sectionRefs.current[`section-${idx}`] = el)}
          >
            <h2>{sec.title}</h2>

            {/* Images Container */}
            {sec.image?.length > 0 && (
              <div
                className={`image-container ${
                  Array.isArray(sec.imageDisplay)
                    ? sec.imageDisplay.join(" ")
                    : sec.imageDisplay
                }`}
              >
                {sec.lightBox ? (
                  <LightboxInline images={sec.image} /> 
                ) : sec.beforeAfter ? (
                  <BeforeAfterSlider
                    before={sec.image[1].src || sec.image[1]}
                    after={sec.image[0].src || sec.image[0]}
                  />
                ) : sec.packageModel ? (
                  <Box3D 
                    image="/Template.png" 
                    size={[1,1.64,1]} 
                    autoRotate={false} 
                  />
                ) : (
                  sec.image.map((imgObj, imgIdx) => {
                    // If front/back image
                    if (imgObj.frontBack) {
                      const side = activeSides[imgIdx] || "front";
                      const activeSrc =
                        side === "front"
                          ? imgObj.front || imgObj.back
                          : imgObj.back || imgObj.front;

                      return (
                        <div key={imgIdx} className="section-image-wrapper bubble-wrapper">
                          <div className="bubble">
                            <img
                              src={activeSrc}
                              alt={`${imgObj.caption} ${side}`}
                              className="section-image"
                              onClick={() => openModal(sec.image, imgIdx, false)}
                            />
                          </div>

                          {/* Toggle dots */}
                          <div className="bubble-toggle">
                            {imgObj.front && (
                              <button
                                className={`toggle-btn ${side === "front" ? "active" : ""}`}
                                onClick={() =>
                                  setActiveSides((prev) => ({
                                    ...prev,
                                    [imgIdx]: "front",
                                  }))
                                }
                              />
                            )}
                            {imgObj.back && (
                              <button
                                className={`toggle-btn ${side === "back" ? "active" : ""}`}
                                onClick={() =>
                                  setActiveSides((prev) => ({
                                    ...prev,
                                    [imgIdx]: "back",
                                  }))
                                }
                              />
                            )}
                          </div>
                        </div>
                      );
                    }

                    // Normal single image
                    const imgSrc = imgObj.src || imgObj;
                    return (
                      <div key={imgIdx} className="section-image-wrapper bubble-wrapper">
                        <div className="bubble">
                          <img
                            src={imgSrc}
                            alt={imgObj.caption || `${sec.title} ${imgIdx + 1}`}
                            className="section-image"
                            onClick={() => openModal(sec.image, imgIdx, false)}
                          />
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            )}
          </div>
        ))}

        {/* Modal */}
        {modalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>×</button>

              {currentImages.length > 1 && (
                <button className="modal-prev" onClick={showPrev}>‹</button>
              )}

              <div className="modal-image-wrapper">
                {/* If image has front/back */}
                {currentImages[currentIndex].frontBack ? (
                  <>
                    <img
                      src={
                        activeSides[currentIndex] === "back"
                          ? currentImages[currentIndex].back
                          : currentImages[currentIndex].front
                      }
                      alt={
                        currentImages[currentIndex].caption ||
                        `Modal ${currentIndex + 1}`
                      }
                      className="modal-image"
                    />

                    {/* Bubble toggle under the image */}
                    <div className="bubble-toggle modal-bubble-toggle">
                      <button
                        className={`toggle-btn ${
                          activeSides[currentIndex] !== "back" ? "active" : ""
                        }`}
                        onClick={() =>
                          setActiveSides((prev) => ({
                            ...prev,
                            [currentIndex]: "front",
                          }))
                        }
                      />
                      <button
                        className={`toggle-btn ${
                          activeSides[currentIndex] === "back" ? "active" : ""
                        }`}
                        onClick={() =>
                          setActiveSides((prev) => ({
                            ...prev,
                            [currentIndex]: "back",
                          }))
                        }
                      />
                    </div>
                  </>
                ) : (
                  <img
                    src={currentImages[currentIndex].src || currentImages[currentIndex]}
                    alt={
                      currentImages[currentIndex].caption ||
                      `Modal ${currentIndex + 1}`
                    }
                    className="modal-image"
                  />
                )}
              </div>

              {currentImages[currentIndex].caption && (
                <p className="modal-caption">{currentImages[currentIndex].caption}</p>
              )}

              {currentImages.length > 1 && (
                <button className="modal-next" onClick={showNext}>›</button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WorkDetail;
