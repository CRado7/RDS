import React, { useEffect } from "react";

const OpacityScroll = ({ children, className }) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 800; // total distance for full cycle (tweak as needed)
      const halfScroll = maxScroll / 2;

      let newOpacity;

      if (scrollY <= halfScroll) {
        // fade in: from 0.1 → 1
        newOpacity = 0.1 + (scrollY / halfScroll) * (1 - 0.1);
      } else if (scrollY <= maxScroll) {
        // fade out: from 1 → 0.1
        newOpacity =
          1 - ((scrollY - halfScroll) / halfScroll) * (1 - 0.1);
      } else {
        // past maxScroll, stay at 0.1
        newOpacity = 0.1;
      }

      const title = document.querySelector(".page-title");
      if (title) {
        title.style.opacity = newOpacity;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div className={className}>{children}</div>;
};

export default OpacityScroll;
