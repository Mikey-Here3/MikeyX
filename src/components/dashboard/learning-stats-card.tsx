import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Flame, Target, Zap } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface LearningStatsCardProps {
  xp: number;
  level: number;
  currentStreak: number;
  topicsCompleted: number;
}

export function LearningStatsCard({
  xp,
  level,
  currentStreak,
  topicsCompleted,
}: LearningStatsCardProps) {
  // Simple level calculation (e.g. 100 XP per level)
  const xpForNextLevel = level * 100;
  const currentLevelXp = xp % 100;
  const progressPercentage = (currentLevelXp / 100) * 100;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total XP</CardTitle>
          <Zap className="h-4 w-4 text-yellow-500 fill-yellow-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{xp.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">Lifetime experience</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Current Level</CardTitle>
          <Trophy className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">Lvl {level}</span>
              <span className="text-xs text-muted-foreground">{currentLevelXp} / 100 XP</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Streak</CardTitle>
          <Flame className="h-4 w-4 text-orange-500 fill-orange-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{currentStreak} Days</div>
          <p className="text-xs text-muted-foreground">Keep it up!</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Topics Completed</CardTitle>
          <Target className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{topicsCompleted}</div>
          <p className="text-xs text-muted-foreground">Across all modules</p>
        </CardContent>
      </Card>
    </div>
  );
}
