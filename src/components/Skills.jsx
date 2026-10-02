'use client';

import React, { useState, useEffect } from 'react';
import { skillCategories, academicCourses } from '../data/skills';
import Skills3DGalaxy from './3d/Skills3DGalaxy';
import Card3D from './3d/Card3D';
import {
  Globe,
  Database,
  Smartphone,
  Cpu,
  ShieldCheck,
  BookOpen,
  Sparkles,
  LayoutGrid,
  Box,
  Layers,
  Code
} from 'lucide-react';
import { cyberAudio } from '../lib/cyberAudio';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('languages');
  const [viewMode, setViewMode] = useState('3d'); // '3d' or 'matrix'
  const [selectedSkillModal, setSelectedSkillModal] = useState(null);
  const [animateBars, setAnimateBars] = useState(true);

  useEffect(() => {
    setAnimateBars(false);
    const timer = setTimeout(() => setAnimateBars(true), 60);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const tabs = [
    { id: 'languages', label: 'Languages', icon: Code },
    { id: 'frameworks', label: 'Frameworks & Libs', icon: Layers },
    { id: 'databases', label: 'Databases & Storage', icon: Database },
    { id: 'tools', label: 'Dev Tools & Cloud', icon: Cpu }
  ];

  const getCourseIcon = (courseName) => {
    const name = courseName.toLowerCase();
    if (name.includes('data structure') || name.includes('algorithm')) return <BookOpen className="w-4 h-4 text-indigo-400" />;
    if (name.includes('database')) return <Database className="w-4 h-4 text-indigo-400" />;
    if (name.includes('mobile')) return <Smartphone className="w-4 h-4 text-sky-400" />;
    if (name.includes('web')) return <Globe className="w-4 h-4 text-emerald-400" />;
    if (name.includes('intelligence')) return <Cpu className="w-4 h-4 text-pink-400" />;
    if (name.includes('quality') || name.includes('shield')) return <ShieldCheck className="w-4 h-4 text-amber-400" />;
    return <BookOpen className="w-4 h-4 text-cyan-400" />;
  };

  return (
    <section className="skills section-padding" id="skills">
      <div className="section-header">
        <span className="sub-title">Technical Mastery</span>
        <h2 className="section-title">Skills &amp; Capabilities</h2>
        <div className="section-line"></div>
      </div>

      {/* View Switcher Controls */}
      <div className="skills-view-controls">
        <button
          className={`view-toggle-pill ${viewMode === '3d' ? 'active' : ''}`}
          onClick={() => {
            setViewMode('3d');
            cyberAudio?.playClick();
          }}
        >
          <Box className="w-4 h-4" />
          <span>3D Interactive Galaxy</span>
        </button>
        <button
          className={`view-toggle-pill ${viewMode === 'matrix' ? 'active' : ''}`}
          onClick={() => {
            setViewMode('matrix');
            cyberAudio?.playClick();
          }}
        >
          <LayoutGrid className="w-4 h-4" />
          <span>Proficiency Matrix</span>
        </button>
      </div>

      {/* Main Display: 3D Galaxy or Proficiency Matrix */}
      {viewMode === '3d' ? (
        <div className="skills-3d-container">
          <Skills3DGalaxy
            activeFilter={activeTab}
            onSkillSelect={(skill) => {
              setSelectedSkillModal(skill);
            }}
          />
        </div>
      ) : (
        <div className="skills-wrapper">
          {/* Category Tabs */}
          <div className="skills-tabs">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => {
                    cyberAudio?.playClick();
                    setActiveTab(tab.id);
                  }}
                >
                  <Icon className="w-4 h-4 tab-icon" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Grid */}
          <div className="skills-content">
            <div className="skills-grid">
              {skillCategories[activeTab]?.map((skill, idx) => (
                <Card3D key={idx} className="skill-card-3d" maxRotation={6} scale={1.015}>
                  <div className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.percentage}</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: animateBars ? skill.percentage : '0%'
                        }}
                      >
                        <div className="skill-progress-glow"></div>
                      </div>
                    </div>
                  </div>
                </Card3D>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Relevant Academic Courses */}
      <div className="skills-courses">
        <div className="courses-header">
          <BookOpen className="w-5 h-5 text-cyan-400" />
          <h3>Core Academic Curriculum</h3>
        </div>
        <div className="course-badges">
          {academicCourses.map((course, idx) => (
            <div key={idx} className="course-badge">
              {getCourseIcon(course)}
              <span>{course}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
