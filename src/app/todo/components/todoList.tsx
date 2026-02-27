"use client";

import { useTodoStore } from "@/store/todoStore";

export default function TodoList() {
  const { todos, deleteTodo, toggleTodo } = useTodoStore();

  return (
    <>
      <div className="flex flex-col gap-2 flex-1">
        {todos.length === 0 && (
          <p className="text-gray-400 text-lg">
            Belum ada tugas. Tambahkan tugasmu sekarang!
          </p>
        )}
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center gap-3 border border-gray-200 rounded-md px-4 py-3"
          >
            <input
              type="checkbox"
              checked={todo.isDone}
              onChange={() => toggleTodo(todo.id)}
              className="w-4 h-4 cursor-pointer"
            />
            <span
              className={`flex-1 text-sm ${todo.isDone ? "line-through text0gray-400" : ""}`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-gray-400 hover:text-red-500 text-sm transition-colors"
            >
              Hapus
            </button>
          </div>
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
