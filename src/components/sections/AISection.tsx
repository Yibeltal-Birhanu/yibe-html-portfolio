"use client";

import { motion } from "framer-motion";

const aiCapabilities = [
  { label: "Classification", icon: "🏷️", description: "Categorizing and organizing data intelligently" },
  { label: "Recommendation", icon: "🎯", description: "Matching users with relevant content and opportunities" },
  { label: "Prediction", icon: "📈", description: "Forecasting outcomes from historical data patterns" },
  { label: "Automation", icon: "⚙️", description: "Building systems that make decisions and reduce manual work" },
];

export default function AISection() {
  return (
    <section className="section-padding relative overflow-hidden snap-section">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7c3aed]/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs text-[#7c3aed] tracking-[0.3em] uppercase font-medium">
            Intelligence
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Building With{" "}
            <span className="text-gradient">Intelligence</span>
          </h2>
          <p className="text-[#6b6b8a] max-w-2xl mx-auto text-lg">
            AI should do more than generate text. I am interested in building AI
            systems that become part of useful products — recommendation engines,
            intelligent search, classification, automation, and decision-support
            tools.
          </p>
        </motion.div>

        {/* Data Flow Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mb-20"
        >
          {/* Flow Line */}
          <div className="hidden md:flex absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "Data", icon: "📥" },
              { step: "Processing", icon: "🔄" },
              { step: "Intelligence", icon: "🧠" },
              { step: "Output", icon: "📤" },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="relative"
              >
                <div className="glass rounded-2xl p-6 text-center border border-white/5 hover:border-[#00d4ff]/20 transition-all duration-300 group">
                  <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <span className="text-white text-sm font-medium">
                    {item.step}
                  </span>
                  {/* Connector arrow */}
                  {i < 3 && (
                    <span className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-[#00d4ff]/30 text-sm">
                      →
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Capabilities */}
        <div className="grid sm:grid-cols-2 gap-6">
          {aiCapabilities.map((cap, i) => (
            <motion.div
              key={cap.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 border border-white/5 hover:border-[#7c3aed]/20 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#7c3aed]/10 flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-[#7c3aed]/20 transition-colors">
                  {cap.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{cap.label}</h3>
                  <p className="text-[#6b6b8a] text-sm leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
