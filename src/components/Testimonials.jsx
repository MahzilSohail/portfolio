'use client';

import React, { useState, useEffect, useRef } from 'react';
import Card3D from './3d/Card3D';
import { Quote, ChevronLeft, ChevronRight, FileText, Star, Award, ExternalLink } from 'lucide-react';
import { cyberAudio } from '../lib/cyberAudio';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoSlideInterval = useRef(null);

  const testimonials = [
    {
      text: '"Mahzil Sohail demonstrated exceptional performance during his CodeAlpha internship. He quickly grasped the React ecosystem and built responsive layouts that met all modern industry standards. His diligence with Git, standard branching, and logical approach to interface design were highly impressive."',
      author: 'CodeAlpha Supervisor',
      role: 'Frontend Internship Lead',
      avatarPlaceholder: 'CA',
      organization: 'CodeAlpha Tech',
      rating: 5,
      link: '/certificates/Codealpha_LOR.pdf',
      badgeText: 'Verified Letter of Recommendation'
    },
    {
      text: '"Mahzil Sohail exhibited performance in this role and made valuable contribution to our organization during the internship period. She has excellent analytical skills and adeptly adapted to emerging technologies, demonstrating a high level of productivity.',
      author: 'Progree Supervisor',
      role: 'Full Stack Development',
      avatarPlaceholder: 'P',
      organization: 'Progree',
      rating: 5,
      link: '/certificates/LOR_Progree.png',
      badgeText: 'Verified Letter of Recommendation'
    },
    {
      text: '"Collaborating with Mahzil on the Hotel Management System and AttendQR projects proved his exceptional capability as a software engineer. He balances complex database schemas with smooth mobile interfaces in Flutter, writing clean, well-documented code that is easily extensible and rock-solid."',
      author: 'Project Advisor',
      role: 'Superior University Faculty',
      avatarPlaceholder: 'SU',
      organization: 'Superior University',
      rating: 5,
      link: null,
      badgeText: 'Faculty Project Endorsement'
    }
  ];

  const totalSlides = testimonials.length;

  const resetAutoSlide = () => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
    }
    autoSlideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 9000);
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
    cyberAudio?.playClick();
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    resetAutoSlide();
  };

  const handleNext = () => {
    cyberAudio?.playClick();
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    resetAutoSlide();
  };

  return (
    <section className="testimonials section-padding bg-alt" id="testimonials">
      <div className="section-header">
        <span className="sub-title">Industry &amp; Academic Endorsements</span>
        <h2 className="section-title">What Mentors &amp; Leads Say</h2>
        <div className="section-line"></div>
      </div>

      <div className="testimonials-carousel-wrapper">
        <div className="testimonials-track-container">
          <div
            className="testimonials-track"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              display: 'flex',
              transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'
            }}
          >
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="testimonial-slide"
                style={{ flex: '0 0 100%', maxWidth: '100%' }}
              >
                <Card3D className="testimonial-card-3d" maxRotation={8} scale={1.01}>
                  <div className="testimonial-card">
                    {/* Top row with Quote & Rating */}
                    <div className="testimonial-top-row">
                      <div className="quote-badge">
                        <Quote className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div className="rating-stars">
                        {[...Array(item.rating)].map((_, rIdx) => (
                          <Star key={rIdx} className="w-4 h-4 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                    </div>

                    {/* Text */}
                    <p className="testimonial-text">{item.text}</p>

                    {/* Author Footer */}
                    <div className="testimonial-footer-row">
                      <div className="testimonial-author">
                        <div className="author-avatar-placeholder">
                          {item.avatarPlaceholder}
                        </div>
                        <div className="author-info">
                          <span className="author-name">{item.author}</span>
                          <span className="author-role">{item.role} • {item.organization}</span>
                        </div>
                      </div>

                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-endorsement-link"
                          onClick={() => cyberAudio?.playSuccess()}
                        >
                          <FileText className="w-4 h-4 text-cyan-400" />
                          <span>{item.badgeText}</span>
                          <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                        </a>
                      )}
                    </div>
                  </div>
                </Card3D>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation Buttons & Pagination */}
        <div className="carousel-controls-row">
          <button
            onClick={handlePrev}
            className="carousel-btn prev"
            aria-label="Previous Endorsement"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="carousel-dots">
            {testimonials.map((_, dotIdx) => (
              <button
                key={dotIdx}
                className={`carousel-dot ${dotIdx === currentSlide ? 'active' : ''}`}
                onClick={() => {
                  cyberAudio?.playClick();
                  setCurrentSlide(dotIdx);
                  resetAutoSlide();
                }}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="carousel-btn next"
            aria-label="Next Endorsement"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
