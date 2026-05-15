/**
 * Dashboard Page (Placeholder)
 * Full implementation in Phase 11.
 */
import { PageHeader } from "@/components/common/page-header";

export default function DashboardPage() {
  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="Track your learning progress and continue where you left off."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-card p-6">
          <p className="text-sm text-muted-foreground">Current Module</p>
          <p className="text-2xl font-bold mt-1">What is Code</p>
        </div>
        <div className="rounded-xl border bg-card p-6">
          <p className="text-sm text-muted-foreground">XP Earned</p>
          <p className="text-2xl font-bold mt-1">0</p>
        </div>
        <div className="rounded-xl border bg-card p-6">
          <p className="text-sm text-muted-foreground">Streak</p>
          <p className="text-2xl font-bold mt-1">0 days</p>
        </div>
        <div className="rounded-xl border bg-card p-6">
          <p className="text-sm text-muted-foreground">Completed</p>
          <p className="text-2xl font-bold mt-1">0%</p>
        </div>
      </div>
    </div>
  );
}
