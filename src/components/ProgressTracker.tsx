"use client";

import React from "react";

interface ProgressTrackerProps {
  currentSection: number;
  totalSections: number;
  onNavigate?: (index: number) => void;
}

export default function ProgressTracker({
  currentSection,
  totalSections,
}: ProgressTrackerProps) {
  const percentage = Math.round(((currentSection + 1) / totalSections) * 100);

  return (
    <div className="fixed top-3 left-3 sm:top-4 sm:left-4 z-50">
      <div className="glass-panel px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm border border-white/60 text-[11px] sm:text-xs text-[#6D28D9]">
        <div className="flex items-center gap-1.5 font-medium whitespace-nowrap">
          <span className="inline-block w-2 h-2 rounded-full bg-[#F06292] animate-pulse" />
          <span>Part {currentSection + 1} of {totalSections}</span>
        </div>
        
        {/* Subtle mini progress bar */}
        <div className="w-12 sm:w-16 h-1.5 bg-pink-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#F06292] via-[#9B72CF] to-[#93C5FD] transition-all duration-500 rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
