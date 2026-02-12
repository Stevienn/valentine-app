"use client";

import { useMusic } from "./MusicProvider";

export default function MusicControls() {
  const { started, isPlaying, isMuted, togglePlay, toggleMute } = useMusic();

  // jangan tampil sebelum musik di-unlock
  if (!started) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[9999] flex gap-2 rounded-full bg-white/80 px-3 py-2 shadow-lg backdrop-blur">
      <button
        onClick={togglePlay}
        className="rounded-full bg-pink-500 px-3 py-1 text-white text-2xl transition hover:bg-pink-600"
      >
        {isPlaying ? "⏸" : "▶️"}
      </button>

      <button
        onClick={toggleMute}
        className="rounded-full bg-pink-400 px-3 py-1 text-white text-2xl transition hover:bg-pink-500"
      >
        {isMuted ? "🔇" : "🔊"}
      </button>
    </div>
  );
}
