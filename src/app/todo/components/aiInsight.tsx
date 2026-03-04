"use client";

import { useTodoStore } from "@/store/todoStore";

export default function AiInsight() {
  const { insight, isLoadingInsight, errorInsight, generateInsight } =
    useTodoStore();

  return (
    <div className="mt-8 border border-gray-200 rounded p-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-medium">AI Insight</h2>
        <button
          onClick={generateInsight}
          disabled={isLoadingInsight}
          className="bg-black text-white px-4 py-2 rounded-md text-xs hover:bg-gray-800 transition-colors"
        >
          {isLoadingInsight ? "Generating..." : "Generate Insight"}
        </button>
      </div>

      {!insight && !isLoadingInsight && !errorInsight && (
        <p className="text-gray-400 text-sm">
          Terima saran otomatis dari AI untuk membantu kamu produktif
        </p>
      )}

      {isLoadingInsight && (
        <p className="text-gray-400 text-sm animate-pulse">
          Generating Insight
        </p>
      )}

      {errorInsight && <p className="text-red-400 text-sm">{errorInsight}</p>}

      {insight && !isLoadingInsight && (
        <p className="text-white text-sm leading-relaxed">
          <i>{insight}</i>
        </p>
      )}
    </div>
  );
}
