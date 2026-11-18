"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  type: "heart" | "sparkle";
  color: string;
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const types: ("heart" | "sparkle")[] = ["heart", "heart", "sparkle", "heart"];
    // Romantic Magenta, Blush Pink, Warm Gold, Soft Lavender
    const colors = ["#F02D78", "#FFB6D0", "#FFD477", "#DCCBFF", "#FF8EB8"];
    
    const items: Particle[] = Array.from({ length: 26 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 14 + 10,
      duration: Math.random() * 12 + 10,
      delay: Math.random() * 6,
      type: types[i % types.length],
      color: colors[i % colors.length],
    }));

    setParticles(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {/* Dreamy Ambient Blurred Clouds/Orbs in Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-[#FFD6E7]/40 blur-[90px]" />
      <div className="absolute top-[25%] right-[-15%] w-[60vw] h-[60vw] rounded-full bg-[#DCCBFF]/35 blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[20%] w-[70vw] h-[70vw] rounded-full bg-[#FFB6D0]/30 blur-[110px]" />

      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: "110vh", x: `${p.x}vw`, opacity: 0, scale: 0.6 }}
          animate={{
            y: "-10vh",
            x: [`${p.x}vw`, `${p.x + (p.id % 2 === 0 ? 3 : -3)}vw`, `${p.x}vw`],
            opacity: [0, 0.75, 0.75, 0],
            scale: [0.6, 1, 0.8],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width: p.size,
            height: p.size,
          }}
        >
          {p.type === "heart" && (
            <svg viewBox="0 0 24 24" fill={p.color} className="w-full h-full opacity-70 drop-shadow-sm">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}

          {p.type === "sparkle" && (
            <svg viewBox="0 0 24 24" fill={p.color} className="w-full h-full opacity-80 drop-shadow-sm">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
}
