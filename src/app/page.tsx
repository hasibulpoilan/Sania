"use client";

import React, { useState } from "react";
import WelcomeSection from "@/components/WelcomeSection";
import MilestoneSection from "@/components/MilestoneSection";
import PhotoSection from "@/components/PhotoSection";
import BouquetSection from "@/components/BouquetSection";
import LittleThingsSection from "@/components/LittleThingsSection";
import MatureMessageSection from "@/components/MatureMessageSection";
import QuizSection from "@/components/QuizSection";
import ThankYouSection from "@/components/ThankYouSection";
import FloatingParticles from "@/components/FloatingParticles";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);

  const totalSections = 8;

  const goToNext = () => {
    setCurrentSection((prev) => Math.min(prev + 1, totalSections - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReplay = () => {
    setCurrentSection(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative min-h-[100dvh] w-full flex flex-col justify-center items-center overflow-x-hidden">
      {/* Floating background petals and hearts */}
      <FloatingParticles />

      {/* Clean multi-section surprise flow without top progress or music overlays */}
      <div className="w-full">
        {currentSection === 0 && <WelcomeSection onOpenSurprise={goToNext} />}
        {currentSection === 1 && <MilestoneSection onNext={goToNext} />}
        {currentSection === 2 && <PhotoSection onNext={goToNext} />}
        {currentSection === 3 && <BouquetSection onNext={goToNext} />}
        {currentSection === 4 && <LittleThingsSection onNext={goToNext} />}
        {currentSection === 5 && <MatureMessageSection onNext={goToNext} />}
        {currentSection === 6 && <QuizSection onComplete={goToNext} />}
        {currentSection === 7 && <ThankYouSection onReplay={handleReplay} />}
      </div>
    </main>
  );
}
