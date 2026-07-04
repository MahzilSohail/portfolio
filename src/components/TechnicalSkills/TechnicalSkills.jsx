import technicalSkills from "@/data/technicalSkills";
import SkillCard from "./SkillCard";

export default function TechnicalSkills() {
  return (
    <section
      id="technical-skills"
      className="py-30"
    >
      <div className="max-w-295 mx-auto px-8">
        <div className="flex items-center gap-2.5 mb-4.5">
          <div className="w-7 h-px bg-cyan-400"></div>
          <span className="uppercase tracking-[0.18em] text-[12px] text-cyan-400 font-(--font-mono)">
            TECHNICAL SKILLS
          </span>
        </div>

        <h2 className="font-(--font-display) text-[34px] mb-15">
          Technologies I work with.
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

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