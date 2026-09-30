'use client';

import React, { useState } from 'react';
import Card3D from './3d/Card3D';
import { Award, ExternalLink, X, Eye, Sparkles, CheckCircle2 } from 'lucide-react';
import { cyberAudio } from '../lib/cyberAudio';

export default function Achievements() {
  const [selectedCert, setSelectedCert] = useState(null);

  const achievements = [
    {
      title: 'SQL Fundamentals',
      issuer: 'Issued by Sololearn',
      desc: 'Validation of relational database queries, complex aggregate functions, subqueries, table indexing, and multi-table joins.',
      link: '/certificates/SQLCertificate.jpg',
      badgeColor: 'cyan'
    },
    {
      title: 'HTML Fundamentals',
      issuer: 'Issued by Sololearn',
      desc: 'Validation of semantic markup standards, accessibility attributes, form validation controls, and web document structure.',
      link: '/certificates/CertificateHTML.jpg',
      badgeColor: 'indigo'
    },
    {
      title: 'CSS Fundamentals',
      issuer: 'Issued by Sololearn',
      desc: 'Validation of styling layouts, CSS Grid & Flexbox architectures, responsive typography, variables, and modern keyframe animations.',
      link: '/certificates/IntroductionCSS.jpg',
      badgeColor: 'sky'
    },
    {
      title: 'Cloud & DevOps',
      issuer: 'Issued by OmniCrew',
      desc: 'Certificate of Participation for completing the deep-dive industry roadmap: "Breaking into Cloud & DevOps: Practical CI/CD & Cloud Infrastructure."',
      link: '/certificates/DevOps_certificate.jpeg',
      badgeColor: 'pink'
    },
    {
      title: 'Web Development',
      issuer: 'Issued by Infotact',
      desc: 'Successfully completed a Web Development Assessment Test, demonstrating practical skills in modern web development and problem-solving.',
      link: '/certificates/Web_certificate.png',
      badgeColor: 'pink'
    }
  ];

  const handleOpenCert = (ach) => {
    cyberAudio?.playWarp();
    setSelectedCert(ach);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseCert = () => {
    cyberAudio?.playClick();
    setSelectedCert(null);
    document.body.style.overflow = '';
  };

  return (
    <section className="achievements section-padding" id="achievements">
      <div className="section-header">
        <span className="sub-title">Verified Badges &amp; Honors</span>
        <h2 className="section-title">Certifications &amp; Achievements</h2>
        <div className="section-line"></div>
      </div>

      <div className="achievements-grid">
        {achievements.map((ach, idx) => (
          <Card3D
            key={idx}
            className="achievement-card-wrapper"
            maxRotation={10}
            scale={1.02}
          >
            <div className="achievement-card" onClick={() => handleOpenCert(ach)}>
              {/* Header with Icon */}
              <div className="ach-card-top">
                <div className={`ach-icon-box ${ach.badgeColor}`}>
                  <Award className="w-6 h-6 text-cyan-400" />
                </div>
                <button
                  className="ach-preview-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenCert(ach);
                  }}
                  title="Inspect Certificate"
                  aria-label="Inspect Certificate"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Title & Issuer */}
              <div className="achievement-card-content">
                <h3 className="ach-title">{ach.title}</h3>
                <span className="ach-issuer-pill">{ach.issuer}</span>
                <p className="ach-desc">{ach.desc}</p>
              </div>

              {/* Card Image Thumbnail */}
              <div className="achievement-card-preview">
                <img
                  src={ach.link}
                  alt={ach.title}
                  className="ach-preview-image"
                  loading="lazy"
                />
                <div className="preview-hover-overlay">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <span>Click to Inspect Full Credential</span>
                </div>
              </div>
            </div>
          </Card3D>
        ))}
      </div>

      {/* High-Resolution Certificate Modal */}
      {selectedCert && (
        <div className="modal-overlay active" onClick={handleCloseCert}>
          <div
            className="modal-card cert-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-top-bar">
              <div className="modal-top-title">
                <Award className="w-5 h-5 text-cyan-400 mr-2 inline" />
                <span>{selectedCert.title} • Verified Credential</span>
              </div>
              <button
                className="modal-close-btn"
                onClick={handleCloseCert}
                aria-label="Close Certificate Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="cert-modal-body">
              <div className="cert-viewer-box">
                <img
                  src={selectedCert.link}
                  alt={selectedCert.title}
                  className="cert-full-image"
                />
              </div>

              <div className="cert-meta-box">
                <h4>{selectedCert.title}</h4>
                <p className="cert-issuer-text">{selectedCert.issuer}</p>
                <p className="cert-desc-text">{selectedCert.desc}</p>

                <div className="cert-actions-row">
                  <a
                    href={selectedCert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    onClick={() => cyberAudio?.playSuccess()}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open High-Res File in New Tab</span>
                  </a>
                  <button
                    onClick={handleCloseCert}
                    className="btn btn-secondary"
                  >
                    Close Viewer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
