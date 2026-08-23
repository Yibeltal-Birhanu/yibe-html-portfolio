"use client";

import SectionReveal from "@/components/ui/SectionReveal";
import { StaggerReveal, StaggerItem } from "@/components/ui/SectionReveal";

export default function Introduction() {
  return (
    <section id="about" className="section-padding relative snap-section">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <SectionReveal className="text-center mb-14">
          <span className="text-[11px] text-[#00d4ff] tracking-[0.25em] uppercase font-medium">
            Introduction
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-3 mb-4 tracking-[-0.02em]">
            More Than Code.{" "}
            <span className="text-gradient">I Build Solutions.</span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <SectionReveal direction="left" delay={0.15} className="space-y-5">
            <p className="text-[#8888a0] text-[15px] leading-relaxed">
              I am an Information Technology student from Ethiopia who enjoys
              turning ideas into working software. My interests span across
              software development, mobile applications, backend systems,
              databases, networking, and artificial intelligence.
            </p>
            <p className="text-[#8888a0] text-[15px] leading-relaxed">
              Rather than focusing only on learning technologies individually, I
              like combining them to build complete systems. I believe the future
              of software is not just about writing more code — it is about
              understanding problems, designing systems, and creating technology
              that makes decisions.
            </p>
          </SectionReveal>

          <StaggerReveal className="space-y-3" staggerDelay={0.1}>
            {[
              {
                icon: "⚡",
                title: "Problem Solver",
                desc: "I identify real problems and engineer practical solutions through software.",
              },
              {
                icon: "🧠",
                title: "AI Explorer",
                desc: "I build intelligent systems — not just use AI as a buzzword.",
              },
              {
                icon: "🏗️",
                title: "Systems Thinker",
                desc: "I design complete systems: from data to architecture to deployment.",
              },
              {
                icon: "🚀",
                title: "Builder",
                desc: "I turn ideas into working products through continuous experimentation.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="glass rounded-xl p-5 border border-white/[0.04] hover:border-[#00d4ff]/[0.12] transition-all duration-300 group cursor-default">
                  <div className="flex items-start gap-4">
                    <span className="text-xl mt-0.5 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <div>
                      <h3 className="text-white text-[14px] font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[#6b6b8a] text-[13px] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
