"use client";

import { motion } from "framer-motion";
import { currentlyExploring } from "@/data/technologies";

export default function CurrentlyExploring() {
  return (
    <section className="section-padding relative overflow-hidden snap-section">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#00d4ff]/5 via-[#7c3aed]/5 to-[#00d4ff]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-xs text-[#00d4ff] tracking-[0.3em] uppercase font-medium">
            Growth
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Currently <span className="text-gradient">Exploring</span>
          </h2>
          <p className="text-[#6b6b8a] max-w-lg mx-auto">
            Always learning. Always building. These are the areas I am actively
            diving into.
          </p>
        </motion.div>

        {/* Scrolling Topics */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050510] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050510] to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex gap-4"
          >
            {[...currentlyExploring, ...currentlyExploring].map((topic, i) => (
              <div
                key={`${topic}-${i}`}
                className="flex-shrink-0 px-6 py-3 rounded-full glass border border-white/5 hover:border-[#00d4ff]/20 transition-all duration-300 group cursor-default"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#00d4ff]/50 group-hover:bg-[#00d4ff] transition-colors animate-pulse-glow" />
                  <span className="text-white text-sm font-medium whitespace-nowrap">
                    {topic}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Direction Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 md:mt-20 text-center"
        >
          <div className="bg-[#0a0a1a] rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 max-w-3xl mx-auto border border-white/[0.04]">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              My strongest direction:{" "}
              <span className="text-gradient">AI + Software Engineering</span>
            </h3>
            <p className="text-[#8888a0] text-[14px] sm:text-[15px] leading-relaxed">
              I don&apos;t want AI to be a separate buzzword in my work.
              Instead, I focus on AI integrated into useful software —
              recommendation systems, intelligent search, classification,
              automation, and AI-powered business applications.
            </p>
            <div className="glow-line w-24 mx-auto mt-8" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
