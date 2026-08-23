"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";

/* ── Code lines with syntax coloring ── */
const codeLines = [
  { tokens: [
    { text: "class ", color: "#c678dd" },
    { text: "AIEngine", color: "#e5c07b" },
    { text: " {", color: "#abb2bf" },
  ]},
  { tokens: [
    { text: "  ", color: "#abb2bf" },
    { text: "async ", color: "#c678dd" },
    { text: "predict", color: "#61afef" },
    { text: "(profile: User) {", color: "#abb2bf" },
  ]},
  { tokens: [
    { text: "    ", color: "#abb2bf" },
    { text: "const ", color: "#c678dd" },
    { text: "features ", color: "#e06c75" },
    { text: "= ", color: "#abb2bf" },
    { text: "this", color: "#e06c75" },
    { text: ".vectorize(profile);", color: "#61afef" },
  ]},
  { tokens: [
    { text: "    ", color: "#abb2bf" },
    { text: "const ", color: "#c678dd" },
    { text: "matches ", color: "#e06c75" },
    { text: "= ", color: "#abb2bf" },
    { text: "await ", color: "#c678dd" },
    { text: "this", color: "#e06c75" },
    { text: ".similarity(features);", color: "#61afef" },
  ]},
  { tokens: [
    { text: "    ", color: "#abb2bf" },
    { text: "return ", color: "#c678dd" },
    { text: "matches", color: "#e06c75" },
    { text: ".rank();", color: "#61afef" },
  ]},
  { tokens: [
    { text: "  }", color: "#abb2bf" },
  ]},
  { tokens: [
    { text: "}", color: "#abb2bf" },
  ]},
];

/* ── Flatten all tokens into a char array for typing ── */
function buildCharStream() {
  const stream: { char: string; color: string; lineIndex: number }[] = [];
  codeLines.forEach((line, lineIndex) => {
    line.tokens.forEach((token) => {
      for (const char of token.text) {
        stream.push({ char, color: token.color, lineIndex });
      }
    });
    // End of line marker
    stream.push({ char: "\n", color: "", lineIndex });
  });
  return stream;
}

const charStream = buildCharStream();

/* ── Floating tokens ── */
const floatingTokens = [
  { text: "TF-IDF", x: -70, y: -45, delay: 0 },
  { text: "async", x: 200, y: -35, delay: 0.6 },
  { text: "cosine", x: -55, y: 130, delay: 1.2 },
  { text: "ML", x: 220, y: 110, delay: 1.8 },
  { text: "{...}", x: 180, y: -65, delay: 2.4 },
  { text: "API", x: -65, y: 70, delay: 0.9 },
];

export default function CodeTerminal() {
  const [typedChars, setTypedChars] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [phase, setPhase] = useState<"typing" | "pause" | "clearing" | "waiting">("typing");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetAnimation = useCallback(() => {
    setTypedChars(0);
    setIsTyping(true);
    setPhase("typing");
  }, []);

  useEffect(() => {
    if (phase === "typing") {
      if (typedChars >= charStream.length) {
        // Done typing — pause before clearing
        setPhase("pause");
        return;
      }

      // Variable speed: faster for spaces/punctuation, slower for letters
      const currentChar = charStream[typedChars];
      const delay = currentChar.char === " " || currentChar.char === "\n"
        ? 15
        : currentChar.char === "(" || currentChar.char === ")" || currentChar.char === "{" || currentChar.char === "}" || currentChar.char === "." || currentChar.char === "="
        ? 30
        : 45;

      timerRef.current = setTimeout(() => {
        setTypedChars((prev) => prev + 1);
      }, delay);
    } else if (phase === "pause") {
      // Blink cursor for 2s then clear
      timerRef.current = setTimeout(() => {
        setPhase("clearing");
      }, 2000);
    } else if (phase === "clearing") {
      // Clear one char at a time (faster)
      if (typedChars <= 0) {
        setPhase("waiting");
        return;
      }
      timerRef.current = setTimeout(() => {
        setTypedChars((prev) => prev - 8);
      }, 10);
    } else if (phase === "waiting") {
      // Wait 1s then restart
      timerRef.current = setTimeout(() => {
        resetAnimation();
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [typedChars, phase, resetAnimation]);

  // Build visible lines from typed chars
  const visibleLines: string[][] = [[]];
  for (let i = 0; i < Math.min(typedChars, charStream.length); i++) {
    const entry = charStream[i];
    if (entry.char === "\n") {
      visibleLines.push([]);
    } else {
      visibleLines[visibleLines.length - 1].push(entry.char);
    }
  }

  // Current line color for the last char (cursor color)
  const lastCharColor = typedChars > 0 && typedChars <= charStream.length
    ? charStream[typedChars - 1].color
    : "#abb2bf";

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Floating syntax tokens — hidden on mobile */}
      {floatingTokens.map((token, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0, 0.5, 0.5, 0],
            scale: [0.8, 1, 1, 0.8],
            y: [token.y, token.y - 6, token.y + 6, token.y],
          }}
          transition={{
            duration: 5,
            delay: token.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute px-2.5 py-1 rounded-md text-[10px] font-mono font-medium border pointer-events-none select-none hidden sm:block"
          style={{
            left: `calc(50% + ${token.x}px)`,
            top: `calc(50% + ${token.y}px)`,
            color: "#00d4ff",
            borderColor: "rgba(0,212,255,0.12)",
            background: "rgba(0,212,255,0.04)",
          }}
        >
          {token.text}
        </motion.div>
      ))}

      {/* Terminal Window */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="relative w-[320px] sm:w-[380px] lg:w-[420px]"
      >
        {/* Glow */}
        <div className="absolute -inset-4 bg-[#00d4ff]/[0.05] rounded-3xl blur-2xl pointer-events-none" />

        {/* Terminal frame */}
        <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0c0c1d] shadow-[0_0_60px_rgba(0,212,255,0.05)]">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.04]">
                <svg className="w-3 h-3 text-[#00d4ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <span className="text-[11px] text-[#8888a0] font-mono">ai_engine.py</span>
              </div>
            </div>
            <div className="w-10" />
          </div>

          {/* Code area */}
          <div className="p-4 font-mono text-[12px] leading-[1.8] min-h-[200px]">
            {visibleLines.map((chars, lineIndex) => (
              <div key={lineIndex} className="flex">
                {/* Line number */}
                <span className="w-6 text-right text-[#3a3a52] mr-3 select-none flex-shrink-0">
                  {lineIndex + 1}
                </span>
                {/* Typed characters — render with correct colors */}
                <span>
                  {renderLineWithColors(lineIndex, chars)}
                </span>
              </div>
            ))}

            {/* Blinking cursor on current line */}
            {typedChars > 0 && typedChars <= charStream.length && phase === "typing" && (
              <div className="flex">
                <span className="w-6 mr-3" />
                <span
                  className="inline-block w-[7px] h-[14px] -mb-[2px]"
                  style={{ backgroundColor: lastCharColor || "#abb2bf", opacity: 0.8 }}
                />
              </div>
            )}

            {/* Blinking cursor after all typed */}
            {phase === "pause" && (
              <div className="flex">
                <span className="w-6 mr-3" />
                <span className="inline-block w-[7px] h-[14px] -mb-[2px] bg-[#abb2bf] animate-pulse" />
              </div>
            )}
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-4 py-2 border-t border-white/[0.06] bg-white/[0.01]">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#28c840]" />
              <span className="text-[9px] text-[#5a5a72] font-mono uppercase tracking-wider">Python</span>
            </div>
            <span className="text-[9px] text-[#5a5a72] font-mono">UTF-8 • LF</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ── Render a line with correct syntax colors ── */
function renderLineWithColors(lineIndex: number, chars: string[]) {
  // Find which tokens belong to this line
  const line = codeLines[lineIndex];
  if (!line) return null;

  const result: React.ReactNode[] = [];
  let charPos = 0;

  for (const token of line.tokens) {
    const tokenChars = chars.slice(charPos, charPos + token.text.length);
    if (tokenChars.length === 0) break;

    result.push(
      <span key={charPos} style={{ color: token.color }}>
        {tokenChars.join("")}
      </span>
    );
    charPos += token.text.length;
  }

  return result;
}
