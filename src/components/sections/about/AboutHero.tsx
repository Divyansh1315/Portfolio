"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { personalInfo } from "@/data/personal";
import { User } from "lucide-react";
import { MotionDiv } from "@/components/ui/ClientMotion";

export function AboutHero() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Content — 3 columns */}
          <MotionDiv
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-3 flex flex-col gap-5"
          >
            <p className="text-[length:var(--font-size-label)] font-semibold uppercase tracking-widest text-primary">
              ABOUT ME
            </p>
            <h1 className="text-[length:var(--font-size-h1)] font-bold leading-tight text-foreground">
              Business Understanding Meets Technology Execution
            </h1>
            <p className="text-[length:var(--font-size-body-lg)] leading-relaxed text-muted-foreground max-w-2xl">
              My work sits at the intersection of project governance, data analytics,
              automation, and applied AI—helping translate business problems into
              practical technology solutions.
            </p>
          </MotionDiv>

          {/* Visual — 2 columns */}
          <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-2 flex items-center justify-center"
          >
            <ProfileVisual name={personalInfo.name} />
          </MotionDiv>
        </div>
      </Container>
    </Section>
  );
}

/**
 * Premium designed visual placeholder for profile image.
 * When a real profile image is added to /public/images/profile/,
 * this component can be replaced with next/image.
 */
function ProfileVisual({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="relative">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-xl" />

      {/* Main card */}
      <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-2xl border border-border bg-gradient-to-br from-surface to-surface-secondary flex flex-col items-center justify-center gap-4 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary/50" />
        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/60" />
        <div className="absolute top-4 right-8 w-2 h-2 rounded-full bg-accent/40" />

        {/* Icon */}
        <div className="flex items-center justify-center w-20 h-20 rounded-xl bg-primary/10 border border-primary/20">
          <User className="w-10 h-10 text-primary/70" />
        </div>

        {/* Initials */}
        <span className="text-2xl font-bold text-foreground/80 tracking-wide">
          {initials}
        </span>

        {/* Subtle label */}
        <span className="text-xs text-muted-foreground uppercase tracking-widest">
          Profile
        </span>

        {/* Bottom decorative stripe */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/50 via-primary to-accent/50" />
      </div>
    </div>
  );
}
