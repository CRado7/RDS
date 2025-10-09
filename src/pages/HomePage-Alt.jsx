import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import WorkDetailNav from "../components/WorkDetailNav";
import projectData from "../data/projectData";
import "../styles/HomePageAlt.css";

export default function HomePageAlt() {
  const pageIntros = [
    { name: "about", description: "Rado Design Studio blends creativity and strategy to make brands unforgettable.", link: "/about-us" },
    { name: "our work", description: "We’ve collaborated with breweries, tattoo shops, lifestyle brands, and innovators of all kinds.", link: "/our-work" },
    { name: "services", description: "From web design and development to logo design and custom art — we bring your brand to life.", link: "/our-services" },
    { name: "packages", description: "We don’t do one-size-fits-all. Every brand is unique, and our packages are made to match.", link: "/packages" },
    { name: "contact", description: "Got an idea? Let’s build something bold together. We’re always down for a good collab.", link: "/contact" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const introRefs = useRef([]);
  const [animationPlayedRecently, setAnimationPlayedRecently] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);

  // --- Intersection observer for scroll highlights ---
  useEffect(() => {
    const observerOptions = { root: null, threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.dataset.index);
        if (entry.isIntersecting) setActiveIndex(index);
      });
    }, observerOptions);

    introRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  // --- Animation logic (play only once every 4 hours) ---
  useEffect(() => {
    const lastPlayed = localStorage.getItem("radoIntroPlayedTime");
    const now = Date.now();
    const FOUR_HOURS = 4 * 60 * 60 * 1000;

    if (lastPlayed && now - Number(lastPlayed) < FOUR_HOURS) {
      // animation recently played
      setAnimationPlayedRecently(true);
      setAnimationDone(true);
      document.body.style.overflow = "auto";
      document.body.classList.remove("intro-playing");
    } else {
      // play the animation
      document.body.style.overflow = "hidden";
      document.body.classList.add("intro-playing");

      const timer = setTimeout(() => {
        setAnimationDone(true);
        document.body.style.overflow = "auto";
        document.body.classList.remove("intro-playing");
        localStorage.setItem("radoIntroPlayedTime", Date.now().toString());
      }, 4000);

      return () => {
        clearTimeout(timer);
        document.body.classList.remove("intro-playing");
      };
    }
  }, []);

  return (
    <>
        {animationDone && (
        <div
            className="navbar-wrapper show"
            style={{ transitionDelay: animationPlayedRecently ? "0s" : "0.4s" }}
        >
            <WorkDetailNav />
        </div>
        )}

      {/* Always show hero — skip animation if seen recently */}
      <section
        className={`intro-animation ${
          animationPlayedRecently ? "skip-animation" : ""
        }`}
      >
        <div className="square-wrapper">
          <div className="split-line top"></div>
          <div className="split-line bottom"></div>
          <div className="square">
            <h1>
              Rado
              <br />
              Design
              <br />
              Studio
            </h1>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="intros">
        <div className="intros-container">
          <div className="intro-list">
            <ul>
              {pageIntros.map((page, index) => (
                <li key={index} className={activeIndex === index ? "active" : ""}>
                  <h2>{page.name}</h2>
                </li>
              ))}
            </ul>
          </div>

          <div className="intro-description">
            {pageIntros.map((page, index) => (
                <div
                key={index}
                className={`description-item ${activeIndex === index ? "active" : "inactive"}`}
                >
                <p className="description-text" style={{ transitionDelay: "0.1s" }}>
                    {page.description}
                </p>
                <NavLink
                    to={page.link}
                    className="intro-link"
                    style={{ transitionDelay: "0.3s" }}
                >
                    Learn More
                </NavLink>
                </div>
            ))}
            </div>
        </div>

        <div className="scroll-sections">
          {pageIntros.map((_, index) => (
            <div
              key={index}
              className="scroll-trigger"
              ref={(el) => (introRefs.current[index] = el)}
              data-index={index}
            ></div>
          ))}
        </div>
      </section>

      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid home">
          {projectData
            .filter((project) => project.featured)
            .map((project) => (
              <NavLink
                key={project.id}
                to={`/our-work/${project.slug}`}
                className="project-item"
              >
                <img src={project.imageUrl} alt={project.title} />
              </NavLink>
            ))}
        </div>
        <div className="hot-link wide">
          <Link to="/our-work" className="contact-link">
            See It All →
          </Link>
        </div>
      </section>

      <section className="collaboration">
        <div className="collab-text">
          <h2>Got a wild idea?</h2>
          <p>
            Let’s smash it together. Tattoos, brews, lifestyle chaos—if it’s bold,
            we’re in. No pitches, no BS—just making cool stuff and getting it seen.
          </p>
          <a href="/contact" className="collab-button">
            Collab With Us
          </a>
        </div>
      </section>
    </>
  );
}
