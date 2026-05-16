/**
 * Progress Types
 *
 * TypeScript types for user progress, achievements, and streaks.
 */

export type ProgressStatus = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED" | "MASTERED";
export type AchievementCategory = "STREAK" | "COMPLETION" | "MASTERY" | "SOCIAL" | "SPECIAL";

// ─── Progress ──────────────────────────────────────────────────

export interface TopicProgress {
  id: string;
  status: ProgressStatus;
  completedAt: string | null;
  score: number | null;
  lessonsCompleted: number;
  totalLessons: number;
  quizBestScore: number | null;
  timeSpent: number; // seconds
  topicId: string;
  userId: string;
}

/** Overall learning stats for dashboard */
export interface LearningStats {
  totalXP: number;
  level: number;
  currentStreak: number;
  longestStreak: number;
  topicsCompleted: number;
  totalTopics: number;
  quizzesPassed: number;
  challengesSolved: number;
  totalTimeSpent: number; // seconds
  weeklyXP: number[];    // XP per day for last 7 days
}

/** Progress for a module overview */
export interface ModuleProgress {
  moduleId: string;
  moduleTitle: string;
  totalTopics: number;
  completedTopics: number;
  inProgressTopics: number;
  progressPercentage: number;
}

// ─── Achievements ──────────────────────────────────────────────

export interface Achievement {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string | null;
  category: AchievementCategory;
  xpReward: number;
  isSecret: boolean;
}

/** Achievement with earned status for a user */
export interface UserAchievement extends Achievement {
  earned: boolean;
  earnedAt: string | null;
}

// ─── Streaks ───────────────────────────────────────────────────

export interface StreakDay {
  date: string;
  xpEarned: number;
  minutes: number;
  active: boolean;
}

/** Streak data for heatmap/calendar visualization */
export interface StreakCalendar {
  currentStreak: number;
  longestStreak: number;
  totalActiveDays: number;
  days: StreakDay[];
}

// ─── Leaderboard ───────────────────────────────────────────────

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  name: string | null;
  image: string | null;
  xp: number;
  level: number;
  streak: number;
}

// ─── Bookmarks & Notes ─────────────────────────────────────────

export interface Bookmark {
  id: string;
  lessonId: string;
  lessonTitle: string;
  topicTitle: string;
  moduleTitle: string;
  createdAt: string;
}

export interface Note {
  id: string;
  content: string;
  color: string | null;
  lessonId: string;
  lessonTitle: string;
  createdAt: string;
  updatedAt: string;
}
