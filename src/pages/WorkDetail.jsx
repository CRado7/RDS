import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import SEO from "../components/SEO";
import { metaData } from "../data/metaData";
import WorkDetailNav from "../components/WorkDetailNav";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import LightboxInline from "../components/LightboxInline";
import Box3D from "../components/Box3D";
import BrowserFrame from "../components/BrowserFrame";
import LogoShowcase from "../components/LogoShowcase";
import Filmstrip from "../components/Filmstrip";
import BrandColors from "../components/BrandColors";
import TypeDisplay from "../components/TypeDisplay";
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
  const [activeSides, setActiveSides] = useState({});
  const currentIdx  = projectData.findIndex((p) => p.slug === slug);
  const prevProject = projectData[(currentIdx - 1 + projectData.length) % projectData.length];
  const nextProject = projectData[(currentIdx + 1) % projectData.length];

  // Track whether the SECTION that opened the modal has whiteBg
  // so the modal overlay can match
  const [modalWhiteBg, setModalWhiteBg] = useState(false);

  const sectionRefs = useRef({});

  if (!project) return <div className="work-detail not-found">Project not found.</div>;

  const scrollToSection = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.15 }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [project]);

  useEffect(() => { document.body.style.overflow = modalOpen ? "hidden" : ""; }, [modalOpen]);

  // whiteBg for current modal image comes from the image object itself
  const currentImgWhiteBg = currentImages[currentIndex]?.whiteBg || false;

  const openModal = (images, idx) => {
    setCurrentImages(images);
    setCurrentIndex(idx);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);
  const showPrev = () => setCurrentIndex((p) => (p === 0 ? currentImages.length - 1 : p - 1));
  const showNext = () => setCurrentIndex((p) => (p === currentImages.length - 1 ? 0 : p + 1));

  const getDisplay = (sec) => {
    const d = Array.isArray(sec.imageDisplay) ? sec.imageDisplay : [sec.imageDisplay];
    if (sec.beforeAfter)   return "beforeAfter";
    if (sec.packageModel)  return "packageModel";
    if (sec.lightBox)      return "lightbox";
    if (d.includes("browser"))            return "browser";
    if (d.includes("logo-showcase"))      return "logoShowcase";
    if (d.includes("filmstrip"))          return "filmstrip";
    if (d.includes("brand-colors"))       return "brandColors";
    if (d.includes("type-display"))       return "typeDisplay";
    if (d.includes("floating-animation")) return "floating";
    if (d.includes("grid"))               return "grid";
    return "inline";
  };

  return (
    <>
      <SEO meta={metaData.workDetail(slug, project.title)} />
      <div className="work-detail-container">
        <WorkDetailNav />

        {/* ── Sidebar ── */}
        {project.content?.section && (
          <aside className="work-sidebar">
            <ul>
              <li onClick={() => scrollToSection("top")} className={activeSection === "top" ? "active" : ""}>Top</li>
              {project.content.section.map((sec, idx) => (
                <li key={idx} onClick={() => scrollToSection(`section-${idx}`)} className={activeSection === `section-${idx}` ? "active" : ""}>
                  {sec.title}
                </li>
              ))}
            </ul>
            <Link to="/our-work" className="back-link">← Back to Our Work</Link>
          </aside>
        )}

        {/* ── Main ── */}
        <div className="work-detail" ref={(el) => (sectionRefs.current["top"] = el)}>
          <div className="work-detail-title" id="top"><h1>{project.title}</h1></div>

          <div className="categories">
            {project.category.map((cat, idx) => <span key={idx}>{cat}</span>)}
          </div>

          <picture>
            <source srcSet={Array.isArray(project.mobileBanner) ? project.mobileBanner[0] : project.mobileBanner} media="(max-width: 768px)" />
            <img src={Array.isArray(project.banner) ? project.banner[0] : project.banner} alt={project.title} className="hero" />
          </picture>

          <p className="description">{project.description}</p>

          {project.content.section.map((sec, idx) => {
            const display = getDisplay(sec);

            return (
              <div key={idx} className="section" id={`section-${idx}`} ref={(el) => (sectionRefs.current[`section-${idx}`] = el)}>
                <h2>{sec.title}</h2>

                {display === "brandColors" && sec.colors && <BrandColors colors={sec.colors} />}
                {display === "typeDisplay" && sec.fonts && <TypeDisplay fonts={sec.fonts} />}

                {sec.image?.length > 0 && (
                  <>
                    {display === "browser"      && <BrowserFrame images={sec.image} url={sec.url} />}
                    {display === "logoShowcase" && <LogoShowcase images={sec.image} />}
                    {display === "filmstrip"    && <Filmstrip images={sec.image} />}
                    {display === "lightbox"     && <LightboxInline images={sec.image} />}

                    {display === "beforeAfter" && (
                      <BeforeAfterSlider
                        before={sec.image[1]?.src || sec.image[1]}
                        after={sec.image[0]?.src || sec.image[0]}
                      />
                    )}

                    {display === "packageModel" && (
                      <Box3D
                        images={["/Chung-Li-Package/Right.png","/Chung-Li-Package/Left.png","/Chung-Li-Package/Top.png","/Chung-Li-Package/Bottom.png","/Chung-Li-Package/Front.png","/Chung-Li-Package/Back.png"]}
                        size={[1,1.64,0.75]} autoRotate={true}
                      />
                    )}

                    {/* Floating grid — apparel / skis */}
                    {display === "floating" && (
                      <div className="image-container grid floating-animation">
                        {sec.image.map((imgObj, imgIdx) => {
                          const randomFloat = (Math.random() * 0.6).toFixed(2) + "s";
                          const side = activeSides[imgIdx] || "front";
                          if (imgObj.frontBack) {
                            const activeSrc = side === "front" ? imgObj.front || imgObj.back : imgObj.back || imgObj.front;
                            return (
                              <div key={imgIdx} className="section-image-wrapper bubble-wrapper" style={{ "--float-random": randomFloat }}>
                                <div className="bubble">
                                  <img src={activeSrc} alt={`${imgObj.caption} ${side}`} className="section-image" onClick={() => openModal(sec.image, imgIdx)} />
                                </div>
                                <div className="bubble-toggle">
                                  {imgObj.front && <button className={`toggle-btn ${side === "front" ? "active" : ""}`} onClick={() => setActiveSides(p => ({ ...p, [imgIdx]: "front" }))} />}
                                  {imgObj.back  && <button className={`toggle-btn ${side === "back"  ? "active" : ""}`} onClick={() => setActiveSides(p => ({ ...p, [imgIdx]: "back"  }))} />}
                                </div>
                              </div>
                            );
                          }
                          const imgSrc = imgObj.src || imgObj;
                          return (
                            <div key={imgIdx} className="section-image-wrapper bubble-wrapper" style={{ "--float-random": randomFloat }}>
                              <div className="bubble">
                                <img src={imgSrc} alt={imgObj.caption || `${sec.title} ${imgIdx + 1}`} className="section-image" onClick={() => openModal(sec.image, imgIdx)} />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Grid — per-card whiteBg from imgObj.whiteBg */}
                    {display === "grid" && (
                      <div className="image-container grid">
                        {sec.image.map((imgObj, imgIdx) => {
                          const imgSrc = imgObj.src || imgObj;
                          const cardWhite = imgObj.whiteBg === true;
                          return (
                            <div
                              key={imgIdx}
                              className={`section-image-wrapper${cardWhite ? " card-white-bg" : ""}`}
                              onClick={() => openModal(sec.image, imgIdx)}
                            >
                              <div className="bubble">
                                <img
                                  src={imgSrc}
                                  alt={imgObj.caption || `${sec.title} ${imgIdx + 1}`}
                                  className="section-image"
                                />
                              </div>
                              {imgObj.caption && <span className="img-caption">{imgObj.caption}</span>}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Inline / single */}
                    {display === "inline" && (
                      <div className="image-container inline-block">
                        {sec.image.map((imgObj, imgIdx) => {
                          const side = activeSides[imgIdx] || "front";
                          if (imgObj.frontBack) {
                            const activeSrc = side === "front" ? imgObj.front || imgObj.back : imgObj.back || imgObj.front;
                            return (
                              <div key={imgIdx} className="section-image-wrapper bubble-wrapper">
                                <div className="bubble">
                                  <img src={activeSrc} alt={`${imgObj.caption} ${side}`} className="section-image" onClick={() => openModal(sec.image, imgIdx)} />
                                </div>
                                <div className="bubble-toggle">
                                  {imgObj.front && <button className={`toggle-btn ${side === "front" ? "active" : ""}`} onClick={() => setActiveSides(p => ({ ...p, [imgIdx]: "front" }))} />}
                                  {imgObj.back  && <button className={`toggle-btn ${side === "back"  ? "active" : ""}`} onClick={() => setActiveSides(p => ({ ...p, [imgIdx]: "back"  }))} />}
                                </div>
                              </div>
                            );
                          }
                          const imgSrc = imgObj.src || imgObj;
                          return (
                            <div key={imgIdx} className="section-image-wrapper" onClick={() => openModal(sec.image, imgIdx)}>
                              <div className="bubble">
                                <img src={imgSrc} alt={imgObj.caption || `${sec.title} ${imgIdx + 1}`} className="section-image" />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}

          {/* ── Modal ──
              - overlay goes dark (default) or white (when current image has whiteBg: true)
              - modal-image gets width: 100% so SVGs with no intrinsic size render correctly */}
          {modalOpen && (
            <div
              className={`modal-overlay${currentImgWhiteBg ? " modal-overlay--white" : ""}`}
              onClick={closeModal}
            >
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className={`modal-close${currentImgWhiteBg ? " modal-close--dark" : ""}`} onClick={closeModal}>×</button>
                {currentImages.length > 1 && <button className="modal-prev" onClick={showPrev}>‹</button>}
                <div className="modal-image-wrapper">
                  {currentImages[currentIndex]?.frontBack ? (
                    <>
                      <img
                        src={activeSides[currentIndex] === "back" ? currentImages[currentIndex].back : currentImages[currentIndex].front}
                        alt={currentImages[currentIndex].caption || `Modal ${currentIndex + 1}`}
                        className="modal-image"
                      />
                      <div className="bubble-toggle modal-bubble-toggle">
                        <button className={`toggle-btn ${activeSides[currentIndex] !== "back"  ? "active" : ""}`} onClick={() => setActiveSides(p => ({ ...p, [currentIndex]: "front" }))} />
                        <button className={`toggle-btn ${activeSides[currentIndex] === "back"  ? "active" : ""}`} onClick={() => setActiveSides(p => ({ ...p, [currentIndex]: "back"  }))} />
                      </div>
                    </>
                  ) : (
                    <img
                      src={currentImages[currentIndex]?.src || currentImages[currentIndex]}
                      alt={currentImages[currentIndex]?.caption || `Modal ${currentIndex + 1}`}
                      className={`modal-image${currentImgWhiteBg ? " modal-image--on-white" : ""}`}
                    />
                  )}
                </div>
                {currentImages[currentIndex]?.caption && (
                  <p className={`modal-caption${currentImgWhiteBg ? " modal-caption--dark" : ""}`}>
                    {currentImages[currentIndex].caption}
                  </p>
                )}
                {currentImages.length > 1 && <button className="modal-next" onClick={showNext}>›</button>}
              </div>
            </div>
          )}

          <div className="project-loop-nav">
            <Link
              to={`/our-work/${prevProject.slug}`}
              className="project-loop-btn project-loop-btn--prev"
            >
              <span className="project-loop-direction">← Prev</span>
              <span className="project-loop-title">{prevProject.title}</span>
            </Link>

            <Link to="/our-work" className="project-loop-all">
              All Work
            </Link>

            <Link
              to={`/our-work/${nextProject.slug}`}
              className="project-loop-btn project-loop-btn--next"
            >
              <span className="project-loop-direction">Next →</span>
              <span className="project-loop-title">{nextProject.title}</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkDetail;
