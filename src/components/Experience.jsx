'use client';

import React from 'react';
import { experiences } from '../data/experience';
import Card3D from './3d/Card3D';
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Award,
  Building2,
  FileCheck
} from 'lucide-react';
import { cyberAudio } from '../lib/cyberAudio';

export default function Experience() {
  return (
    <section className="experience section-padding bg-alt" id="experience">
      <div className="section-header">
        <span className="sub-title">Industry Track Record</span>
        <h2 className="section-title">Professional Experience</h2>
        <div className="section-line"></div>
      </div>

      <div className="experience-container">
        <div className="experience-timeline-track">
          {experiences.map((exp, idx) => (
            <div key={idx} className="experience-timeline-node">
              {/* Connector Pin */}
              <div className="exp-node-pin">
                <div className="pin-circle"></div>
                <div className="pin-pulse"></div>
              </div>

              {/* 3D Experience Card */}
              <Card3D className="experience-card-3d" maxRotation={8} scale={1.02}>
                <div className="experience-card">
                  <div className="exp-header">
                    <div className="exp-role-company">
                      <div className="exp-role-title-row">
                        <Briefcase className="w-5 h-5 text-cyan-400" />
                        <h3>{exp.role}</h3>
                      </div>
                      <div className="company-tag-row">
                        <span className="company-name">
                          <Building2 className="w-4 h-4 inline mr-1 opacity-70" />
                          {exp.company}
                        </span>
                        <span className="internship-type-pill">{exp.type}</span>
                      </div>
                    </div>

                    <div className="exp-date-box">
                      <Calendar className="w-4 h-4 text-indigo-400 inline mr-1" />
                      <span>{exp.date}</span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="exp-bullets">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>
                        <CheckCircle2 className="bullet-icon w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span dangerouslySetInnerHTML={{ __html: bullet }} />
                      </li>
                    ))}
                  </ul>

                  {/* Certificate / Verification Link */}
                  {exp.certificateLink && (
                    <div className="exp-footer-action">
                      <a
                        href={exp.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-cert-verify"
                        onClick={() => cyberAudio?.playSuccess()}
                      >
                        <FileCheck className="w-4 h-4 text-cyan-400" />
                        <span>View Verified Internship Certificate</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                      </a>
                    </div>
                  )}
                </div>
              </Card3D>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
