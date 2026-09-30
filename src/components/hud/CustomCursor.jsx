'use client';

import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable on fine pointer (desktop mouse)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    setMounted(true);

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check hovered element
      const target = e.target;
      if (!target) return;

      const interactiveEl = target.closest('a, button, input, textarea, .card-3d-container, .hero-3d-wrapper, .skills-3d-galaxy-wrapper');
      if (interactiveEl) {
        setIsHovered(true);
        if (target.closest('.hero-3d-wrapper, .skills-3d-galaxy-wrapper')) {
          setCursorText('DRAG 3D');
        } else if (target.closest('.project-card, .btn-project-detail')) {
          setCursorText('VIEW');
        } else if (target.closest('.achievement-card')) {
          setCursorText('CREDENTIAL');
        } else {
          setCursorText('');
        }
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const handleMouseDown = () => setIsGrabbing(true);
    const handleMouseUp = () => setIsGrabbing(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Smooth RAF loop for ring
    let animId;
    const loop = () => {
      animId = requestAnimationFrame(loop);

      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!mounted) return null;

  return (
    <div className={`custom-cursor-layer ${isVisible ? 'visible' : ''}`} aria-hidden="true">
      {/* Center dot */}
      <div
        ref={dotRef}
        className={`cursor-dot ${isHovered ? 'hover' : ''} ${isGrabbing ? 'grabbing' : ''}`}
      />

      {/* Trailing smooth ring */}
      <div
        ref={ringRef}
        className={`cursor-ring ${isHovered ? 'hover' : ''} ${isGrabbing ? 'grabbing' : ''} ${
          cursorText ? 'has-text' : ''
        }`}
      >
        {cursorText && <span className="cursor-label">{cursorText}</span>}
      </div>
    </div>
  );
}
