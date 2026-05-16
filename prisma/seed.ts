/**
 * Prisma Seed Script
 * 
 * Seeds the database with realistic test data:
 * - Admin + test users
 * - 2 modules with topics, lessons, quizzes, challenges
 * - Achievement definitions
 * 
 * Run: npx prisma db seed
 */
import { PrismaClient } from "../src/generated/prisma";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

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

  const user2 = await prisma.user.upsert({
    where: { email: "newbie@mikeyx.com" },
    update: {},
    create: {
      email: "newbie@mikeyx.com",
      name: "Sam Newbie",
      password: userPassword,
      role: "USER",
      provider: "credentials",
      xp: 0,
      level: 1,
      streak: 0,
    },
  });

  console.log("✅ Users created");

  // ─── MODULE 1: Python Fundamentals ─────────────────────────
  const pythonModule = await prisma.module.upsert({
    where: { slug: "python-fundamentals" },
    update: {},
    create: {
      slug: "python-fundamentals",
      title: "Python Fundamentals",
      description: "Master Python from absolute zero. Learn what code is, how computers think, and write your first programs.",
      icon: "Code2",
      color: "#3B82F6",
      difficulty: "BEGINNER",
      order: 1,
      isPublished: true,
      estimatedHours: 20,
    },
  });

  // Topics for Python module
  const topic1 = await prisma.topic.upsert({
    where: { moduleId_slug: { moduleId: pythonModule.id, slug: "what-is-programming" } },
    update: {},
    create: {
      slug: "what-is-programming",
      title: "What is Programming?",
      description: "Understand what code is, why it exists, and how computers execute instructions.",
      order: 1,
      status: "PUBLISHED",
      difficulty: "BEGINNER",
      xpReward: 100,
      moduleId: pythonModule.id,
    },
  });

  const topic2 = await prisma.topic.upsert({
    where: { moduleId_slug: { moduleId: pythonModule.id, slug: "variables-and-data-types" } },
    update: {},
    create: {
      slug: "variables-and-data-types",
      title: "Variables & Data Types",
      description: "Learn how to store, name, and manipulate data in Python.",
      order: 2,
      status: "PUBLISHED",
      difficulty: "BEGINNER",
      xpReward: 150,
      moduleId: pythonModule.id,
    },
  });

  const topic3 = await prisma.topic.upsert({
    where: { moduleId_slug: { moduleId: pythonModule.id, slug: "operators-and-expressions" } },
    update: {},
    create: {
      slug: "operators-and-expressions",
      title: "Operators & Expressions",
      description: "Perform calculations, comparisons, and logical operations.",
      order: 3,
      status: "PUBLISHED",
      difficulty: "BEGINNER",
      xpReward: 150,
      moduleId: pythonModule.id,
    },
  });

  const topic4 = await prisma.topic.upsert({
    where: { moduleId_slug: { moduleId: pythonModule.id, slug: "control-flow" } },
    update: {},
    create: {
      slug: "control-flow",
      title: "Control Flow: If/Else",
      description: "Make decisions in your code with conditional statements.",
      order: 4,
      status: "DRAFT",
      difficulty: "BEGINNER",
      xpReward: 200,
      moduleId: pythonModule.id,
    },
  });

  const topic5 = await prisma.topic.upsert({
    where: { moduleId_slug: { moduleId: pythonModule.id, slug: "loops" } },
    update: {},
    create: {
      slug: "loops",
      title: "Loops: For & While",
      description: "Repeat actions efficiently with loops.",
      order: 5,
      status: "DRAFT",
      difficulty: "BEGINNER",
      xpReward: 200,
      moduleId: pythonModule.id,
    },
  });

  console.log("✅ Python module + 5 topics created");

  // ─── LESSONS for Topic 1 ───────────────────────────────────
  const lesson1 = await prisma.lesson.upsert({
    where: { topicId_slug: { topicId: topic1.id, slug: "what-is-code" } },
    update: {},
    create: {
      slug: "what-is-code",
      title: "What is Code?",
      summary: "Code is a set of instructions that tells a computer what to do.",
      order: 1,
      isPublished: true,
      readTime: 5,
      topicId: topic1.id,
    },
  });

  await prisma.lessonBlock.createMany({
    data: [
      {
        type: "TEXT",
        content: "# What is Code?\n\nImagine you're giving directions to someone who follows instructions *perfectly literally*. That's essentially what coding is — writing precise instructions for a computer.",
        order: 1,
        lessonId: lesson1.id,
      },
      {
        type: "CALLOUT",
        content: "A computer is incredibly fast but incredibly literal. It does exactly what you tell it — nothing more, nothing less.",
        order: 2,
        lessonId: lesson1.id,
        metadata: { variant: "info" },
      },
      {
        type: "CODE",
        content: 'print("Hello, World!")',
        order: 3,
        lessonId: lesson1.id,
        metadata: { language: "python", title: "Your first line of code" },
      },
      {
        type: "TEXT",
        content: "This single line tells the computer: *display the text 'Hello, World!' on the screen*. That's it. You just read your first piece of code!",
        order: 4,
        lessonId: lesson1.id,
      },
    ],
  });

  const lesson2 = await prisma.lesson.upsert({
    where: { topicId_slug: { topicId: topic1.id, slug: "how-computers-think" } },
    update: {},
    create: {
      slug: "how-computers-think",
      title: "How Computers Think",
      summary: "Understanding binary, memory, and how CPUs execute instructions.",
      order: 2,
      isPublished: true,
      readTime: 8,
      topicId: topic1.id,
    },
  });

  const lesson3 = await prisma.lesson.upsert({
    where: { topicId_slug: { topicId: topic1.id, slug: "setting-up-python" } },
    update: {},
    create: {
      slug: "setting-up-python",
      title: "Setting Up Python",
      summary: "Install Python and write your first script in VS Code.",
      order: 3,
      isPublished: true,
      readTime: 10,
      topicId: topic1.id,
    },
  });

  console.log("✅ Lessons + blocks created");

  // ─── QUIZ for Topic 1 ─────────────────────────────────────
  const quiz1 = await prisma.quiz.create({
    data: {
      title: "What is Programming? — Quiz",
      description: "Test your understanding of programming basics.",
      order: 1,
      passingScore: 70,
      isPublished: true,
      topicId: topic1.id,
      questions: {
        create: [
          {
            type: "SINGLE_CHOICE",
            question: "What is a program?",
            explanation: "A program is a set of instructions that tells the computer what to do, step by step.",
            order: 1,
            points: 1,
            options: {
              create: [
                { text: "A set of instructions for a computer", isCorrect: true, order: 1 },
                { text: "A type of computer hardware", isCorrect: false, order: 2 },
                { text: "An internet browser", isCorrect: false, order: 3 },
                { text: "A computer's operating system", isCorrect: false, order: 4 },
              ],
            },
          },
          {
            type: "TRUE_FALSE",
            question: "Computers can understand human language directly without code.",
            explanation: "Computers only understand machine code (binary). Programming languages are translated into machine code.",
            order: 2,
            points: 1,
            options: {
              create: [
                { text: "True", isCorrect: false, order: 1 },
                { text: "False", isCorrect: true, order: 2 },
              ],
            },
          },
          {
            type: "CODE_OUTPUT",
            question: "What will this code output?",
            codeSnippet: 'print("Hello, World!")',
            explanation: "The print() function outputs text to the screen.",
            order: 3,
            points: 1,
            options: {
              create: [
                { text: "Hello, World!", isCorrect: true, order: 1 },
                { text: "print(Hello, World!)", isCorrect: false, order: 2 },
                { text: "Error", isCorrect: false, order: 3 },
                { text: "Nothing", isCorrect: false, order: 4 },
              ],
            },
          },
        ],
      },
    },
  });

  console.log("✅ Quiz with 3 questions created");

  // ─── CHALLENGE for Topic 1 ─────────────────────────────────
  await prisma.challenge.create({
    data: {
      title: "Hello World Challenge",
      description: "Write a Python program that prints 'Hello, World!' to the screen.",
      difficulty: "BEGINNER",
      order: 1,
      starterCode: "# Write your code below\n",
      solutionCode: 'print("Hello, World!")',
      testCases: [
        { input: "", expectedOutput: "Hello, World!" },
      ],
      hints: [
        "Use the print() function",
        "Don't forget the quotation marks around the text",
        'The answer is: print("Hello, World!")',
      ],
      xpReward: 50,
      language: "python",
      isPublished: true,
      topicId: topic1.id,
    },
  });

  console.log("✅ Challenge created");

  // ─── MODULE 2: Web Development Basics ──────────────────────
  const webModule = await prisma.module.upsert({
    where: { slug: "web-development-basics" },
    update: {},
    create: {
      slug: "web-development-basics",
      title: "Web Development Basics",
      description: "Understand how the web works, HTML, CSS, and build your first webpage.",
      icon: "Globe",
      color: "#8B5CF6",
      difficulty: "BEGINNER",
      order: 2,
      isPublished: true,
      estimatedHours: 25,
    },
  });

  await prisma.topic.createMany({
    data: [
      { slug: "how-the-web-works", title: "How the Web Works", description: "DNS, HTTP, browsers, and servers.", order: 1, status: "PUBLISHED", difficulty: "BEGINNER", xpReward: 100, moduleId: webModule.id },
      { slug: "html-basics", title: "HTML Basics", description: "Structure web pages with HTML tags.", order: 2, status: "PUBLISHED", difficulty: "BEGINNER", xpReward: 150, moduleId: webModule.id },
      { slug: "css-fundamentals", title: "CSS Fundamentals", description: "Style your pages with colors, layouts, and fonts.", order: 3, status: "DRAFT", difficulty: "BEGINNER", xpReward: 150, moduleId: webModule.id },
    ],
  });

  // Module prerequisite: Web Dev requires Python
  await prisma.modulePrerequisite.create({
    data: { moduleId: webModule.id, prerequisiteId: pythonModule.id },
  });

  console.log("✅ Web Dev module + 3 topics created");

  // ─── ACHIEVEMENTS ──────────────────────────────────────────
  await prisma.achievement.createMany({
    data: [
      { slug: "first-lesson", title: "First Steps", description: "Complete your first lesson", icon: "🎯", category: "COMPLETION", xpReward: 50, criteria: { type: "lessons_completed", value: 1 } },
      { slug: "first-quiz", title: "Quiz Whiz", description: "Pass your first quiz", icon: "🧠", category: "COMPLETION", xpReward: 75, criteria: { type: "quizzes_passed", value: 1 } },
      { slug: "first-challenge", title: "Code Warrior", description: "Solve your first coding challenge", icon: "⚔️", category: "COMPLETION", xpReward: 100, criteria: { type: "challenges_solved", value: 1 } },
      { slug: "streak-7", title: "Week Warrior", description: "Maintain a 7-day streak", icon: "🔥", category: "STREAK", xpReward: 200, criteria: { type: "streak", value: 7 } },
      { slug: "streak-30", title: "Monthly Master", description: "Maintain a 30-day streak", icon: "💎", category: "STREAK", xpReward: 500, criteria: { type: "streak", value: 30 } },
      { slug: "module-complete", title: "Module Master", description: "Complete an entire module", icon: "🏆", category: "MASTERY", xpReward: 300, criteria: { type: "modules_completed", value: 1 } },
      { slug: "perfect-quiz", title: "Perfectionist", description: "Score 100% on any quiz", icon: "💯", category: "MASTERY", xpReward: 150, criteria: { type: "perfect_quiz", value: 1 } },
      { slug: "night-owl", title: "Night Owl", description: "Study after midnight", icon: "🦉", category: "SPECIAL", xpReward: 25, isSecret: true, criteria: { type: "time_of_day", value: "after_midnight" } },
    ],
  });

  console.log("✅ 8 achievements created");

  // ─── SAMPLE PROGRESS for user1 ─────────────────────────────
  await prisma.progress.create({
    data: {
      status: "COMPLETED",
      completedAt: new Date(),
      score: 90,
      lessonsCompleted: 3,
      totalLessons: 3,
      quizBestScore: 100,
      timeSpent: 1800,
      userId: user1.id,
      topicId: topic1.id,
    },
  });

  await prisma.progress.create({
    data: {
      status: "IN_PROGRESS",
      lessonsCompleted: 1,
      totalLessons: 3,
      timeSpent: 600,
      userId: user1.id,
      topicId: topic2.id,
    },
  });

  console.log("✅ Sample progress created");

  // ─── SAMPLE STREAKS for user1 ──────────────────────────────
  const today = new Date();
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    d.setHours(0, 0, 0, 0);
    await prisma.userStreak.create({
      data: {
        date: d,
        xpEarned: Math.floor(Math.random() * 200) + 50,
        minutes: Math.floor(Math.random() * 60) + 15,
        userId: user1.id,
      },
    });
  }

  console.log("✅ 7-day streak data created");
  console.log("\n🎉 Seeding complete!");
  console.log(`   Admin: admin@mikeyx.com / admin123`);
  console.log(`   User:  learner@mikeyx.com / user123`);
  console.log(`   User:  newbie@mikeyx.com / user123`);
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
