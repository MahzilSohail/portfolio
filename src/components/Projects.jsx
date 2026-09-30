'use client';

import React, { useState, useEffect } from 'react';
import { projects } from '../data/projects';
import Card3D from './3d/Card3D';
import {
  ChevronRight,
  X,
  ExternalLink,
  Sparkles,
  Smartphone,
  Shield,
  Bed,
  Book,
  Cpu,
  BarChart2,
  CheckCircle,
  Layers,
  Award
} from 'lucide-react';
import { GithubIcon } from './icons/BrandIcons';
import { cyberAudio } from '../lib/cyberAudio';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        document.body.style.overflow = '';
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getProjectIcon = (iconName) => {
    switch (iconName) {
      case 'smartphone': return <Smartphone className="w-5 h-5 text-cyan-400" />;
      case 'shield': return <Shield className="w-5 h-5 text-indigo-400" />;
      case 'bed': return <Bed className="w-5 h-5 text-sky-400" />;
      case 'book': return <Book className="w-5 h-5 text-amber-400" />;
      case 'cpu': return <Cpu className="w-5 h-5 text-pink-400" />;
      case 'bar-chart': return <BarChart2 className="w-5 h-5 text-emerald-400" />;
      default: return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'mobile', label: 'Mobile Apps (Flutter)' },
    { id: 'web', label: 'Full-Stack Web' },
    { id: 'ai-other', label: 'AI & Core Systems' }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter);

  const openProjectModal = (proj) => {
    cyberAudio?.playWarp();
    setSelectedProject(proj);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    cyberAudio?.playClick();
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  return (
    <section className="projects section-padding bg-alt" id="projects">
      <div className="section-header">
        <span className="sub-title">Portfolio Showcase</span>
        <h2 className="section-title">Featured Engineering Projects</h2>
        <div className="section-line"></div>
      </div>

      {/* Filter Tabs */}
      <div className="project-filters">
        {filters.map((f) => (
          <button
            key={f.id}
            className={`filter-btn ${filter === f.id ? 'active' : ''}`}
            onClick={() => {
              cyberAudio?.playClick();
              setFilter(f.id);
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* 3D Projects Grid */}
      <div className="projects-grid" id="projectsGrid">
        {filteredProjects.map((project) => (
          <Card3D
            key={project.id}
            className="project-card-wrapper"
            maxRotation={10}
            scale={1.02}
          >
            <article className="project-card">
              {/* Card Top Action Row */}
              <div className="project-card-top">
                <div className="project-icon-badge">
                  {getProjectIcon(project.icon)}
                </div>
                <div className="project-top-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github-btn"
                    title={`View ${project.title} on GitHub`}
                    onClick={(e) => {
                      e.stopPropagation();
                      cyberAudio?.playClick();
                    }}
                    aria-label={`GitHub repo for ${project.title}`}
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Tag & Title */}
              <div className="project-card-header">
                <span className="project-tag">{project.tag}</span>
                <h3 className="project-title">{project.title}</h3>
              </div>

              {/* Short description */}
              <p className="project-short-desc">{project.shortDesc}</p>

              {/* Tech stack chips */}
              <div className="project-card-tech">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>

              {/* Footer Button */}
              <div className="project-card-footer">
                <button
                  onClick={() => openProjectModal(project)}
                  className="btn-project-detail"
                >
                  <span>System Architecture</span>
                  <ChevronRight className="w-4 h-4 btn-detail-arrow" />
                </button>
              </div>
            </article>
          </Card3D>
        ))}
      </div>

      {/* GitHub Callout Button */}
      <div className="projects-cta-box">
        <a
          href="https://github.com/MahzilSohail"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          onClick={() => cyberAudio?.playSuccess()}
        >
          <GithubIcon className="w-5 h-5" />
          <span>Explore All Repositories on GitHub</span>
          <ChevronRight className="w-5 h-5" />
        </a>
      </div>

      {/* Deep-Dive Project Modal */}
      {selectedProject && (
        <div className="modal-overlay active" onClick={closeProjectModal}>
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="modal-top-bar">
              <div className="modal-top-title">
                {getProjectIcon(selectedProject.icon)}
                <span>{selectedProject.title} • System Blueprint</span>
              </div>
              <button
                className="modal-close-btn"
                onClick={closeProjectModal}
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-banner">
                <span className="modal-tag">{selectedProject.tag}</span>
                <h3 className="modal-title">{selectedProject.title}</h3>
                <p className="modal-short">{selectedProject.shortDesc}</p>
              </div>

              {/* Tech Stack Chips */}
              <div className="modal-section">
                <h4 className="modal-sec-title">
                  <Layers className="w-4 h-4 text-cyan-400 inline mr-1.5" />
                  Technologies &amp; Architecture Layers
                </h4>
                <div className="modal-tech-list">
                  {selectedProject.tech.map((t, idx) => (
                    <span key={idx} className="modal-tech-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deep Details */}
              <div className="modal-section">
                <h4 className="modal-sec-title">
                  <Sparkles className="w-4 h-4 text-cyan-400 inline mr-1.5" />
                  System Overview &amp; Implementation
                </h4>
                <p className="modal-text-content">{selectedProject.description}</p>
              </div>

              {/* Role & Contributions */}
              <div className="modal-section">
                <h4 className="modal-sec-title">
                  <CheckCircle className="w-4 h-4 text-cyan-400 inline mr-1.5" />
                  Engineering Role &amp; Contributions
                </h4>
                <p className="modal-text-content">{selectedProject.role}</p>
              </div>

              {/* Outcomes & Impact */}
              <div className="modal-section">
                <h4 className="modal-sec-title">
                  <Award className="w-4 h-4 text-cyan-400 inline mr-1.5" />
                  Performance Outcomes &amp; Engineering Value
                </h4>
                <p className="modal-text-content">{selectedProject.outcomes}</p>
              </div>

              {/* Modal Actions */}
              <div className="modal-actions-row">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  onClick={() => cyberAudio?.playSuccess()}
                >
                  <GithubIcon className="w-5 h-5" />
                  <span>View Repository on GitHub</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
                <button
                  onClick={closeProjectModal}
                  className="btn btn-secondary"
                >
                  Close Blueprint
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
