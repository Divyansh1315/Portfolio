"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Linkedin, Github, Mail, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import type { SanityContactMethod, SanityHomepageContent } from "@/sanity/lib/types";

const iconMap: Record<string, React.ReactNode> = {
  linkedin: <Linkedin className="h-6 w-6" />,
  github: <Github className="h-6 w-6" />,
  mail: <Mail className="h-6 w-6" />,
};

interface ContactSectionProps {
  contactMethods: SanityContactMethod[];
  homepage: SanityHomepageContent | null;
}

export function ContactSection({ contactMethods, homepage }: ContactSectionProps) {
  const hasConfigured = contactMethods.length > 0;

  return (
    <Section id="contact" variant="surface">
      <Container>
        <SectionHeading
          eyebrow={homepage?.contactEyebrow || "CONTACT"}
          heading={homepage?.contactHeading || "Let's Connect"}
          description={homepage?.contactDescription || "Have an interesting role, project, or problem worth solving? I'd be happy to connect."}
        />
        <AnimatedSection className="flex flex-col items-center gap-6">
          {hasConfigured ? (
            <div className="flex flex-wrap items-center justify-center gap-6">
              {contactMethods.map((link) => {
                const isEmail = link.type === "email";
                const href = isEmail ? `mailto:${link.url}` : link.url;

                return (
                  <a
                    key={link._id}
                    href={href}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noopener noreferrer"}
                    className="flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-card-hover transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface-secondary group-hover:bg-primary/10 group-hover:text-primary transition-all">
                      {iconMap[link.icon] ?? null}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {link.label}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {isEmail ? "Send an email" : `View on ${link.label}`}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          ) : (
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Visit the contact page for more details on how to reach me.
              </p>
              <Button
                href="/contact"
                variant="secondary"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Contact Page
              </Button>
            </div>
          )}
        </AnimatedSection>
      </Container>
    </Section>
  );
}
