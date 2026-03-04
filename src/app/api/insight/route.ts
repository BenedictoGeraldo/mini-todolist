import Groq from "groq-sdk";
import { NextRequest, NextResponse } from "next/server";
import { TodoType as Todo } from "@/types/todo";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { todos }: { todos: Todo[] } = await req.json();

    let prompt = "";

    if (!todos.length) {
      prompt = `
            Saya belum memiliki tugas apapun hari ini. Berikan saya saran tugas atau motivasi
            untuk memulai hari yang produktif. maksimal 3 kalimat.
            `;
    } else {
      prompt = `
            Ini adalah tugas saya untuk hari ini:
            ${todos.map((t) => `- ${t.text} (${t.isDone ? "Selesai" : "Belum selesai"})`).join("\n")}
            Berdasarkan tugas tugas tersebut, berikan saya insight singkat atau tips. maksimal 3 kalimat.
            `;
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
    });

    const insight = completion.choices[0]?.message?.content ?? "";

    return NextResponse.json({ insight });
  } catch (error) {
    console.error("insight error:", error);
    return NextResponse.json(
      { error: "Gagal mendapatkan insight. Coba lagi nanti" },
      { status: 500 },
    );
  }
}
