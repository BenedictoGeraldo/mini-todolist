"use client";

import { useState } from "react";
import { useTodoStore } from "@/store/todoStore";

export default function TodoInput() {
  const [input, setInput] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleAdd = () => {
    if (input.trim() === "") return;
    addTodo(input.trim());
    setInput("");
  };

  return (
    <div className="flex gap-2 mb-8">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        placeholder="Tambahkan tugasmu..."
        className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:border-gray-500"
      />
      <button
        onClick={handleAdd}
        className="text-white px-6 py-2 rounded-md text-sm hover:bg-gray-800 bg-black transition-colors"
      >
        Tambah
      </button>
    </div>
  );
}
