"use client";

import { createContext, useContext, useRef, useState } from "react";

const MusicContext = createContext<any>(null);

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [started, setStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const startMusic = async () => {
    if (!audioRef.current) return;

    try {
      const audio = audioRef.current;

      audio.volume = 0.4;
      audio.loop = true;
      audio.muted = false;

      await audio.play(); // ✅ CUKUP SEKALI

      setStarted(true);
      setIsPlaying(true);
      setShowModal(false);
    } catch (err) {
      console.log("Audio play failed:", err);
    }
  };

  const togglePlay = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.log("Toggle play failed:", err);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;

    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <MusicContext.Provider
      value={{
        startMusic,
        togglePlay,
        toggleMute,
        started,
        isPlaying,
        isMuted,
        showModal,
      }}
    >
      <audio
        ref={audioRef}
        preload="metadata" // ⬅️ PENTING
        playsInline
        data-idm-disable
      >
        <source src="/music/QuietRoom.mp3" type="audio/mpeg" />
      </audio>
      {children}
    </MusicContext.Provider>
  );
}

export const useMusic = () => useContext(MusicContext);
