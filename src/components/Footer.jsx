'use client';

import React from 'react';
import { Mail, ArrowUp, Sparkles, Terminal, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';
import { cyberAudio } from '../lib/cyberAudio';

export default function Footer({ onOpenHUD }) {
  const scrollToTop = () => {
    cyberAudio?.playWarp();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand & Mission */}
        <div className="footer-top-row">
          <div className="footer-brand">
            <a href="#home" className="logo" onClick={() => cyberAudio?.playHover()}>
              <span className="logo-bracket">&lt;</span>
              <span className="logo-name">Mahzil</span>
              <span className="logo-dot">.</span>
              <span className="logo-ext">dev</span>
              <span className="logo-bracket"> /&gt;</span>
            </a>
            <p className="footer-tagline">
              Engineering full-stack systems, 3D interactive web experiences, and cross-platform mobile architectures that ship.
            </p>
          </div>

          <div className="footer-links-group">
            <div className="footer-nav-col">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#home">Core</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills 3D</a></li>
                <li><a href="#experience">Experience</a></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4>Direct Links</h4>
              <ul>
                <li><a href="/resume/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume (PDF)</a></li>
                <li><a href="https://github.com/MahzilSohail" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/mahzilsohail/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Strip */}
        <div className="footer-bottom-row">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Mahzil Sohail. Crafted with React, Three.js &amp; Next.js.
          </p>

          <div className="footer-socials">
            <a
              href="https://github.com/MahzilSohail"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              onClick={() => cyberAudio?.playHover()}
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mahzilsohail/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              onClick={() => cyberAudio?.playHover()}
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:mahzilsohail1@gmail.com"
              aria-label="Email"
              onClick={() => cyberAudio?.playHover()}
            >
              <Mail className="w-5 h-5" />
            </a>
            <button
              onClick={scrollToTop}
              className="footer-scroll-top-btn"
              title="Return to Orbit / Scroll to Top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}