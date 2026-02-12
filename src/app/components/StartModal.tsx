"use client";

import { useMusic } from "./MusicProvider";

export default function StartModal() {
  const { startMusic, showModal } = useMusic();
  if (!showModal) return null;

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
      <div className="w-[320px] rounded-2xl bg-pink-50 px-6 py-8 text-center shadow-xl animate-[pop_0.4s_ease-out]">
        <h2 className="mb-2 text-xl font-semibold text-pink-700">
          Happy Valentine Chei! 💕
        </h2>
        <p className="mb-6 text-sm text-pink-600">
          Sebelum mulai, nyalain musik dulu yaa 🎶
        </p>

        <button
          className="rounded-full bg-pink-500 px-5 py-2 text-sm font-medium text-white shadow-md transition hover:bg-pink-600 active:scale-95 cursor-pointer"
          onClick={startMusic}
        >
          ▶️ Play Music
        </button>
      </div>
    </div>
  );
}
