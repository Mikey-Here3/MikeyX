/**
 * Auth Service — Client-side API calls for authentication
 */
const API_BASE = "/api/auth";

export const authService = {
  async getMe() {
    const res = await fetch(`${API_BASE}/me`);
    if (!res.ok) throw new Error("Failed to fetch user");
    return res.json();
  },
};
