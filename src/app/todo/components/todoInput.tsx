"use client";

import { useState } from "react";
import { useTodoStore } from "@/store/todoStore";
import { todoSchema } from "@/schema/todoSchema";

export default function TodoInput() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleAdd = () => {
    const result = todoSchema.safeParse({ text: input.trim() });
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }
    addTodo(result.data.text);
    setInput("");
    setError("");
  };

  return (
    <div className="mb-8">
      <div className="flex gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError("");
          }}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          placeholder="Tambahkan tugas baru..."
          className={`flex-1 bg-transparent border-b py-3 text-sm text-white placeholder-white/20 outline-none transition-colors duration-300 ${
            error
              ? "border-red-500/60"
              : "border-white/15 focus:border-white/50"
          }`}
        />
        <button
          onClick={handleAdd}
          className="group relative overflow-hidden border border-white/20 hover:border-white/50 px-6 py-2.5 rounded-2xl flex items-center justify-center text-[9px] md:text-[11px] uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors duration-300"
        >
          Simpan
        </button>
      </div>
      {error && (
        <p className="text-red-400/80 text-[11px] mt-2 tracking-wide">
          {error}
        </p>
      )}
    </div>
  );
}
