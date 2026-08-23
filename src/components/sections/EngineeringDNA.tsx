"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { engineeringDNA } from "@/data/technologies";

export default function EngineeringDNA() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section className="section-padding relative overflow-hidden snap-section">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#00d4ff]/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-[11px] text-[#00d4ff] tracking-[0.25em] uppercase font-medium">
            Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-3 mb-4 tracking-[-0.02em]">
            Engineering <span className="text-gradient">DNA</span>
          </h2>
          <p className="text-[#6b6b8a] text-sm max-w-md mx-auto">
            The interconnected skills that define my engineering approach.
          </p>
        </motion.div>

        {/* Node Network */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection Lines — hidden on mobile */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
            viewBox="0 0 800 500"
            fill="none"
          >
            <line x1="100" y1="80" x2="400" y2="80" stroke="#00d4ff" strokeOpacity="0.1" strokeWidth="1" />
            <line x1="400" y1="80" x2="700" y2="80" stroke="#00d4ff" strokeOpacity="0.1" strokeWidth="1" />
            <line x1="100" y1="250" x2="400" y2="250" stroke="#00d4ff" strokeOpacity="0.1" strokeWidth="1" />
            <line x1="400" y1="250" x2="700" y2="250" stroke="#00d4ff" strokeOpacity="0.1" strokeWidth="1" />
            <line x1="200" y1="420" x2="600" y2="420" stroke="#00d4ff" strokeOpacity="0.1" strokeWidth="1" />
            <line x1="100" y1="80" x2="100" y2="250" stroke="#7c3aed" strokeOpacity="0.1" strokeWidth="1" />
            <line x1="400" y1="80" x2="400" y2="250" stroke="#7c3aed" strokeOpacity="0.1" strokeWidth="1" />
            <line x1="700" y1="80" x2="700" y2="250" stroke="#7c3aed" strokeOpacity="0.1" strokeWidth="1" />
            <line x1="100" y1="250" x2="200" y2="420" stroke="#00d4ff" strokeOpacity="0.08" strokeWidth="1" />
            <line x1="400" y1="250" x2="400" y2="420" stroke="#00d4ff" strokeOpacity="0.08" strokeWidth="1" />
            <line x1="700" y1="250" x2="600" y2="420" stroke="#00d4ff" strokeOpacity="0.08" strokeWidth="1" />
            <line x1="100" y1="80" x2="400" y2="250" stroke="#7c3aed" strokeOpacity="0.06" strokeWidth="1" />
            <line x1="700" y1="80" x2="400" y2="250" stroke="#7c3aed" strokeOpacity="0.06" strokeWidth="1" />
            <line x1="100" y1="250" x2="400" y2="80" stroke="#7c3aed" strokeOpacity="0.06" strokeWidth="1" />
            <line x1="700" y1="250" x2="400" y2="80" stroke="#7c3aed" strokeOpacity="0.06" strokeWidth="1" />
          </svg>

          {/* Row 1: AI/ML, Backend, Web */}
          <div className="relative grid grid-cols-3 gap-3 sm:gap-6 md:gap-12 py-6 md:py-8">
            {engineeringDNA.slice(0, 3).map((node, i) => (
              <DNANode
                key={node.id}
                node={node}
                index={i}
                isActive={activeNode === node.id}
                onHover={() => setActiveNode(node.id)}
                onLeave={() => setActiveNode(null)}
              />
            ))}
          </div>

          {/* Row 2: Mobile, Databases, APIs */}
          <div className="relative grid grid-cols-3 gap-3 sm:gap-6 md:gap-12 py-6 md:py-8">
            {engineeringDNA.slice(3, 6).map((node, i) => (
              <DNANode
                key={node.id}
                node={node}
                index={i + 3}
                isActive={activeNode === node.id}
                onHover={() => setActiveNode(node.id)}
                onLeave={() => setActiveNode(null)}
              />
            ))}
          </div>

          {/* Row 3: Networking, Cloud */}
          <div className="relative grid grid-cols-2 gap-3 sm:gap-6 md:gap-12 max-w-xs sm:max-w-md mx-auto py-6 md:py-8">
            {engineeringDNA.slice(6).map((node, i) => (
              <DNANode
                key={node.id}
                node={node}
                index={i + 6}
                isActive={activeNode === node.id}
                onHover={() => setActiveNode(node.id)}
                onLeave={() => setActiveNode(null)}
              />
            ))}
          </div>
        </div>

        {/* Active Node Info */}
        <div
          className={`text-center mt-6 h-12 transition-all duration-300 ${
            activeNode ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          {activeNode && (
            <p className="text-[#9999b0] text-[13px] max-w-md mx-auto">
              {engineeringDNA.find((n) => n.id === activeNode)?.description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function DNANode({
  node,
  index,
  isActive,
  onHover,
  onLeave,
}: {
  node: (typeof engineeringDNA)[0];
  index: number;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`relative flex flex-col items-center justify-center p-3 sm:p-5 md:p-6 rounded-xl md:rounded-2xl cursor-pointer transition-all duration-300 ${
        isActive
          ? "bg-[#0a0a1a] border border-[#00d4ff]/20 shadow-[0_0_20px_rgba(0,212,255,0.06)]"
          : "bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08]"
      }`}
    >
      <div
        className={`w-2.5 h-2.5 rounded-full mb-2 md:mb-3 transition-all duration-300 ${
          isActive ? "bg-[#00d4ff] shadow-[0_0_12px_#00d4ff]" : "bg-[#7c3aed]/40"
        }`}
      />
      <span
        className={`text-[11px] sm:text-[13px] font-semibold transition-colors ${
          isActive ? "text-[#00d4ff]" : "text-white/80"
        }`}
      >
        {node.label}
      </span>
    </motion.div>
  );
}
