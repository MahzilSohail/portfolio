import React from 'react';
import { Award } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      title: 'SQL Fundamentals',
      issuer: 'Issued by Sololearn',
      desc: 'Validation of relational database queries, aggregate commands, subqueries, and table joins.',
      link: '/certificates/SQLCertificate.jpg'
    },
    {
      title: 'HTML Fundamentals',
      issuer: 'Issued by Sololearn',
      desc: 'Validation of semantic markups, attributes, form controls, and web structures.',
      link: '/certificates/CertificateHTML.jpg'
    },
    {
      title: 'CSS Fundamentals',
      issuer: 'Issued by Sololearn',
      desc: 'Validation of styling layouts, Flexbox, Grid systems, typography, and responsive variables.',
      link: '/certificates/IntroductionCSS.jpg'
    },
    {
      title: 'Cloud & DevOps',
      issuer: 'Issued by OmniCrew',
      desc: 'Certificate of Participation for attending the online session “Breaking into Cloud & DevOps: A Practical Career Roadmap.”',
      link: '/certificates/DevOps_certificate.jpeg'
    }
  ];

  return (
    <section className="achievements section-padding" id="achievements">
      <div className="section-header">
        <span className="sub-title">Honors & Badges</span>
        <h2 className="section-title">Certifications & Achievements</h2>
        <div className="section-line"></div>
      </div>

      <div className="achievements-grid">
        {achievements.map((ach, idx) => {
          const isPdf = ach.link.toLowerCase().endsWith('.pdf');
          return (
            <a key={idx} href={ach.link} target="_blank" rel="noopener noreferrer" className="achievement-card">
              <div className="achievement-card-content">
                <div className="ach-icon-box">
                  <Award className="w-6 h-6" />
                </div>
                <h3>{ach.title}</h3>
                <p className="ach-issuer">{ach.issuer}</p>
                <p className="ach-desc">{ach.desc}</p>
              </div>
              <div className="achievement-card-preview">
                {isPdf ? (
                  <iframe
                    src={`${ach.link}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
                    title={ach.title}
                    className="ach-preview-iframe"
                    loading="lazy"
                  />
                ) : (
                  <img
                    src={ach.link}
                    alt={ach.title}
                    className="ach-preview-image"
                    loading="lazy"
                  />
                )}
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
