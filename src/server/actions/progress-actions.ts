/**
 * Progress Server Actions (Stub)
 */
"use server";

export async function getUserProgress(userId: string) {
  console.log("Fetching progress for user:", userId);
  return { xp: 0, level: 1, streak: 0, completedTopics: [] };
}

export async function addXP(userId: string, amount: number, source: string) {
  console.log("Adding XP:", { userId, amount, source });
  return { success: true };
}
