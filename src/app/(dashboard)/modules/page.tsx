import { Metadata } from "next";
import { ModuleCard } from "@/components/learning/module-card";
import { ModuleCard as ModuleCardType } from "@/types/learning";

export const metadata: Metadata = {
  title: "Modules | MikeyX",
  description: "Explore learning modules",
};

export default function ModulesPage() {
  // TODO: Fetch from database in Phase 4
  const mockModules: ModuleCardType[] = [
    {
      id: "1",
      slug: "javascript-fundamentals",
      title: "JavaScript Fundamentals",
      description: "Learn the core concepts of JavaScript, including variables, functions, and control flow.",
      icon: "code",
      color: "#f7df1e",
      difficulty: "BEGINNER",
      estimatedHours: 5,
      topicCount: 10,
      completedTopics: 4,
    },
    {
      id: "2",
      slug: "python-basics",
      title: "Python Basics",
      description: "Start your journey in Python. Variables, loops, and basic data structures.",
      icon: "terminal",
      color: "#3776ab",
      difficulty: "BEGINNER",
      estimatedHours: 4,
      topicCount: 8,
      completedTopics: 0,
    },
    {
      id: "3",
      slug: "react-ui",
      title: "React UI Mastery",
      description: "Build beautiful and interactive user interfaces using React and modern CSS.",
      icon: "code",
      color: "#61dafb",
      difficulty: "INTERMEDIATE",
      estimatedHours: 12,
      topicCount: 15,
      completedTopics: 0,
    }
  ];

  return (
    <div className="flex flex-col gap-8 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Learning Modules</h1>
        <p className="text-muted-foreground mt-2">
          Explore our curriculum and start learning new skills today.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mockModules.map((module, index) => (
          <ModuleCard key={module.id} module={module} index={index} />
        ))}
      </div>
    </div>
  );
}
