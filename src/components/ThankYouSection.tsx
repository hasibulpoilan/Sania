"use client";

import React from "react";
import { motion } from "framer-motion";
import { Flower2, RotateCcw } from "lucide-react";

interface ThankYouSectionProps {
  onReplay: () => void;
}

export default function ThankYouSection({ onReplay }: ThankYouSectionProps) {
  const handleReplayClick = () => {
    onReplay();
  };

  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center px-4 py-12 sm:py-16 overflow-hidden">
      <div className="relative z-20 max-w-lg w-full flex flex-col items-center text-center">
        {/* Animated Roses & Heart Icon Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#FFD6E7] via-[#FFD477] to-[#DCCBFF] p-1 shadow-xl shadow-pink-200/50 mb-6 flex items-center justify-center"
        >
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-[#F02D78]">
            <Flower2 className="w-10 h-10 animate-bounce" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#F02D78] via-[#BA278B] to-[#6636B8] font-bold mb-6"
        >
          Thank You, Sania! 🌷
        </motion.h2>

        {/* Romantic Elevated Card with exact message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full glass-panel-elevated p-6 sm:p-9 rounded-[32px] border border-white/95 shadow-2xl shadow-pink-200/40 text-center"
        >
          <div className="space-y-4 text-base sm:text-lg text-[#37284F] leading-relaxed font-normal">
            <p className="font-semibold text-[#6636B8]">
              Your little review means a lot.
            </p>

            <p>
              I enjoyed creating this little surprise for you.
            </p>

            <p className="text-[#7A5B9B] text-sm sm:text-base italic">
              And remember, there are no right or wrong answers. I just wanted to know how you see me.
            </p>

            <div className="pt-4 border-t border-purple-100">
              <p className="text-lg font-serif text-[#F02D78] font-bold flex items-center justify-center gap-2">
                Hope this little surprise made you smile! ❤️
              </p>
            </div>
          </div>
        </motion.div>

        {/* Replay the Surprise Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <button
            onClick={handleReplayClick}
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-[#6636B8] bg-white/85 border border-purple-200 shadow-md hover:shadow-lg hover:bg-pink-50/50 transition-all duration-300 active:scale-95 cursor-pointer backdrop-blur-md"
          >
            <RotateCcw className="w-4 h-4 text-[#F02D78] group-hover:-rotate-90 transition-transform duration-300" />
            <span>Replay the Surprise</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
