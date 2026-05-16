"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ModuleCard as ModuleCardType } from "@/types/learning";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Code2, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModuleCardProps {
  module: ModuleCardType;
  index: number;
}

const getIcon = (iconName: string | null) => {
  switch (iconName) {
    case "code": return <Code2 className="h-6 w-6" />;
    case "terminal": return <Terminal className="h-6 w-6" />;
    default: return <BookOpen className="h-6 w-6" />;
  }
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "BEGINNER": return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
    case "INTERMEDIATE": return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400";
    case "ADVANCED": return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
    default: return "bg-muted text-muted-foreground";
  }
};

export const ModuleCard = ({ module, index }: ModuleCardProps) => {
  const progress = module.topicCount > 0 
    ? (module.completedTopics / module.topicCount) * 100 
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Link href={`/modules/${module.slug}`} className="h-full block">
        <Card className="h-full flex flex-col overflow-hidden border-2 transition-colors hover:border-primary/50">
          <div 
            className="h-2 w-full" 
            style={{ backgroundColor: module.color || "var(--primary)" }} 
          />
          <CardHeader className="flex flex-row items-start justify-between pb-2">
            <div 
              className={cn(
                "p-3 rounded-lg",
                module.color ? `bg-opacity-10` : "bg-primary/10"
              )}
              style={{ 
                backgroundColor: module.color ? `${module.color}15` : undefined,
                color: module.color || "var(--primary)"
              }}
            >
              {getIcon(module.icon)}
            </div>
            <Badge variant="outline" className={cn("border-0 font-semibold", getDifficultyColor(module.difficulty))}>
              {module.difficulty}
            </Badge>
          </CardHeader>
          <CardContent className="flex-1">
            <CardTitle className="text-xl mb-2">{module.title}</CardTitle>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {module.description}
            </p>
          </CardContent>
          <CardFooter className="flex flex-col gap-4 border-t pt-4">
            <div className="flex items-center justify-between w-full text-xs text-muted-foreground font-medium">
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span>{module.topicCount} Topics</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{module.estimatedHours || 0}h</span>
              </div>
            </div>
            
            <div className="w-full flex flex-col gap-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span>Progress</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-1.5" />
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
};
