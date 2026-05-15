/**
 * Learning Type Definitions
 * 
 * Types for the learning content system:
 * modules → topics → lessons
 */

export type Difficulty = "BEGINNER" | "EASY" | "MEDIUM" | "HARD" | "EXPERT";

export interface Module {
  id: string;
  title: string;
  slug: string;
  description: string;
  order: number;
  icon: string;
  totalTopics: number;
  completedTopics: number;
  isLocked: boolean;
}

export interface Topic {
  id: string;
  moduleId: string;
  title: string;
  slug: string;
  description: string;
  order: number;
  estimatedMinutes: number;
  difficulty: Difficulty;
  isCompleted: boolean;
  isLocked: boolean;
}

export interface Lesson {
  id: string;
  topicId: string;
  title: string;
  content: string; // MDX content
  order: number;
  type: LessonType;
}

export type LessonType =
  | "THEORY"
  | "VISUALIZATION"
  | "CODE_EXAMPLE"
  | "PRACTICE"
  | "QUIZ"
  | "FLASHCARD"
  | "DEBUGGING"
  | "PROJECT"
  | "CHALLENGE";

export interface Quiz {
  id: string;
  topicId: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: Difficulty;
}

export interface Flashcard {
  id: string;
  topicId: string;
  front: string;
  back: string;
  difficulty: Difficulty;
}
