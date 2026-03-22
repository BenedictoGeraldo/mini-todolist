"use client";

import { useTodoStore } from "@/store/todoStore";

export default function AiInsight() {
  const { insight, isLoadingInsight, errorInsight, generateInsight } =
    useTodoStore();

  return (
    <div className="mt-12 border border-white/10 rounded-xl p-6 md:p-8">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span
              className="absolute inline-flex h-full w-full rounded-full bg-white/40"
              style={{
                animation: isLoadingInsight
                  ? "ping 1s cubic-bezier(0,0,0.2,1) infinite"
                  : "none",
              }}
            />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white/25" />
          </span>
          <h2 className="text-[11px] uppercase tracking-[0.2em] text-white/60">
            AI Insight
          </h2>
        </div>
        <button
          onClick={generateInsight}
          disabled={isLoadingInsight}
          className="border border-white/15 hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed px-5 py-2 rounded-full text-[11px] uppercase tracking-[0.2em] text-white/40 hover:text-white/80 transition-colors duration-300"
        >
          {isLoadingInsight ? "Thinking..." : "Generate"}
        </button>
      </div>

      {!insight && !isLoadingInsight && !errorInsight && (
        <p className="text-white/40 text-sm tracking-wide">
          Minta AI untuk memberikan saran tentang tugas-tugasmu dengan klik
          Generate. Maksimal 3 insight perhari!
        </p>
      )}

      {isLoadingInsight && (
        <div className="flex flex-col gap-2">
          <div className="h-2.5 bg-white/8 rounded-full w-4/5 animate-pulse" />
          <div
            className="h-2.5 bg-white/8 rounded-full w-3/5 animate-pulse"
            style={{ animationDelay: "0.15s" }}
          />
          <div
            className="h-2.5 bg-white/8 rounded-full w-2/3 animate-pulse"
            style={{ animationDelay: "0.3s" }}
          />
        </div>
      )}

      {errorInsight && (
        <p className="text-red-400/70 text-sm tracking-wide">{errorInsight}</p>
      )}

      {insight && !isLoadingInsight && (
        <p className="text-white/60 text-sm leading-relaxed tracking-wide">
          {insight}
        </p>
      )}
    </div>
  );
}
