"use client";

import React, { useEffect, useState } from "react";
import { QuizAnswers } from "@/types/quiz";
import { Heart, Sparkles, RefreshCw, Calendar, CheckCircle2, MessageSquare, Star } from "lucide-react";
import Link from "next/link";

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<QuizAnswers[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/submit-review");
      const json = await res.json();
      if (json.success && json.data) {
        setReviews(json.data);
      }
    } catch (e) {
      console.error("Failed to load reviews:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#FFF7FC] py-10 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-purple-200 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-[#6D28D9] text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Admin Dashboard</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif text-gray-800 font-bold">
              Sania&apos;s Review Submissions 💌
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              All responses submitted by Sania are permanently stored here.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchReviews}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#9B72CF] to-[#6D28D9] shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
              <span>Refresh</span>
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium text-gray-600 bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <span>View Site</span>
            </Link>
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-500">
            <div className="w-10 h-10 border-4 border-pink-300 border-t-[#F06292] rounded-full animate-spin mb-4" />
            <p className="text-sm font-medium">Checking for responses...</p>
          </div>
        ) : reviews.length === 0 ? (
          <div className="glass-panel p-10 rounded-3xl text-center flex flex-col items-center justify-center border border-dashed border-purple-300">
            <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center text-[#F06292] mb-4">
              <Heart className="w-8 h-8" />
            </div>
            <h2 className="text-lg font-serif font-semibold text-gray-800 mb-1">
              No Submissions Yet
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 max-w-sm mb-4">
              As soon as Sania finishes the game and taps &ldquo;Complete My Review ❤️&rdquo;, her ratings and answers will appear here!
            </p>
            <button
              onClick={fetchReviews}
              className="px-4 py-1.5 rounded-full bg-purple-50 text-xs text-[#6D28D9] font-medium border border-purple-200 hover:bg-purple-100 transition-colors"
            >
              Check Again
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {reviews.map((rev, index) => (
              <div
                key={index}
                className="glass-panel-elevated p-6 sm:p-8 rounded-3xl border border-white/90 shadow-xl"
              >
                {/* Header of review */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-purple-100">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#F06292] to-[#9B72CF] text-white flex items-center justify-center text-xs font-bold">
                      #{reviews.length - index}
                    </span>
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base text-gray-800">
                        Submission #{reviews.length - index}
                      </h3>
                      <p className="text-[11px] text-gray-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{rev.submittedAt || "Recently submitted"}</span>
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-medium border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Completed</span>
                  </span>
                </div>

                {/* PART A: Personality Ratings */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#6D28D9] mb-3 flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-[#F06292]" />
                    <span>Part A: Personality Ratings (Out of 10)</span>
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {Object.entries(rev.personality || {}).map(([key, val]) => (
                      <div
                        key={key}
                        className="p-3 rounded-2xl bg-white border border-purple-100 flex flex-col justify-between shadow-2xs"
                      >
                        <span className="text-[11px] text-gray-500 capitalize">
                          {key}
                        </span>
                        <span className="text-lg font-bold text-[#F06292] mt-1">
                          {val !== null ? `${val} / 10` : "—"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* PART B: Memories */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#4F46E5] mb-3 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-[#4F46E5]" />
                    <span>Part B: Conversation Memories</span>
                  </h4>
                  <div className="space-y-2">
                    <div className="p-3 rounded-2xl bg-white border border-blue-100 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                      <span className="text-gray-600 font-medium">What do I enjoy more?</span>
                      <span className="font-bold text-[#4F46E5]">{rev.memories?.enjoysMore || "—"}</span>
                    </div>
                    <div className="p-3 rounded-2xl bg-white border border-blue-100 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                      <span className="text-gray-600 font-medium">What do you think I value most?</span>
                      <span className="font-bold text-[#4F46E5]">{rev.memories?.valuesMost || "—"}</span>
                    </div>
                    <div className="p-3 rounded-2xl bg-white border border-blue-100 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                      <span className="text-gray-600 font-medium">One thing I should improve?</span>
                      <span className="font-bold text-[#4F46E5]">{rev.memories?.improveOneThing || "—"}</span>
                    </div>
                  </div>
                </div>

                {/* PART C: Personal Ratings */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#E11D48] mb-3 flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-[#E11D48]" />
                    <span>Part C: Personal Connection Ratings</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <div className="p-3 rounded-2xl bg-white border border-pink-100 shadow-2xs">
                      <p className="text-[11px] text-gray-500">Enjoy talking to me:</p>
                      <p className="text-xl font-bold text-[#F06292] mt-0.5">{rev.personalRatings?.enjoyTalking ?? "—"} / 10</p>
                    </div>
                    <div className="p-3 rounded-2xl bg-white border border-pink-100 shadow-2xs">
                      <p className="text-[11px] text-gray-500">Comfortable being self:</p>
                      <p className="text-xl font-bold text-[#F06292] mt-0.5">{rev.personalRatings?.comfortableBeingSelf ?? "—"} / 10</p>
                    </div>
                    <div className="p-3 rounded-2xl bg-white border border-pink-100 shadow-2xs">
                      <p className="text-[11px] text-gray-500">Conversations so far:</p>
                      <p className="text-xl font-bold text-[#F06292] mt-0.5">{rev.personalRatings?.conversationsSoFar ?? "—"} / 10</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
