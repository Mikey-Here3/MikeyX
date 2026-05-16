/**
 * Prisma Seed Script
 * 
 * Seeds the database with realistic test data:
 * - Admin + test users
 * - Modules 1-4 with detailed topic trees
 * - Achievement definitions
 * 
 * Run: npx prisma db seed
 */
import { PrismaClient, Difficulty, TopicStatus } from "../src/generated/prisma";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const generateSlug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const modulesData = [
  {
    title: "MODULE 1 — WHAT IS CODE?",
    description: "Because if someone doesn't know code, teaching variables first is like teaching algebra before numbers.",
    icon: "Code2",
    color: "#3B82F6",
    order: 1,
    topics: [
      "Definition", "Why code exists", "History of code", "Human language vs machine language", 
      "Binary basics", "How computers read code", "Interpreter vs compiler", "Execution flow", 
      "Source code", "Syntax", "Semantics", "Logic", "Errors", "Common mistakes", "Good examples", 
      "Bad examples", "Real-world usage", "Performance", "Edge cases", "Projects using code", 
      "Quiz", "Flashcards", "Assignments", "Visual explanation", "Debugging examples", "Exercises", 
      "Interview questions", "Tricky questions", "Mini challenge"
    ]
  },
  {
    title: "MODULE 2 — HOW COMPUTERS STORE & UNDERSTAND INFORMATION",
    description: "Because before writing code, you should know: Where does data go? What is memory?",
    icon: "Database",
    color: "#8B5CF6",
    order: 2,
    topics: [
      "Definition", "Why memory exists", "What is data", "Binary (0 and 1)", "Bits", "Bytes", 
      "KB MB GB TB", "Why computers use binary", "Memory storage", "RAM", "Storage (SSD/HDD)", 
      "Cache memory", "CPU interaction", "Temporary vs permanent memory", "Data representation", 
      "Images in binary", "Videos in binary", "Text in binary", "Real-world examples", "Common mistakes", 
      "Bad examples", "Good examples", "Performance", "Edge cases", "Quiz", "Flashcards", "Assignments", 
      "Debugging examples", "Exercises", "Interview questions", "Mini challenge"
    ]
  },
  {
    title: "MODULE 3 — HOW PROGRAMS RUN",
    description: "Execution • Operating System • Files • Terminal • Interpreter • Compiler",
    icon: "Terminal",
    color: "#10B981",
    order: 3,
    topics: [
      "Definition", "Why execution exists", "What is a program", "What happens when clicking Run", 
      "Program execution flow", "Operating system (OS)", "Files and folders", "File extensions", 
      "Executable files", "What is terminal", "Commands", "Path concept", "Environment variables", 
      "Interpreter", "Compiler", "Source code", "Machine code", "Runtime", "Processes", "Threads (intro)", 
      "Common mistakes", "Bad examples", "Good examples", "Real-world usage", "Performance", "Edge cases", 
      "Quiz", "Flashcards", "Assignments", "Debugging examples", "Exercises", "Interview questions", "Mini challenge"
    ]
  },
  {
    title: "MODULE 4 — WRITING FIRST CODE",
    description: "Editor • Syntax • Output • Errors • Running Code",
    icon: "PlayCircle",
    color: "#F59E0B",
    order: 4,
    topics: [
      "Definition", "Why code is written", "What is a programming language", "Why Python first", 
      "Installing Python", "What is IDE / Code Editor", "VS Code explanation", "Creating first file", 
      "File extensions", "Writing first code", "print()", "Output", "Strings (intro)", "Comments", 
      "Syntax", "Indentation", "Running code", "Save vs Run", "Errors", "Common mistakes", "Good examples", 
      "Bad examples", "Real-world usage", "Debugging examples", "Exercises", "Quiz", "Flashcards", 
      "Assignments", "Tricky questions", "Mini challenge"
    ]
  }
];

async function main() {
  console.log("🌱 Seeding database...");

  // Clear existing learning data to avoid unique constraint issues
  await prisma.progress.deleteMany();
  await prisma.lessonBlock.deleteMany();
  await prisma.lesson.deleteMany();
  await prisma.topic.deleteMany();
  await prisma.module.deleteMany();

  // ─── USERS ─────────────────────────────────────────────────
  const adminPassword = await bcrypt.hash("admin123", 12);
  const userPassword = await bcrypt.hash("user123", 12);

  const admin = await prisma.user.upsert({
    where: { email: "admin@mikeyx.com" },
    update: {},
    create: {
      email: "admin@mikeyx.com",
      name: "Admin",
      password: adminPassword,
      role: "ADMIN",
      provider: "credentials",
      xp: 5000,
      level: 10,
      streak: 30,
    },
  });

  const user1 = await prisma.user.upsert({
    where: { email: "learner@mikeyx.com" },
    update: {},
    create: {
      email: "learner@mikeyx.com",
      name: "Alex Learner",
      password: userPassword,
      role: "USER",
      provider: "credentials",
      xp: 1200,
      level: 4,
      streak: 7,
    },
  });

  console.log("✅ Users checked/created");

  // ─── MODULES & TOPICS ───────────────────────────────────────
  for (const m of modulesData) {
    const modSlug = generateSlug(m.title.split("—")[1] || m.title);
    const createdModule = await prisma.module.create({
      data: {
        slug: modSlug,
        title: m.title,
        description: m.description,
        icon: m.icon,
        color: m.color,
        difficulty: Difficulty.BEGINNER,
        order: m.order,
        isPublished: true,
        estimatedHours: 10, // dummy estimate
      }
    });

    console.log(`Created Module: ${m.title}`);

    let topicOrder = 1;
    for (const t of m.topics) {
      const topicSlug = generateSlug(t);
      const createdTopic = await prisma.topic.create({
        data: {
          slug: topicSlug,
          title: t,
          description: `Learn about ${t}`,
          order: topicOrder++,
          status: TopicStatus.PUBLISHED,
          difficulty: Difficulty.BEGINNER,
          xpReward: 100,
          moduleId: createdModule.id,
        }
      });

      // Let's create a dummy lesson for each topic so the frontend has something to render
      const lesson = await prisma.lesson.create({
        data: {
          slug: topicSlug,
          title: t,
          summary: `Summary of ${t}`,
          order: 1,
          isPublished: true,
          readTime: 5,
          topicId: createdTopic.id,
        }
      });

      await prisma.lessonBlock.create({
        data: {
          type: "TEXT",
          content: `# ${t}\n\nThis is the interactive content for **${t}**. More details will be added here in Phase 5.`,
          order: 1,
          lessonId: lesson.id,
        }
      });
    }
  }

  console.log("✅ Curriculum Modules & Topics created");

  console.log("\n🎉 Seeding complete!");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
