'use client';

import React, { useState, useEffect } from 'react';
import { projects } from '../data/projects';
import { ChevronRight, X, Info, User, Award, Smartphone, Shield, Bed, Book, Cpu, BarChart2 } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getProjectIcon = (iconName) => {
    switch (iconName) {
      case 'smartphone': return <Smartphone className="w-5 h-5" />;
      case 'shield': return <Shield className="w-5 h-5" />;
      case 'bed': return <Bed className="w-5 h-5" />;
      case 'book': return <Book className="w-5 h-5" />;
      case 'cpu': return <Cpu className="w-5 h-5" />;
      case 'bar-chart': return <BarChart2 className="w-5 h-5" />;
      default: return <Info className="w-5 h-5" />;
    }
  };

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'web', label: 'Web Development' },
    { id: 'ai-other', label: 'AI & Systems' }
  ];

  return (
    <section className="projects section-padding bg-alt" id="projects">
      <div className="section-header">
        <span className="sub-title">My Works</span>
        <h2 className="section-title">Featured Projects</h2>
        <div className="section-line"></div>
      </div>

      {/* Filters */}
      <div className="project-filters">
        {filters.map(f => (
          <button
            key={f.id}
            className={`filter-btn ${filter === f.id ? 'active' : ''}`}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="projects-grid" id="projectsGrid">
        {filteredProjects.map((project) => (
          <article key={project.id} className="project-card">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-github"
              aria-label={`View ${project.title} on GitHub`}
            >
              <svg className="github-icon w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.87c-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 6.8c.85 0 1.7.12 2.5.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.95.68 1.92v2.84c0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
              </svg>
            </a>
            <div className="project-card-header">
              <span className="project-tag">{project.tag}</span>
              <h3 className="project-title">{project.title}</h3>
            </div>
            <p className="project-short-desc">{project.shortDesc}</p>
            <div className="project-card-tech">
              {project.tech.slice(0, 3).map((t, idx) => (
                <span key={idx}>{t}</span>
              ))}
            </div>
            <button
              onClick={() => {
                setSelectedProject(project);
                document.body.style.overflow = 'hidden'; // Lock scroll
              }}
              className="btn-project-detail"
            >
              View Details <ChevronRight className="w-4 h-4 ml-1 inline" />
            </button>
          </article>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3.5rem' }}>
        <a
          href="https://github.com/MahzilSohail"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ gap: '0.5rem' }}
        >
          <span>For more Visit</span>
          <ChevronRight className="w-5 h-5" />
        </a>
      </div>

      {selectedProject && (
        <div
          className="modal-overlay active"
          onClick={() => {
            setSelectedProject(null);
            document.body.style.overflow = '';
          }}
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={() => {
                setSelectedProject(null);
                document.body.style.overflow = ''; 
              }}
              aria-label="Close Modal"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="modal-body">
              <span className="modal-tag">{selectedProject.tag}</span>
              <h3 className="modal-title">{selectedProject.title}</h3>

              <div className="modal-tech-list">
                {selectedProject.tech.map((t, idx) => (
                  <span key={idx}>{t}</span>
                ))}
              </div>

              <div className="modal-detail-section">
                <h4>
                  {getProjectIcon(selectedProject.icon)} Project Description
                </h4>
                <p>{selectedProject.description}</p>
              </div>

              <div className="modal-detail-section">
                <h4>
                  <User className="w-5 h-5 inline-block mr-1" /> My Role & Contributions
                </h4>
                <p>{selectedProject.role}</p>
              </div>

              <div className="modal-detail-section">
                <h4>
                  <Award className="w-5 h-5 inline-block mr-1" /> Project Outcomes & Value
                </h4>
                <p>{selectedProject.outcomes}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
