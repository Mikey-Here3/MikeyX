/**
 * Progress Type Definitions
 */
export interface UserProgress {
  userId: string;
  moduleId: string;
  topicId: string;
  completed: boolean;
  score: number;
  timeSpent: number; // in seconds
  attempts: number;
  completedAt: string | null;
}

export interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string;
  heatmap: Record<string, number>; // date → activity count
}

export interface XPEvent {
  id: string;
  userId: string;
  amount: number;
  source: XPSource;
  createdAt: string;
}

export type XPSource =
  | "LESSON_COMPLETE"
  | "QUIZ_PASS"
  | "CHALLENGE_SOLVE"
  | "STREAK_BONUS"
  | "FIRST_LOGIN"
  | "PERFECT_SCORE"
  | "BADGE_EARNED";
