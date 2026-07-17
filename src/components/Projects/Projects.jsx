import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";
import FadeUp from "../animations/FadeUp";

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="flex justify-between items-end flex-wrap gap-5 mb-12">
          <h2 className="font-display text-3xl sm:text-4xl text-white">
            Things I&apos;ve built
          </h2>
          <span className="font-mono uppercase tracking-[0.18em] text-[11px] sm:text-[12px] text-cyan-400">
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

        <div className="mt-16 text-center">
          <h3 className="font-display text-[20px] sm:text-[22px] text-white">
            For More Visit
          </h3>
          <a
            href="https://github.com/MahzilSohail"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden inline-flex mt-5 border border-cyan-400 px-6 py-3.5 rounded text-[13px] font-mono text-cyan-400 hover:text-[#071220] transition-colors duration-300 group"
          >
            <span className="absolute inset-0 w-full h-full bg-cyan-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-[-1]" />
            <span className="relative z-10 flex items-center gap-1.5 font-semibold">
              GitHub Profile ↗
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}