import { React, useEffect } from "react";

const OpacityScroll = ({ children, className }) => {
    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
          const maxScroll = 300; // adjust how far to scroll for full opacity
          let newOpacity = Math.min(scrollY / maxScroll, 1);
    
          // make sure it never goes below 0.1
          newOpacity = Math.max(newOpacity, 0.1);
    
          const title = document.querySelector(".page-title");
          if (title) {
            title.style.opacity = newOpacity;
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    return <div className={className}>{children}</div>;
}

export default OpacityScroll;