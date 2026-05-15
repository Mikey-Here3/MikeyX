/**
 * Auth Server Actions
 * 
 * Server Actions for authentication operations.
 * These run on the server and can be called directly from Client Components.
 * 
 * Why Server Actions over API routes for mutations?
 * - No manual fetch() calls needed
 * - Automatic request/response handling
 * - Type-safe end-to-end
 * - Progressive enhancement (works without JS)
 */
"use server";

import { db } from "@/server/db";
import bcrypt from "bcryptjs";
import { registerSchema } from "@/lib/validations";

export async function registerUser(formData: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}) {
  // Validate input
  const parsed = registerSchema.safeParse(formData);
  if (!parsed.success) {
    return { error: parsed.error.issues[0].message };
  }

  const { name, email, password } = parsed.data;

  // Check if user exists
  const existingUser = await db.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return { error: "An account with this email already exists" };
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 12);

  // Create user
  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      provider: "credentials",
    },
  });

  return { success: true, message: "Account created successfully" };
}
