/**
 * React Query Provider
 * 
 * Wraps the app with TanStack Query's QueryClientProvider.
 * "use client" is required because providers use React Context,
 * which only works in Client Components.
 * 
 * Configuration:
 * - staleTime: 60s — data is "fresh" for 1 minute before refetching
 * - retry: 1 — retry failed requests once before showing error
 * - refetchOnWindowFocus: false — don't refetch when user tabs back
 */
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            retry: 1,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
