import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4 mt-8 font-mono text-[13px]">
      <a
        href="#projects"
        className="relative overflow-hidden border border-cyan-400 px-6 py-3.5 rounded text-cyan-400 hover:text-[#071220] transition-colors duration-300 group"
      >
        <span className="absolute inset-0 w-full h-full bg-cyan-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-[-1]" />
        <span className="relative z-10 flex items-center gap-1.5 font-semibold">
          View Builds <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </span>
      </a>

      <a
        href="https://github.com/MahzilSohail"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-slate-700 hover:border-cyan-400 px-6 py-3.5 rounded flex items-center gap-2 text-slate-300 hover:text-white transition-all duration-300 hover:bg-cyan-400/5"
      >
        <FaGithub size={16} />
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/mahzil-sohail-02412b371/"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-slate-700 hover:border-cyan-400 px-6 py-3.5 rounded flex items-center gap-2 text-slate-300 hover:text-white transition-all duration-300 hover:bg-cyan-400/5"
      >
        <FaLinkedin size={16} />
        LinkedIn
      </a>
    </div>
  );
}