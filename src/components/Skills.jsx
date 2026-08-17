'use client';

import React, { useState, useEffect } from 'react';
import { skillCategories, academicCourses } from '../data/skills';
import { BookOpen, Database, Smartphone, Globe, Cpu, ShieldCheck } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('languages');
  const [animate, setAnimate] = useState(true);

  // Trigger animations on tab change
  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 50);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const tabs = [
    { id: 'languages', label: 'Languages' },
    { id: 'frameworks', label: 'Frameworks' },
    { id: 'databases', label: 'Databases' },
    { id: 'tools', label: 'Tools & Tech' }
  ];

  const getCourseIcon = (courseName) => {
    const name = courseName.toLowerCase();
    if (name.includes('data structure') || name.includes('algorithms')) return <BookOpen className="w-4 h-4" />;
    if (name.includes('database')) return <Database className="w-4 h-4" />;
    if (name.includes('mobile')) return <Smartphone className="w-4 h-4" />;
    if (name.includes('web')) return <Globe className="w-4 h-4" />;
    if (name.includes('intelligence')) return <Cpu className="w-4 h-4" />;
    if (name.includes('quality') || name.includes('shield')) return <ShieldCheck className="w-4 h-4" />;
    return <BookOpen className="w-4 h-4" />;
  };

  return (
    <section className="skills section-padding" id="skills">
      <div className="section-header">
        <span className="sub-title">Expertise</span>
        <h2 className="section-title">Skills & Capabilities</h2>
        <div className="section-line"></div>
      </div>

      <div className="skills-wrapper">
        <div className="skills-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="skills-content">
          <div className="skills-pane active">
            <div className="skills-grid">
              {skillCategories[activeTab].map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: animate ? skill.percentage : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="skills-courses">
        <h3>Relevant Academic Courses</h3>
        <div className="course-badges">
          {academicCourses.map((course, idx) => (
            <span key={idx} className="course-badge">
              {getCourseIcon(course)} {course}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
