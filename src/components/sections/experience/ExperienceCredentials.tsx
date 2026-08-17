"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Award } from "lucide-react";
import type { SanityCertification } from "@/sanity/lib/types";

interface ExperienceCredentialsProps {
  certifications: SanityCertification[];
}

export function ExperienceCredentials({ certifications }: ExperienceCredentialsProps) {
  if (certifications.length === 0) return null;

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="PROFESSIONAL DEVELOPMENT"
          heading="Certifications & Programs"
          description="Continuous investment in skills, frameworks, and professional capabilities."
        />

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {certifications.map((cert) => (
            <StaggerItem key={cert._id}>
              <div className="flex flex-col h-full p-6 rounded-xl border border-border bg-card hover:border-muted transition-all duration-300">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent mb-4">
                  <Award className="h-5 w-5" />
                </div>
                <h4 className="text-base font-semibold text-foreground mb-1">
                  {cert.name}
                </h4>
                {cert.issuer && (
                  <p className="text-sm text-primary mb-2">{cert.issuer}</p>
                )}
                {cert.description && (
                  <p className="text-sm leading-relaxed text-muted-foreground mt-auto">
                    {cert.description}
                  </p>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
