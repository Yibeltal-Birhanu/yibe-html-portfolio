"use client";

import { useEffect, useRef, useState } from "react";

export default function SectionDivider({ variant = "default" }: { variant?: "default" | "accent" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const colors = variant === "accent"
    ? { line: "rgba(124,58,237,0.3)", dot: "#7c3aed" }
    : { line: "rgba(0,212,255,0.3)", dot: "#00d4ff" };

  return (
    <div ref={ref} className="relative py-2 flex items-center justify-center overflow-hidden">
      {/* Line */}
      <div
        className="w-full max-w-xs h-px transition-all duration-700 ease-out"
        style={{
          background: `linear-gradient(90deg, transparent, ${colors.line}, transparent)`,
          transform: visible ? "scaleX(1)" : "scaleX(0)",
          opacity: visible ? 1 : 0,
        }}
      />

      {/* Center dot */}
      <div
        className="absolute transition-all duration-500 ease-out delay-300"
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: colors.dot,
          boxShadow: `0 0 10px ${colors.dot}30`,
          transform: visible ? "scale(1)" : "scale(0)",
          opacity: visible ? 1 : 0,
        }}
      />

      {/* Side dots */}
      <div
        className="absolute transition-all duration-500 ease-out delay-[400ms]"
        style={{
          left: "calc(50% - 40px)",
          width: 4,
          height: 4,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.06)",
          transform: visible ? "scale(1)" : "scale(0)",
          opacity: visible ? 1 : 0,
        }}
      />
      <div
        className="absolute transition-all duration-500 ease-out delay-[400ms]"
        style={{
          left: "calc(50% + 36px)",
          width: 4,
          height: 4,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.06)",
          transform: visible ? "scale(1)" : "scale(0)",
          opacity: visible ? 1 : 0,
        }}
      />
    </div>
  );
}
