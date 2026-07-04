import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4 mt-10">

      <a
        href="#projects"
        className="border border-cyan-400 px-6 py-3 rounded text-cyan-400 hover:bg-cyan-400 hover:text-[#071220] duration-300"
      >
        View Builds →
      </a>

      <a
        href="https://github.com/MahzilSohail"
        target="_blank"
        className="border border-slate-600 px-6 py-3 rounded flex items-center gap-2 hover:border-cyan-400"
      >
        <FaGithub />

        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/mahzil-sohail-02412b371/"
        target="_blank"
        className="border border-slate-600 px-6 py-3 rounded flex items-center gap-2 hover:border-cyan-400"
      >
        <FaLinkedin />

        LinkedIn
      </a>

    </div>
  );
}