"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { TechPill } from "@/components/ui/TechPill";
import { MapPin, Calendar } from "lucide-react";
import type { SanityExperience } from "@/sanity/lib/types";

interface ExperienceTimelineProps {
  experience: SanityExperience[];
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
  if (experience.length === 0) return null;

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="PROFESSIONAL TIMELINE"
          heading="Career History"
          align="left"
        />

        <div className="max-w-3xl">
          {experience.map((exp, index) => (
            <AnimatedSection
              key={exp._id}
              delay={index * 0.1}
              className="relative"
            >
              <div className="flex gap-6 pb-12 last:pb-0">
                {/* Timeline line & dot */}
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary shrink-0 mt-1.5" />
                  {index < experience.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  {/* Role & Company */}
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-primary mt-0.5">
                    {exp.company}
                  </p>

                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-muted-foreground">
                    {exp.startDate && (
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDate(exp.startDate)}
                        {" — "}
                        {exp.isCurrent ? "Present" : exp.endDate ? formatDate(exp.endDate) : ""}
                      </span>
                    )}
                    {exp.location && (
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    )}
                  </div>

                  {/* Summary */}
                  {exp.summary && (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {exp.summary}
                    </p>
                  )}

                  {/* Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className="mt-3 space-y-1.5">
                      {exp.achievements.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-2 w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Technologies */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {exp.technologies.map((tech) => (
                        <TechPill key={tech} label={tech} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
