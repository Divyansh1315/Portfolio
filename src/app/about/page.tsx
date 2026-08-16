import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutStory } from "@/components/sections/about/AboutStory";
import { AboutValues } from "@/components/sections/about/AboutValues";
import { AboutPhilosophy } from "@/components/sections/about/AboutPhilosophy";
import { AboutDirection } from "@/components/sections/about/AboutDirection";

export const metadata: Metadata = {
  title: "About | Divyansh Singh",
  description:
    "Learn about Divyansh Singh's professional journey across PMO, data analytics, automation, applied AI, and business-focused technology solutions.",
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutPhilosophy />
      <AboutDirection />

      {/* CTA Section */}
      <Section>
        <Container>
          <div className="text-center">
            <SectionHeading
              eyebrow="SEE IT IN ACTION"
              heading="Explore My Work"
              description="See how these capabilities come together in real projects."
            />
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                href="/projects"
                variant="primary"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                View Projects
              </Button>
              <Button href="/experience" variant="secondary">
                View Experience
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
