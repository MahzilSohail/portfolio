import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";
import FadeUp from "../animations/FadeUp";

export default function Projects() {
  return (
       
    <section id="projects" className="py-30">
   <FadeUp>
      <div className="max-w-295 mx-auto px-8">

        <div className="flex justify-between items-end flex-wrap gap-5 mb-12.5">

          <h2 className="font-(--font-display) text-[36px]">
            Things I&apos;ve built
          </h2>

          <span className="uppercase tracking-[0.18em] text-[12px] text-cyan-400 font-(--font-mono)">
            Selected Builds
          </span>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}

        </div>

        <div className="mt-15 text-center">

          <h3 className="font-(--font-display) text-[24px]">

            For More Visit

          </h3>

          <a
            href="https://github.com/MahzilSohail"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-5 border border-cyan-500/20 px-6 py-3 rounded-sm text-cyan-400 hover:bg-cyan-400 hover:text-[#071220] transition-all duration-300"
          >
            GitHub ↗
          </a>

        </div>

      </div>
   </FadeUp>
    </section>
  );
}