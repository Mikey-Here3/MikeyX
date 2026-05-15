/**
 * Theme Provider
 * 
 * Uses next-themes for dark/light mode switching.
 * - attribute="class" — adds 'dark' class to <html> for Tailwind's dark mode
 * - defaultTheme="dark" — MikeyX defaults to dark mode (developer aesthetic)
 * - enableSystem — respects user's OS preference
 * - disableTransitionOnChange — prevents flash during theme switch
 */
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
