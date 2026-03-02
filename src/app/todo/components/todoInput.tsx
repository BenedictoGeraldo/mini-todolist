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
    <div className="mb-5">
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError("");
          }}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          placeholder="Tambahkan tugasmu..."
          className={`flex-1 border rounded px-4 py-2 text-sm outline-none transition-colors ${
            error
              ? "border-red-400 focus:border-red-500"
              : "border-gray-300 focus:border-gray-500"
          }`}
        />
        <button
          onClick={handleAdd}
          className="text-white px-6 py-2 rounded-md text-sm hover:bg-gray-800 bg-black transition-colors"
        >
          Tambah
        </button>
      </div>
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}
