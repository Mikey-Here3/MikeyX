"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizData {
  question: string;
  options: QuizOption[];
  correctOptionId: string;
  explanation?: string;
}

interface QuizWidgetProps {
  quiz: QuizData;
  onComplete?: (passed: boolean) => void;
}

export function QuizWidget({ quiz, onComplete }: QuizWidgetProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isCorrect = selectedId === quiz.correctOptionId;

  const handleSubmit = () => {
    if (!selectedId) return;
    setIsSubmitted(true);
    if (onComplete) {
      onComplete(isCorrect);
    }
  };

  const handleReset = () => {
    setSelectedId(null);
    setIsSubmitted(false);
  };

  return (
    <div className="flex flex-col h-full border rounded-xl overflow-hidden bg-card shadow-sm">
      <div className="bg-muted/50 p-4 border-b flex items-center gap-3">
        <div className="bg-primary/10 p-2 rounded-full">
          <HelpCircle className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-semibold text-lg">Quick Knowledge Check</h3>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-lg font-medium mb-6">{quiz.question}</p>

        <div className="flex flex-col gap-3 flex-1">
          {quiz.options.map((option) => {
            const isSelected = selectedId === option.id;
            let buttonStateClass = "border-border/50 hover:border-primary/50 hover:bg-primary/5";
            
            if (isSubmitted) {
              if (option.id === quiz.correctOptionId) {
                buttonStateClass = "border-green-500 bg-green-500/10 text-green-700 dark:text-green-400";
              } else if (isSelected) {
                buttonStateClass = "border-destructive bg-destructive/10 text-destructive";
              } else {
                buttonStateClass = "border-border/50 opacity-50";
              }
            } else if (isSelected) {
              buttonStateClass = "border-primary bg-primary/10 ring-1 ring-primary/20";
            }

            return (
              <button
                key={option.id}
                disabled={isSubmitted}
                onClick={() => setSelectedId(option.id)}
                className={`relative flex items-center p-4 rounded-lg border text-left transition-all ${buttonStateClass}`}
              >
                <div className="flex-1 pr-8">{option.text}</div>
                {isSubmitted && option.id === quiz.correctOptionId && (
                  <CheckCircle2 className="w-5 h-5 absolute right-4 text-green-500" />
                )}
                {isSubmitted && isSelected && option.id !== quiz.correctOptionId && (
                  <XCircle className="w-5 h-5 absolute right-4 text-destructive" />
                )}
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-6 p-4 rounded-lg border ${
                isCorrect 
                  ? "bg-green-500/10 border-green-500/20 text-green-800 dark:text-green-300" 
                  : "bg-destructive/10 border-destructive/20 text-destructive"
              }`}
            >
              <div className="flex items-start gap-3">
                {isCorrect ? (
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                )}
                <div>
                  <p className="font-semibold">{isCorrect ? "Correct!" : "Not quite right."}</p>
                  {quiz.explanation && (
                    <p className="text-sm mt-1 opacity-90">{quiz.explanation}</p>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-8 pt-6 border-t flex items-center justify-between">
          {isSubmitted && !isCorrect ? (
            <Button variant="outline" onClick={handleReset}>Try Again</Button>
          ) : (
            <div /> // Spacer
          )}
          
          {!isSubmitted && (
            <Button 
              onClick={handleSubmit} 
              disabled={!selectedId}
              className="w-full sm:w-auto"
            >
              Check Answer
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
