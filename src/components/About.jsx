'use client';

import React from 'react';
import Education from './Education';
import Card3D from './3d/Card3D';
import { Cpu, ShieldCheck, Zap, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { cyberAudio } from '../lib/cyberAudio';

export default function About() {
  const stats = [
    { value: '3.75', label: 'Academic CGPA', detail: 'Superior University' },
    { value: '6+', label: 'Shipped Systems', detail: 'Web, Mobile, AI' },
    { value: '3', label: 'Industry Internships', detail: 'CodeAlpha, Oasis & Progree' },
    { value: '100%', label: 'Commitment', detail: 'Clean Architecture' }
  ];

  const pillars = [
    {
      icon: Layers,
      title: 'Full-Stack Architecture',
      desc: 'Deep understanding of clean backend APIs in NestJS/Node with robust relational schemas in PostgreSQL & MySQL.'
    },
    {
      icon: Zap,
      title: 'Cross-Platform Mobile',
      desc: 'Building performant mobile applications in Flutter with real-time Firebase sync, state management, and geo-math.'
    },
    {
      icon: Sparkles,
      title: 'Modern 3D & Creative Web',
      desc: 'Engineering immersive WebGL experiences, Three.js spatial interactions, micro-animations, and fluid design systems.'
    },
    {
      icon: ShieldCheck,
      title: 'Algorithmic Foundations',
      desc: 'Solid grasp of Data Structures, memory management in C++, heuristic AI search, and rigorous Software Quality Engineering.'
    }
  ];

  return (
    <section className="about section-padding" id="about">
      <div className="section-header">
        <span className="sub-title">Engineered For Impact</span>
        <h2 className="section-title">Architectural Mindset &amp; Story</h2>
        <div className="section-line"></div>
      </div>

      <div className="about-grid">
        {/* Left Column: Story & Highlights */}
        <div className="about-info">
          <div className="about-intro-badge">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>Developer Blueprint</span>
          </div>

          <h3 className="about-heading">
            Transforming Complex Problems Into Elegant Digital Realities
          </h3>

          <p className="about-p">
            I am a <strong>Software Engineering undergraduate</strong> at Superior University with an academic CGPA of <strong>3.75/4.00</strong>. My obsession lies in bridging the gap between rigorous low-level engineering principles and breathtaking user-centric interfaces.
          </p>

          <p className="about-p">
            Over the course of multiple industry internships and full-stack projects, I have designed secure enterprise portals in <strong>MERN Stack, React &amp; NestJS</strong>, mobile systems in <strong>Flutter</strong> with real-time Firestore synchronization, and algorithmic simulations in <strong>C++</strong> and <strong>Python</strong>.
          </p>

          {/* Stats Grid with 3D Tilt */}
          <div className="about-stats-grid">
            {stats.map((stat, idx) => (
              <Card3D key={idx} className="stat-card-3d" maxRotation={8} scale={1.03}>
                <div className="stat-card">
                  <div className="stat-num text-gradient">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-detail">{stat.detail}</div>
                </div>
              </Card3D>
            ))}
          </div>

          {/* Architectural Pillars */}
          <div className="about-pillars">
            <h4 className="pillars-title">Core Engineering Pillars</h4>
            <div className="pillars-grid">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} className="pillar-item">
                    <div className="pillar-icon-box">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="pillar-info">
                      <h5>{pillar.title}</h5>
                      <p>{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Education Timeline */}
        <div className="about-education-col">
          <Education />
        </div>
      </div>
    </section>
  );
}
