import technicalSkills from "@/data/technicalSkills";
import SkillCard from "./SkillCard";

export default function TechnicalSkills() {
  return (
    <section id="technical-skills" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-7 h-px bg-cyan-400"></div>
          <span className="font-mono uppercase tracking-[0.18em] text-[11px] sm:text-[12px] text-cyan-400">
            TECHNICAL SKILLS
          </span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl leading-[1.2] mb-12 text-white">
          Technologies I work with.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalSkills.map((item) => (
            <SkillCard
              key={item.title}
              title={item.title}
              skills={item.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}