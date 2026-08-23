"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Tech", href: "#tech" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Always-on subtle backdrop */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          scrolled
            ? "bg-[#050510]/90 border-b border-white/[0.04]"
            : "bg-[#050510]/60"
        }`}
      />

      <nav className="relative max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group relative z-10">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-[#00d4ff]/10">
            Y
          </div>
          <span className="text-white/90 font-semibold text-[13px] tracking-wide hidden sm:block">
            YIBELTAL
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 relative z-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-3.5 py-2 text-[13px] text-[#8888a0] font-medium hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.04]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/yibeltal-birhanu"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-3.5 py-2 text-[13px] text-[#8888a0] font-medium hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.04]"
          >
            GitHub
          </a>
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] text-white/90 text-[13px] font-medium hover:bg-white/[0.1] hover:border-white/[0.12] transition-all duration-200 relative z-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]" />
          Let&apos;s Talk
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative z-10 p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span
              className={`w-full h-[1.5px] bg-white/80 rounded-full transition-all duration-300 origin-center ${
                mobileOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`w-full h-[1.5px] bg-white/80 rounded-full transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`w-full h-[1.5px] bg-white/80 rounded-full transition-all duration-300 origin-center ${
                mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden relative bg-[#050510]/95 border-b border-white/[0.04] overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[#8888a0] text-base font-medium hover:text-white transition-colors py-2.5 px-3 rounded-lg hover:bg-white/[0.04]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/[0.06] border border-white/[0.08] text-white/90 text-sm font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]" />
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
