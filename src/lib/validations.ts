/**
 * Shared Zod Validation Schemas
 * 
 * Used in both:
 * - API Route Handlers (server-side validation)
 * - React Hook Form (client-side validation)
 * 
 * Single source of truth for validation rules.
 */
import { z } from "zod";

// ─── AUTH SCHEMAS ──────────────────────────────────────────
export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

// ─── CONTENT SCHEMAS ──────────────────────────────────────
export const moduleSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(10).max(500),
  order: z.number().int().positive(),
  icon: z.string().optional(),
});

export const topicSchema = z.object({
  moduleId: z.string(),
  title: z.string().min(3).max(100),
  description: z.string().min(10).max(500),
  order: z.number().int().positive(),
  estimatedMinutes: z.number().int().positive(),
  difficulty: z.enum(["BEGINNER", "EASY", "MEDIUM", "HARD", "EXPERT"]),
});

// ─── TYPE EXPORTS ─────────────────────────────────────────
export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type ModuleInput = z.infer<typeof moduleSchema>;
export type TopicInput = z.infer<typeof topicSchema>;
