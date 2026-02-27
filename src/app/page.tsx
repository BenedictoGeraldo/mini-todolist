import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col sm:justify-items-center justify-between p-8 md:p-16 lg:p-24">
      <div />

      {/* Hero Content */}
      <div className="text-center">
        <h1 className="text-3xl md:text-6xl lg:text-9xl">CAN DO</h1>
        <h2 className="text-lg md:text-xl lg:text-2xl">
          Simple todo list, powered by AI to keep you on track
        </h2>
      </div>

      <div className="flex justify-end">
        <Link
          href="/todo"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-3 rounded transition-colors"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
