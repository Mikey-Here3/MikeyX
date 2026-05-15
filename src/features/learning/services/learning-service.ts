/**
 * Learning Service — Client-side API calls
 */
export const learningService = {
  async getModules() {
    const res = await fetch("/api/modules");
    if (!res.ok) throw new Error("Failed to fetch modules");
    return res.json();
  },

  async getModule(id: string) {
    const res = await fetch(`/api/modules/${id}`);
    if (!res.ok) throw new Error("Failed to fetch module");
    return res.json();
  },

  async getTopics(moduleId: string) {
    const res = await fetch(`/api/topics?moduleId=${moduleId}`);
    if (!res.ok) throw new Error("Failed to fetch topics");
    return res.json();
  },
};
