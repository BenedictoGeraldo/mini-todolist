"use client";

import { useTodoStore } from "@/store/todoStore";
import AiInsight from "./aiInsight";
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

      <AiInsight />
    </>
  );
}
