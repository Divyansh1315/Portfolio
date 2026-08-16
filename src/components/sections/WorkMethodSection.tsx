import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { workMethodSteps } from "@/data/workMethod";
import { WorkMethodSteps } from "./WorkMethodSteps";

export function WorkMethodSection() {
  return (
    <Section id="process" variant="surface">
      <Container>
        <SectionHeading
          eyebrow="HOW I WORK"
          heading="From Problem to Practical Solution"
          description="Technology is most useful when it begins with a clear understanding of the business problem."
        />
        <WorkMethodSteps steps={workMethodSteps} />
      </Container>
    </Section>
  );
}
