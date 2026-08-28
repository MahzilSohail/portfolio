import React from 'react';
import { experiences } from '../data/experience';
import { CheckCircle } from 'lucide-react';

export default function Experience() {
  return (
    <section className="experience section-padding bg-alt" id="experience">
      <div className="section-header">
        <span className="sub-title">Professional Path</span>
        <h2 className="section-title">Work Experience</h2>
        <div className="section-line"></div>
      </div>
      <div className="experience-container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {experiences.map((exp, idx) => (
            <div key={idx} className="experience-card">
              <a href={exp.certificateLink} target="_blank" rel="noopener noreferrer">
                <div className="exp-header">
                  <div className="exp-role-company">
                    <h3>{exp.role}</h3>
                    <h4 className="company-name">{exp.company} ({exp.type})</h4>
                  </div>
                  <div className="exp-date">{exp.date}</div>
                </div>
                <ul className="exp-bullets">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>
                      <CheckCircle className="bullet-icon w-5 h-5 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: bullet }} />
                    </li>
                  ))}
                </ul>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
