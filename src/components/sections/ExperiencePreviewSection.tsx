import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { ExperienceCards } from "./ExperienceCards";
import type { SanityExperience, SanityHomepageContent } from "@/sanity/lib/types";

interface ExperiencePreviewSectionProps {
  experience: SanityExperience[];
  homepage: SanityHomepageContent | null;
}

export function ExperiencePreviewSection({ homepage }: ExperiencePreviewSectionProps) {
  return (
    <Section id="experience" variant="surface">
      <Container>
        <SectionHeading
          eyebrow={homepage?.experienceEyebrow || "EXPERIENCE"}
          heading={homepage?.experienceHeading || "My Professional Journey"}
          description={homepage?.experienceDescription || "Building experience across project governance, reporting, analytics, process improvement, automation, and applied AI."}
        />
        <ExperienceCards />
        <div className="mt-12 text-center">
          <Button
            href="/experience"
            variant="secondary"
            icon={<ArrowRight className="h-4 w-4" />}
          >
            View Full Experience
          </Button>
        </div>
      </Container>
    </Section>
  );
}
