"use client";

import React, { useState, useRef, useEffect } from "react";
import { Music, VolumeX, Sparkles } from "lucide-react";
import { SURPRISE_CONFIG } from "@/config/surprise";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasAudio, setHasAudio] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          console.log("Audio playback was blocked or audio file not found.");
          setIsPlaying(false);
        });
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <audio
        ref={audioRef}
        src={SURPRISE_CONFIG.musicUrl}
        loop
        preload="auto"
        onError={() => setHasAudio(false)}
      />

      <button
        onClick={toggleMusic}
        className="flex items-center gap-2 px-3.5 py-2 rounded-full glass-panel shadow-md hover:shadow-lg transition-all duration-300 text-xs sm:text-sm font-medium text-[#6D28D9] border border-white/60 active:scale-95 cursor-pointer backdrop-blur-md"
        title={isPlaying ? "Pause background music" : "Play soft background music"}
      >
        {isPlaying ? (
          <>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F06292] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F06292]"></span>
            </span>
            <Music className="w-4 h-4 text-[#F06292] animate-bounce" />
            <span className="hidden sm:inline text-xs font-semibold">Music Playing</span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-gray-400" />
            <span className="hidden sm:inline text-xs text-gray-600">Music Off</span>
          </>
        )}
      </button>
    </div>
  );
}
