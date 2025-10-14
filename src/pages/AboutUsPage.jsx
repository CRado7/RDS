import { React }  from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ContentPageLayout from "../components/ContentPageLayout";
import "../styles/AboutUsPage.css";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Rado Design Studio</title>
        <meta
          name="description"
          content="Learn more about Rado Design Studio — a creative studio specializing in web design, branding, and custom art creations."
        />
        <meta property="og:title" content="About Us | Rado Design Studio" />
        <meta property="og:description" content="Creative design studio crafting impactful brands through design, development, and strategy." />
        <meta property="og:image" content="https://radodesignstudio.com/assets/favicon.svg" />
        <meta property="og:url" content="https://radodesignstudio.com/about-us" />
        <meta property="og:type" content="website" />
      </Helmet>

      <main>
        <ContentPageLayout title="About Us"/>

        <section className="about-container">
          <div className="about-wrapper">

            <div className="about-content">
              <p className="intro">
                <span className="highlight">Rado Design Studio</span> is where vision
                takes shape. We craft brands, build digital experiences, and design
                visuals that resonate. Our approach is{" "}
                <span className="italic">intentional</span>,{" "}
                <span className="italic">adaptive</span>, and{" "}
                <span className="italic">uncompromising</span> in quality.
              </p>

              <p className="pull-quote">
                <span className="accent">No templates. No shortcuts.</span> Just work
                that stands apart.
              </p>

              <p className="story">
                Every project begins with a story. Whether it's a logo that captures
                your essence, a website that performs with elegance and precision, or
                campaign materials that demand attention — we translate{" "}
                <span className="underline">ideas into experiences</span> that last.
              </p>

              <p className="vertical-text">
                Creativity with purpose.
              </p>

              <p className="philosophy">
                Across landscapes, disciplines, and ideas,{" "}
                <span className="highlight">Rado</span> is more than a name — it's a
                philosophy. Born from bold beginnings, it carries a spirit of
                creativity that is direct, confident, and unafraid to stand apart.
              </p>
            </div>
          </div>
        </section>
          <Link to="/our-work" className="hot-link">
              See Our Work →
          </Link>
      </main>
    </>
  );
};

export default AboutUs;
