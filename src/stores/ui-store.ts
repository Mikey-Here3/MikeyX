/**
 * UI Store (Zustand)
 * 
 * Manages UI-related client state:
 * - Sidebar open/close (persisted across page navigations)
 * - Mobile navigation state
 * - Command palette visibility
 * 
 * Why Zustand over Context?
 * - No re-render of entire tree when one value changes
 * - Simpler API (no Provider nesting)
 * - Built-in selector support for performance
 * - Works outside React components too
 */
import { create } from "zustand";

interface UIState {
  // Sidebar
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;

  // Mobile navigation
  mobileNavOpen: boolean;
  setMobileNavOpen: (open: boolean) => void;

  // Command palette
  commandPaletteOpen: boolean;
  setCommandPaletteOpen: (open: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  // Sidebar defaults to open on desktop
  sidebarOpen: true,
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),

  // Mobile nav defaults to closed
  mobileNavOpen: false,
  setMobileNavOpen: (open) => set({ mobileNavOpen: open }),

  // Command palette defaults to closed
  commandPaletteOpen: false,
  setCommandPaletteOpen: (open) => set({ commandPaletteOpen: open }),
}));
