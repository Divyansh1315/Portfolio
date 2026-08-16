import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AboutContent } from "./AboutContent";

export function AboutSection() {
  return (
    <Section id="about">
      <Container>
        <SectionHeading
          eyebrow="ABOUT"
          heading="Business Mindset. Data Skills. Technology Execution."
          align="left"
        />
        <AboutContent />
      </Container>
    </Section>
  );
}
