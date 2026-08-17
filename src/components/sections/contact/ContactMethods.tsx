"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Linkedin, Github, Mail } from "lucide-react";
import type { SanityContactMethod } from "@/sanity/lib/types";

const iconMap: Record<string, React.ReactNode> = {
  linkedin: <Linkedin className="h-6 w-6" />,
  github: <Github className="h-6 w-6" />,
  mail: <Mail className="h-6 w-6" />,
};

const labelMap: Record<string, string> = {
  linkedin: "Professional profile and career updates",
  github: "Open-source projects and code",
  mail: "Direct communication",
};

interface ContactMethodsProps {
  contactMethods: SanityContactMethod[];
}

export function ContactMethods({ contactMethods }: ContactMethodsProps) {
  if (contactMethods.length === 0) return null;

  return (
    <Section variant="surface">
      <Container>
        <SectionHeading
          eyebrow="REACH OUT"
          heading="Preferred Contact Methods"
          description="Choose the channel that works best for you."
        />

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto"
          staggerDelay={0.1}
        >
          {contactMethods.map((link) => {
            const isEmail = link.type === "email";
            const href = isEmail ? `mailto:${link.url}` : link.url;

            return (
              <StaggerItem key={link._id}>
                <a
                  href={href}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noopener noreferrer"}
                  className="flex flex-col items-center gap-4 p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:bg-card-hover transition-all duration-300 group text-center"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-surface-secondary group-hover:bg-primary/10 group-hover:text-primary transition-all text-muted-foreground">
                    {iconMap[link.icon] ?? null}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">
                      {link.label}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {labelMap[link.icon] ?? "Connect"}
                    </p>
                  </div>
                </a>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
