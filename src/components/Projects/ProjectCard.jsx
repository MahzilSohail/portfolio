import FadeUp from "../animations/FadeUp";
import { FiGithub } from "react-icons/fi";

export default function ProjectCard({
  id,
  title,
  description,
  stack,
  full,
}) {
  return (
    <FadeUp>
      <div
        className={`
          group relative overflow-hidden
          border border-cyan-500/15
          rounded-xl
          p-6 sm:p-7.5
          bg-[#071220]/45
          bg-[linear-gradient(160deg,rgba(95,216,238,0.02),transparent_60%)]
          transition-all duration-300
          hover:-translate-y-1.5
          hover:border-cyan-400/30
          hover:bg-[linear-gradient(160deg,rgba(95,216,238,0.06),transparent_60%)]
          shadow-[0_4px_20px_rgba(0,0,0,0.15)]
          ${full ? "md:col-span-2" : ""}
        `}
      >
        {/* Technical Corner Marking Lines */}
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500/10 group-hover:border-cyan-400/50 transition-all duration-300"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500/10 group-hover:border-cyan-400/50 transition-all duration-300"></div>

        {/* Action icons shown on hover */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <a
            href="https://github.com/MahzilSohail"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 p-1.5 transition-colors bg-[#071220]/80 rounded-md border border-cyan-500/10 hover:border-cyan-400/30"
            title="View Code"
          >
            <FiGithub size={15} />
          </a>
        </div>

        <span className="block mb-3.5 font-mono text-[10px] tracking-widest uppercase text-cyan-500/40">
          {id}
        </span>

        <h3 className="font-display text-[20px] text-white font-semibold mb-3 group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>

        <p className="font-mono text-[13.5px] leading-relaxed text-slate-300 mb-5">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="text-[11px] font-mono px-2.5 py-1 border border-cyan-500/10 bg-[#0b1929]/50 rounded-full text-cyan-400/80 tracking-[0.04em]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </FadeUp>
  );
}