/**
 * NextAuth API Route Handler
 * 
 * This catches all auth routes: /api/auth/signin, /api/auth/callback, etc.
 * The [...nextauth] dynamic segment catches all sub-paths.
 */
import { handlers } from "@/server/auth";

export const { GET, POST } = handlers;
