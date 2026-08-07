import React, { useEffect } from "react";

const OpacityScroll = ({ children, className }) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 800;
      const halfScroll = maxScroll / 2;

      let newOpacity;

      if (scrollY <= halfScroll) {
        newOpacity = 0.1 + (scrollY / halfScroll) * (1 - 0.1);
      } else if (scrollY <= maxScroll) {
        newOpacity = 1 - ((scrollY - halfScroll) / halfScroll) * (1 - 0.1);
      } else {
        newOpacity = 0.1;
      }

      // Target the static title OR the marquee wrap — whichever is rendered
      const targets = document.querySelectorAll(
        ".page-title:not(.page-title--measure), .page-title-marquee-wrap"
      );
      targets.forEach((el) => {
        el.style.opacity = newOpacity;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div className={className}>{children}</div>;
};

export default OpacityScroll;
