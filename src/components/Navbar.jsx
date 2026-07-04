"use client";

import { motion } from "framer-motion";
const navLinks = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Builds",
    href: "#projects",
  },
  {
    name: "Education",
    href: "#education",
  },
  {
    name: "Connect",
    href: "#contact",
  },
];

export default function Navbar() {
  return (
    <motion.nav
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1],
  }}
>
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#071220]/80 border-b border-cyan-500/20">
      <nav className="max-w-295 mx-auto h-17 px-8 flex items-center justify-between">

        {/* Logo */}

        <div className="flex items-center gap-2">

          <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>

          <h1 className="font-bold tracking-wide text-white">
            MAHZIL SOHAIL
          </h1>

        </div>

        {/* Links */}

        <div className="hidden md:flex items-center gap-8">

          {navLinks.map((link) => (

            <a
              key={link.name}
              href={link.href}
              className="text-slate-400 hover:text-white duration-300 relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-cyan-400 hover:after:w-full after:duration-300"
            >
              {link.name}
            </a>

          ))}

        </div>

        {/* Button */}

        <a
          href="#contact"
          className="border border-cyan-400 px-5 py-2 text-cyan-400 hover:bg-cyan-400 hover:text-[#071220] duration-300 rounded"
        >
          Get in Touch
        </a>

      </nav>
    </header>
    </motion.nav>
  );
}