'use client';

import React, { useState } from 'react';
import Card3D from './3d/Card3D';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  CheckCheck,
  FileText,
  MessageSquare,
  Sparkles,
  Terminal,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { cyberAudio } from '../lib/cyberAudio';

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
  const [copiedField, setCopiedField] = useState(null);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length >= 2 ? '' : 'Name must be at least 2 characters.';
      case 'email':
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(value.trim()) ? '' : 'Please enter a valid email address.';
      case 'subject':
        return value.trim().length > 0 ? '' : 'Subject is required.';
      case 'message':
        return value.trim().length >= 8 ? '' : 'Message must be at least 8 characters.';
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

    if (hasError) {
      cyberAudio?.playGlitch();
      return;
    }

    setIsSubmitting(true);
    cyberAudio?.playClick();

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
        cyberAudio?.playSuccess();
        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch {
          // ignore
        }
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTouched({ name: false, email: false, subject: false, message: false });
      } else {
        throw new Error(result.message || 'Failed to submit form.');
      }
    } catch (err) {
      console.error(err);
      cyberAudio?.playGlitch();
      alert('Your message could not be sent. Please check your internet or email me directly at mahzilsohail1@gmail.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    cyberAudio?.playSuccess();
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section className="contact section-padding" id="contact">
      <div className="section-header">
        <span className="sub-title">Initialize Transmission</span>
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-line"></div>
      </div>

      <div className="contact-grid">
        {/* Left Column: Direct Methods & Communication */}
        <div className="contact-info">
          <div className="contact-intro-badge">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Direct Communications Hub</span>
          </div>

          <h3 className="contact-heading">Let&apos;s Build Something Remarkable</h3>
          <p className="contact-desc">
            I am currently open to full-stack software development roles, frontend engineering opportunities, and ambitious mobile application projects. Whether you have an open position, an engineering challenge, or just want to connect, my inbox is always open.
          </p>

          <div className="contact-methods-list">
            {/* Email Card */}
            <Card3D className="method-card-3d" maxRotation={6} scale={1.015}>
              <div className="method-card">
                <div className="method-icon-box">
                  <Mail className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="method-body">
                  <span className="method-label">Direct Email</span>
                  <a href="mailto:mahzilsohail1@gmail.com" className="method-value">
                    mahzilsohail1@gmail.com
                  </a>
                </div>
                <button
                  className="btn-copy"
                  onClick={() => copyToClipboard('mahzilsohail1@gmail.com', 'email')}
                  title="Copy Email Address"
                  aria-label="Copy Email Address"
                >
                  {copiedField === 'email' ? (
                    <CheckCheck className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-400" />
                  )}
                </button>
              </div>
            </Card3D>

            {/* Phone / WhatsApp Card */}
            <Card3D className="method-card-3d" maxRotation={6} scale={1.015}>
              <div className="method-card">
                <div className="method-icon-box">
                  <Phone className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="method-body">
                  <span className="method-label">Direct Phone &amp; WhatsApp</span>
                  <a href="tel:+923238451415" className="method-value">
                    +92 323 8451415
                  </a>
                </div>
                <button
                  className="btn-copy"
                  onClick={() => copyToClipboard('+923238451415', 'phone')}
                  title="Copy Phone Number"
                  aria-label="Copy Phone Number"
                >
                  {copiedField === 'phone' ? (
                    <CheckCheck className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-400" />
                  )}
                </button>
              </div>
            </Card3D>

            {/* Location Card */}
            <Card3D className="method-card-3d" maxRotation={6} scale={1.015}>
              <div className="method-card">
                <div className="method-icon-box">
                  <MapPin className="w-5 h-5 text-sky-400" />
                </div>
                <div className="method-body">
                  <span className="method-label">Location Base</span>
                  <span className="method-value">Lahore, Pakistan (Open to Remote Worldwide)</span>
                </div>
              </div>
            </Card3D>
          </div>

          {/* Direct Resume Action */}
          <div className="contact-resume-box">
            <a
              href="/resume/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full"
              style={{ justifyContent: 'center' }}
              onClick={() => cyberAudio?.playSuccess()}
            >
              <FileText className="w-5 h-5" />
              <span>Download Official Resume (PDF)</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Terminal Contact Form */}
        <div className="contact-form-container">
          <Card3D className="form-card-3d" maxRotation={5} scale={1.01}>
            <div className="contact-form-card">
              <div className="form-top-bar">
                <div className="terminal-dots">
                  <span className="t-dot red"></span>
                  <span className="t-dot yellow"></span>
                  <span className="t-dot green"></span>
                </div>
                <span className="terminal-title">msg_transmission.protocol</span>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  {/* Name */}
                  <div className={`form-group ${errors.name && touched.name ? 'invalid' : ''}`}>
                    <label htmlFor="name" className="form-label">
                      Sender Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      placeholder="e.g. Sarah Connor / Tech Recruiter"
                    />
                    {errors.name && touched.name && (
                      <span className="error-msg">{errors.name}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div className={`form-group ${errors.email && touched.email ? 'invalid' : ''}`}>
                    <label htmlFor="email" className="form-label">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      placeholder="e.g. sarah@company.com"
                    />
                    {errors.email && touched.email && (
                      <span className="error-msg">{errors.email}</span>
                    )}
                  </div>

                  {/* Subject */}
                  <div className={`form-group ${errors.subject && touched.subject ? 'invalid' : ''}`}>
                    <label htmlFor="subject" className="form-label">
                      Subject / Project Scope <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-input"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      placeholder="e.g. Full-Stack Role / Project Collaboration"
                    />
                    {errors.subject && touched.subject && (
                      <span className="error-msg">{errors.subject}</span>
                    )}
                  </div>

                  {/* Message */}
                  <div className={`form-group ${errors.message && touched.message ? 'invalid' : ''}`}>
                    <label htmlFor="message" className="form-label">
                      Message Transmission <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="form-textarea"
                      value={formData.message}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                      placeholder="Hello Mahzil, we reviewed your projects and would love to connect regarding..."
                    ></textarea>
                    {errors.message && touched.message && (
                      <span className="error-msg">{errors.message}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary btn-submit"
                  >
                    <span>{isSubmitting ? 'Transmitting...' : 'Dispatch Message'}</span>
                    <Send className="w-5 h-5 btn-icon-send" />
                  </button>
                </form>
              ) : (
                <div className="form-success-message active">
                  <div className="success-icon-box">
                    <Check className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3>Transmission Dispatched!</h3>
                  <p>
                    Thank you! Your message was transmitted successfully into Mahzil&apos;s direct queue. I will reply to you as soon as possible.
                  </p>
                  <button
                    onClick={() => {
                      cyberAudio?.playClick();
                      setIsSubmitted(false);
                    }}
                    className="btn btn-secondary"
                  >
                    Transmit Another Message
                  </button>
                </div>
              )}
            </div>
          </Card3D>
        </div>
      </div>
    </section>
  );
}
