import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";
import { SkillsGrid } from "./SkillsGrid";

export function SkillsSection() {
  return (
    <Section id="skills">
      <Container>
        <SectionHeading
          eyebrow="SKILLS"
          heading="Tools I Use to Turn Ideas Into Solutions"
          description="A practical technology stack spanning analytics, automation, AI, development, and project management."
        />
        <SkillsGrid categories={skillCategories} />
      </Container>
    </Section>
  );
}
