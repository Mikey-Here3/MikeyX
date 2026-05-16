import { Metadata } from "next";
import { LessonContent } from "@/components/learning/lesson-content";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";

interface TopicPageProps {
  params: {
    moduleId: string;
    topicId: string;
  };
}

export const metadata: Metadata = {
  title: "Lesson | MikeyX",
  description: "Interactive lesson",
};

export default function TopicPage({ params }: TopicPageProps) {
  // TODO: Fetch real data from database using params.moduleId and params.topicId
  const mockLesson = {
    title: "Understanding Variables",
    content: `
# What is a Variable?

A variable is like a container for storing data values. In JavaScript, you can think of variables as named boxes where you can put different types of information.

## Creating Variables

There are three ways to declare a variable in JavaScript:

1. \`let\` - Use when the value might change later.
2. \`const\` - Use when the value should never change.
3. \`var\` - The old way (avoid using this in modern code).

### Examples

\`\`\`javascript
// Using let for values that can change
let score = 0;
score = 10; // This is fine!

// Using const for values that shouldn't change
const playerName = "Mikey";
// playerName = "Alex"; // This would cause an error!
\`\`\`

> **Pro Tip**: Always default to using \`const\`. Only switch to \`let\` when you realize the value actually needs to change.
    `,
    progress: 50,
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 h-full max-w-7xl mx-auto">
      {/* Left Column: Lesson Content */}
      <div className="flex-1 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/dashboard" className="inline-flex items-center justify-center rounded-md border border-input bg-transparent h-9 w-9 hover:bg-accent hover:text-accent-foreground">
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{mockLesson.title}</h1>
            <div className="flex items-center gap-4 mt-2">
              <Progress value={mockLesson.progress} className="h-2 flex-1" />
              <span className="text-sm text-muted-foreground font-medium w-12 text-right">
                {mockLesson.progress}%
              </span>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-card border rounded-xl p-6 md:p-8 overflow-y-auto">
          <LessonContent source={mockLesson.content} />
        </div>

        <div className="flex items-center justify-between mt-6">
          <Button variant="ghost">Previous Lesson</Button>
          <Button className="gap-2">
            Complete & Continue <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Right Column: Interactive Area (Placeholder for Editor/Quiz) */}
      <div className="hidden lg:flex w-[400px] xl:w-[500px] flex-col gap-6">
        <div className="flex-1 border rounded-xl bg-card overflow-hidden flex flex-col">
          <div className="bg-muted p-3 border-b flex items-center justify-between">
            <span className="font-semibold text-sm flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Quick Check
            </span>
          </div>
          <div className="p-6 flex flex-col justify-center flex-1 items-center text-center">
            <h3 className="font-medium text-lg mb-2">Ready to test your knowledge?</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Complete the reading on the left, then take a quick quiz to earn XP.
            </p>
            <Button variant="secondary" className="w-full">
              Start Quiz
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
