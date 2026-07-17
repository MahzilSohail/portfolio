import FadeUp from "../animations/FadeUp";

export default function SkillRow({ title, description, index }) {
  const padIndex = String(index + 1).padStart(2, "0");
  
  return (
    <FadeUp>
      <div className="group border-b border-cyan-500/10 py-6 transition-all duration-300 hover:bg-cyan-500/[0.02] hover:pl-4 hover:border-cyan-500/30">
        <div className="grid lg:grid-cols-[60px_220px_1fr] gap-4 lg:gap-8 items-start">
          
          {/* Index Counter */}
          <span className="font-mono text-[11px] text-cyan-500/40 tracking-wider pt-1">
            [{padIndex}]
          </span>

          {/* Heading */}
          <div className="flex items-center gap-2">
            {/* Blinking indicator that activates on hover */}
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
            <h3 className="font-display text-[18px] sm:text-[20px] text-white font-medium group-hover:text-cyan-400 transition-colors">
              {title}
            </h3>
          </div>

          {/* Description */}
          <p className="font-mono text-[13.5px] sm:text-[14px] leading-relaxed text-slate-300">
            {description}
          </p>

        </div>
      </div>
    </FadeUp>
  );
}