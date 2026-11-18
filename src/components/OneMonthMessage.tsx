"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, ArrowRight, Calendar, Moon, Tv } from "lucide-react";
import { SURPRISE_CONFIG } from "@/config/surprise";

interface OneMonthMessageProps {
  onNext: () => void;
}

export default function OneMonthMessage({ onNext }: OneMonthMessageProps) {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center px-4 py-12 sm:py-16 overflow-hidden bg-gradient-to-b from-[#FDF2F8] via-[#FFF7FC] to-[#F5F3FF]">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-[#F8BBD0]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-[#D8B4FE]/30 blur-3xl pointer-events-none" />

      <div className="relative z-20 max-w-lg w-full flex flex-col items-center">
        {/* Subtle top date badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#F8BBD0] text-xs font-medium text-[#6D28D9] shadow-xs mb-4 backdrop-blur-md"
        >
          <Calendar className="w-3.5 h-3.5 text-[#F06292]" />
          <span>{SURPRISE_CONFIG.occasionDate} • One Month Milestone</span>
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-serif text-center text-gray-800 font-semibold mb-6"
        >
          One Month, A Little Memory
        </motion.h2>

        {/* Clean card with pink-purple gradient border */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full p-0.5 rounded-3xl bg-gradient-to-br from-[#F06292] via-[#9B72CF] to-[#93C5FD] shadow-xl shadow-purple-100/50"
        >
          <div className="w-full bg-white/95 backdrop-blur-xl rounded-[23px] p-5 sm:p-8 text-center flex flex-col items-center">
            {/* Top delicate heart icon */}
            <div className="w-11 h-11 rounded-full bg-pink-50 border border-pink-100 flex items-center justify-center text-[#F06292] mb-4">
              <Heart className="w-5 h-5 fill-pink-100 stroke-[#F06292]" />
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-[#6D28D9] font-medium mb-4 leading-snug">
              Happy One Month of Knowing Each Other, Sania! ❤️
            </h3>

            {/* Thoughtful Personalized Message incorporating her love for Pakistani dramas & sleeping */}
            <div className="space-y-3.5 text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed font-normal max-w-md">
              <p>
                It&apos;s been a month since we started talking, and I&apos;m truly glad our paths crossed.
              </p>

              <p>
                I don&apos;t know where this journey will take us, but I&apos;m genuinely happy that we got to know each other.
              </p>

              <p>
                I remembered how much you love roses, watching your favourite Pakistani dramas, and of course, your precious sleep and peaceful naps! So here is a little virtual surprise created just for you.
              </p>

              <p className="text-gray-600 font-light italic">
                No special reason, just a little effort to make you smile.
              </p>
            </div>

            {/* Cute Little Badges for Pakistani Drama & Sleep */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-50 text-[11px] font-medium text-[#6D28D9] border border-purple-100">
                <Tv className="w-3.5 h-3.5 text-[#9B72CF]" />
                Pakistani Dramas
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-[11px] font-medium text-[#4F46E5] border border-blue-100">
                <Moon className="w-3.5 h-3.5 text-[#93C5FD]" />
                Peaceful Sleep 💤
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-pink-50 text-[11px] font-medium text-[#F06292] border border-pink-100">
                🌹 Red Roses
              </span>
            </div>

            {/* Signature sign-off */}
            <div className="mt-6 pt-4 border-t border-pink-100/80 w-full flex flex-col items-center">
              <p className="text-sm sm:text-base font-serif text-[#F06292] font-semibold flex items-center gap-1.5">
                Keep smiling and stay happy! 🌹✨
              </p>
            </div>
          </div>
        </motion.div>

        {/* Transition to Interactive Quiz */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 sm:mt-8 w-full max-w-xs"
        >
          <button
            onClick={onNext}
            className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white rounded-full shadow-lg shadow-purple-300/40 hover:shadow-xl transition-all duration-300 active:scale-95 cursor-pointer bg-gradient-to-r from-[#9B72CF] via-[#6D28D9] to-[#F06292]"
          >
            <span>Play the Surprise Game</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
