"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { personalInfo } from "@/data/personal";
import Image from "next/image";
import { MotionDiv } from "@/components/ui/ClientMotion";
import { duration, ease } from "@/lib/motion";

export function AboutHero() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Content — 3 columns */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.base, ease: ease.out }}
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
            transition={{ duration: duration.slow, delay: 0.2, ease: ease.out }}
            className="lg:col-span-2 flex items-center justify-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-xl" />

              {/* Main card */}
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-2xl border border-border bg-gradient-to-br from-surface to-surface-secondary overflow-hidden">
                {/* Decorative top stripe */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary/50 z-10" />

                {/* Profile image */}
                <Image
                  src="/images/profile/Divyansh_Img.png"
                  alt={`Profile photo of ${personalInfo.name}`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 256px, 288px"
                  priority
                />

                {/* Bottom decorative stripe */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/50 via-primary to-accent/50 z-10" />
              </div>
            </div>
          </MotionDiv>
        </div>
      </Container>
    </Section>
  );
}
