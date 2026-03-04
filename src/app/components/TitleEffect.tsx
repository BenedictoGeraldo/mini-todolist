"use client";

import type React from "react";
import { useRef, useCallback } from "react";

const CHARS = "CAN DO".split("");

const revealStyle = (i: number): React.CSSProperties => ({
  animation: "letterReveal 0.75s cubic-bezier(0.16, 1, 0.3, 1) both",
  animationDelay: `${i * 0.07}s`,
});

export default function TitleEffect() {
  const spanRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const mx = e.clientX;
    const my = e.clientY;

    spanRefs.current.forEach((span) => {
      if (!span) return;
      const rect = span.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.sqrt((mx - cx) ** 2 + (my - cy) ** 2);
      const maxDist = 180;
      const p = Math.max(0, 1 - dist / maxDist);

      span.style.color = `rgba(255,255,255,${0.18 + p * 0.82})`;
      span.style.textShadow =
        p > 0.05
          ? `0 0 ${50 * p}px rgba(255,255,255,${0.45 * p}), 0 0 ${120 * p}px rgba(200,200,255,${0.15 * p})`
          : "none";
      span.style.transform = `scale(${1 + p * 0.06})`;
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    spanRefs.current.forEach((span) => {
      if (!span) return;
      span.style.color = "white";
      span.style.textShadow = "none";
      span.style.transform = "scale(1)";
    });
  }, []);

  return (
    <h1
      className="text-[clamp(3.5rem,17vw,15rem)] font-bold text-white leading-none tracking-tight cursor-default"
      aria-label="CAN DO"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {CHARS.map((char, i) => (
        <span
          key={i}
          ref={(el) => {
            spanRefs.current[i] = el;
          }}
          className="inline-block"
          style={{
            ...revealStyle(i),
            transition:
              "color 0.25s ease, text-shadow 0.25s ease, transform 0.25s ease",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}
