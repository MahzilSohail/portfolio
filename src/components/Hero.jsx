'use client';

import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Mail,
  Phone,
  FileText,
  Sparkles,
  Box,
  User,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';
import Hero3DCanvas from './3d/Hero3DCanvas';
import Card3D from './3d/Card3D';
import { cyberAudio } from '../lib/cyberAudio';

export default function Hero({ onOpenHUD }) {
  const [viewMode, setViewMode] = useState('3d'); // '3d' or 'photo'
  const [selectedNodeInfo, setSelectedNodeInfo] = useState(null);

  const roles = [
    'Full-Stack Software Engineer',
    'Mobile Systems Architect (Flutter)',
    'Next.js & React Specialist',
    'AI & Pathfinding Developer'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFull = roles[currentRoleIndex];
    let timer;

    if (!isDeleting && displayText === currentFull) {
      timer = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 30 : 60;
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentFull.substring(0, displayText.length - 1)
            : currentFull.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  const stats = [
    { label: 'Academic CGPA', val: '3.75', sub: 'Superior University' },
    { label: 'Production Systems', val: '6+', sub: 'Web, Mobile & AI' },
    { label: 'Internships', val: '3', sub: 'CodeAlpha, Oasis & Progree' },
    { label: 'Code Delivery', val: '100%', sub: 'Modern Architecture' }
  ];

  return (
    <section className="hero" id="home">
      {/* Background radial atmosphere */}
      <div className="hero-radial-glow"></div>

      <div className="hero-container">
        {/* Left Column: Hero Content */}
        <div className="hero-content">

          {/* Name & Title */}
          <h1 className="hero-name">
            <span className="text-gradient">Mahzil Sohail</span>
          </h1>

          <h2 className="hero-headline-statement">
            I engineer <span className="text-gradient">full stack systems</span> that <span className="text-cyan-400">ship.</span>
          </h2>

          <div className="hero-role-wrapper">
            <span className="hero-role-prefix">&gt; </span>
            <span className="hero-role-text">{displayText}</span>
            <span className="hero-cursor-blink">|</span>
          </div>

          <p className="hero-description">
            Software Engineering student passionate about engineering clean, scalable, and user-centric
            ecosystems. Crafting high-performance backends with <strong>NestJS</strong> &amp; <strong>PostgreSQL</strong>, fluid cross-platform mobile apps with <strong>Flutter</strong>, and immersive modern web applications with <strong>MERN Stack, React</strong> &amp; <strong>Three.js</strong>.
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={() => cyberAudio?.playClick()}
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-5 h-5 btn-icon-arrow" />
            </a>

            <a
              href="#contact"
              className="btn btn-secondary"
              onClick={() => cyberAudio?.playClick()}
            >
              <span>Initialize Contact</span>
            </a>

            <a
              href="/resume/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              onClick={() => cyberAudio?.playSuccess()}
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Resume (PDF)</span>
            </a>
          </div>

          {/* Social and Quick Links */}
          <div className="hero-social-row">
            <a
              href="https://github.com/MahzilSohail"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="GitHub Profile"
              onClick={() => cyberAudio?.playHover()}
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mahzilsohail/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn Profile"
              onClick={() => cyberAudio?.playHover()}
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:mahzilsohail1@gmail.com"
              className="social-icon-btn"
              aria-label="Send Email"
              onClick={() => cyberAudio?.playHover()}
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:+923238451415"
              className="social-icon-btn"
              aria-label="Call Direct"
              onClick={() => cyberAudio?.playHover()}
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>

          {/* KPI Metrics Strip */}
          <div className="hero-metrics-strip">
            {stats.map((s, idx) => (
              <div key={idx} className="metric-box">
                <div className="metric-val">{s.val}</div>
                <div className="metric-label">{s.label}</div>
                <div className="metric-sub">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 3D Interactive Centerpiece & Hologram */}
        <div className="hero-visual">
          {/* Mode Switcher */}
          <div className="visual-mode-toggle">
            <button
              className={`mode-btn ${viewMode === '3d' ? 'active' : ''}`}
              onClick={() => {
                setViewMode('3d');
                cyberAudio?.playClick();
              }}
            >
              <Box className="w-4 h-4" />
              <span>3D Quantum Core</span>
            </button>
            <button
              className={`mode-btn ${viewMode === 'photo' ? 'active' : ''}`}
              onClick={() => {
                setViewMode('photo');
                cyberAudio?.playClick();
              }}
            >
              <User className="w-4 h-4" />
              <span>Holo Identity</span>
            </button>
          </div>

          {viewMode === '3d' ? (
            <div className="hero-3d-box">
              <Hero3DCanvas onSelectNode={(node) => setSelectedNodeInfo(node)} />
            </div>
          ) : (
            <Card3D className="visual-card-3d" maxRotation={10}>
              <div className="visual-card holo-card">
                <div className="holo-glare-effect"></div>
                <img
                  src="/images/Mahzil.png"
                  alt="Mahzil Sohail Profile"
                  className="holo-profile-img"
                  onError={(e) => {
                    e.currentTarget.src = '/images/profile.png';
                  }}
                />
                <div className="holo-card-overlay">
                  <div className="holo-badge">
                    <span className="holo-dot"></span>
                    <span>Mahzil Sohail • Lead Dev</span>
                  </div>
                  <div className="holo-creds">
                    <span>Superior Univ • SE</span>
                  </div>
                </div>
              </div>
            </Card3D>
          )}

          {/* Selected 3D Node Callout if clicked */}
          {selectedNodeInfo && viewMode === '3d' && (
            <div className="node-info-popup">
              <div className="popup-header">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <h4>{selectedNodeInfo.name}</h4>
              </div>
              <p>{selectedNodeInfo.desc}</p>
              <button
                className="popup-dismiss"
                onClick={() => setSelectedNodeInfo(null)}
              >
                ✕ Close
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a href="#about" className="hero-scroll-indicator" aria-label="Scroll to About">
        <span className="scroll-indicator-text">EXPLORE ARCHITECTURE</span>
        <ChevronDown className="w-4 h-4 scroll-bounce-arrow" />
      </a>
    </section>
  );
}
