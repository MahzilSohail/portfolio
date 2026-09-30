'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { cyberAudio } from '../lib/cyberAudio';

export default function Navbar({
  soundEnabled = true,
  onToggleSound,
  onOpenHUD
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'achievements', 'testimonials', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Core', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills 3D', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Honors', href: '#achievements', id: 'achievements' },
    { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { label: 'Contact', href: '#contact', id: 'contact', isContactBtn: true }
  ];

  const handleNavClick = (link) => {
    cyberAudio?.playClick();
    setIsMobileMenuOpen(false);
    setActiveSection(link.id);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Brand Logo */}
        <a
          href="#home"
          className="logo"
          onClick={() => cyberAudio?.playHover()}
        >
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Mahzil</span>
          <span className="logo-dot">.</span>
          <span className="logo-ext">dev</span>
          <span className="logo-bracket"> /&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-menu desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => handleNavClick(link)}
                  onMouseEnter={() => cyberAudio?.playHover()}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''} ${
                    link.isContactBtn ? 'btn-contact-nav' : ''
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && !link.isContactBtn && (
                    <span className="nav-active-pill" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions (HUD, Sound, Theme, Hamburger) */}
        <div className="header-actions">
          {/* HUD Command Palette Button */}
          <button
            onClick={() => {
              cyberAudio?.playWarp();
              if (onOpenHUD) onOpenHUD();
            }}
            className="hud-trigger-btn"
            title="Open Developer HUD (Ctrl+K)"
            aria-label="Open HUD Command Palette"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="hud-btn-text">HUD</span>
            <kbd className="hud-kbd">⌘K</kbd>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={() => {
              if (onToggleSound) onToggleSound();
            }}
            className={`audio-toggle-btn ${soundEnabled ? 'active' : ''}`}
            title={soundEnabled ? 'Mute Cyber Audio' : 'Enable Cyber Audio FX'}
            aria-label="Toggle Cyber Sound"
          >
            {soundEnabled ? (
              <div className="equalizer-bars">
                <span className="bar-eq bar-1"></span>
                <span className="bar-eq bar-2"></span>
                <span className="bar-eq bar-3"></span>
              </div>
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>

          {/* Hamburger Mobile Toggle */}
          <button
            className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => {
              cyberAudio?.playClick();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            aria-label="Toggle Mobile Navigation"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <span className="mobile-nav-title">Navigation Hub</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="mobile-close-btn"
            aria-label="Close Mobile Menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => handleNavClick(link)}
                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                <span>{link.label}</span>
                <span className="mobile-nav-arrow">→</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-nav-footer">
          <button
            onClick={() => {
              if (onOpenHUD) {
                setIsMobileMenuOpen(false);
                onOpenHUD();
              }
            }}
            className="btn btn-secondary w-full"
            style={{ justifyContent: 'center' }}
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Launch HUD Palette</span>
          </button>
        </div>
      </div>
    </header>
  );
}
