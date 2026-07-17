import ScaleIn from "../animations/ScaleIn";

export default function SkillCard({ title, skills }) {
  return (
    <ScaleIn>
      <div className="group min-h-55 border border-cyan-500/15 rounded-xl p-6 bg-[#071220]/40 hover:border-cyan-400/30 transition-all duration-300 relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
        {/* Technical drafting details */}
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyan-500/20 group-hover:border-cyan-400/40 transition-colors duration-300"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-cyan-500/20 group-hover:border-cyan-400/40 transition-colors duration-300"></div>

        <h3 className="font-display text-[20px] mb-4 text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-[12px] font-mono px-3 py-1.5 rounded border border-cyan-500/10 bg-[#0b1929]/50 text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/5 transition-all duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </ScaleIn>
  );
}