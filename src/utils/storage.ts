import { QuizAnswers } from "@/types/quiz";

const LOCAL_STORAGE_KEY = "sania_surprise_quiz_answers_v1";

/**
 * Saves current quiz draft to localStorage so nothing is lost if page refreshes
 */
export function saveQuizDraft(answers: QuizAnswers): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(answers));
  } catch (error) {
    console.error("Failed to save draft to localStorage:", error);
  }
}

/**
 * Loads quiz draft from localStorage
 */
export function loadQuizDraft(): QuizAnswers | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as QuizAnswers;
  } catch (error) {
    console.error("Failed to read draft from localStorage:", error);
    return null;
  }
}

/**
 * Clears quiz draft from localStorage
 */
export function clearQuizDraft(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  } catch (error) {
    console.error("Failed to clear draft from localStorage:", error);
  }
}

/**
 * submitQuizAnswers
 * Saves locally in phone AND sends to /api/submit-review so you can view it on /admin-reviews forever!
 */
export async function submitQuizAnswers(answers: QuizAnswers): Promise<{ success: boolean; message: string }> {
  const submissionData: QuizAnswers = {
    ...answers,
    submittedAt: new Date().toISOString(),
  };

  // 1. Keep a copy in Sania's browser
  saveQuizDraft(submissionData);

  // 2. Send to backend permanent database (data/reviews.json)
  try {
    const response = await fetch("/api/submit-review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submissionData),
    });

    if (response.ok) {
      return { success: true, message: "Review saved permanently to /admin-reviews!" };
    }
  } catch (error) {
    console.error("Backend sync error:", error);
  }

  return {
    success: true,
    message: "Answers saved!",
  };
}
