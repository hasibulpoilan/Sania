"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Sparkles, Heart } from "lucide-react";

interface WelcomeSectionProps {
  onOpenSurprise: () => void;
}

export default function WelcomeSection({ onOpenSurprise }: WelcomeSectionProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Multi-stage celebratory pastel & gold confetti
    confetti({
      particleCount: 55,
      spread: 70,
      origin: { y: 0.58 },
      colors: ["#F02D78", "#FFB6D0", "#FFD477", "#DCCBFF", "#FF8EB8"],
    });

    setTimeout(() => {
      confetti({
        particleCount: 75,
        spread: 110,
        origin: { y: 0.52 },
        colors: ["#FFD477", "#F02D78", "#6636B8", "#FFF9FD"],
      });
    }, 280);

    setTimeout(() => {
      onOpenSurprise();
    }, 1300);
  };

  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center px-4 py-10 sm:py-16 overflow-hidden">
      <div className="relative z-20 max-w-md w-full text-center flex flex-col items-center">
        {/* Top Badge: "✦ 🎁 A Personalized Digital Gift ✦" */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/70 border border-white/95 text-xs font-medium text-[#6636B8] shadow-md shadow-pink-200/40 mb-6 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#F02D78]" />
          <span className="text-base">🎁</span>
          <span className="tracking-wide font-medium">A Personalized Digital Gift</span>
          <Sparkles className="w-3.5 h-3.5 text-[#DCCBFF]" />
        </motion.div>

        {/* Delicate Heart Divider line above Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center gap-3 w-40 mb-3"
        >
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#F02D78]/40" />
          <Heart className="w-3.5 h-3.5 text-[#F02D78] fill-current" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#F02D78]/40" />
        </motion.div>

        {/* Heading: "Hey Sania!" with hand-drawn heart doodle */}
        <div className="relative inline-block mb-3">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl sm:text-6xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#F02D78] via-[#B83280] to-[#6636B8] font-bold tracking-tight px-3"
          >
            Hey Sania!
          </motion.h1>

          {/* Hand-drawn style pink heart doodle on the right like reference */}
          <motion.div
            initial={{ opacity: 0, rotate: -15, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 12, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute -top-1 -right-6 sm:-right-8 text-[#F02D78]"
          >
            <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
              <path
                d="M12 20 C6 12, 14 4, 20 10 C26 4, 34 12, 28 20 C22 28, 20 32, 20 32 C20 32, 18 28, 12 20 Z"
                stroke="#F02D78"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>

        {/* Sub-texts matching original content */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-lg text-[#37284F] font-medium leading-relaxed mb-1"
        >
          Someone has prepared a little surprise just for you.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-xs sm:text-sm text-[#7A5B9B] font-light italic max-w-xs mb-3"
        >
          A small gift filled with a little thought and lots of smiles.
        </motion.p>

        {/* Delicate Heart Divider line below Subtext */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex items-center justify-center gap-3 w-40 mb-6"
        >
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#F02D78]/30" />
          <Heart className="w-2.5 h-2.5 text-[#F02D78] fill-current" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#F02D78]/30" />
        </motion.div>

        {/* CENTREPIECE: 3D Glossy Magenta Gift Box with Golden Ribbon, Tag & Glowing Circular Rings */}
        <div
          className="relative my-2 cursor-pointer select-none"
          onClick={handleOpen}
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
            {/* Multi-layered Golden Glowing Orbital Rings on Floor (exact match to reference image) */}
            <div className="absolute bottom-6 w-56 sm:w-64 h-16 rounded-[100%] border-2 border-[#FFD477]/70 shadow-[0_0_25px_rgba(255,212,119,0.7)] pointer-events-none" />
            <div className="absolute bottom-8 w-44 sm:w-52 h-12 rounded-[100%] border border-[#FFB6D0]/60 shadow-[0_0_20px_rgba(240,45,120,0.5)] pointer-events-none" />
            <div className="absolute bottom-4 w-60 sm:w-68 h-20 rounded-[100%] bg-gradient-to-t from-[#FFD477]/25 to-transparent blur-md pointer-events-none" />

            {/* Little Floating Pink Hearts around the Box (just like reference image) */}
            <motion.div
              animate={{ y: [-4, 4, -4], x: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute -top-2 left-6 text-[#F02D78] drop-shadow-md z-15"
            >
              <Heart className="w-6 h-6 fill-current" />
            </motion.div>
            <motion.div
              animate={{ y: [4, -4, 4], x: [2, -2, 2] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-8 right-6 text-[#F02D78] drop-shadow-md z-15"
            >
              <Heart className="w-5 h-5 fill-current" />
            </motion.div>
            <motion.div
              animate={{ y: [-3, 3, -3] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-16 -left-2 text-[#FF8EB8] drop-shadow-sm z-15"
            >
              <Heart className="w-4 h-4 fill-current" />
            </motion.div>
            <motion.div
              animate={{ y: [3, -3, 3] }}
              transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 1.2 }}
              className="absolute bottom-18 -right-1 text-[#FF8EB8] drop-shadow-sm z-15"
            >
              <Heart className="w-4 h-4 fill-current" />
            </motion.div>

            {/* Golden Four-Pointed Sparkles (exact match to reference image) */}
            <motion.div
              animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="absolute top-16 left-1 text-[#FFD477] z-15"
            >
              ✦
            </motion.div>
            <motion.div
              animate={{ scale: [1.2, 0.8, 1.2], opacity: [1, 0.6, 1] }}
              transition={{ repeat: Infinity, duration: 2.8, delay: 0.4 }}
              className="absolute top-18 right-2 text-[#FFD477] text-lg z-15"
            >
              ✦
            </motion.div>
            <motion.div
              animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.5, 0.9, 0.5] }}
              transition={{ repeat: Infinity, duration: 2.2, delay: 0.8 }}
              className="absolute bottom-12 right-8 text-[#FFD477] text-sm z-15"
            >
              ✦
            </motion.div>

            {/* Magic Burst upon opening */}
            <AnimatePresence>
              {isOpening && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.3 }}
                  animate={{ opacity: [0, 1, 0], scale: [0.3, 1.9, 2.4] }}
                  transition={{ duration: 1 }}
                  className="absolute z-30 w-36 h-36 rounded-full bg-gradient-to-tr from-[#FFD477] via-[#F02D78] to-[#6636B8] blur-xl pointer-events-none"
                />
              )}
            </AnimatePresence>

            {/* 3D Glossy Magenta Gift Box with Golden Ribbon, Gift Tag, and Smooth Opening Lid */}
            <motion.svg
              viewBox="0 0 260 260"
              className="w-56 h-56 sm:w-64 sm:h-64 drop-shadow-2xl overflow-visible z-10"
              animate={
                !isOpening
                  ? { y: [0, -6, 0] }
                  : { scale: [1, 1.05, 1] }
              }
              transition={
                !isOpening
                  ? { repeat: Infinity, duration: 4, ease: "easeInOut" }
                  : { duration: 0.4 }
              }
            >
              <defs>
                {/* Glossy Romantic Magenta Box Gradients */}
                <linearGradient id="refBoxFront" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F53682" />
                  <stop offset="60%" stopColor="#E41E6D" />
                  <stop offset="100%" stopColor="#C21256" />
                </linearGradient>
                <linearGradient id="refBoxSide" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D81763" />
                  <stop offset="100%" stopColor="#A80B44" />
                </linearGradient>
                <linearGradient id="refBoxTop" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF62A0" />
                  <stop offset="100%" stopColor="#F02D78" />
                </linearGradient>

                {/* Luxurious Golden Satin Ribbon Gradients */}
                <linearGradient id="refGoldRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF2B2" />
                  <stop offset="30%" stopColor="#FFD477" />
                  <stop offset="70%" stopColor="#F5A823" />
                  <stop offset="100%" stopColor="#C97805" />
                </linearGradient>
                <linearGradient id="refGoldRibbonSide" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F5A823" />
                  <stop offset="100%" stopColor="#9C5900" />
                </linearGradient>
                <linearGradient id="refGoldBow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF9D2" />
                  <stop offset="40%" stopColor="#FFD77D" />
                  <stop offset="80%" stopColor="#F09E18" />
                  <stop offset="100%" stopColor="#C27000" />
                </linearGradient>

                {/* Inner Glow */}
                <radialGradient id="refInnerGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFF4BD" stopOpacity="0.95" />
                  <stop offset="60%" stopColor="#FF8EB8" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#F02D78" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Base Isometric Box Body */}
              <g id="magenta-box-base">
                {/* Front Left Face */}
                <path d="M68 124 L130 157 L130 216 L68 183 Z" fill="url(#refBoxFront)" />
                {/* Front Right Face */}
                <path d="M130 157 L192 124 L192 183 L130 216 Z" fill="url(#refBoxSide)" />

                {/* Golden Satin Vertical Ribbon (Front Left) */}
                <path d="M94 138 L108 145 L108 204 L94 197 Z" fill="url(#refGoldRibbon)" />
                {/* Golden Satin Vertical Ribbon (Front Right) */}
                <path d="M152 145 L166 138 L166 197 L152 204 Z" fill="url(#refGoldRibbonSide)" />

                {/* Inner Glow when lid is opened */}
                {isOpening && (
                  <ellipse cx="130" cy="125" rx="50" ry="22" fill="url(#refInnerGlow)" />
                )}
              </g>

              {/* Hanging Heart Gift Tag (exact match to reference image!) */}
              <g id="gift-tag" transform="translate(142, 148) rotate(12)">
                {/* Tag string */}
                <path d="M0 0 L6 10" stroke="#FFD477" strokeWidth="1.5" />
                {/* Tag body */}
                <rect x="0" y="8" width="22" height="28" rx="4" fill="#FFF2DE" stroke="#F5A823" strokeWidth="1" />
                <circle cx="11" cy="13" r="2" fill="#C97805" />
                {/* Little Magenta Heart on Tag */}
                <path
                  d="M11 26 C9 22, 6 23.5, 6 21 C6 19, 9 19, 11 21 C13 19, 16 19, 16 21 C16 23.5, 13 22, 11 26 Z"
                  fill="#F02D78"
                />
              </g>

              {/* Animated Box Lid with Golden Satin Bow */}
              <motion.g
                id="magenta-box-lid"
                animate={
                  isOpening
                    ? { y: -58, x: 18, rotate: -22, opacity: 0.95 }
                    : { y: 0, x: 0, rotate: 0 }
                }
                transition={
                  isOpening
                    ? { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
                    : { duration: 0.3 }
                }
              >
                {/* Lid Top Face */}
                <path d="M130 76 L200 111 L130 146 L60 111 Z" fill="url(#refBoxTop)" />
                {/* Lid Front Left Lip */}
                <path d="M60 111 L130 146 L130 159 L60 124 Z" fill="url(#refBoxFront)" />
                {/* Lid Front Right Lip */}
                <path d="M130 146 L200 111 L200 124 L130 159 Z" fill="url(#refBoxSide)" />

                {/* Golden Satin Ribbons across Lid */}
                <path d="M91 92 L106 100 L146 80 L131 72 Z" fill="url(#refGoldRibbon)" />
                <path d="M154 88 L169 96 L130 116 L115 108 Z" fill="url(#refGoldRibbon)" />
                <path d="M91 127 L106 134 L106 147 L91 140 Z" fill="url(#refGoldRibbon)" />
                <path d="M154 134 L169 127 L169 140 L154 147 Z" fill="url(#refGoldRibbonSide)" />

                {/* Golden Bow Ribbon Loops (Matching reference image's golden bow) */}
                {/* Left Large Loop */}
                <path
                  d="M130 96 C98 64, 70 80, 102 104 C118 108, 130 99, 130 96 Z"
                  fill="url(#refGoldBow)"
                  stroke="#C27000"
                  strokeWidth="0.8"
                />
                {/* Right Large Loop */}
                <path
                  d="M130 96 C162 64, 190 80, 158 104 C142 108, 130 99, 130 96 Z"
                  fill="url(#refGoldBow)"
                  stroke="#C27000"
                  strokeWidth="0.8"
                />
                {/* Top/Back Loop Left */}
                <path
                  d="M130 90 C108 58, 125 52, 130 85 Z"
                  fill="url(#refGoldBow)"
                  opacity="0.9"
                />
                {/* Top/Back Loop Right */}
                <path
                  d="M130 90 C152 58, 135 52, 130 85 Z"
                  fill="url(#refGoldBow)"
                  opacity="0.9"
                />
                {/* Central Knot */}
                <ellipse cx="130" cy="98" rx="10" ry="9" fill="url(#refGoldRibbon)" stroke="#B45309" strokeWidth="1" />
              </motion.g>
            </motion.svg>
          </div>
        </div>

        {/* Primary Action Button: "Open Your Surprise 🎁" (Matching reference image pill gradient) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-6 w-full max-w-xs"
        >
          <button
            onClick={handleOpen}
            disabled={isOpening}
            className="group relative w-full inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-semibold text-white rounded-full shadow-lg shadow-pink-500/35 hover:shadow-xl hover:shadow-pink-500/50 transition-all duration-300 active:scale-95 cursor-pointer overflow-hidden bg-gradient-to-r from-[#F02D78] via-[#BA278B] to-[#6636B8] border border-white/30"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>{isOpening ? "Opening Surprise..." : "Open Your Surprise"}</span>
              <span className="text-xl">🎁</span>
            </span>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
