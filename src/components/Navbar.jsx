"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

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
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const scrollPosition = window.scrollY + 200;
      for (const link of navLinks) {
        const sectionId = link.href.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
          isScrolled
            ? "bg-[#071220]/90 border-b border-cyan-400/30 shadow-[0_4px_30px_rgba(7,18,32,0.5)] py-2"
            : "bg-[#071220]/60 border-b border-cyan-500/10 py-4"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
            <span className="font-display font-bold tracking-wider text-white group-hover:text-cyan-400 transition-colors">
              MAHZIL SOHAIL
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative font-mono text-[13px] tracking-wide py-1.5 transition-colors duration-300 ${
                    isActive ? "text-cyan-400" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA & Mobile Button */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:inline-block relative overflow-hidden border border-cyan-400 px-5 py-2 text-[13px] font-mono text-cyan-400 hover:text-[#071220] transition-colors duration-300 rounded group"
            >
              <span className="absolute inset-0 w-full h-full bg-cyan-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-[-1]" />
              <span className="relative z-10">Get in Touch</span>
            </a>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-cyan-400 hover:text-white transition-colors p-1"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden border-b border-cyan-500/20 bg-[#071220]/95 backdrop-blur-lg overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-4 font-mono text-[14px]">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`py-2 px-3 rounded transition-all ${
                      activeSection === link.href
                        ? "bg-cyan-500/10 text-cyan-400 border-l-2 border-cyan-400"
                        : "text-slate-400 hover:text-white hover:bg-slate-800/30"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-2 text-center border border-cyan-400 py-3.5 text-cyan-400 hover:bg-cyan-400 hover:text-[#071220] transition-colors rounded"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </motion.nav>
  );
}