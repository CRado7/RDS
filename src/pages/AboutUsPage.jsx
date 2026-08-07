import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { metaData } from "../data/metaData";
import ContentPageLayout from "../components/ContentPageLayout";
import Picture from "../../public/profile-pic.png";
import "../styles/AboutUsPage.css";

const AboutUs = () => (
  <>
    <SEO meta={metaData.aboutUs} />
    <main>
      <ContentPageLayout title="About" />
      <section className="about-container">
        <div className="about-wrapper">

          <div className="about-intro-block">
            <h2 className="about-name">Christopher.<br /><span>aka Rado.</span></h2>
            <p className="about-lead">
            Designer. Screen printer. Surfer. Snowboarder. I like making things by hand and 
            {" "}<span className="trade-label big">never settle for ordinary</span>.

            </p>
          </div>

          <div className="about-grid">
            <div className="about-cell about-cell--wide">
              <span className="about-cell-label">// the short version</span>
              <p>
                I've been making digital art longer than I've been doing this
                professionally. Got into screen printing almost a decade ago and
                never left. Grew up in Massachusetts, moved to Colorado for a
                while, came back and brought the nickname with me.
              </p>
              <p>
                I started Rado Design Studio because the alternative was watching
                small businesses pay agency prices for work that looked like
                everyone else's. That felt like a problem worth solving.
              </p>
            </div>

            <div className="about-cell">
              <span className="about-cell-label">// what I'm into</span>
              <ul className="about-list">
                <li>surfing</li>
                <li>snowboarding</li>
                <li>hiking</li>
                <li>cooking <span className="about-cell-label">(breakfast burritos)</span></li>
                <li>wild ideas</li>
                <li>wrestling my dog</li>
              </ul>
            </div>

            <div className="about-cell">
              <span className="about-cell-label">// what drives the work</span>
              <p>
                I think pushing the boundaries of what design is supposed
                to look like is genuinely fun. The best projects I've worked on
                were the ones that had too much personality to fit a template.
                Bring the weird stuff. I'm in.
              </p>
            </div>

            <div className="about-cell no-padding">
              <img src={Picture} alt="Rado" />
            </div>

            <div className="about-cell about-cell--full">
              <p className="about-pull">
                "Small businesses deserve design that slaps —<br />
                <span>without a bill that stings."</span>
              </p>
            </div>
          </div>

        </div>
      </section>
      <Link to="/our-work" className="hot-link">See the Work →</Link>
    </main>
  </>
);

export default AboutUs;
