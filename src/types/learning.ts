/**
 * Learning Types
 *
 * TypeScript types for Modules, Topics, Lessons, Quizzes, and Challenges.
 * Used across client components and API responses.
 */

// ─── Enums ─────────────────────────────────────────────────────

export type Difficulty = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
export type TopicStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED";
export type LessonBlockType = "TEXT" | "CODE" | "IMAGE" | "VIDEO" | "CALLOUT" | "EXERCISE";
export type QuestionType = "SINGLE_CHOICE" | "MULTIPLE_CHOICE" | "TRUE_FALSE" | "CODE_OUTPUT";
export type SubmissionStatus = "PENDING" | "PASSED" | "FAILED";

// ─── Module ────────────────────────────────────────────────────

export interface Module {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string | null;
  color: string | null;
  difficulty: Difficulty;
  order: number;
  isPublished: boolean;
  estimatedHours: number | null;
  createdAt: string;
  updatedAt: string;
}

/** Module with topic count and progress summary */
export interface ModuleWithProgress extends Module {
  topicCount: number;
  completedTopics: number;
  progressPercentage: number;
}

/** Module card data for listings */
export interface ModuleCard {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string | null;
  color: string | null;
  difficulty: Difficulty;
  estimatedHours: number | null;
  topicCount: number;
  completedTopics: number;
}

// ─── Topic ─────────────────────────────────────────────────────

export interface Topic {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  order: number;
  status: TopicStatus;
  difficulty: Difficulty;
  xpReward: number;
  moduleId: string;
  createdAt: string;
  updatedAt: string;
}

/** Topic with lesson count and user progress */
export interface TopicWithProgress extends Topic {
  lessonCount: number;
  quizCount: number;
  challengeCount: number;
  userProgress: {
    status: string;
    lessonsCompleted: number;
    quizBestScore: number | null;
  } | null;
}

// ─── Lesson ────────────────────────────────────────────────────

export interface Lesson {
  id: string;
  slug: string;
  title: string;
  summary: string | null;
  order: number;
  isPublished: boolean;
  readTime: number | null;
  mdxContent: string | null;
  topicId: string;
  createdAt: string;
  updatedAt: string;
}

/** Lesson with its content blocks */
export interface LessonWithBlocks extends Lesson {
  blocks: LessonBlock[];
  isBookmarked: boolean;
}

export interface LessonBlock {
  id: string;
  type: LessonBlockType;
  content: string;
  order: number;
  metadata: Record<string, unknown> | null;
}

// ─── Quiz ──────────────────────────────────────────────────────

export interface Quiz {
  id: string;
  title: string;
  description: string | null;
  order: number;
  passingScore: number;
  timeLimit: number | null;
  isPublished: boolean;
  topicId: string;
  questionCount?: number;
}

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  question: string;
  explanation: string | null;
  order: number;
  points: number;
  codeSnippet: string | null;
  options: QuizOption[];
}

export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
  order: number;
}

/** Full quiz data for taking a quiz */
export interface QuizWithQuestions extends Quiz {
  questions: QuizQuestion[];
}

/** Quiz attempt result */
export interface QuizAttemptResult {
  id: string;
  score: number;
  passed: boolean;
  totalPoints: number;
  earnedPoints: number;
  timeTaken: number | null;
  createdAt: string;
}

// ─── Challenge ─────────────────────────────────────────────────

export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  order: number;
  starterCode: string | null;
  hints: string[] | null;
  xpReward: number;
  language: string;
  isPublished: boolean;
  topicId: string;
}

/** Challenge with user's best submission */
export interface ChallengeWithStatus extends Challenge {
  bestSubmission: {
    status: SubmissionStatus;
    code: string;
    createdAt: string;
  } | null;
}

export interface ChallengeSubmissionResult {
  id: string;
  status: SubmissionStatus;
  output: string | null;
  testResults: {
    passed: boolean;
    input: string;
    expected: string;
    actual: string;
  }[] | null;
}

// ─── Navigation ────────────────────────────────────────────────

/** Sidebar navigation structure */
export interface ModuleNavigation {
  module: {
    id: string;
    slug: string;
    title: string;
    icon: string | null;
  };
  topics: {
    id: string;
    slug: string;
    title: string;
    lessonCount: number;
    isCompleted: boolean;
  }[];
}
