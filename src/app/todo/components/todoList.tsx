"use client";

import { useTodoStore } from "@/store/todoStore";
import TodoItem from "./todoItem";

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos);

  return (
    <>
      <div className="flex flex-col gap-2 flex-1">
        {!todos.length && (
          <p className="text-gray-400 text-lg">
            Belum ada tugas. Tambahkan tugasmu sekarang!
          </p>
        )}
        {todos.map((item) => (
          <TodoItem key={item.id} todo={item} />
        ))}
      </div>

      <div className="mt-8 border border-gray-200 rounded p-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-medium">AI Insight</h2>
          <button className="bg-black text-white px-4 py-2 rounded-md text-xs hover:bg-gray-800 transition-colors">
            Generate Insight
          </button>
        </div>

        <p className="text-gray-400 text-sm">
          Terima saran otomatis dari AI untuk membantu kamu lebih produktif!
        </p>
      </div>
    </>
  );
}
