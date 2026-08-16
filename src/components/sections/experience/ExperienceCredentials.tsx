"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { achievements } from "@/data/achievements";
import { Badge } from "@/components/ui/Badge";
import {
  GraduationCap,
  Lightbulb,
  BarChart3,
  Award,
} from "lucide-react";

const achievementIcons: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="h-5 w-5" />,
  Lightbulb: <Lightbulb className="h-5 w-5" />,
  BarChart3: <BarChart3 className="h-5 w-5" />,
};

/** Certifications data inline to avoid module resolution issues at build */
const certifications = [
  {
    id: "mckinsey-forward",
    name: "McKinsey Forward Program",
    issuer: "McKinsey & Company",
    description:
      "Completed the McKinsey Forward learning program focused on practical problem-solving, adaptability, communication, and modern workplace capabilities.",
  },
];

export function ExperienceCredentials() {
  const hasCertifications = certifications.length > 0;
  const hasAchievements = achievements.length > 0;

  if (!hasCertifications && !hasAchievements) return null;

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="PROFESSIONAL DEVELOPMENT"
          heading="Learning & Growth"
          description="Continuous investment in skills, frameworks, and professional capabilities."
        />

        {/* Certifications */}
        {hasCertifications && (
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Certifications & Programs
            </h3>
            <StaggerContainer
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              staggerDelay={0.1}
            >
              {certifications.map((cert) => (
                <StaggerItem key={cert.id}>
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
          </div>
        )}

        {/* Achievements */}
        {hasAchievements && (
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Innovation & Recognition
            </h3>
            <StaggerContainer
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              staggerDelay={0.1}
            >
              {achievements.map((achievement) => (
                <StaggerItem key={achievement.id}>
                  <div className="flex flex-col h-full p-6 rounded-xl border border-border bg-card hover:border-muted transition-all duration-300">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent mb-4">
                      {achievementIcons[achievement.icon ?? ""] ?? (
                        <Lightbulb className="h-5 w-5" />
                      )}
                    </div>
                    <Badge variant="accent" className="mb-3 self-start">
                      {achievement.category}
                    </Badge>
                    <h4 className="text-base font-semibold text-foreground mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        )}
      </Container>
    </Section>
  );
}
