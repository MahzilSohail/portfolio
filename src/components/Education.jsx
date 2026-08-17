import React from 'react';

export default function Education() {
  const educationList = [
    {
      date: '2023 - 2027',
      title: 'BS Software Engineering',
      institution: 'Superior University',
      details: 'Focusing on core engineering concepts including Data Structures, Database Systems, Web Engineering, and Mobile App Development. CGPA: 3.75/4.00.'
    },
    {
      date: '2021 - 2023',
      title: 'Intermediate (FSc Pre-Medical)',
      institution: 'KIPS College',
      details: ''
    },
    {
      date: '2019 - 2021',
      title: 'Matriculation (Biology)',
      institution: 'Pride Public High School',
      details: ''
    }
  ];

  return (
    <div className="about-timeline">
      <h3>Academic Path</h3>
      <div className="timeline">
        {educationList.map((item, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">{item.date}</div>
            <h4 className="timeline-title">{item.title}</h4>
            <p className="timeline-institution">{item.institution}</p>
            {item.details && <p className="timeline-details">{item.details}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
