import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WorkDetailNav from "../components/WorkDetailNav";
import "../styles/NotFoundPage.css";

const NAV_LINKS = [
  { label: "Home",     path: "/"             },
  { label: "Work",     path: "/our-work"     },
  { label: "Services", path: "/our-services" },
  { label: "Packages", path: "/packages"     },
  { label: "Contact",  path: "/contact"      },
];

export default function NotFoundPage() {
  // Randomly kick off an extra glitch burst every few seconds
  const [extraGlitch, setExtraGlitch] = useState(false);

  useEffect(() => {
    const schedule = () => {
      const delay = 2500 + Math.random() * 4000;
      return setTimeout(() => {
        setExtraGlitch(true);
        setTimeout(() => setExtraGlitch(false), 400);
        schedule();
      }, delay);
    };
    const t = schedule();
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <WorkDetailNav />

      <main className="nf-page">

        {/* ── Glitching 404 ── */}
        <div className="nf-hero">
          <div className={`nf-glitch-wrap${extraGlitch ? " nf-extra-glitch" : ""}`}>
            <span className="nf-number" aria-label="404">404</span>
          </div>

          <div className="nf-copy">
            <p className="nf-headline">Wiped out.</p>
            <p className="nf-sub">
              This page doesn't exist — but the rest of the site does.
            </p>
          </div>
        </div>

        {/* ── Nav links ── */}
        <nav className="nf-nav">
          <span className="nf-nav-label">// where to?</span>
          <ul className="nf-nav-list">
            {NAV_LINKS.map(({ label, path }) => (
              <li key={path}>
                <Link to={path} className="nf-nav-link">
                  <span className="nf-nav-arrow">→</span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      </main>
    </>
  );
}
