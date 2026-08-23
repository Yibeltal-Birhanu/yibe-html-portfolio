"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden snap-section">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#00d4ff]/10 via-[#7c3aed]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs text-[#00d4ff] tracking-[0.3em] uppercase font-medium">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-5 tracking-[-0.02em]">
            Have an Idea{" "}
            <span className="text-gradient">Worth Building?</span>
          </h2>
          <p className="text-[#8888a0] text-sm sm:text-[15px] max-w-xl mx-auto mb-10 leading-relaxed">
            Let&apos;s turn the idea into something real. Whether you need a
            web application, an AI system, a mobile app, or a complete software
            solution — I am ready to build it.
          </p>
        </motion.div>

        {/* CTA Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-16"
        >
          <a
            href="mailto:yibebra240@gmail.com"
            className="group glass rounded-2xl p-6 border border-white/5 hover:border-[#00d4ff]/30 transition-all duration-300 hover:glow-accent"
          >
            <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#00d4ff]/20 transition-colors">
              <span className="text-lg">💬</span>
            </div>
            <span className="text-white text-sm font-medium block">
              Start a Conversation
            </span>
            <span className="text-[#6b6b8a] text-xs">Email me</span>
          </a>

          <a
            href="https://github.com/yibeltal-birhanu"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass rounded-2xl p-6 border border-white/5 hover:border-[#7c3aed]/30 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-[#7c3aed]/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#7c3aed]/20 transition-colors">
              <span className="text-lg">⚡</span>
            </div>
            <span className="text-white text-sm font-medium block">
              View GitHub
            </span>
            <span className="text-[#6b6b8a] text-xs">Open source work</span>
          </a>

          <a
            href="https://linkedin.com/in/yibeltal-birhanu"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass rounded-2xl p-6 border border-white/5 hover:border-[#00d4ff]/30 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#00d4ff]/20 transition-colors">
              <span className="text-lg">🔗</span>
            </div>
            <span className="text-white text-sm font-medium block">
              Connect on LinkedIn
            </span>
            <span className="text-[#6b6b8a] text-xs">Professional network</span>
          </a>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xs text-[#6b6b8a] tracking-wider uppercase mb-4">
            What I can build
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {[
              "Custom Web Applications",
              "Business Management Systems",
              "Backend / API Development",
              "Mobile Applications",
              "AI-Powered Applications",
              "Recommendation Systems",
              "Database-Driven Systems",
              "MVP Development",
              "Software Prototypes",
              "Automation",
            ].map((service) => (
              <span
                key={service}
                className="text-xs px-3 py-1.5 rounded-full glass-light text-[#6b6b8a] border border-white/5"
              >
                {service}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
