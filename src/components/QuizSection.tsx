"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  QuizAnswers,
  initialQuizAnswers,
} from "@/types/quiz";
import { saveQuizDraft, loadQuizDraft, submitQuizAnswers } from "@/utils/storage";
import confetti from "canvas-confetti";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Sparkles,
  Check,
  Send,
} from "lucide-react";

interface QuizSectionProps {
  onComplete: () => void;
}

// 7 Personality Questions
const personalityQuestions: { key: keyof QuizAnswers["personality"]; text: string }[] = [
  { key: "honest", text: "How honest do you think I am?" },
  { key: "patient", text: "How patient am I?" },
  { key: "confident", text: "How confident do I seem?" },
  { key: "shy", text: "How shy do you think I am?" },
  { key: "caring", text: "How caring am I?" },
  { key: "understanding", text: "How good am I at understanding your feelings?" },
  { key: "comfortable", text: "How comfortable do you feel talking to me?" },
];

// 3 Multiple Choice Questions
const memoryQuestions = [
  {
    key: "enjoysMore" as const,
    question: "What do I enjoy more?",
    options: [
      "Talking about technology",
      "Knowing about your day",
      "Making you smile",
      "All of these",
    ],
  },
  {
    key: "valuesMost" as const,
    question: "What do you think I value most in a connection?",
    options: ["Honesty", "Trust", "Understanding", "All of these"],
  },
  {
    key: "improveOneThing" as const,
    question: "What is one thing you think I should improve?",
    options: [
      "Being less overthinking",
      "Being more patient",
      "Being more confident",
      "Nothing, I'm perfect! 😂",
    ],
  },
];

// 3 Special Personal Questions
const personalRatingQuestions: { key: keyof QuizAnswers["personalRatings"]; text: string }[] = [
  { key: "enjoyTalking", text: "How much do you enjoy talking to me?" },
  { key: "comfortableBeingSelf", text: "How comfortable are you being yourself around me?" },
  { key: "conversationsSoFar", text: "How would you rate our conversations so far?" },
];

export default function QuizSection({ onComplete }: QuizSectionProps) {
  const [answers, setAnswers] = useState<QuizAnswers>(initialQuizAnswers);
  const [currentStep, setCurrentStep] = useState(0); 
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const draft = loadQuizDraft();
    if (draft) {
      setAnswers((prev) => ({
        ...prev,
        ...draft,
        personality: {
          ...prev.personality,
          ...(draft.personality || {}),
        },
        memories: {
          ...prev.memories,
          ...(draft.memories || {}),
        },
        personalRatings: {
          ...prev.personalRatings,
          ...(draft.personalRatings || {}),
        },
      }));
    }
  }, []);

  const updateAnswers = (newAnswers: QuizAnswers) => {
    setAnswers(newAnswers);
    saveQuizDraft(newAnswers);
    setErrorMessage(null);
  };

  const totalQuestions = 13;

  const isCurrentStepValid = (): boolean => {
    if (currentStep === 0) return true;

    if (currentStep >= 1 && currentStep <= 7) {
      const qIndex = currentStep - 1;
      const key = personalityQuestions[qIndex].key;
      return answers.personality[key] !== null;
    }

    if (currentStep >= 8 && currentStep <= 10) {
      const qIndex = currentStep - 8;
      const key = memoryQuestions[qIndex].key;
      return answers.memories[key] !== null;
    }

    if (currentStep >= 11 && currentStep <= 13) {
      const qIndex = currentStep - 11;
      const key = personalRatingQuestions[qIndex].key;
      return answers.personalRatings[key] !== null;
    }

    return true;
  };

  const handleNext = () => {
    if (!isCurrentStepValid()) {
      setErrorMessage("Please select an answer to continue! 😊");
      return;
    }
    setErrorMessage(null);
    if (currentStep < totalQuestions) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setErrorMessage(null);
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    if (!isCurrentStepValid()) {
      setErrorMessage("Please select an answer before submitting! 😊");
      return;
    }

    const hasUnansweredPartA = Object.values(answers.personality).some((v) => v === null);
    const hasUnansweredPartB = Object.values(answers.memories).some((v) => v === null);
    const hasUnansweredPartC = Object.values(answers.personalRatings).some((v) => v === null);

    if (hasUnansweredPartA || hasUnansweredPartB || hasUnansweredPartC) {
      setErrorMessage("Please complete all ratings before submitting! ❤️");
      return;
    }

    setIsSubmitting(true);
    await submitQuizAnswers(answers);

    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.5 },
      colors: ["#F02D78", "#FFB6D0", "#FFD477", "#DCCBFF", "#6636B8"],
    });

    setTimeout(() => {
      setIsSubmitting(false);
      onComplete();
    }, 1000);
  };

  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center px-3 sm:px-4 py-12 sm:py-16 overflow-hidden">
      <div className="relative z-20 max-w-lg w-full flex flex-col items-center">
        {/* Top Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/70 border border-white/95 text-xs font-semibold text-[#6636B8] shadow-md shadow-pink-200/40 mb-2 backdrop-blur-md">
            <Heart className="w-3.5 h-3.5 text-[#F02D78] fill-current" />
            <span>Interactive Game</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#F02D78] via-[#BA278B] to-[#6636B8] font-bold mb-1">
            How Well Do You Know Me? 💜
          </h2>

          {currentStep > 0 && (
            <div className="flex items-center justify-center gap-2 text-xs text-[#7A5B9B] font-medium">
              <span>
                Question {currentStep} of {totalQuestions}
              </span>
            </div>
          )}
        </div>

        {/* Dynamic Romantic Card Container */}
        <div className="w-full glass-panel-elevated p-5 sm:p-8 rounded-[32px] min-h-[350px] flex flex-col justify-between border border-white/95 shadow-2xl shadow-pink-200/35">
          <AnimatePresence mode="wait">
            {/* STEP 0: INTRO SCREEN */}
            {currentStep === 0 && (
              <motion.div
                key="step-0"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col items-center text-center py-4 my-auto"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#FFE5F0] to-[#F3EBFF] border border-pink-200 flex items-center justify-center text-[#F02D78] mb-4 shadow-sm">
                  <Sparkles className="w-8 h-8 text-[#FFD477]" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-[#37284F] font-bold mb-2">
                  Okay Sania! Before you leave, there&apos;s one last little game for you. 😄
                </h3>
                <p className="text-xs sm:text-sm text-[#5D4675] leading-relaxed mb-4 max-w-sm">
                  We&apos;ve spent some time talking to each other. Now I&apos;m curious to know how you see me!
                </p>
                <p className="text-xs font-semibold text-[#F02D78] bg-pink-50 px-4 py-1.5 rounded-full border border-pink-200/80 shadow-2xs">
                  Rate me honestly. No right or wrong answers!
                </p>

                <button
                  onClick={() => setCurrentStep(1)}
                  className="mt-6 w-full max-w-xs py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#F02D78] via-[#BA278B] to-[#6636B8] shadow-lg shadow-pink-500/30 hover:shadow-xl transition-all duration-300 cursor-pointer active:scale-95 text-sm sm:text-base border border-white/30"
                >
                  Start the Rating Game ✨
                </button>
              </motion.div>
            )}

            {/* STEP 1 - 7: PART A (PERSONALITY RATINGS) */}
            {currentStep >= 1 && currentStep <= 7 && (
              <motion.div
                key={`step-${currentStep}`}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col justify-center my-auto"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-purple-100 text-[#6636B8]">
                    Part A: Personality
                  </span>
                  <span className="text-[11px] text-[#7A5B9B] font-medium">
                    Question {currentStep} / 7
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-serif text-[#37284F] font-semibold mb-4 leading-snug">
                  {currentStep}. {personalityQuestions[currentStep - 1].text}
                </h3>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-[#7A5B9B] px-1 font-medium">
                    <span>1 = Not much</span>
                    <span>5 = Average</span>
                    <span>10 = Absolutely</span>
                  </div>

                  <div className="grid grid-cols-5 gap-2">
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((val) => {
                      const qKey = personalityQuestions[currentStep - 1].key;
                      const selectedVal = answers.personality[qKey];
                      const isSelected = selectedVal === val;

                      return (
                        <button
                          key={val}
                          onClick={() => {
                            updateAnswers({
                              ...answers,
                              personality: {
                                ...answers.personality,
                                [qKey]: val,
                              },
                            });
                          }}
                          className={`h-11 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer ${
                            isSelected
                              ? "bg-gradient-to-r from-[#F02D78] to-[#6636B8] text-white shadow-md scale-105"
                              : "bg-white/90 hover:bg-pink-50 text-[#37284F] border border-pink-200/80 shadow-2xs"
                          }`}
                        >
                          {val}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-4 p-3 rounded-2xl bg-white/80 border border-purple-100 flex items-center justify-between text-xs sm:text-sm shadow-2xs">
                    <span className="text-[#5D4675]">Selected Score:</span>
                    <span className="font-bold text-base text-transparent bg-clip-text bg-gradient-to-r from-[#F02D78] to-[#6636B8]">
                      {answers.personality[personalityQuestions[currentStep - 1].key] !== null
                        ? `${answers.personality[personalityQuestions[currentStep - 1].key]} / 10`
                        : "Tap a number above"}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 8 - 10: PART B (CONVERSATION MEMORIES) */}
            {currentStep >= 8 && currentStep <= 10 && (
              <motion.div
                key={`step-${currentStep}`}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col justify-center my-auto"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-[#3B82F6]">
                    Part B: Conversation Memories
                  </span>
                  <span className="text-[11px] text-[#7A5B9B] font-medium">
                    Question {currentStep - 7} / 3
                  </span>
                </div>

                <h3 className="text-base sm:text-xl font-serif text-[#37284F] font-semibold mb-4 leading-snug">
                  {memoryQuestions[currentStep - 8].question}
                </h3>

                <div className="space-y-2.5">
                  {memoryQuestions[currentStep - 8].options.map((option) => {
                    const qKey = memoryQuestions[currentStep - 8].key;
                    const isSelected = answers.memories[qKey] === option;

                    return (
                      <button
                        key={option}
                        onClick={() => {
                          updateAnswers({
                            ...answers,
                            memories: {
                              ...answers.memories,
                              [qKey]: option,
                            },
                          });
                        }}
                        className={`w-full p-3.5 rounded-2xl text-left text-xs sm:text-sm font-medium transition-all duration-200 flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? "bg-gradient-to-r from-[#F02D78] to-[#6636B8] text-white shadow-md"
                            : "bg-white/90 hover:bg-purple-50/70 text-[#37284F] border border-purple-100 shadow-2xs"
                        }`}
                      >
                        <span>{option}</span>
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                            <Check className="w-3.5 h-3.5 text-white" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* STEP 11 - 13: PART C (PERSONAL RATINGS) */}
            {currentStep >= 11 && currentStep <= 13 && (
              <motion.div
                key={`step-${currentStep}`}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col justify-center my-auto"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-pink-100 text-[#F02D78]">
                    Part C: Personal Ratings
                  </span>
                  <span className="text-[11px] text-[#7A5B9B] font-medium">
                    Question {currentStep - 10} / 3
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-50 via-purple-50 to-amber-50 border border-pink-200 mb-4">
                  <h3 className="text-base sm:text-lg font-serif text-[#37284F] font-semibold leading-snug">
                    {personalRatingQuestions[currentStep - 11].text}
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-[#7A5B9B] px-1 font-medium">
                    <span>1 = Minimal</span>
                    <span>5 = Good</span>
                    <span>10 = The Best!</span>
                  </div>

                  <div className="grid grid-cols-5 gap-2">
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((val) => {
                      const qKey = personalRatingQuestions[currentStep - 11].key;
                      const isSelected = answers.personalRatings[qKey] === val;

                      return (
                        <button
                          key={val}
                          onClick={() => {
                            updateAnswers({
                              ...answers,
                              personalRatings: {
                                ...answers.personalRatings,
                                [qKey]: val,
                              },
                            });
                          }}
                          className={`h-11 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer ${
                            isSelected
                              ? "bg-gradient-to-r from-[#F02D78] via-[#BA278B] to-[#6636B8] text-white shadow-md scale-105"
                              : "bg-white/90 hover:bg-pink-50 text-[#37284F] border border-pink-200/80 shadow-2xs"
                          }`}
                        >
                          {val}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-4 p-3 rounded-2xl bg-white/80 border border-pink-100 flex items-center justify-between text-xs sm:text-sm shadow-2xs">
                    <span className="text-[#5D4675]">Your Rating:</span>
                    <span className="font-bold text-base text-[#F02D78]">
                      {answers.personalRatings[personalRatingQuestions[currentStep - 11].key] !== null
                        ? `${answers.personalRatings[personalRatingQuestions[currentStep - 11].key]} / 10`
                        : "Tap to rate"}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Error Message */}
          {errorMessage && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs text-center font-medium text-[#F02D78] bg-pink-50 py-2 px-3 rounded-xl mt-2 border border-pink-200"
            >
              {errorMessage}
            </motion.p>
          )}

          {/* Navigation Controls */}
          {currentStep > 0 && (
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-purple-100">
              <button
                onClick={handlePrev}
                className="inline-flex items-center gap-1 px-4 py-2 text-xs sm:text-sm font-medium text-[#5D4675] hover:text-[#37284F] rounded-full hover:bg-white/90 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>

              {currentStep < totalQuestions ? (
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white rounded-full bg-gradient-to-r from-[#F02D78] to-[#6636B8] shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-95"
                >
                  <span>Next Question</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-7 py-3 text-xs sm:text-sm font-semibold text-white rounded-full bg-gradient-to-r from-[#F02D78] via-[#BA278B] to-[#6636B8] shadow-lg shadow-pink-500/35 hover:shadow-xl transition-all duration-200 cursor-pointer active:scale-95 disabled:opacity-70"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Submitting..." : "Complete My Review ❤️"}</span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
