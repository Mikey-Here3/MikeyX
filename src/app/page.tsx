/**
 * MikeyX Landing Page (Phase 1 Placeholder)
 * 
 * Full landing page will be built in Phase 3.
 * This confirms the app is running correctly.
 */
import { Button, buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/common/logo";
import { ArrowRight, Code2, BookOpen, Brain, Zap } from "lucide-react";
import Link from "next/link";
import { AnimatedCard } from "@/components/ui/animated-card";
import { GradientText } from "@/components/ui/gradient-text";
import { GlassContainer } from "@/components/ui/glass-container";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/20 blur-[120px] pointer-events-none" />

      {/* Header */}
      <GlassContainer as="header" variant="panel" className="sticky top-0 z-50 border-b-0 rounded-none bg-background/40">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Logo size="md" />
          <div className="flex items-center gap-4">
            <Link href="/login" className={buttonVariants({ variant: "ghost", size: "sm" })}>
              Sign In
            </Link>
            <Link href="/register" className={buttonVariants({ size: "sm" })}>
              Get Started <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </GlassContainer>

      {/* Hero */}
      <main className="flex-1 z-10">
        <section className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary shadow-[0_0_15px_rgba(124,58,237,0.2)]">
              <Zap className="mr-2 h-4 w-4 text-primary animate-pulse" />
              From Zero to Professional Developer
            </div>

            {/* Heading */}
            <h1 className="font-heading text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1]">
              Master Programming
              <br />
              <GradientText as="span" variant="accent" className="pb-2 inline-block">
                From Scratch
              </GradientText>
            </h1>

            {/* Subtitle */}
            <p className="mt-8 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto leading-relaxed">
              The deepest learning ecosystem for absolute beginners. Understand
              every concept visually — from what code is, to building
              real-world applications.
            </p>

            {/* CTA */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register" className={buttonVariants({ size: "lg", className: "text-base px-8 h-14 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all" })}>
                Start Learning — It&apos;s Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/roadmaps" className={buttonVariants({ variant: "outline", size: "lg", className: "text-base px-8 h-14 rounded-xl bg-background/50 backdrop-blur-sm hover:bg-muted/80" })}>
                View Roadmap
              </Link>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="mx-auto mt-32 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 relative">
            {[
              {
                icon: BookOpen,
                title: "Deep Understanding",
                desc: "Every concept explained with history, analogies, visuals, and real-world usage.",
                delay: 0.1,
              },
              {
                icon: Code2,
                title: "Interactive Practice",
                desc: "Write real code in a built-in editor. Quizzes, challenges, and debugging exercises.",
                delay: 0.2,
              },
              {
                icon: Brain,
                title: "Knowledge Retention",
                desc: "Spaced repetition, flashcards, knowledge graphs, and mistake tracking.",
                delay: 0.3,
              },
            ].map((feature, i) => (
              <AnimatedCard
                key={feature.title}
                delay={feature.delay}
                className="p-8 border-border/40 bg-card/40 backdrop-blur-sm"
              >
                <div className="mb-6 inline-flex rounded-xl bg-primary/10 p-3 shadow-inner">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold">{feature.title}</h3>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/20 bg-background/40 backdrop-blur-md py-8 z-10">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground font-medium">
          © {new Date().getFullYear()} MikeyX. Built with ❤️ for learners.
        </div>
      </footer>
    </div>
  );
}
