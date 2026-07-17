"use client";

import { useEffect, useState } from "react";

export default function Background() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setOpacity(1);
    };

    const handleMouseLeave = () => {
      setOpacity(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div className="blueprint-grid"></div>

      <div className="vignette"></div>

      {/* Interactive cursor glow highlights the blueprint grid on desktop */}
      <div
        className="cursor-glow hidden lg:block"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          opacity: opacity,
        }}
      ></div>

      <div className="crop tl"></div>
      <div className="crop tr"></div>
      <div className="crop bl"></div>
      <div className="crop br"></div>
    </>
  );
}