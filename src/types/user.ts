/**
 * User Type Definitions
 */
export type UserRole = "USER" | "ADMIN" | "MODERATOR";

export interface User {
  id: string;
  email: string;
  name: string | null;
  image: string | null;
  role: UserRole;
  provider: string | null;

  // Gamification
  xp: number;
  level: number;
  streak: number;
  lastActiveAt: string | null;

  // Timestamps
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile extends User {
  completedTopics: number;
  totalTopics: number;
  badges: string[];
}
