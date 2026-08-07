import { useEffect, useRef, useState, useCallback } from "react";
import "../styles/CursorDot.css";

const CursorDot = () => {
  const cursorRef = useRef(null);
  const animRef = useRef(null);
  const mouse = useRef({ x: -200, y: -200 });
  const pos = useRef({ x: -200, y: -200 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const onMove = useCallback((e) => {
    mouse.current = { x: e.clientX, y: e.clientY };
  }, []);

  const onEnter = useCallback(() => setIsHovering(true), []);
  const onLeave = useCallback(() => setIsHovering(false), []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("mousemove", onMove);

    // Add hover detection to all interactive elements
    const addListeners = () => {
      document.querySelectorAll("a, button, [data-cursor-grow]").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    addListeners();

    // Re-add on DOM changes
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.12;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.12;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animRef.current);
      observer.disconnect();
    };
  }, [onMove, onEnter, onLeave]);

  if (isMobile) return null;

  return (
    <div
      ref={cursorRef}
      className={`cursor ${isHovering ? "cursor--grow" : ""}`}
    />
  );
};

export default CursorDot;
