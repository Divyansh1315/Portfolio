import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { workMethodSteps } from "@/data/workMethod";
import { WorkMethodSteps } from "./WorkMethodSteps";
import type { SanityHomepageContent } from "@/sanity/lib/types";

interface WorkMethodSectionProps {
  homepage: SanityHomepageContent | null;
}

export function WorkMethodSection({ homepage }: WorkMethodSectionProps) {
  return (
    <Section id="process" variant="surface">
      <Container>
        <SectionHeading
          eyebrow={homepage?.workMethodEyebrow || "HOW I WORK"}
          heading={homepage?.workMethodHeading || "From Problem to Practical Solution"}
          description={homepage?.workMethodDescription || "Technology is most useful when it begins with a clear understanding of the business problem."}
        />
        <WorkMethodSteps steps={workMethodSteps} />
      </Container>
    </Section>
  );
}
