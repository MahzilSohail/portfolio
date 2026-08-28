'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length >= 3 ? '' : 'Name must be at least 3 characters.';
      case 'email':
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(value.trim()) ? '' : 'Please enter a valid email address.';
      case 'subject':
        return value.trim().length > 0 ? '' : 'Subject is required.';
      case 'message':
        return value.trim().length >= 10 ? '' : 'Message must be at least 10 characters.';
      default:
        return '';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    let hasError = false;
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      newErrors[key] = err;
      if (err) hasError = true;
    });

    setErrors(newErrors);
    setTouched({ name: true, email: true, subject: true, message: true });

    if (hasError) return;

    setIsSubmitting(true);

    try {
      const dataToSend = new FormData();
      dataToSend.append('access_key', 'f057570a-ee7a-491e-992c-918c59b6fff0');
      dataToSend.append('name', formData.name);
      dataToSend.append('email', formData.email);
      dataToSend.append('subject', formData.subject);
      dataToSend.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: dataToSend
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTouched({ name: false, email: false, subject: false, message: false });
      } else {
        throw new Error(result.message || 'Failed to submit form.');
      }
    } catch (err) {
      console.error(err);
      alert('Sorry, your message could not be sent. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
  };

  return (
    <section className="contact section-padding bg-alt" id="contact">
      <div className="section-header">
        <span className="sub-title">Connection</span>
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-line"></div>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <h3>Let&aposs Collaborate</h3>
          <p>
            I&aposm currently seeking frontend, mobile, or full-stack software development internship
            opportunities where I can apply my skills and build impactful products. Have a project or role
            in mind? Drop me a message!
          </p>

          <div className="contact-methods">
            <div className="method-item">
              <div className="method-icon">
                <Mail className="w-5 h-5" />
              </div>
              <div className="method-text">
                <span className="method-label">Email Me</span>
                <a href="mailto:mahzilsohail1@gmail.com" className="method-value">
                  mahzilsohail1@gmail.com
                </a>
              </div>
            </div>

            <div className="method-item">
              <div className="method-icon">
                <Phone className="w-5 h-5" />
              </div>
              <div className="method-text">
                <span className="method-label">Call/WhatsApp</span>
                <a href="tel:+923238451415" className="method-value">
                  +92 323 8451415
                </a>
              </div>
            </div>

            <div className="method-item">
              <div className="method-icon">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="method-text">
                <span className="method-label">Location</span>
                <span className="method-value">Lahore, Pakistan</span>
              </div>
            </div>

            <div className="res-btn">
              <a href="/resume/Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-submit">
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className={`form-group ${errors.name && touched.name ? 'invalid' : ''}`}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  required
                  placeholder=" "
                />
                <label htmlFor="name">Your Name</label>
                {errors.name && touched.name && <span className="error-msg">{errors.name}</span>}
              </div>

              <div className={`form-group ${errors.email && touched.email ? 'invalid' : ''}`}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  required
                  placeholder=" "
                />
                <label htmlFor="email">Your Email</label>
                {errors.email && touched.email && <span className="error-msg">{errors.email}</span>}
              </div>

              <div className={`form-group ${errors.subject && touched.subject ? 'invalid' : ''}`}>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  required
                  placeholder=" "
                />
                <label htmlFor="subject">Subject</label>
                {errors.subject && touched.subject && <span className="error-msg">{errors.subject}</span>}
              </div>

              <div className={`form-group ${errors.message && touched.message ? 'invalid' : ''}`}>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  required
                  placeholder=" "
                ></textarea>
                <label htmlFor="message">Your Message</label>
                {errors.message && touched.message && <span className="error-msg">{errors.message}</span>}
              </div>

              <button type="submit" disabled={isSubmitting} className="btn btn-primary btn-submit">
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          ) : (
            <div className="form-success-message active">
              <div className="success-icon-box">
                <Check className="w-6 h-6" />
              </div>
              <h3>Message Sent!</h3>
              <p>
                Thank you, your message has been transmitted successfully. I will get back to you shortly.
              </p>
              <button onClick={handleReset} className="btn btn-secondary">
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
