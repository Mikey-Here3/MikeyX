/**
 * Prisma Client Singleton
 * 
 * Why a singleton?
 * In development, Next.js hot-reloads your code on every change.
 * Each hot-reload creates a new PrismaClient instance, which opens
 * new database connections. Without a singleton, you'd quickly exhaust
 * your connection pool (Neon free tier allows ~100 connections).
 * 
 * This pattern stores the client on `globalThis` which persists
 * across hot-reloads, reusing the same connection.
 */
import "server-only";
import { PrismaClient } from "@/generated/prisma";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}
