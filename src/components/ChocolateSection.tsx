"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Sparkles, ArrowRight, Heart } from "lucide-react";

interface ChocolateSectionProps {
  onNext: () => void;
}

const chocolates = [
  { id: 1, name: "Dark Truffle", desc: "Silky 70% Cocoa", color: "from-[#2A1508] to-[#45220E]" },
  { id: 2, name: "Berry Heart", desc: "Sweet Raspberry", color: "from-[#54162B] to-[#7B203E]" },
  { id: 3, name: "Hazelnut Praline", desc: "Roasted Crunch", color: "from-[#3B1F0B] to-[#5C3214]" },
  { id: 4, name: "Sea Salt Caramel", desc: "Golden Butter", color: "from-[#572B0C] to-[#824419]" },
  { id: 5, name: "Ruby Rose", desc: "Floral Essence", color: "from-[#701A39] to-[#99224E]" },
  { id: 6, name: "Swiss Milk", desc: "Smooth & Creamy", color: "from-[#4E2A12] to-[#733F1C]" },
];

export default function ChocolateSection({ onNext }: ChocolateSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);

    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#D8B4FE", "#F8BBD0", "#BAE6FD", "#F59E0B", "#F06292"],
      disableForReducedMotion: true,
    });
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-16 overflow-hidden bg-gradient-to-b from-[#F5F3FF] via-[#FFF7FC] to-[#FDF2F8]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-16 w-80 h-80 rounded-full bg-[#BAE6FD]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-16 w-80 h-80 rounded-full bg-[#F8BBD0]/35 blur-3xl pointer-events-none" />

      <div className="relative z-20 max-w-lg w-full text-center flex flex-col items-center">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/70 border border-[#BAE6FD] text-xs font-medium text-[#4F46E5] shadow-xs mb-4 backdrop-blur-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
          <span>Sweet Treat</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800 font-semibold mb-2"
        >
          A Little Something Sweet
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg text-gray-600 font-light italic mb-8"
        >
          Because I remember you love chocolates too! 🍫
        </motion.p>

        {/* Chocolate Box Presentation Card */}
        <div className="relative w-full max-w-sm glass-panel p-6 sm:p-7 rounded-3xl flex flex-col items-center justify-center border border-white/80 shadow-2xl shadow-purple-100/60">
          <div className="relative w-full min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {!isOpen ? (
                /* Closed Luxury Gift Box with Ribbon */
                <motion.div
                  key="closed-box"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className="w-full py-8 px-6 rounded-2xl bg-gradient-to-tr from-pink-100/90 via-purple-100/80 to-blue-100/90 border-2 border-white/90 shadow-md flex flex-col items-center justify-center cursor-pointer select-none group"
                  onClick={handleOpen}
                >
                  {/* Luxury Chocolate Emblem */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#45220E] to-[#1E0D05] p-1 shadow-lg flex items-center justify-center border-2 border-amber-200/60 mb-4 group-hover:scale-105 transition-transform">
                    <span className="text-3xl">🍫</span>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-gray-800 mb-1">
                    Artisan Chocolate Box
                  </h3>
                  <p className="text-xs text-gray-500 font-light max-w-[210px] text-center mb-5">
                    Carefully selected assortment crafted to bring sweet smiles.
                  </p>

                  <div className="px-4 py-1.5 rounded-full bg-white/90 text-xs font-semibold text-[#6D28D9] shadow-xs border border-purple-200">
                    Tap to open box ✨
                  </div>
                </motion.div>
              ) : (
                /* Opened Box with Delicious Chocolate Pieces with gentle bounce */
                <motion.div
                  key="opened-box"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.35 }}
                  className="w-full p-4 rounded-2xl bg-[#2A1508]/5 border-2 border-amber-200/70 shadow-inner flex flex-col items-center"
                >
                  <div className="grid grid-cols-2 gap-3 w-full">
                    {chocolates.map((c, index) => (
                      <motion.div
                        key={c.id}
                        initial={{ opacity: 0, y: 15, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          delay: 0.08 * index,
                          type: "spring",
                          stiffness: 260,
                          damping: 18,
                        }}
                        className="p-3 rounded-xl bg-white shadow-sm border border-amber-100 flex items-center gap-2.5"
                      >
                        <div
                          className={`w-9 h-9 rounded-lg bg-gradient-to-br ${c.color} flex items-center justify-center text-amber-200 text-xs font-bold shadow-md`}
                        >
                          ✦
                        </div>
                        <div className="text-left overflow-hidden">
                          <p className="text-xs font-semibold text-gray-800 truncate">
                            {c.name}
                          </p>
                          <p className="text-[10px] text-gray-500 truncate">
                            {c.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-4 text-[11px] text-[#9B72CF] font-medium flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#F06292]" />
                    <span>Every bite filled with sweetness</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Action Button */}
          {!isOpen ? (
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleOpen}
              className="mt-6 w-full py-3 px-6 rounded-full font-semibold text-white bg-gradient-to-r from-[#9B72CF] via-[#6D28D9] to-[#F06292] shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
            >
              <span>Open Chocolate Box 🍫</span>
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 flex flex-col items-center w-full"
            >
              <button
                onClick={onNext}
                className="w-full py-3 px-6 rounded-full font-semibold text-white bg-gradient-to-r from-[#F06292] to-[#9B72CF] shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
              >
                <span>Read My Message</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
