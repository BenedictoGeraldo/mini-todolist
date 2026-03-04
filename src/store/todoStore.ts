import { create } from "zustand";
import { persist } from "zustand/middleware";
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

  insightCount: number;
  insightLastDate: string;
};

export const useTodoStore = create<TodoStore>()(
  persist(
    (set, get) => ({
      todos: [],
      insight: "",
      isLoadingInsight: false,
      errorInsight: "",
      insightCount: 0,
      insightLastDate: "",

      addTodo: (text: string) => {
        const { todos } = get();
        if (todos.length < 10) {
          const newTodo: Todo = {
            id: crypto.randomUUID(),
            text,
            isDone: false,
          };
          set((state) => ({
            todos: [...state.todos, newTodo],
          }));
          return;
        } else {
          alert(
            "Batas maksimal todo adalah 10. Hapus sebelum menambahkan yang baru.",
          );
        }
      },

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

      generateInsight: async () => {
        const today = new Date().toISOString().split("T")[0];

        const { insightLastDate, insightCount } = get();
        if (today !== insightLastDate) {
          set({ insightCount: 0 });
        }

        const currentCount = get().insightCount;
        if (currentCount >= 3) {
          set({
            errorInsight:
              "Batas generate insight sudah tercapai. Coba lagi besok!",
          });
          return;
        }

        set({ isLoadingInsight: true, errorInsight: "", insight: "" });

        try {
          const { todos } = get();
          const response = await axiosInstance.post("/insight", { todos });
          set({
            insight: response.data.insight,
            insightCount: currentCount + 1,
            insightLastDate: today,
          });
        } catch {
          set({ errorInsight: "Gagal mendapatkan insight. Coba lagi nanti" });
        } finally {
          set({ isLoadingInsight: false });
        }
      },
    }),
    {
      name: "can-do-storage",
      partialize: (state) => ({
        todos: state.todos,
        insight: state.insight,
        insightCount: state.insightCount,
        insightLastDate: state.insightLastDate,
      }),
    },
  ),
);
