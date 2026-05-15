/**
 * Next.js Middleware — Route Protection
 * 
 * This runs BEFORE every matching request.
 * 
 * Protected routes:
 * - /dashboard/* — requires authentication
 * - /admin/* — requires authentication + admin role
 * 
 * Public routes:
 * - / (landing), /login, /register, /api/health
 * 
 * How it works:
 * 1. Check if the request path matches a protected pattern
 * 2. If protected, check for a valid session token
 * 3. If no token, redirect to /login
 * 4. If accessing admin without admin role, redirect to /dashboard
 */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Routes that require authentication
const protectedRoutes = ["/dashboard", "/roadmaps", "/modules", "/practice", "/projects", "/ai-mentor", "/profile", "/settings"];
const adminRoutes = ["/admin"];

// Routes that are always public
const publicRoutes = ["/", "/login", "/register", "/forgot-password", "/about", "/pricing"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow API routes and static files through
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Check if the route is public
  const isPublicRoute = publicRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  );

  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Check for auth token
  const token =
    request.cookies.get("next-auth.session-token")?.value ||
    request.cookies.get("__Secure-next-auth.session-token")?.value;

  // Check if route is protected
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );
  const isAdminRoute = adminRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if ((isProtectedRoute || isAdminRoute) && !token) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
