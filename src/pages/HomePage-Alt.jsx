import React, { useState, useEffect, useRef } from "react";
import SEO from "../components/SEO";
import { metaData } from "../data/metaData";
import { NavLink, Link } from "react-router-dom";
import WorkDetailNav from "../components/WorkDetailNav";
import projectData from "../data/projectData";
import "../styles/HomePageAlt.css";

import RadoLavaLamp from "../components/RadoLavaLamp";

/* ─────────────────────────────────────────────
   Main page
───────────────────────────────────────────── */
export default function HomePageAlt() {
  const mousePos = useRef({ x: -9999, y: -9999 });

  const pageIntros = [
    {
      index: "01",
      name: "About",
      description:
        "I'm Christopher — been making things since before it was a job. Screen printing going on a decade, digital art even longer. This studio exists because small businesses deserve good design without a big agency price tag.",
      link: "/about-us",
    },
    {
      index: "02",
      name: "Work",
      description:
        "Surf brands, breweries, tattoo shops, ski companies, medical startups, print shops. Every project is different. Every one gets the same attention.",
      link: "/our-work",
    },
    {
      index: "03",
      name: "Services",
      description:
        "Web design, branding, screen printing, custom art, ongoing support. I keep it under one roof so nothing falls through the cracks.",
      link: "/our-services",
    },
    {
      index: "04",
      name: "Packages",
      description:
        "Real pricing for real businesses. Whether you need a logo or a full brand + website launch, there's a starting point that won't make you wince.",
      link: "/packages",
    },
    {
      index: "05",
      name: "Contact",
      description:
        "No forms, no pitch decks. Just a conversation about what you're building and whether I'm the right person to help.",
      link: "/contact",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const introRefs = useRef([]);

  // Global mouse tracking for warp effect
  useEffect(() => {
    const onMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Scroll observer for intro section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            setActiveIndex(Number(entry.target.dataset.index));
        });
      },
      { root: null, threshold: 0.5 }
    );
    introRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  const featuredProjects = projectData.filter((p) => p.featured);

  return (
    <>
      <SEO meta={metaData.home} />
      <WorkDetailNav />

      {/* ════════════════════════════════
          HERO — Full viewport RADO warp
      ════════════════════════════════ */}
      <section className="hero-rado">

        {/* The giant RADO — Vector Bulge Glass */}
        <div className="hero-word-wrap">
          <RadoLavaLamp />
          <div className="hero-studio-tag">
            <span className="hero-studio-text">
              <span>D</span>
              <span>e</span>
              <span>s</span>
              <span>i</span>
              <span>g</span>
              <span>n</span>
              <span> </span>
              <span>S</span>
              <span>t</span>
              <span>u</span>
              <span>d</span>
              <span>i</span>
              <span>o</span>
            </span>
          </div>
        </div>


        {/* Bottom row */}
        <div className="hero-rule-bottom">
          <span className="hero-tagline">Design · Print · Web · Art</span>
          <Link to="/our-work" className="hero-cta-link">See the work ↗</Link>
        </div>
      </section>

      {/* ════════════════════════════════
          SCROLL INTRO — numbered list
      ════════════════════════════════ */}
      <section className="intros">
        <div className="intros-sticky">
          <div className="intros-left">
            {pageIntros.map((page, i) => (
              <div
                key={i}
                className={`intro-row ${activeIndex === i ? "active" : ""}`}
                onClick={() => setActiveIndex(i)}
              >
                <span className="intro-num">{page.index}</span>
                <h2 className="intro-title">{page.name}</h2>
                <div className="intro-mobile-desc">
                  <p>{page.description}</p>
                  <NavLink to={page.link} className="intro-link">Explore →</NavLink>
                </div>
              </div>
            ))}
          </div>

          <div className="intros-right desktop-only">
            {pageIntros.map((page, i) => (
              <div
                key={i}
                className={`intro-desc ${activeIndex === i ? "active" : "inactive"}`}
              >
                <p>{page.description}</p>
                <NavLink to={page.link} className="intro-link">Explore →</NavLink>
              </div>
            ))}
          </div>
        </div>

        <div className="scroll-sections">
          {pageIntros.map((_, i) => (
            <div
              key={i}
              className="scroll-trigger"
              ref={(el) => (introRefs.current[i] = el)}
              data-index={i}
            />
          ))}
        </div>
      </section>

      {/* ════════════════════════════════
          FEATURED WORK
      ════════════════════════════════ */}
      <section className="home-work">
        <div className="home-work-header">
          <span className="section-label">Featured Work</span>
          <Link to="/our-work" className="home-work-all">All projects →</Link>
        </div>
        <div className="home-work-grid">
          {featuredProjects.map((project, i) => (
            <NavLink
              key={project.id}
              to={`/our-work/${project.slug}`}
              className={`home-work-item item-${i}`}
              data-cursor-grow
            >
              <div className="home-work-img">
                <img src={project.imageUrl} alt={project.title} />
              </div>
              <div className="home-work-meta">
                <span className="home-work-title">{project.title}</span>
                <span className="home-work-cats">
                  {project.category.slice(0, 2).join(" / ")}
                </span>
              </div>
            </NavLink>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════
          CTA
      ════════════════════════════════ */}
      <section className="home-cta-block">
        <div className="home-cta-inner">
          <p className="home-cta-sub">// ready when you are</p>
          <h2 className="home-cta-headline">Got a wild idea?</h2>
          <p className="home-cta-body">
            Doesn't have to be fully formed. I like working through the
            messy stuff. Reach out and let's figure out if we're a good fit.
          </p>
          <Link to="/contact" className="home-cta-btn" data-cursor-grow>
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}