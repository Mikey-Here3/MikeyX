/**
 * Auth Provider (NextAuth SessionProvider)
 * 
 * Wraps the app with NextAuth's SessionProvider so that
 * useSession() hook works in any Client Component.
 * This provides the current user session throughout the app.
 */
"use client";

import { SessionProvider } from "next-auth/react";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
