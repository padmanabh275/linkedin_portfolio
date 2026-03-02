"use client";

import { FormEvent, useMemo, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const STARTER_QUESTIONS = [
  "What is your career journey in brief?",
  "How do you use AI to improve sales outcomes?",
  "What did you do at Deloitte?",
  "What kinds of portfolio case studies are coming soon?",
];

export default function DigitalTwinChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi, I am Padmanabh's Digital Twin. Ask me anything about my career journey, AI-for-sales work, and consulting background.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSend = useMemo(
    () => input.trim().length > 0 && !isLoading,
    [input, isLoading],
  );

  const sendMessage = async (question?: string) => {
    const text = (question ?? input).trim();
    if (!text || isLoading) return;

    const userMessage: Message = { role: "user", content: text };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/digital-twin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const data = (await response.json()) as { reply?: string; error?: string };
      if (!response.ok || !data.reply) {
        throw new Error(data.error ?? "Could not get a response.");
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply as string },
      ]);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unexpected error occurred.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void sendMessage();
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
      <div className="mb-4 flex flex-wrap gap-2">
        {STARTER_QUESTIONS.map((question) => (
          <button
            key={question}
            type="button"
            onClick={() => void sendMessage(question)}
            disabled={isLoading}
            className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1.5 text-xs font-medium text-cyan-100 transition hover:bg-cyan-300/20 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {question}
          </button>
        ))}
      </div>

      <div className="mb-4 max-h-[420px] space-y-3 overflow-y-auto rounded-2xl border border-white/10 bg-slate-950/60 p-4">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`max-w-[92%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
              message.role === "user"
                ? "ml-auto bg-cyan-400 text-slate-950"
                : "bg-white/10 text-slate-100"
            }`}
          >
            {message.content}
          </div>
        ))}

        {isLoading && (
          <div className="max-w-[92%] rounded-2xl bg-white/10 px-4 py-3 text-sm text-slate-300">
            Thinking...
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <textarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
          rows={3}
          placeholder="Ask about career milestones, consulting impact, skills, or education..."
          className="w-full resize-none rounded-2xl border border-white/15 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-300/60"
        />
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-slate-400">
            Powered by OpenRouter · nvidia/nemotron-3-nano-30b-a3b:free
          </p>
          <button
            type="submit"
            disabled={!canSend}
            className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Send
          </button>
        </div>
        {error && <p className="text-sm text-rose-300">{error}</p>}
      </form>
    </div>
  );
}
