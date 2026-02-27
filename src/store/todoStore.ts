import { create } from "zustand";
import { Todo } from "@/types/todo";

type TodoStore = {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],

  addTodo: (text) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: crypto.randomUUID(),
          text,
          isDone: false,
        },
      ],
    })),

  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    })),
}));
