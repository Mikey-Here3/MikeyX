/**
 * Learning Store (Zustand)
 * 
 * Manages learning-related client state:
 * - Current active module and topic
 * - Code editor content and language
 * - Lesson navigation state
 */
import { create } from "zustand";

interface LearningState {
  // Current context
  activeModuleId: string | null;
  activeTopicId: string | null;
  setActiveModule: (id: string | null) => void;
  setActiveTopic: (id: string | null) => void;

  // Code editor
  editorCode: string;
  editorLanguage: string;
  setEditorCode: (code: string) => void;
  setEditorLanguage: (lang: string) => void;

  // Lesson navigation
  lessonScrollPosition: number;
  setLessonScrollPosition: (pos: number) => void;
}

export const useLearningStore = create<LearningState>((set) => ({
  activeModuleId: null,
  activeTopicId: null,
  setActiveModule: (id) => set({ activeModuleId: id }),
  setActiveTopic: (id) => set({ activeTopicId: id }),

  editorCode: "",
  editorLanguage: "python",
  setEditorCode: (code) => set({ editorCode: code }),
  setEditorLanguage: (lang) => set({ editorLanguage: lang }),

  lessonScrollPosition: 0,
  setLessonScrollPosition: (pos) => set({ lessonScrollPosition: pos }),
}));
