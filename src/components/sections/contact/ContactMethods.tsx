"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { socialLinks } from "@/data/personal";
import { isPlaceholder } from "@/lib/utils";
import { Linkedin, Github, Mail } from "lucide-react";

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

export function ContactMethods() {
  const configuredLinks = socialLinks.filter(
    (link) => !isPlaceholder(link.url)
  );
  const hasAnyConfigured = configuredLinks.length > 0;

  return (
    <Section variant="surface">
      <Container>
        <SectionHeading
          eyebrow="REACH OUT"
          heading="Preferred Contact Methods"
          description={
            hasAnyConfigured
              ? "Choose the channel that works best for you."
              : "Contact methods will be available here once configured."
          }
        />

        {hasAnyConfigured ? (
          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto"
            staggerDelay={0.1}
          >
            {configuredLinks.map((link) => {
              const isEmail = link.icon === "mail";
              const href = isEmail ? `mailto:${link.url}` : link.url;

              return (
                <StaggerItem key={link.platform}>
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
                        {link.platform}
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
        ) : (
          <div className="flex items-center justify-center py-12">
            <div className="text-center max-w-md">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-surface-secondary text-muted-foreground mx-auto mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <p className="text-sm text-muted-foreground">
                Contact information is being set up. Please check back soon or
                connect via the project links available across this portfolio.
              </p>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
