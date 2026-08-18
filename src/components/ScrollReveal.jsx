import { useRef, useEffect } from "react";
import "../styles/ScrollReveal.css";

/**
 * ScrollReveal
 * Wraps any content and animates it in when it enters the viewport.
 *
 * Props:
 *   type      "up" | "blade" | "fade" | "left" | "right"  (default: "up")
 *   delay     ms before animation starts                   (default: 0)
 *   threshold fraction of element visible before trigger   (default: 0.12)
 *   as        HTML tag to render as                        (default: "div")
 *
 * Usage:
 *   <ScrollReveal type="blade">
 *     <h2>Section Title</h2>
 *   </ScrollReveal>
 *
 *   <ScrollReveal type="up" delay={150}>
 *     <p>Body content</p>
 *   </ScrollReveal>
 *
 *   // Stagger siblings manually:
 *   <ScrollReveal type="up" delay={0}>  <Card /></ScrollReveal>
 *   <ScrollReveal type="up" delay={100}><Card /></ScrollReveal>
 *   <ScrollReveal type="up" delay={200}><Card /></ScrollReveal>
 */
export default function ScrollReveal({
  children,
  type      = "up",
  delay     = 0,
  threshold = 0.12,
  className = "",
  as: Tag   = "div",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion preference — reveal immediately, no animation
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("sr-revealed");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("sr-revealed");
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref}
      className={`sr sr--${type}${className ? ` ${className}` : ""}`}
      style={{ "--sr-delay": `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
