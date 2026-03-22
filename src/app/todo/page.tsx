import Link from "next/link";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";

export default function TodoPage() {
  return (
    <div className="min-h-screen bg-[#080808] flex flex-col px-6 py-10 md:px-16 md:py-14 lg:px-24">
      <div className="flex items-center justify-between mb-14">
        <Link
          href="/"
          className="text-white/50 hover:text-white/70 text-xs tracking-[0.2em] uppercase transition-colors duration-300 flex items-center gap-2"
        >
          <span className="text-base leading-none">&#8592;</span> Can Do
        </Link>
        <span className="text-white/50 text-[10px] tracking-[0.25em] uppercase">
          CAN DO
        </span>
      </div>

      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          AYO PRODUKTIF!
        </h1>
        <p className="text-white/40 text-sm mt-2 tracking-wide">
          Buat rencana harianmu dan tetap fokus dengan bantuan AI
        </p>
      </div>

      <TodoInput />
      <TodoList />

      <footer className="mt-auto pt-10 pb-4 flex items-center justify-center gap-1.5 text-[11px] tracking-wide text-white/40 whitespace-nowrap">
        <span>Built by</span>
        <a
          href="https://benedicto-geraldo.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-white/80 underline underline-offset-2 decoration-white/20 hover:decoration-white/50 transition-colors duration-300"
        >
          Benedicto Geraldo
        </a>
      </footer>
    </div>
  );
}
