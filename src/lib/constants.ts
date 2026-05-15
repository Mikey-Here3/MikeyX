/**
 * App-Wide Constants
 * 
 * Centralized constants prevent magic strings/numbers
 * scattered across the codebase.
 */

export const APP_NAME = "MikeyX";
export const APP_DESCRIPTION = "Master programming from absolute zero to professional developer";
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

// Navigation items for the sidebar
export const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard", icon: "LayoutDashboard" },
  { label: "Roadmaps", href: "/roadmaps", icon: "Map" },
  { label: "Modules", href: "/modules", icon: "BookOpen" },
  { label: "Practice", href: "/practice", icon: "Code" },
  { label: "Projects", href: "/projects", icon: "FolderKanban" },
  { label: "AI Mentor", href: "/ai-mentor", icon: "Bot" },
] as const;

export const ADMIN_NAV_ITEMS = [
  { label: "Dashboard", href: "/admin", icon: "LayoutDashboard" },
  { label: "Modules", href: "/admin/modules", icon: "BookOpen" },
  { label: "Users", href: "/admin/users", icon: "Users" },
  { label: "Content", href: "/admin/content", icon: "FileText" },
  { label: "Analytics", href: "/admin/analytics", icon: "BarChart3" },
] as const;

// XP system constants
export const XP_PER_LESSON = 50;
export const XP_PER_QUIZ = 100;
export const XP_PER_CHALLENGE = 200;
export const XP_PER_PROJECT = 500;
export const XP_STREAK_BONUS = 25;
export const XP_PER_LEVEL = 1000;

// Difficulty colors
export const DIFFICULTY_COLORS = {
  BEGINNER: "#22c55e",
  EASY: "#3b82f6",
  MEDIUM: "#f59e0b",
  HARD: "#ef4444",
  EXPERT: "#a855f7",
} as const;
