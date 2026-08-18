import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/PageTransition.css";

/**
 * PageTransition
 * Wrap the <Routes> block in App.jsx with this component.
 * On every route change a lime blade sweeps in from the left,
 * covers the screen while React swaps content, then pulls away right.
 *
 * Total duration: 550ms (in 240ms + brief pause + out 240ms)
 */
export default function PageTransition({ children }) {
  const location  = useLocation();
  const prevPath  = useRef(location.pathname);
  const [phase, setPhase] = useState("idle"); // idle | in | out

  useEffect(() => {
    if (location.pathname === prevPath.current) return;
    prevPath.current = location.pathname;

    // Step 1 — blade sweeps in
    setPhase("in");

    // Step 2 — React has already rendered new page beneath the blade;
    //           pull the blade away
    const t1 = setTimeout(() => setPhase("out"), 260);

    // Step 3 — done
    const t2 = setTimeout(() => setPhase("idle"), 560);

    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [location.pathname]);

  return (
    <>
      {children}
      {phase !== "idle" && (
        <div className={`pt-blade pt-blade--${phase}`} aria-hidden />
      )}
    </>
  );
}
