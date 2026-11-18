export interface QuizAnswers {
  // Part A: Personality Ratings (1 to 10)
  personality: {
    honest: number | null;
    patient: number | null;
    confident: number | null;
    shy: number | null;
    caring: number | null;
    understanding: number | null;
    comfortable: number | null;
  };

  // Part B: Conversation Memories (Multiple Choice)
  memories: {
    enjoysMore: string | null;
    valuesMost: string | null;
    improveOneThing: string | null;
  };

  // Part C: Personal Ratings (1 to 10)
  personalRatings: {
    enjoyTalking: number | null;
    comfortableBeingSelf: number | null;
    conversationsSoFar: number | null;
  };

  submittedAt?: string;
}

export const initialQuizAnswers: QuizAnswers = {
  personality: {
    honest: null,
    patient: null,
    confident: null,
    shy: null,
    caring: null,
    understanding: null,
    comfortable: null,
  },
  memories: {
    enjoysMore: null,
    valuesMost: null,
    improveOneThing: null,
  },
  personalRatings: {
    enjoyTalking: null,
    comfortableBeingSelf: null,
    conversationsSoFar: null,
  },
};
