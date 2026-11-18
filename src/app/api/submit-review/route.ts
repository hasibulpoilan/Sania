import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { QuizAnswers } from "@/types/quiz";

const dataFilePath = path.join(process.cwd(), "data", "reviews.json");

// Helper to safely read reviews
function getStoredReviews(): QuizAnswers[] {
  try {
    if (!fs.existsSync(dataFilePath)) {
      return [];
    }
    const fileData = fs.readFileSync(dataFilePath, "utf8");
    return JSON.parse(fileData);
  } catch (error) {
    console.error("Error reading reviews.json:", error);
    return [];
  }
}

// Helper to save reviews
function saveReviews(reviews: QuizAnswers[]) {
  try {
    const dir = path.dirname(dataFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(dataFilePath, JSON.stringify(reviews, null, 2), "utf8");
  } catch (error) {
    console.error("Error writing reviews.json:", error);
  }
}

// POST: Sania submits answers from her phone/device
export async function POST(request: Request) {
  try {
    const body: QuizAnswers = await request.json();
    const reviews = getStoredReviews();

    const newSubmission: QuizAnswers = {
      ...body,
      submittedAt: new Date().toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
        dateStyle: "full",
        timeStyle: "medium",
      }),
    };

    reviews.unshift(newSubmission); // newest first
    saveReviews(reviews);

    return NextResponse.json({ success: true, message: "Review saved permanently!" });
  } catch (error) {
    console.error("Error saving review:", error);
    return NextResponse.json({ success: false, message: "Failed to save review" }, { status: 500 });
  }
}

// GET: Admin fetches all submissions
export async function GET() {
  const reviews = getStoredReviews();
  return NextResponse.json({ success: true, data: reviews });
}
