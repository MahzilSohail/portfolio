import skills from "@/data/skills";
import SkillRow from "./SkillRow";

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-7 h-px bg-cyan-400"></div>
          <span className="font-mono uppercase tracking-[0.18em] text-[11px] sm:text-[12px] text-cyan-400">
            SKILLS
          </span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl leading-[1.2] mb-12 text-white">
          The stack,
          <span className="text-cyan-400"> end to end.</span>
        </h2>

        <div className="border-t border-cyan-500/20">
          {skills.map((skill, index) => (
            <SkillRow
              key={skill.title}
              title={skill.title}
              description={skill.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}