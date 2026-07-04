import ScaleIn from "../animations/ScaleIn";
export default function SkillCard({ title, skills }) {
  return (
       <ScaleIn>
    <div className="group min-h-60 border border-cyan-500/20 rounded-[lg p-7 bg-[#071220]/40 hover:border-cyan-400 transition-all duration-300">

      <h3 className="font-(--font-display) text-[22px] mb-5 text-cyan-400 group-hover:text-cyan-400 transition-colors">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2.5">

        {skills.map((skill) => (
          <span
            key={skill}
            className="text-[13px] font-(--font-mono) px-3 py-1.75 rounded-full border border-cyan-500/20 text-[#7E96A3] hover:text-white hover:border-cyan-400 transition-all"
          >
            {skill}
          </span>
        ))}

      </div>
    </div>
    </ScaleIn>
  );
}