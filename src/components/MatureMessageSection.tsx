"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

interface MatureMessageSectionProps {
  onNext: () => void;
}

export default function MatureMessageSection({ onNext }: MatureMessageSectionProps) {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center px-4 py-12 sm:py-16 overflow-hidden">
      <div className="relative z-20 max-w-lg w-full flex flex-col items-center text-center">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-white/95 text-xs font-semibold text-[#6636B8] shadow-md shadow-pink-200/40 mb-4 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#F02D78]" />
          <span>A Thoughtful Note</span>
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#F02D78] via-[#BA278B] to-[#6636B8] font-bold mb-6"
        >
          Something I Want You to Know 💜
        </motion.h2>

        {/* Standalone Letter Card */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full glass-panel-elevated p-6 sm:p-9 rounded-[32px] border border-white/95 shadow-2xl shadow-purple-200/40 text-center flex flex-col items-center"
        >
          {/* Heart emblem */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FFE5F0] to-[#F3EBFF] border border-pink-200 flex items-center justify-center text-[#F02D78] mb-4 shadow-sm">
            <Heart className="w-6 h-6 fill-current" />
          </div>

          {/* Exact Specified Mature Message */}
          <div className="space-y-4 text-xs sm:text-sm md:text-base text-[#37284F] leading-relaxed font-normal text-left sm:text-center max-w-md">
            <p>
              I know you have dreams, responsibilities and sometimes a lot of thoughts about your future.
            </p>

            <p>
              I hope you never feel that you have to figure everything out at once. Take your time, trust your journey and don&apos;t be too hard on yourself.
            </p>

            <p>
              I genuinely enjoy talking to you, listening to your thoughts and getting to know the person you are.
            </p>

            <p>
              I don&apos;t believe people need to rush anything to make a connection meaningful. Sometimes, the best things grow naturally with time.
            </p>

            <p className="font-semibold text-[#6636B8]">
              I&apos;m happy that we crossed paths. Keep smiling, keep growing and never stop believing in yourself.
            </p>
          </div>

          {/* Small Personal Promise at Bottom */}
          <div className="mt-7 pt-5 border-t border-purple-200/80 w-full flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white text-[11px] font-semibold text-[#6636B8] shadow-xs border border-purple-200 mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F02D78]" />
              <span>A Personal Belief</span>
            </div>
            <p className="text-xs sm:text-sm text-[#5D4675] font-normal leading-relaxed italic max-w-sm">
              &ldquo;One thing I believe in: Good connections are built with honesty, respect, patience and understanding — not expectations or pressure.&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Continuation Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 w-full max-w-xs"
        >
          <button
            onClick={onNext}
            className="group w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-white rounded-full shadow-lg shadow-pink-500/30 hover:shadow-xl transition-all duration-300 active:scale-95 cursor-pointer bg-gradient-to-r from-[#F02D78] via-[#BA278B] to-[#6636B8] border border-white/30"
          >
            <span>Play the Surprise Game</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
