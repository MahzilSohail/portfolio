import FadeUp from "../animations/FadeUp";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Heading */}
        <div className="flex justify-between items-end flex-wrap gap-5 mb-12">
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] text-white">
            Professional Experience
          </h2>
          <span className="font-mono text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-cyan-400">
            Experience
          </span>
        </div>

        {/* Experience Card */}
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <div className="group relative border border-cyan-500/15 bg-[#071220]/80 rounded-2xl p-6 sm:p-8 hover:border-cyan-400/30 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.2)] overflow-hidden">
              
              {/* Corner Line Overlay */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500/20 group-hover:border-cyan-400 transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500/20 group-hover:border-cyan-400 transition-colors duration-300"></div>

              {/* Technical indicators */}
              <div className="flex justify-between items-center flex-wrap gap-3 mb-4 border-b border-cyan-500/10 pb-4">
                <div>
                  <h3 className="font-display text-[22px] sm:text-[24px] text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                    Frontend Development Intern
                  </h3>
                  <h4 className="font-display text-[16px] sm:text-[18px] text-white font-medium mt-1">
                    CodeAlpha (Virtual Internship)
                  </h4>
                </div>
                <div className="text-right">
                  <span className="font-mono text-[12px] sm:text-[13px] text-cyan-400 bg-cyan-400/5 px-3 py-1.5 border border-cyan-500/10 rounded">
                    Oct 2025 – Nov 2025
                  </span>
                  <div className="font-mono text-[9px] text-cyan-500/40 uppercase tracking-widest mt-2">
                    [REF // INTERN_25]
                  </div>
                </div>
              </div>

              {/* Styled Bullet Points */}
              <ul className="space-y-4">
                <li className="flex gap-3 items-start font-mono text-[13.5px] sm:text-[14px] leading-relaxed text-slate-300">
                  <span className="text-cyan-400 select-none pt-1">▧</span>
                  <span>Developed responsive web applications using React, HTML, CSS, and JavaScript.</span>
                </li>
                <li className="flex gap-3 items-start font-mono text-[13.5px] sm:text-[14px] leading-relaxed text-slate-300">
                  <span className="text-cyan-400 select-none pt-1">▧</span>
                  <span>Built interactive UI components and responsive layouts.</span>
                </li>
                <li className="flex gap-3 items-start font-mono text-[13.5px] sm:text-[14px] leading-relaxed text-slate-300">
                  <span className="text-cyan-400 select-none pt-1">▧</span>
                  <span>Applied Git for version control and followed modern frontend development practices.</span>
                </li>
              </ul>

            </div>
          </FadeUp>
        </div>

      </div>
    </section>
  );
}