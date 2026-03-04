"use client";

import { useTodoStore } from "@/store/todoStore";
import AiInsight from "./aiInsight";
import TodoItem from "./todoItem";

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos);
  const done = todos.filter((t) => t.isDone).length;

  return (
    <>
      <div className="flex-1">
        {todos.length > 0 && (
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-white/8 rounded-full overflow-hidden">
              <div
                className="h-full bg-white/40 rounded-full transition-all duration-500"
                style={{ width: `${(done / todos.length) * 100}%` }}
              />
            </div>
            <span className="text-white/25 text-[11px] tracking-widest shrink-0">
              {done}/{todos.length}
            </span>
          </div>
        )}

        {!todos.length && (
          <p className="text-white/20 text-sm tracking-wide py-6">
            Belum ada tugas. Tambahkan tugas diatas
          </p>
        )}

        {/* Task items */}
        <div>
          {todos.map((item) => (
            <TodoItem key={item.id} todo={item} />
          ))}
        </div>
      </div>

      <AiInsight />
    </>
  );
}
