"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const CodeTerminal = dynamic(() => import("@/components/three/CodeTerminal"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-80 h-48 rounded-2xl border border-[#00d4ff]/10 animate-pulse" />
    </div>
  ),
});

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 snap-section">
      {/* ── Background ── */}
      <div className="absolute top-[-10%] left-[10%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-[#00d4ff]/[0.03] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[10%] w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] rounded-full bg-[#7c3aed]/[0.03] blur-[140px] pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Text */}
          <div>
            {/* Badge */}
            <motion.div {...fadeUp(0.2)} className="mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.03]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[10px] text-[#8888a0] tracking-[0.15em] uppercase font-medium">
                  Available for projects
                </span>
              </span>
            </motion.div>

            {/* Headline — clean, separated lines */}
            <motion.h1
              {...fadeUp(0.3)}
              className="mb-5"
            >
              <span className="block text-[2rem] sm:text-[2.4rem] md:text-[2.6rem] lg:text-[3rem] font-bold tracking-[-0.02em] leading-[1.15] text-white">
                I Build Software.
              </span>
              <span className="block text-[2rem] sm:text-[2.4rem] md:text-[2.6rem] lg:text-[3rem] font-bold tracking-[-0.02em] leading-[1.15] text-white mt-1">
                I Explore{" "}
                <span className="bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent">
                  AI
                </span>
                .
              </span>
              <span className="block text-[2rem] sm:text-[2.4rem] md:text-[2.6rem] lg:text-[3rem] font-bold tracking-[-0.02em] leading-[1.15] text-white mt-1">
                I Turn Ideas Into{" "}
                <span className="bg-gradient-to-r from-[#7c3aed] to-[#00d4ff] bg-clip-text text-transparent">
                  Technology
                </span>
                .
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              {...fadeUp(0.45)}
              className="text-[#6b6b8a] text-sm sm:text-[15px] leading-relaxed mb-7 max-w-[400px]"
            >
              Software developer and AI builder creating practical digital
              products, intelligent systems, and technology that solves real
              problems.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.55)}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#050510] text-[13px] font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                <span className="relative z-10">Explore My Work</span>
                <svg
                  className="relative z-10 w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <span className="absolute inset-0 bg-white/10 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/[0.08] text-white/90 text-[13px] font-semibold hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-200"
              >
                Let&apos;s Build Something
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              {...fadeUp(0.7)}
              className="flex items-center gap-5 mt-9 pt-6 border-t border-white/[0.04]"
            >
              {[
                { value: ".NET", label: "Backend" },
                { value: "Python", label: "AI / ML" },
                { value: "Flutter", label: "Mobile" },
              ].map((stat) => (
                <div key={stat.value} className="flex flex-col">
                  <span className="text-white/90 text-[13px] font-semibold">{stat.value}</span>
                  <span className="text-[#5a5a72] text-[10px] tracking-wider uppercase">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Code Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex items-center justify-center"
          >
            <CodeTerminal />
          </motion.div>
        </div>
      </div>

      {/* Mobile — Terminal below text */}
      <div className="md:hidden absolute bottom-24 left-0 right-0 flex justify-center pointer-events-none z-10 opacity-40">
        <div className="w-[260px]">
          <CodeTerminal />
        </div>
      </div>

      {/* ── Scroll ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[9px] text-[#5a5a72] tracking-[0.25em] uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-4 h-7 rounded-full border border-white/[0.08] flex items-start justify-center p-1"
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3], y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-0.5 h-0.5 rounded-full bg-[#00d4ff]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
