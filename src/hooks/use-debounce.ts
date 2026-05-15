/**
 * useDebounce Hook
 * 
 * Delays updating a value until the user stops changing it.
 * Perfect for search inputs — prevents firing an API call on every keystroke.
 * 
 * Usage: const debouncedSearch = useDebounce(searchTerm, 300);
 */
"use client";

import { useState, useEffect } from "react";

export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
