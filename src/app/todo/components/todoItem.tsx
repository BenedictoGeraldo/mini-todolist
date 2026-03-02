"use client";

import { TodoType as Todo } from "@/types/todo";
import { useTodoStore } from "@/store/todoStore";

export default function TodoItem({ todo }: { todo: Todo }) {
  const { deleteTodo, toggleTodo } = useTodoStore();
  return (
    <div className="flex items-center gap-3 border border-gray-200 rounded px-4 py-3">
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => toggleTodo(todo.id)}
        className="w-4 h-4 cursor-pointer"
      />

      <span
        className={`flex-1 text-sm ${todo.isDone ? "line-through text-gray-400" : ""}`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-gray-400 hover:text-red-500 text-sm transition-colors"
      >
        Delete
      </button>
    </div>
  );
}
