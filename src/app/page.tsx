import Link from "next/link";
import TitleEffect from "./components/TitleEffect";

export default function Home() {
  return (
    <main className="relative h-screen bg-[#080808] overflow-hidden flex flex-col items-center justify-center">
      <div
        className="absolute top-1/2 left-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,255,255,0.07) 0%, transparent 70%)",
          animation: "breathe 6s ease-in-out infinite",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div
        className="absolute top-7 left-7 flex flex-col gap-1"
        style={{ animation: "fadeIn 1s ease both", animationDelay: "1.3s" }}
      >
        <div className="w-6 h-px bg-white/25" />
        <div className="w-3 h-px bg-white/15" />
      </div>
      <div
        className="absolute bottom-7 right-8 text-white/20 text-[10px] tracking-[0.25em] uppercase"
        style={{ animation: "fadeIn 1s ease both", animationDelay: "1.3s" }}
      >
        2026
      </div>

      <div className="relative z-10 flex flex-col items-center gap-9 text-center px-6 select-none">
        <div className="overflow-hidden pb-2">
          <TitleEffect />
        </div>

        <div
          className="w-28 h-px bg-white/20 origin-left"
          style={{
            animation: "lineGrow 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
            animationDelay: "0.55s",
          }}
        />

        <p
          className="text-white/40 text-sm md:text-base tracking-wide leading-relaxed max-w-[18rem] md:max-w-xs"
          style={{
            animation: "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
            animationDelay: "0.65s",
          }}
        >
          Sistem To Do List sederhana dengan sentuhan AI untuk membantu kamu
          tetap fokus
        </p>

        <div
          style={{
            animation: "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
            animationDelay: "0.85s",
          }}
        >
          <Link
            href="/todo"
            className="group relative inline-flex items-center gap-2.5 border border-white/20 hover:border-white/60 px-8 py-3.5 rounded-full text-[11px] uppercase tracking-[0.22em] overflow-hidden transition-colors duration-500"
          >
            <span
              className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0"
              style={{
                transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
            <span className="relative z-10 text-white/60 group-hover:text-black transition-colors duration-300">
              Ayo Mulai
            </span>
            <span className="relative z-10 text-white/40 group-hover:text-black group-hover:translate-x-0.5 transition-all duration-300">
              ↗
            </span>
          </Link>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ animation: "fadeIn 1s ease both", animationDelay: "1.5s" }}
      >
        <div
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
          style={{
            animation: "tickDown 2s ease-in-out infinite",
            animationDelay: "1.6s",
          }}
        />
      </div>
    </main>
  );
}
