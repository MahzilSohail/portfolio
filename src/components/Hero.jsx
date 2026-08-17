'use client';

import React from 'react';
import { ArrowRight, Mail, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background glow elements */}
      <div className="glow-bg">
        <div className="glow-sphere glow-1"></div>
        <div className="glow-sphere glow-2"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">Mahzil Sohail</h1>
        <h2 className="hero-subtitle">
          I engineer <span className="sp">full stack</span> systems <br /> that <span className="sp">ship.</span>
        </h2>
        <p className="hero-description">
          Software Engineering student passionate about crafting clean, scalable, and user-centric web and
          mobile applications using modern technologies like Flutter, React, and NestJS. Building the future
          through code.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            <span>Get In Touch</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#projects" className="btn btn-secondary">
            <span>View Work</span>
          </a>
        </div>
        <div className="social-links">
          <a href="https://github.com/MahzilSohail" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg className="github-icon w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.87c-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 6.8c.85 0 1.7.12 2.5.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.95.68 1.92v2.84c0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/mahzil-sohail-02412b371/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg className="github-icon w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.37 4.28 5.46v6.29zM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.54 20.45H7.1V8.99H3.54v11.46z" />
            </svg>
          </a>
          <a href="mailto:mahzilsohail1@gmail.com" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
          <a href="tel:+923238451415" aria-label="Phone">
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="visual-card">
          <img src="/images/Mahzil.png" alt="Mahzil Sohail Profile Image" />
        </div>
      </div>
    </section>
  );
}
