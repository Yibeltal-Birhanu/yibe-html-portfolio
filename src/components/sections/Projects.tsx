"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/data/projects";

/* ── Dot grid background pattern ── */
function DotGrid() {
  return (
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
      <svg width="100%" height="100%">
        <defs>
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.5" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>
  );
}

/* ── Animated pipeline arrows ── */
function AnimatedArrow() {
  return (
    <span className="relative w-3 h-3 flex items-center justify-center">
      <span className="absolute w-2 h-px bg-[#2a2a42]" />
      <span className="absolute w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[4px] border-l-[#3a3a52] ml-1.5" />
    </span>
  );
}

/* ── Rich visual previews per project ── */
function ProjectVisual({ project, featured }: { project: Project; featured: boolean }) {
  const h = featured ? "h-32" : "h-24";

  const visuals: Record<string, React.ReactNode> = {
    "ai-job-recommender": (
      <div className={`${h} relative flex items-center justify-center`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.08)_0%,transparent_70%)]" />
        <div className="relative flex items-center gap-1 sm:gap-1.5 flex-wrap justify-center px-3">
          {[
            { label: "User", color: "cyan" },
            { label: "Profile", color: "cyan" },
            { label: "TF-IDF", color: "violet" },
            { label: "Similarity", color: "violet" },
            { label: "ML", color: "cyan" },
            { label: "Jobs", color: "cyan" },
          ].map((step, i) => (
            <span key={step.label} className="flex items-center gap-1">
              <span
                className={`px-2.5 py-1 rounded-md text-[10px] font-mono border ${
                  step.color === "cyan"
                    ? "bg-[#00d4ff]/[0.07] text-[#00d4ff] border-[#00d4ff]/[0.12]"
                    : "bg-[#7c3aed]/[0.07] text-[#7c3aed] border-[#7c3aed]/[0.12]"
                }`}
              >
                {step.label}
              </span>
              {i < 5 && <AnimatedArrow />}
            </span>
          ))}
        </div>
      </div>
    ),
    "ai-interviewer": (
      <div className={`${h} relative flex items-center justify-center`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.08)_0%,transparent_70%)]" />
        <div className="relative flex items-center gap-1.5 sm:gap-3 flex-wrap justify-center px-2">
          {["Q", "A", "Score", "Feedback"].map((step, i) => (
            <span key={step} className="flex items-center gap-1.5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#7c3aed]/[0.08] border border-[#7c3aed]/[0.15] flex items-center justify-center text-[9px] sm:text-[10px] text-[#7c3aed] font-mono font-bold">
                {step}
              </div>
              {i < 3 && <AnimatedArrow />}
            </span>
          ))}
        </div>
      </div>
    ),
    "property-marketplace": (
      <div className={`${h} relative flex items-center justify-center`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.08)_0%,transparent_70%)]" />
        <div className="relative grid grid-cols-3 gap-3 w-full max-w-[260px]">
          {[
            { label: "Register", icon: "📝" },
            { label: "Verify", icon: "✅" },
            { label: "List", icon: "🏠" },
          ].map((step) => (
            <div
              key={step.label}
              className="px-2 py-2.5 rounded-lg bg-[#00d4ff]/[0.05] border border-[#00d4ff]/[0.1] text-center"
            >
              <span className="text-base block mb-1">{step.icon}</span>
              <span className="text-[9px] text-[#00d4ff]/70 font-mono">{step.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    "inventory-management": (
      <div className={`${h} relative flex items-center justify-center`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(40,200,64,0.08)_0%,transparent_70%)]" />
        <div className="relative flex items-end gap-[5px] h-14">
          {[
            { h: 35 }, { h: 55 }, { h: 42 }, { h: 70 },
            { h: 50 }, { h: 80 }, { h: 60 }, { h: 90 },
          ].map((bar, i) => (
            <motion.div
              key={i}
              className="w-3.5 rounded-t-sm bg-gradient-to-t from-[#28c840]/25 to-[#28c840]/60"
              initial={{ height: 0 }}
              whileInView={{ height: `${bar.h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            />
          ))}
        </div>
      </div>
    ),
    "mobile-apps": (
      <div className={`${h} relative flex items-center justify-center`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(254,188,46,0.08)_0%,transparent_70%)]" />
        <div className="relative flex items-end gap-3">
          {[
            { w: "w-7", h: "h-11", label: "Quiz" },
            { w: "w-8", h: "h-14", label: "Delivery" },
            { w: "w-7", h: "h-11", label: "ATM" },
          ].map((device, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <div className={`${device.w} ${device.h} rounded-lg border border-[#febc2e]/[0.2] bg-[#febc2e]/[0.03] flex items-center justify-center`}>
                <div className="w-1 h-1 rounded-full bg-[#febc2e]/30" />
              </div>
              <span className="text-[8px] text-[#5a5a72]">{device.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  };

  return <>{visuals[project.id] || null}</>;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding relative snap-section overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7c3aed]/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00d4ff]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span className="text-[11px] text-[#00d4ff] tracking-[0.25em] uppercase font-medium">
            Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-3 mb-4 tracking-[-0.02em]">
            Things I&apos;ve Built
          </h2>
          <p className="text-[#6b6b8a] text-sm max-w-md">
            Real projects. Real problems. Constant experimentation.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => {
            const featured = i === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onClick={() => setSelectedProject(project)}
                className={`group relative rounded-2xl cursor-pointer ${
                  featured ? "md:col-span-2" : ""
                }`}
                style={{ perspective: "800px" }}
              >
                {/* Hover glow layer */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#00d4ff]/0 via-[#7c3aed]/0 to-[#00d4ff]/0 group-hover:from-[#00d4ff]/15 group-hover:via-[#7c3aed]/8 group-hover:to-[#00d4ff]/15 transition-all duration-700" />

                {/* Card body */}
                <div className="relative h-full rounded-2xl border border-white/[0.04] group-hover:border-white/[0.08] transition-all duration-500 overflow-hidden bg-[#0a0a1a] group-hover:-translate-y-1 group-hover:shadow-[0_8px_40px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.04)]">
                  {/* Inner background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700 pointer-events-none`} />

                  {/* Dot grid background */}
                  <DotGrid />

                  {/* Top accent bar */}
                  <div className={`relative h-px bg-gradient-to-r ${project.gradient} opacity-30 group-hover:opacity-70 transition-opacity duration-500`} />

                  {/* Large watermark number */}
                  <div className="absolute top-4 right-6 text-[80px] sm:text-[100px] font-bold text-white/[0.015] group-hover:text-white/[0.025] transition-colors duration-700 leading-none pointer-events-none select-none font-mono">
                    0{i + 1}
                  </div>

                  <div className={`relative p-5 sm:p-6 ${featured ? "md:p-8" : ""}`}>
                    {/* Top row */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] font-mono text-[#3a3a52] tabular-nums">
                          0{i + 1}
                        </span>
                        <span className="w-px h-3 bg-white/[0.06]" />
                        <span className="text-[10px] text-[#00d4ff]/70 font-medium tracking-[0.12em] uppercase">
                          {project.category}
                        </span>
                      </div>
                      <span
                        className={`text-[10px] px-2.5 py-1 rounded-full border ${
                          project.status === "MVP"
                            ? "border-[#28c840]/20 text-[#28c840] bg-[#28c840]/[0.04]"
                            : project.status === "Academic Project"
                            ? "border-[#febc2e]/20 text-[#febc2e] bg-[#febc2e]/[0.04]"
                            : project.status === "Experimental"
                            ? "border-[#7c3aed]/20 text-[#7c3aed] bg-[#7c3aed]/[0.04]"
                            : "border-white/[0.06] text-[#6b6b8a] bg-white/[0.02]"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    {/* Visual preview */}
                    <div className="mb-5 rounded-xl bg-white/[0.015] border border-white/[0.03] group-hover:border-white/[0.06] transition-colors duration-500 overflow-hidden">
                      <ProjectVisual project={project} featured={featured} />
                    </div>

                    {/* Title + description */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <span className="text-lg">{project.icon}</span>
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#00d4ff] transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-[12px] sm:text-[13px] text-[#7a7a95] leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, featured ? 6 : 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.03] text-[#8888a0] border border-white/[0.04] group-hover:border-white/[0.08] transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > (featured ? 6 : 4) && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.03] text-[#5a5a72] border border-white/[0.04]">
                          +{project.technologies.length - (featured ? 6 : 4)}
                        </span>
                      )}
                    </div>

                    {/* Stats row */}
                    <div className="flex items-center gap-4 mb-4 text-[10px] text-[#5a5a72]">
                      <span>{project.technologies.length} technologies</span>
                      <span className="w-px h-2.5 bg-white/[0.06]" />
                      <span>{project.architecture.length} architecture steps</span>
                    </div>

                    {/* Bottom separator */}
                    <div className="h-px bg-white/[0.04] mb-4" />

                    {/* CTA row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[12px] text-[#00d4ff] font-medium group-hover:gap-2.5 transition-all duration-300">
                        <span>View Case Study</span>
                        <svg
                          className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                      <div className="w-1.5 h-1.5 rounded-full bg-white/[0.06] group-hover:bg-[#00d4ff]/40 transition-colors duration-500" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

/* ── Case Study Modal ── */
function CaseStudyModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/80 p-3 sm:p-4 pt-16 sm:pt-20 pb-8 sm:pb-12"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-3xl w-full rounded-3xl overflow-hidden border border-white/[0.06] bg-[#0c0c1d]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-5 sm:p-7 md:p-8 border-b border-white/[0.04]">
          <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-10`} />
          <div className="relative">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono text-[#3a3a52]">0{projects.indexOf(project) + 1}</span>
                <span className="w-px h-3 bg-white/[0.06]" />
                <span className="text-[10px] text-[#00d4ff] font-medium tracking-[0.2em] uppercase">
                  {project.category}
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[#6b6b8a] hover:text-white hover:bg-white/[0.08] transition-all"
                aria-label="Close"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl mt-1">{project.icon}</span>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-sm text-[#6b6b8a]">{project.subtitle}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] px-2.5 py-1 rounded-full bg-[#00d4ff]/[0.06] text-[#00d4ff]/80 border border-[#00d4ff]/[0.1]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-7 md:p-8 space-y-6 sm:space-y-7">
          <CaseStudySection title="Problem" icon="🎯">
            <p>{project.problem}</p>
          </CaseStudySection>
          <CaseStudySection title="Idea" icon="💡">
            <p>{project.idea}</p>
          </CaseStudySection>
          <CaseStudySection title="Architecture" icon="🏗️">
            <div className="relative pl-5 border-l border-white/[0.06] space-y-3">
              {project.architecture.map((step, i) => (
                <div key={i} className="relative flex items-center gap-3">
                  <div className="absolute -left-[11px] w-5 h-5 rounded-full bg-[#0a0a1a] border-2 border-[#00d4ff]/25 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]/80" />
                  </div>
                  <span className="text-[13px] text-[#9999b0]">{step}</span>
                </div>
              ))}
            </div>
          </CaseStudySection>
          <CaseStudySection title="Challenges" icon="🔥">
            <ul className="space-y-2.5">
              {project.challenges.map((challenge, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[13px] text-[#9999b0]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] mt-1.5 flex-shrink-0" />
                  {challenge}
                </li>
              ))}
            </ul>
          </CaseStudySection>
          <CaseStudySection title="Solution" icon="✅">
            <p>{project.solution}</p>
          </CaseStudySection>
          <CaseStudySection title="Result" icon="📊">
            <p>{project.result}</p>
          </CaseStudySection>
          <CaseStudySection title="What I Learned" icon="📚">
            <p>{project.learned}</p>
          </CaseStudySection>
          <CaseStudySection title="What&apos;s Next" icon="🚀">
            <p>{project.future}</p>
          </CaseStudySection>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Section Helper ── */
function CaseStudySection({
  title,
  icon,
  children,
}: {
  title: string;
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="text-white font-semibold text-[15px] mb-2.5 flex items-center gap-2">
        <span className="text-base">{icon}</span>
        {title}
      </h4>
      <div className="text-[#8888a0] text-[13px] leading-relaxed">{children}</div>
    </div>
  );
}
