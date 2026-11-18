"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SURPRISE_CONFIG } from "@/config/surprise";
import { Flower2, Heart, ArrowRight } from "lucide-react";

interface PhotoSectionProps {
  onNext: () => void;
}

export default function PhotoSection({ onNext }: PhotoSectionProps) {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center px-4 py-12 sm:py-16 overflow-hidden">
      <div className="relative z-20 max-w-xl w-full text-center flex flex-col items-center">
        {/* Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-white/95 text-xs font-semibold text-[#6636B8] shadow-md shadow-pink-200/40 mb-6 backdrop-blur-md"
        >
          <Flower2 className="w-3.5 h-3.5 text-[#F02D78]" />
          <span>A Special Memory</span>
        </motion.div>

        {/* Lead Quote */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#37284F] font-semibold leading-snug mb-2"
        >
          &ldquo;Some people make ordinary days feel a little special.&rdquo;
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg text-[#F02D78] font-medium mb-8"
        >
          And I&apos;m glad we got to know each other.
        </motion.p>

        {/* Romantic Portrait Frame with Golden and Magenta Halo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative my-2 p-2 sm:p-2.5 rounded-[32px] bg-gradient-to-tr from-[#F02D78] via-[#FFD477] to-[#6636B8] shadow-2xl shadow-pink-300/40"
        >
          {/* Outer glowing halo */}
          <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-[#F02D78] via-[#FFD477] to-[#6636B8] opacity-40 blur-md animate-pulse pointer-events-none" />

          {/* Inner Frame with Real Photo */}
          <div className="relative w-64 h-84 sm:w-76 sm:h-[420px] rounded-[24px] overflow-hidden bg-white/95 border-4 border-white shadow-inner flex flex-col items-center justify-center">
            {SURPRISE_CONFIG.photoUrl ? (
              <Image
                src={SURPRISE_CONFIG.photoUrl}
                alt="Sania"
                fill
                className="object-cover object-top"
                priority
              />
            ) : null}
          </div>

          {/* Floating decorative elements around frame */}
          <motion.div
            animate={{ y: [-4, 4, -4], rotate: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-[#F02D78] border border-pink-200"
          >
            <Heart className="w-5 h-5 fill-current" />
          </motion.div>

          <motion.div
            animate={{ y: [4, -4, 4], rotate: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="absolute -bottom-3 -left-3 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-[#6636B8] border border-purple-200"
          >
            <Flower2 className="w-5 h-5" />
          </motion.div>
        </motion.div>

        {/* Continuation Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 w-full max-w-xs"
        >
          <button
            onClick={onNext}
            className="group w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-white rounded-full shadow-lg shadow-pink-500/30 hover:shadow-xl transition-all duration-300 active:scale-95 cursor-pointer bg-gradient-to-r from-[#F02D78] via-[#BA278B] to-[#6636B8] border border-white/30"
          >
            <span>See What&apos;s Next</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
