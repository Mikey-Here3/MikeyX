/**
 * User Types
 *
 * TypeScript types for User-related data.
 * These mirror the Prisma schema but are used in
 * client-side code where Prisma types aren't available.
 */

export type UserRole = "USER" | "ADMIN" | "MODERATOR";

export interface User {
  id: string;
  email: string;
  name: string | null;
  image: string | null;
  role: UserRole;
  provider: string | null;
  bio: string | null;

  // Gamification
  xp: number;
  level: number;
  streak: number;
  lastActiveAt: string | null;

  createdAt: string;
  updatedAt: string;
}

/** Minimal user for display in lists, comments, etc. */
export interface UserSummary {
  id: string;
  name: string | null;
  image: string | null;
  level: number;
  xp: number;
}

/** User profile with additional stats */
export interface UserProfile extends User {
  totalTopicsCompleted: number;
  totalQuizzesTaken: number;
  totalChallengesSolved: number;
  achievementCount: number;
  currentStreak: number;
  longestStreak: number;
}

/** Data shape for updating user profile */
export interface UpdateProfileData {
  name?: string;
  bio?: string;
  image?: string;
}
