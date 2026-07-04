import skills from "@/data/skills";
import SkillRow from "./SkillRow";

export default function Skills() {
  return (
    <section id="skills" className="py-35">

      <div className="max-w-295 mx-auto px-8">

        <div className="flex items-center gap-2.5 mb-4.5">

          <div className="w-7 h-px bg-cyan-400"></div>

          <span className="uppercase tracking-[0.18em] text-[12px] text-cyan-400 font-(--font-mono)">
            SKILLS
          </span>

        </div>

        <h2 className="font-(--font-display) text-[34px] leading-[1.2] mb-17.5">

          The stack,
          <span className="text-cyan-400"> end to end.</span>

        </h2>

        {skills.map((skill) => (
          <SkillRow
            key={skill.title}
            title={skill.title}
            description={skill.description}
          />
        ))}

      </div>

    </section>
  );
}