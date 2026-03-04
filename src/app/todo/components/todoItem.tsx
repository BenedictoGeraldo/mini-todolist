"use client";

import { TodoType as Todo } from "@/types/todo";
import { useTodoStore } from "@/store/todoStore";

export default function TodoItem({ todo }: { todo: Todo }) {
  const { deleteTodo, toggleTodo } = useTodoStore();

  return (
    <div className="group flex items-center gap-4 border-b border-white/8 py-4 transition-colors duration-200 hover:border-white/20">
      <button
        onClick={() => toggleTodo(todo.id)}
        aria-label="Toggle task"
        className="shrink-0 w-4 h-4 rounded-full border border-white/25 hover:border-white/60 flex items-center justify-center transition-colors duration-200"
        style={{
          background: todo.isDone ? "rgba(255,255,255,0.9)" : "transparent",
          borderColor: todo.isDone ? "rgba(255,255,255,0.9)" : undefined,
        }}
      >
        {todo.isDone && (
          <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
            <path
              d="M1 3L3 5L7 1"
              stroke="#080808"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      <span
        className="flex-1 text-sm tracking-wide transition-all duration-300"
        style={{
          color: todo.isDone
            ? "rgba(255,255,255,0.2)"
            : "rgba(255,255,255,0.75)",
          textDecoration: todo.isDone ? "line-through" : "none",
        }}
      >
        {todo.text}
      </span>

      <button
        onClick={() => deleteTodo(todo.id)}
        aria-label="Delete task"
        className="opacity-100 text-white/20 hover:text-red-400/80 text-[10px] uppercase tracking-[0.2em] transition-all duration-200"
      >
        Remove
      </button>
    </div>
  );
}
