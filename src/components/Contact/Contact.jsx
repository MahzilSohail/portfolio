"use client";

import ScaleIn from "../animations/ScaleIn";
import { FiMail, FiPhone, FiFileText } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 text-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Heading */}
        <div className="font-mono uppercase tracking-[0.08em] text-[11px] sm:text-[12px] text-cyan-400 flex justify-center items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
          CONNECT
        </div>

        <h2 className="mt-4 font-display font-bold leading-[1.1] text-[32px] sm:text-[40px] md:text-[52px] text-white">
          Let&apos;s build the{" "}
          <span className="text-cyan-400">next system</span>
          <br />
          together.
        </h2>

        <p className="mt-4 text-[14px] sm:text-[15px] text-slate-400 font-mono max-w-xl mx-auto">
          Open to internships, collaborative builds, and full-stack or mobile
          roles.
        </p>

        {/* CTA Contact Links */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 font-mono text-[13px]">
          <a
            href="mailto:mahzilsohail1@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded border border-cyan-400 text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-[#0B1929] hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(95,216,238,0.25)]"
          >
            <FiMail size={14} />
            mahzilsohail1@gmail.com
          </a>

          <a
            href="tel:+923238451415"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded border border-slate-700 text-slate-300 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-0.5 hover:bg-cyan-400/5"
          >
            <FiPhone size={14} />
            +92 323 8451415
          </a>

          <a
            href="/resume/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded border border-cyan-400 text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-[#0B1929] hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(95,216,238,0.25)]"
          >
            <FiFileText size={14} />
            Resume
          </a>
        </div>

        {/* Contact Form Card */}
        <div className="max-w-xl mx-auto mt-14">
          <ScaleIn>
            <div className="relative p-8 sm:p-10 rounded-2xl border border-cyan-500/15 bg-[#071220]/75 backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.35)] overflow-hidden text-left">
              
              {/* Draft Blueprint Corners */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500/20"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500/20"></div>
              
              <div className="font-mono text-[9px] text-cyan-500/40 uppercase tracking-widest mb-6">
                [FORM // COMM_LINK]
              </div>

              <form
                action="https://formsubmit.co/mahzilsohail1@gmail.com"
                method="POST"
                className="flex flex-col gap-5 font-mono text-[13px]"
              >
                <input type="hidden" name="_captcha" value="false" />

                <div className="space-y-1.5">
                  <label className="text-slate-400 text-[11px] uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-3.5 rounded-lg bg-[#0b1929]/80 border border-cyan-500/15 text-white placeholder-slate-600 outline-none focus:border-cyan-400 focus:bg-[#0b1929] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-400 text-[11px] uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3.5 rounded-lg bg-[#0b1929]/80 border border-cyan-500/15 text-white placeholder-slate-600 outline-none focus:border-cyan-400 focus:bg-[#0b1929] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-400 text-[11px] uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project inquiry / collaboration"
                    required
                    className="w-full px-4 py-3.5 rounded-lg bg-[#0b1929]/80 border border-cyan-500/15 text-white placeholder-slate-600 outline-none focus:border-cyan-400 focus:bg-[#0b1929] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-400 text-[11px] uppercase tracking-wider">Your Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Describe your project or message..."
                    required
                    className="w-full px-4 py-3.5 rounded-lg bg-[#0b1929]/80 border border-cyan-500/15 text-white placeholder-slate-600 outline-none focus:border-cyan-400 focus:bg-[#0b1929] transition-all resize-y min-h-[100px]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 relative overflow-hidden py-4 rounded-lg bg-cyan-400 text-[#071220] text-[15px] font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] cursor-pointer"
                >
                  Send Message
                </button>
              </form>

            </div>
          </ScaleIn>
        </div>

      </div>
    </section>
  );
}