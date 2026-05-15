/**
 * Progress Store (Zustand)
 * 
 * Local cache for user progress data.
 * Synced with the server via React Query, but this store
 * provides instant UI updates for XP, streaks, etc.
 */
import { create } from "zustand";

interface ProgressState {
  xp: number;
  level: number;
  streak: number;
  completedTopics: string[];
  
  addXP: (amount: number) => void;
  setStreak: (streak: number) => void;
  markTopicComplete: (topicId: string) => void;
  resetProgress: () => void;
}

export const useProgressStore = create<ProgressState>((set) => ({
  xp: 0,
  level: 1,
  streak: 0,
  completedTopics: [],

  addXP: (amount) =>
    set((state) => {
      const newXP = state.xp + amount;
      // Level up every 1000 XP
      const newLevel = Math.floor(newXP / 1000) + 1;
      return { xp: newXP, level: newLevel };
    }),

  setStreak: (streak) => set({ streak }),

  markTopicComplete: (topicId) =>
    set((state) => ({
      completedTopics: state.completedTopics.includes(topicId)
        ? state.completedTopics
        : [...state.completedTopics, topicId],
    })),

  resetProgress: () =>
    set({ xp: 0, level: 1, streak: 0, completedTopics: [] }),
}));
