'use client';

import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import Card3D from './3d/Card3D';

export default function Education() {
  const educationList = [
    {
      date: '2023 - 2027',
      title: 'BS Software Engineering',
      institution: 'Superior University, Lahore',
      score: 'CGPA: 3.75 / 4.00',
      details: 'Focusing on core software architecture, Advanced Data Structures & Algorithms, Relational & NoSQL Database Systems, Web Engineering, and Mobile Development with Flutter.'
    },
    {
      date: '2021 - 2023',
      title: 'Intermediate (FSc Pre-Medical)',
      institution: 'KIPS College, Lahore',
      score: 'Grade: A',
      details: 'Developed disciplined analytical problem solving, biological sciences, and foundational quantitative logic.'
    },
    {
      date: '2019 - 2021',
      title: 'Matriculation (Science / Biology)',
      institution: 'Pride Public High School',
      score: 'Grade: A+',
      details: 'Academic distinction with comprehensive foundations in mathematics and science.'
    }
  ];

  return (
    <div className="about-timeline">
      <div className="timeline-header-box">
        <GraduationCap className="w-5 h-5 text-cyan-400" />
        <h3>Academic Milestones</h3>
      </div>
      
      <div className="timeline">
        {educationList.map((item, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-dot-wrapper">
              <div className="timeline-dot"></div>
              <div className="timeline-pulse"></div>
            </div>
            <div className="timeline-content-card">
              <div className="timeline-meta-row">
                <span className="timeline-date">
                  <Calendar className="w-3.5 h-3.5 inline mr-1" />
                  {item.date}
                </span>
                {item.score && <span className="timeline-score-badge">{item.score}</span>}
              </div>
              <h4 className="timeline-title">{item.title}</h4>
              <p className="timeline-institution">
                <MapPin className="w-3.5 h-3.5 inline mr-1 opacity-70" />
                {item.institution}
              </p>
              {item.details && <p className="timeline-details">{item.details}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
