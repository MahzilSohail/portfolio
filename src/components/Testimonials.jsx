'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoSlideInterval = useRef(null);

  const testimonials = [
    {
      text: '"Mahzil Sohail demonstrated exceptional performance during his CodeAlpha internship. He quickly grasped the React ecosystem and built responsive layouts that met all modern standards. His diligence with Git and logical approach to interface design were highly impressive."',
      author: 'CodeAlpha Supervisor',
      role: 'Frontend Internship Lead',
      avatarPlaceholder: 'CS',
      link: '/certificates/Codealpha_LOR.pdf'
    },
    {
      text: '"Collaborating with Mahzil on the Hotel Management System and AttendQR projects proved his capability as a software engineer. He balances complex database layouts with smooth mobile interfaces in Flutter, writing clean, well-documented code that is easily extensible."',
      author: 'Project Advisor',
      role: 'Superior University Faculty',
      avatarPlaceholder: 'SU',
      link: null
    }
  ];

  const totalSlides = testimonials.length;

  const resetAutoSlide = () => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
    }
    autoSlideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 8000);
  };

  useEffect(() => {
    resetAutoSlide();
    return () => {
      if (autoSlideInterval.current) {
        clearInterval(autoSlideInterval.current);
      }
    };
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    resetAutoSlide();
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    resetAutoSlide();
  };

  return (
    <section className="testimonials section-padding bg-alt" id="testimonials">
      <div className="section-header">
        <span className="sub-title">Endorsements</span>
        <h2 className="section-title">What Mentors Say</h2>
        <div className="section-line"></div>
      </div>

      <div className="testimonials-carousel-container">
        <div 
          className="testimonials-track" 
          style={{ 
            transform: `translateX(-${currentSlide * 100}%)`,
            display: 'flex',
            transition: 'transform 0.5s ease-in-out'
          }}
        >
          {testimonials.map((item, idx) => (
            <div key={idx} className="testimonial-card" style={{ flex: '0 0 100%', maxWidth: '100%' }}>
              <div className="quote-icon">
                <Quote className="w-8 h-8" />
              </div>
              <p className="testimonial-text">{item.text}</p>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <div className="testimonial-author">
                    <div className="author-avatar-placeholder">{item.avatarPlaceholder}</div>
                    <div className="author-info">
                      <span className="author-name">{item.author}</span>
                      <span className="author-role">{item.role}</span>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="testimonial-author">
                  <div className="author-avatar-placeholder">{item.avatarPlaceholder}</div>
                  <div className="author-info">
                    <span className="author-name">{item.author}</span>
                    <span className="author-role">{item.role}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="carousel-nav">
          <button onClick={handlePrev} className="carousel-btn prev" aria-label="Previous Testimonial">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={handleNext} className="carousel-btn next" aria-label="Next Testimonial">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
