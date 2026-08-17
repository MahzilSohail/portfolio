import React from 'react';
import Education from './Education';

export default function About() {
  const stats = [
    { value: '3.75', label: 'CGPA' },
    { value: '6+', label: 'Projects Completed' },
    { value: '2', label: 'Industry Internships' } // Changed to 2 internships because we added 1 more content of experience!
  ];

  return (
    <section className="about section-padding" id="about">
      <div className="section-header">
        <span className="sub-title">Background</span>
        <h2 className="section-title">Education & Ambitions</h2>
        <div className="section-line"></div>
      </div>
      <div className="about-grid">
        <div className="about-info">
          <h3>My Story & Ambitions</h3>
          <p>
            I am currently pursuing a <strong>BS in Software Engineering</strong> at Superior University.
            With a current CGPA of <strong>3.75/4.00</strong>, I strive for excellence in both engineering
            foundations and hands-on production-level architectures.
          </p>
          <p>
            My ambition is to bridge the gap between complex backend architectures and elegant front-end
            user experiences. Whether it is a responsive web application powered by NestJS and PostgreSQL or
            a cross-platform mobile application driven by Flutter, I love bringing ideas to life through
            robust engineering.
          </p>
          <div className="about-stats">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-num">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <Education />
      </div>
    </section>
  );
}
