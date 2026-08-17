"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Award, ExternalLink } from "lucide-react";
import { urlFor } from "@/sanity/image";
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
              <div className="flex flex-col h-full rounded-xl border border-border bg-card hover:border-muted transition-all duration-300 overflow-hidden">
                {cert.certificateImage?.asset && (
                  <div className="relative w-full aspect-[4/3] bg-muted">
                    <img
                      src={urlFor(cert.certificateImage).width(600).height(450).auto("format").url()}
                      alt={cert.certificateImage.alt || `${cert.name} certificate`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="flex flex-col flex-1 p-6">
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
                    <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                      {cert.description}
                    </p>
                  )}
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline mt-auto"
                    >
                      Verify credential
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
