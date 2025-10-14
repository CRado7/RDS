import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { NavLink, Link } from "react-router-dom";
import WorkDetailNav from "../components/WorkDetailNav";
import projectData from "../data/projectData";
import "../styles/HomePageAlt.css";

export default function HomePageAlt() {
    const pageIntros = [
        { 
          name: "about", 
          description: "Rado Design Studio is where creative precision meets bold strategy. We craft brand identities that don’t just look good — they command attention and leave a lasting mark.", 
          link: "/about-us" 
        },
        { 
          name: "our work", 
          description: "From breweries to tattoo studios and lifestyle disruptors, we partner with brands that dare to be different. Each project is built with intent, edge, and a touch of rebellion.", 
          link: "/our-work" 
        },
        { 
          name: "services", 
          description: "We design, develop, and refine every touchpoint of your brand — from digital presence to visual identity. The result: sleek, powerful work that cuts through the noise.", 
          link: "/our-services" 
        },
        { 
          name: "packages", 
          description: "No templates. No shortcuts. Our packages are built to fit your brand’s ambitions — scalable, intentional, and crafted for impact.", 
          link: "/packages" 
        },
        { 
          name: "contact", 
          description: "Ready to make waves? Reach out and let’s build something that turns heads, challenges the norm, and moves your brand forward.", 
          link: "/contact" 
        },
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
        <Helmet>
            <title>Rado Design Studio | Web Design, Branding & Creative Development</title>
            <meta
                name="description"
                content="We help brands rise through clarity, creativity, and craftsmanship. From websites to brand identity and custom visuals—your vision, in our hands."
            />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://www.radodesignstudio.com/" />
        </Helmet>
        
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
                <li
                    key={index}
                    className={`intro-item ${activeIndex === index ? "active" : ""}`}
                    onClick={() => setActiveIndex(index)}
                >
                    <h2>{page.name}</h2>

                    {/* Mobile description (shows only under active item) */}
                    <div className="mobile-description">
                    {activeIndex === index && (
                        <div className="description-item active">
                        <p>{page.description}</p>
                        <NavLink to={page.link} className="intro-link">
                            Learn More
                        </NavLink>
                        </div>
                    )}
                    </div>
                </li>
                ))}
            </ul>
        </div>

        {/* Desktop description area */}
        <div className="intro-description desktop-only">
        {pageIntros.map((page, index) => (
            <div
            key={index}
            className={`description-item ${
                activeIndex === index ? "active" : "inactive"
            }`}
            >
            <p>{page.description}</p>
            <NavLink to={page.link} className="intro-link">
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
