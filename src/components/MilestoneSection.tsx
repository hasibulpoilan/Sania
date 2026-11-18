"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Heart, Sparkles } from "lucide-react";

interface MilestoneSectionProps {
  onNext: () => void;
}

export default function MilestoneSection({ onNext }: MilestoneSectionProps) {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center px-4 py-12 sm:py-16 overflow-hidden">
      <div className="relative z-20 max-w-lg w-full flex flex-col items-center text-center">
        {/* Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-white/95 text-xs font-semibold text-[#6636B8] shadow-md shadow-pink-200/40 mb-4 backdrop-blur-md"
        >
          <Calendar className="w-3.5 h-3.5 text-[#F02D78]" />
          <span>19 October – 19 November</span>
          <Sparkles className="w-3 h-3 text-[#FFD477]" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#F02D78] via-[#BA278B] to-[#6636B8] font-bold mb-6"
        >
          30 Days of Knowing You ❤️
        </motion.h2>

        {/* Romantic Glassmorphism Elevated Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full glass-panel-elevated p-7 sm:p-9 rounded-[32px] border border-white/90 shadow-xl shadow-pink-200/35 mb-8 text-center relative overflow-hidden"
        >
          {/* Subtle warm glow inside card */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-[#FFD477]/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-36 h-36 bg-[#F02D78]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="w-10 h-10 rounded-full bg-pink-50 border border-pink-200/70 flex items-center justify-center text-[#F02D78] mx-auto mb-4 shadow-sm">
            <Heart className="w-5 h-5 fill-current" />
          </div>

          <p className="relative z-10 text-base sm:text-lg md:text-xl text-[#37284F] leading-relaxed font-normal">
            &ldquo;One month ago, two strangers started a conversation. And today, we have a collection of little conversations, smiles, questions and memories.&rdquo;
          </p>
        </motion.div>

        {/* Next Button with Romantic Pill Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-xs"
        >
          <button
            onClick={onNext}
            className="group w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-white rounded-full shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40 transition-all duration-300 active:scale-95 cursor-pointer bg-gradient-to-r from-[#F02D78] via-[#BA278B] to-[#6636B8] border border-white/30"
          >
            <span>Continue Our Journey</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
