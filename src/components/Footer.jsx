export default function Footer() {
  return (
    <footer className="py-12 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center flex-wrap gap-4">
        <p className="text-[11px] sm:text-[12px] text-cyan-500/40 font-mono tracking-wider">
          © 2026 MAHZIL SOHAIL — BUILT WITH REACT, NEXT.JS & TAILWIND CSS
        </p>
        <div className="flex gap-6 font-mono text-[11px] sm:text-[12px]">
          <a
            href="https://github.com/MahzilSohail"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mahzil-sohail-02412b371/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
          >
            LinkedIn
          </a>

          <a
            href="mailto:mahzilsohail1@gmail.com"
            className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}