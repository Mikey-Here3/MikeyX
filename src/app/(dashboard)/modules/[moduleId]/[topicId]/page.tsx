import { Metadata } from "next";
import { LessonContent } from "@/components/learning/lesson-content";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, BookOpen, Code2, PlayCircle } from "lucide-react";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { getTopicWithLessons } from "@/server/actions/learning-actions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeEditor } from "@/components/learning/code-editor";
import { QuizWidget, QuizData } from "@/components/learning/quiz-widget";

interface TopicPageProps {
  params: Promise<{
    moduleId: string;
    topicId: string;
  }>;
}

export const metadata: Metadata = {
  title: "Lesson | MikeyX",
  description: "Interactive lesson",
};

export default async function TopicPage({ params }: TopicPageProps) {
  const resolvedParams = await params;
  const topicData = await getTopicWithLessons(resolvedParams.moduleId, resolvedParams.topicId);

  // For Phase 5, we use the first lesson block from the database.
  const lesson = topicData.lessons[0];
  const block = lesson?.blocks[0];

  const content = block?.content || "No content available for this lesson yet.";
  
  // Dummy progress
  const progress = 0;

  // Mock quiz data for Phase 5 demo
  const sampleQuiz: QuizData = {
    question: "Which keyword should you use to declare a variable whose value will not change?",
    options: [
      { id: "o1", text: "let" },
      { id: "o2", text: "var" },
      { id: "o3", text: "const" },
      { id: "o4", text: "static" },
    ],
    correctOptionId: "o3",
    explanation: "The 'const' keyword is used to declare variables that cannot be reassigned.",
  };

  const sampleCode = `// Try changing the value of this variable!
let message = "Hello from MikeyX!";
console.log(message);

// What happens if we do a math operation?
let score = 10;
score = score * 5;
console.log("Your score is:", score);
`;

  return (
    <div className="flex flex-col lg:flex-row gap-8 h-full max-w-7xl mx-auto">
      {/* Left Column: Lesson Content */}
      <div className="flex-1 flex flex-col h-[calc(100vh-8rem)]">
        <div className="flex items-center gap-4 mb-6">
          <Link href={`/modules/${resolvedParams.moduleId}`} className="inline-flex items-center justify-center rounded-md border border-input bg-transparent h-9 w-9 hover:bg-accent hover:text-accent-foreground">
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{topicData.title}</h1>
            <div className="flex items-center gap-4 mt-2">
              <Progress value={progress} className="h-2 flex-1" />
              <span className="text-sm text-muted-foreground font-medium w-12 text-right">
                {progress}%
              </span>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-card border rounded-xl p-6 md:p-8 overflow-y-auto">
          <LessonContent source={content} />
        </div>

        <div className="flex items-center justify-between mt-6 shrink-0">
          <Button variant="ghost">Previous Lesson</Button>
          <Button className="gap-2">
            Complete & Continue <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Right Column: Interactive Area (Tabs) */}
      <div className="hidden lg:flex w-[400px] xl:w-[500px] flex-col h-[calc(100vh-8rem)]">
        <Tabs defaultValue="editor" className="flex flex-col h-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="editor" className="gap-2">
              <Code2 className="w-4 h-4" />
              Code Editor
            </TabsTrigger>
            <TabsTrigger value="quiz" className="gap-2">
              <BookOpen className="w-4 h-4" />
              Knowledge Check
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="editor" className="flex-1 mt-0 outline-none">
            <CodeEditor initialCode={sampleCode} />
          </TabsContent>
          
          <TabsContent value="quiz" className="flex-1 mt-0 outline-none">
            <QuizWidget quiz={sampleQuiz} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
