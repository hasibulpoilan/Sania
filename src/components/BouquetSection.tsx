"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import Image from "next/image";
import { Flower2, Sparkles, ArrowRight } from "lucide-react";
import { SURPRISE_CONFIG } from "@/config/surprise";

interface BouquetSectionProps {
  onNext: () => void;
}

export default function BouquetSection({ onNext }: BouquetSectionProps) {
  const [isUnwrapped, setIsUnwrapped] = useState(false);

  const handleUnwrap = () => {
    if (isUnwrapped) return;
    setIsUnwrapped(true);

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#F02D78", "#FFB6D0", "#FFD477", "#DCCBFF", "#E11D48"],
      disableForReducedMotion: true,
    });
  };

  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center px-4 py-12 sm:py-16 overflow-hidden">
      <div className="relative z-20 max-w-lg w-full text-center flex flex-col items-center">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-white/95 text-xs font-semibold text-[#F02D78] shadow-md shadow-pink-200/40 mb-4 backdrop-blur-md"
        >
          <Flower2 className="w-3.5 h-3.5 text-[#F02D78]" />
          <span>Handpicked for Sania</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#F02D78] via-[#BA278B] to-[#6636B8] font-bold mb-2"
        >
          A Little Bouquet for You
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg text-[#7A5B9B] font-light italic mb-8"
        >
          Because I remember you love roses. 🌹
        </motion.p>

        {/* Bouquet Interactive Showcase Card */}
        <div className="relative w-full max-w-sm glass-panel-elevated p-6 sm:p-7 rounded-[32px] flex flex-col items-center justify-center border border-white/95 shadow-2xl shadow-pink-200/40">
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {!isUnwrapped ? (
                /* Closed / Wrapped State with satin ribbon effect */
                <motion.div
                  key="wrapped"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: -3 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full rounded-[24px] overflow-hidden cursor-pointer select-none flex flex-col items-center justify-center shadow-md bg-gradient-to-tr from-pink-100/70 to-purple-100/70 border-2 border-white/90"
                  onClick={handleUnwrap}
                >
                  {/* Blurred preview of the real 3 roses peeking through */}
                  <div className="relative w-full h-full opacity-35 filter blur-xs">
                    <Image
                      src={SURPRISE_CONFIG.rosesUrl}
                      alt="Roses"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Elegant Satin Bow & Ribbon Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 bg-white/45 backdrop-blur-xs">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#F02D78] to-[#FFD477] flex items-center justify-center text-white shadow-lg mb-4">
                      <Flower2 className="w-8 h-8 drop-shadow-sm" />
                    </div>
                    <span className="font-serif text-xl text-[#37284F] font-bold mb-1">
                      Three Fragrant Roses
                    </span>
                    <p className="text-xs text-[#7A5B9B] max-w-[200px]">
                      A special trio tied with ribbon just for you.
                    </p>
                    <div className="mt-5 px-4 py-1.5 rounded-full bg-white/95 text-xs font-semibold text-[#F02D78] shadow-sm border border-pink-200">
                      Tap to unwrap 🎀
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* Unwrapped Real 3 Roses Blooming Picture */
                <motion.div
                  key="blooming"
                  initial={{ opacity: 0, scale: 0.85, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.35 }}
                  className="relative w-full h-full rounded-[24px] overflow-hidden shadow-xl border-4 border-white"
                >
                  <Image
                    src={SURPRISE_CONFIG.rosesUrl}
                    alt="Three Elegant Red Roses"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Sparkle badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#F02D78] px-3.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-md border border-pink-200"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#FFD477]" />
                    <span>Real & Natural</span>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Interactive Button */}
          {!isUnwrapped ? (
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleUnwrap}
              className="mt-6 w-full py-3.5 px-6 rounded-full font-semibold text-white bg-gradient-to-r from-[#F02D78] via-[#BA278B] to-[#6636B8] shadow-lg shadow-pink-500/30 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base border border-white/30"
            >
              <span>Unwrap Your Roses 🌹</span>
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 flex flex-col items-center w-full"
            >
              <p className="text-xs text-[#7A5B9B] mb-3 italic">
                A trio of deep red roses, picked to brighten your day.
              </p>
              <button
                onClick={onNext}
                className="w-full py-3.5 px-6 rounded-full font-semibold text-white bg-gradient-to-r from-[#F02D78] via-[#BA278B] to-[#6636B8] shadow-lg shadow-pink-500/30 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base border border-white/30"
              >
                <span>Continue to Next Surprise</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
