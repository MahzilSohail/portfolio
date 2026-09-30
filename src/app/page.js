'use client';

import React, { useState, useEffect } from 'react';
import Scene3D from '../components/3d/Scene3D';
import CustomCursor from '../components/hud/CustomCursor';
import CommandCenter from '../components/hud/CommandCenter';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Achievements from '../components/Achievements';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { ArrowUp, Terminal } from 'lucide-react';
import { cyberAudio } from '../lib/cyberAudio';

export default function Home() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isHUDOpen, setIsHUDOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    // Lock dark mode
    document.documentElement.setAttribute('data-theme', 'dark');

    const savedSound = localStorage.getItem('cyber_sound');
    const isSoundOn = savedSound !== null ? savedSound === 'true' : true;
    setSoundEnabled(isSoundOn);
    cyberAudio?.setEnabled(isSoundOn);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'achievements', 'testimonials', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Keyboard shortcut Ctrl+K / Cmd+K for HUD
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsHUDOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Scroll reveal observer
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.08
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animateSelectors = [
      '.section-header',
      '.about-grid',
      '.projects-grid',
      '.skills-wrapper',
      '.skills-3d-container',
      '.experience-timeline-node',
      '.achievement-card',
      '.testimonials-carousel-wrapper',
      '.contact-grid'
    ];

    const elementsToAnimate = document.querySelectorAll(animateSelectors.join(', '));
    elementsToAnimate.forEach((el) => {
      el.classList.add('fade-in-up-trigger');
      scrollObserver.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      scrollObserver.disconnect();
    };
  }, []);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    cyberAudio?.setEnabled(next);
    localStorage.setItem('cyber_sound', String(next));
  };

  const scrollToTop = () => {
    cyberAudio?.playWarp();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* 3D Global WebGL Universe */}
      <Scene3D currentSection={currentSection} theme="dark" />

      {/* Interactive Magnetic Custom Cursor */}
      <CustomCursor />

      {/* Developer HUD Command Palette */}
      <CommandCenter
        isOpen={isHUDOpen}
        onClose={() => setIsHUDOpen(false)}
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
      />

      {/* Glassmorphic Navbar */}
      <Navbar
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
        onOpenHUD={() => setIsHUDOpen(true)}
      />

      {/* Main Experience Stream */}
      <main className="main-content">
        <Hero onOpenHUD={() => setIsHUDOpen(true)} />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenHUD={() => setIsHUDOpen(true)} />

      {/* Floating Action Beacons */}
      <div className="floating-beacons-container">
        {/* Floating HUD shortcut button */}
        <button
          onClick={() => {
            cyberAudio?.playWarp();
            setIsHUDOpen(true);
          }}
          className="floating-hud-btn"
          title="Launch HUD Command Center (Ctrl+K)"
          aria-label="Open HUD"
        >
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span className="floating-hud-text">HUD (⌘K)</span>
        </button>

        {/* Floating Scroll-to-Top button */}
        <button
          onClick={scrollToTop}
          className={`scroll-top-btn ${showScrollTop ? 'visible' : ''}`}
          aria-label="Scroll to top"
          title="Return to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </>
  );
}
