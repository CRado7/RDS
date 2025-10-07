import { useEffect, useState, useRef } from "react";
import "../styles/CursorDot.css";

const CursorDot = () => {
  const dotRef = useRef(null);
  const animationRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [dotPosition, setDotPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = () => {
      if (dotRef.current) {
        dotRef.current.classList.remove('click-pulse');
        void dotRef.current.offsetWidth;
        dotRef.current.classList.add('click-pulse');
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener('click', handleClick); // <-- FIXED
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      setDotPosition(prev => {
        const dx = mousePosition.x - prev.x;
        const dy = mousePosition.y - prev.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // If we're very close, snap to position and stop animating
        if (distance < 0.5) {
          cancelAnimationFrame(animationRef.current);
          return { x: mousePosition.x, y: mousePosition.y };
        }

        return {
          x: prev.x + dx * 0.8,
          y: prev.y + dy * 0.8,
        };
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, [mousePosition]);

  return (
    <div className="cursor-dot"
      ref={dotRef}
      style={{
        position: "fixed",
        top: dotPosition.y,
        left: dotPosition.x,
        width: "8px",
        height: "8px",
        backgroundColor: "#08FFAD",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
        mixBlendMode: "difference",
      }}
    />
  );
};

export default CursorDot;
