"use server";

import { db } from "../db";

export async function getModules() {
  try {
    const modules = await db.module.findMany({
      where: { isPublished: true },
      orderBy: { order: "asc" },
      include: {
        _count: {
          select: { topics: true },
        },
        topics: {
          include: {
            progress: true // We can use this to calculate completion if needed later
          }
        }
      },
    });

    return modules.map(m => ({
      ...m,
      topicCount: m._count.topics,
      completedTopics: 0, // Placeholder for Phase 4
    }));
  } catch (error) {
    console.error("Failed to fetch modules:", error);
    throw new Error("Failed to fetch modules");
  }
}

export async function getModuleWithTopics(slug: string) {
  try {
    const moduleData = await db.module.findUnique({
      where: { slug },
      include: {
        topics: {
          orderBy: { order: "asc" },
        },
      },
    });

    if (!moduleData) {
      throw new Error("Module not found");
    }

    return moduleData;
  } catch (error) {
    console.error(`Failed to fetch module ${slug}:`, error);
    throw new Error("Failed to fetch module");
  }
}

export async function getTopicWithLessons(moduleSlug: string, topicSlug: string) {
  try {
    const topicData = await db.topic.findFirst({
      where: { 
        slug: topicSlug,
        module: { slug: moduleSlug }
      },
      include: {
        lessons: {
          orderBy: { order: "asc" },
          include: {
            blocks: {
              orderBy: { order: "asc" }
            }
          }
        },
      },
    });

    if (!topicData) {
      throw new Error("Topic not found");
    }

    return topicData;
  } catch (error) {
    console.error(`Failed to fetch topic ${topicSlug}:`, error);
    throw new Error("Failed to fetch topic");
  }
}
