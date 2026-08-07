import React, { useRef, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/ContentPageLayout.css";

const ContentPageLayout = ({ title }) => {
  const navItems = [
    { label: "About",    path: "/about-us"    },
    { label: "Work",     path: "/our-work"    },
    { label: "Services", path: "/our-services" },
    { label: "Packages", path: "/packages"    },
    { label: "Contact",  path: "/contact"     },
  ];

  const titleRef = useRef(null);
  const [overflows, setOverflows] = useState(false);

  // After mount (and on resize) check whether the text is wider than the screen.
  // If yes, switch to marquee mode.
  useEffect(() => {
    if (!titleRef.current) return;

    const check = () => {
      const el = titleRef.current;
      if (!el) return;
      // scrollWidth > clientWidth of the parent means it overflows
      setOverflows(el.scrollWidth > el.parentElement.clientWidth);
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [title]);

  return (
    <div className="fullscreen-nav">
      <Link to="/" className="home-square">RADO</Link>

      <nav className="nav-links">
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path}>{item.label}</NavLink>
        ))}
      </nav>

      {title && (
        overflows ? (
          /* ── Marquee mode: title wider than viewport ── */
          <div className="page-title-marquee-wrap" aria-label={title}>
            {/* Two copies so the scroll is seamless */}
            <div className="page-title-marquee-track">
              <span className="page-title-marquee-text" aria-hidden>{title}&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;</span>
              <span className="page-title-marquee-text" aria-hidden>{title}&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;</span>
            </div>
          </div>
        ) : (
          /* ── Static mode: title fits ── */
          <h1 className="page-title" ref={titleRef}>{title}</h1>
        )
      )}

      {/* Hidden measuring element — always rendered so useEffect can measure */}
      {title && (
        <h1
          className="page-title page-title--measure"
          ref={overflows ? undefined : titleRef}
          aria-hidden
        >
          {title}
        </h1>
      )}
    </div>
  );
};

export default ContentPageLayout;
