"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { experiences } from "@/data/experience";
import { isPlaceholder } from "@/lib/utils";
import { TechPill } from "@/components/ui/TechPill";
import { MapPin, Calendar } from "lucide-react";

export function ExperienceTimeline() {
  // Only render verified roles (filter out placeholder data)
  const verifiedExperiences = experiences.filter(
    (exp) => !isPlaceholder(exp.company) && !isPlaceholder(exp.role)
  );

  // If no verified experience data, don't render this section
  if (verifiedExperiences.length === 0) {
    return null;
  }

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="PROFESSIONAL TIMELINE"
          heading="Career History"
          align="left"
        />

        <div className="max-w-3xl">
          {verifiedExperiences.map((experience, index) => (
            <AnimatedSection
              key={experience.id}
              delay={index * 0.1}
              className="relative"
            >
              <div className="flex gap-6 pb-12 last:pb-0">
                {/* Timeline line & dot */}
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary shrink-0 mt-1.5" />
                  {index < verifiedExperiences.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  {/* Role & Company */}
                  <h3 className="text-lg font-semibold text-foreground">
                    {experience.role}
                  </h3>
                  <p className="text-sm font-medium text-primary mt-0.5">
                    {experience.company}
                  </p>

                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-muted-foreground">
                    {(experience.startDate || experience.endDate) && (
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {experience.startDate}
                        {experience.endDate && ` — ${experience.current ? "Present" : experience.endDate}`}
                      </span>
                    )}
                    {experience.location && !isPlaceholder(experience.location) && (
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {experience.location}
                      </span>
                    )}
                  </div>

                  {/* Summary / Description */}
                  {experience.summary && !isPlaceholder(experience.summary) && (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {experience.summary}
                    </p>
                  )}
                  {!experience.summary &&
                    experience.description &&
                    !isPlaceholder(experience.description) && (
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {experience.description}
                      </p>
                    )}

                  {/* Highlights */}
                  {experience.highlights.length > 0 &&
                    !isPlaceholder(experience.highlights[0]) && (
                      <ul className="mt-3 space-y-1.5">
                        {experience.highlights
                          .filter((h) => !isPlaceholder(h))
                          .map((highlight, hIdx) => (
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
                  {experience.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {experience.technologies.map((tech) => (
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
