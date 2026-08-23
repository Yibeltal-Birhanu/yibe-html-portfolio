"use client";

import { useState } from "react";
import { technologies, type Technology } from "@/data/technologies";
import SectionReveal from "@/components/ui/SectionReveal";

const categories = [
  { name: "Languages", filter: "Language" },
  { name: "Frameworks", filter: "Framework" },
  { name: "AI / ML", filter: "AI / ML" },
  { name: "Databases", filter: "Database" },
  { name: "Tools", filter: "Tool" },
];

export default function TechStack() {
  const [activeTech, setActiveTech] = useState<Technology | null>(null);

  return (
    <section id="tech" className="section-padding relative snap-section overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00d4ff]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <SectionReveal className="text-center mb-12">
          <span className="text-[11px] text-[#00d4ff] tracking-[0.25em] uppercase font-medium">
            Tools
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-3 mb-4 tracking-[-0.02em]">
            Technology Stack
          </h2>
          <p className="text-[#6b6b8a] text-sm max-w-md mx-auto">
            The technologies I use to build software systems.
          </p>
        </SectionReveal>

        {/* Category rows */}
        <div className="space-y-6">
          {categories.map((cat) => {
            const items = technologies.filter((t) => t.category === cat.filter);
            if (items.length === 0) return null;
            return (
              <SectionReveal key={cat.name} delay={0.1}>
                <div className="mb-3">
                  <span className="text-[10px] text-[#5a5a72] tracking-[0.2em] uppercase font-medium">
                    {cat.name}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((tech) => (
                    <button
                      key={tech.name}
                      onMouseEnter={() => setActiveTech(tech)}
                      onMouseLeave={() => setActiveTech(null)}
                      className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border transition-all duration-200 cursor-default ${
                        activeTech?.name === tech.name
                          ? "border-[#00d4ff]/20 bg-[#00d4ff]/[0.06] shadow-[0_0_20px_rgba(0,212,255,0.06)]"
                          : "border-white/[0.04] bg-white/[0.02] hover:border-white/[0.08] hover:bg-white/[0.04]"
                      }`}
                    >
                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: tech.color }}
                      />
                      <span
                        className={`text-[13px] font-medium transition-colors duration-200 ${
                          activeTech?.name === tech.name ? "text-[#00d4ff]" : "text-white/80"
                        }`}
                      >
                        {tech.name}
                      </span>
                    </button>
                  ))}
                </div>
              </SectionReveal>
            );
          })}
        </div>

        {/* Info panel */}
        <div
          className={`mt-8 transition-all duration-300 ${
            activeTech ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          {activeTech && (
            <div className="rounded-2xl p-5 max-w-lg mx-auto border border-white/[0.04] bg-[#0a0a1a]">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: activeTech.color }}
                />
                <span className="text-white text-[14px] font-semibold">{activeTech.name}</span>
                <span className="text-[11px] text-[#5a5a72]">{activeTech.category}</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {activeTech.usage.map((u) => (
                  <span
                    key={u}
                    className="text-[10px] px-2.5 py-1 rounded-full bg-[#00d4ff]/[0.06] text-[#00d4ff]/80 border border-[#00d4ff]/[0.1]"
                  >
                    {u}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeTech.projects.map((p) => (
                  <span
                    key={p}
                    className="text-[10px] px-2.5 py-1 rounded-full bg-[#7c3aed]/[0.06] text-[#7c3aed]/80 border border-[#7c3aed]/[0.1]"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
