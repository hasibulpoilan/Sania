"use client";

import React from "react";
import { motion } from "framer-motion";
import { Flower2, Tv, Sparkles, GraduationCap, Target, ArrowRight } from "lucide-react";

interface LittleThingsSectionProps {
  onNext: () => void;
}

const memoryCards = [
  {
    icon: Flower2,
    title: "Roses with Long Stems",
    text: "You love roses 🌹, and especially when the flower stem (dandi) is long and elegant.",
    color: "#F02D78",
    gradient: "from-[#FFE5F0] to-[#FFF0F6]",
    border: "border-pink-200/80",
  },
  {
    icon: Tv,
    title: "Pakistani Dramas",
    text: "Tumi Pakistani drama dekhte bhalo baso — getting lost in soulful stories and beautiful dialogues.",
    color: "#6636B8",
    gradient: "from-[#F3EBFF] to-[#FAF5FF]",
    border: "border-purple-200/80",
  },
  {
    icon: Sparkles,
    title: "Appreciating Little Surprises",
    text: "You genuinely appreciate small, thoughtful efforts and meaningful gestures that bring a smile.",
    color: "#E59E00",
    gradient: "from-[#FFF8E6] to-[#FFFDF5]",
    border: "border-amber-200/80",
  },
  {
    icon: GraduationCap,
    title: "Thoughts on Career & Graduation",
    text: "You sometimes worry about your career path and what comes after graduation.",
    color: "#3B82F6",
    gradient: "from-[#EBF4FF] to-[#F5F9FF]",
    border: "border-blue-200/80",
  },
  {
    icon: Target,
    title: "Your Dreams & Responsibilities",
    text: "You carry heartfelt ambitions, dreams, and family responsibilities that truly matter to you.",
    color: "#BA278B",
    gradient: "from-[#FDF2F8] to-[#FFF7FC]",
    border: "border-pink-200/80",
  },
];

export default function LittleThingsSection({ onNext }: LittleThingsSectionProps) {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center px-4 py-12 sm:py-16 overflow-hidden">
      <div className="relative z-20 max-w-lg w-full flex flex-col items-center text-center">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-white/95 text-xs font-semibold text-[#F02D78] shadow-md shadow-pink-200/40 mb-3 backdrop-blur-md"
        >
          <Flower2 className="w-3.5 h-3.5 text-[#F02D78]" />
          <span>Remembered from Our Conversations</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#F02D78] via-[#BA278B] to-[#6636B8] font-bold mb-3"
        >
          Little Things I Remember About You 🌷
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xs sm:text-sm text-[#7A5B9B] font-normal leading-relaxed max-w-md mb-6 italic"
        >
          &ldquo;I may not know everything about you yet, but I remember the little things you share with me. And I genuinely enjoy discovering more about you, one conversation at a time.&rdquo;
        </motion.p>

        {/* Memory Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-8 text-left">
          {memoryCards.map((card, idx) => {
            const Icon = card.icon;
            const isFullWidth = idx === memoryCards.length - 1;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
                className={`p-4 sm:p-5 rounded-[24px] bg-gradient-to-br ${card.gradient} border ${card.border} shadow-lg shadow-pink-200/20 backdrop-blur-md flex items-start gap-3.5 ${
                  isFullWidth ? "sm:col-span-2" : ""
                }`}
              >
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-sm mt-0.5"
                  style={{ backgroundColor: card.color }}
                >
                  <Icon className="w-5 h-5 drop-shadow-xs" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#37284F]">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#5D4675] font-normal mt-0.5 leading-snug">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Continuation Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-xs"
        >
          <button
            onClick={onNext}
            className="group w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-white rounded-full shadow-lg shadow-pink-500/30 hover:shadow-xl transition-all duration-300 active:scale-95 cursor-pointer bg-gradient-to-r from-[#F02D78] via-[#BA278B] to-[#6636B8] border border-white/30"
          >
            <span>Read What I Wish for You</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
