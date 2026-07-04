
export default function Experience() {
  return (
    <section id="experience" className="py-30">
      <div className="max-w-295 mx-auto px-8">

        {/* Section Heading */}

        <div className="flex justify-between items-end flex-wrap gap-5 mb-11.25">

          <h2 className="font-(--font-display) text-[36px] leading-[1.1]">
            Professional Experience
          </h2>

          <span className="font-(--font-mono) text-[12px] tracking-[0.18em] uppercase text-cyan-400">
            Experience
          </span>

        </div>

        {/* Experience Card */}
        <div className="max-w-225 mx-auto ">

          <div className="border border-cyan-500/20 bg-[#071220]/80 rounded-[18px] p-8 hover:border-cyan-400 transition-all duration-300">

            <div className="flex justify-between items-center flex-wrap gap-3 mb-2">

              <h3 className="font-(--font-display) text-[28px] text-cyan-400">
                Frontend Development Intern
              </h3>

              <span className="font-(--font-mono) text-[14px] text-cyan-400">
                Oct 2025 – Nov 2025
              </span>

            </div>

            <h4 className="font-(--font-display)] text-[20px] font-medium text-white mb-5">
              CodeAlpha (Virtual Internship)
            </h4>

            <ul className="list-disc pl-5 space-y-3">

              <li className="font-(--font-mono) text-[14px] leading-[1.8] text-[#c7d2e8]">
                Developed responsive web applications using React, HTML, CSS, and JavaScript.
              </li>

              <li className="font-(--font-mono) text-[14px] leading-[1.8] text-[#c7d2e8]">
                Built interactive UI components and responsive layouts.
              </li>

              <li className="font-(--font-mono) text-[14px] leading-[1.8] text-[#c7d2e8]">
                Applied Git for version control and followed modern frontend development practices.
              </li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}