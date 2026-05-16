import { Metadata } from "next";
import { LearningStatsCard } from "@/components/dashboard/learning-stats-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard | MikeyX",
  description: "Your learning overview",
};

export default function DashboardPage() {
  // TODO: Fetch real user stats from database in Phase 4
  const mockStats = {
    xp: 450,
    level: 5,
    currentStreak: 3,
    topicsCompleted: 12,
  };

  return (
    <div className="flex flex-col gap-8 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back! 👋</h1>
        <p className="text-muted-foreground mt-2">
          You're doing great. Pick up right where you left off.
        </p>
      </div>

      <LearningStatsCard {...mockStats} />

      <div className="grid gap-6 md:grid-cols-2">
        {/* Continue Learning Section */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <PlayCircle className="h-5 w-5 text-primary" />
            Jump Back In
          </h2>
          <div className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden flex flex-col md:flex-row">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 md:w-1/3 flex items-center justify-center">
              <span className="text-white text-4xl font-bold">JS</span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-center">
              <h3 className="font-bold text-lg">JavaScript Fundamentals</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">
                Topic 4: Functions & Scope
              </p>
              <Link 
                href="/modules/javascript-fundamentals/functions"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 w-fit"
              >
                Continue Lesson <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Daily Goals Section */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Daily Goals</h2>
          <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
              </div>
              <div className="flex-1">
                <p className="font-medium">Complete 1 Lesson</p>
                <p className="text-sm text-muted-foreground">1/1 completed</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                <span className="text-muted-foreground font-bold">2</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-muted-foreground">Earn 50 XP</p>
                <p className="text-sm text-muted-foreground">20/50 XP earned</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
