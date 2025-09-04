import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

export default function HomePage() {
  const homePageLinks = [
    { name: "about us", url: "/about-us" },
    { name: "our work", url: "/our-work" },
    { name: "our services", url: "/our-services" },
    { name: "packages", url: "/packages" },
    { name: "contact", url: "/contact" },
  ];

  return (
      <div className="home-container">
        <div className="overlay">
            <div className="content">
                <h2>RadoDesignStudio</h2>

                    <div className="squares">
                        {homePageLinks.map((link) => (
                        <div className="square-wrapper" key={link.name}>
                            <Link to={link.url} className="square-link" />
                            <span className="label">{link.name}</span>
                        </div>
                        ))}
                    </div>

                <a href="mailto:christopher.ferraro34@gmail.com">contact</a>
            </div>
        </div>
    </div>
  );
}
