import { create } from "zustand";
import { TodoType as Todo } from "@/types/todo";
import axiosInstance from "@/lib/axios";

type TodoStore = {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;

  insight: string;
  isLoadingInsight: boolean;
  errorInsight: string;
  generateInsight: () => Promise<void>;
};

export const useTodoStore = create<TodoStore>((set, get) => ({
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

  insight: "",
  isLoadingInsight: false,
  errorInsight: "",

  generateInsight: async () => {
    set({ isLoadingInsight: true, errorInsight: "", insight: "" });

    try {
      const { todos } = get();
      const response = await axiosInstance.post("/insight", { todos });
      set({ insight: response.data.insight });
    } catch {
      set({ errorInsight: "Gagal mendapatkan insight. Coba lagi nanti" });
    } finally {
      set({ isLoadingInsight: false });
    }
  },
}));
