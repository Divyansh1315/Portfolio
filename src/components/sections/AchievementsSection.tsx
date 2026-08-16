import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { achievements } from "@/data/achievements";
import { AchievementCards } from "./AchievementCards";

export function AchievementsSection() {
  return (
    <Section id="achievements" variant="surface">
      <Container>
        <SectionHeading
          eyebrow="BEYOND THE DAY-TO-DAY"
          heading="Learning, Innovation & Professional Growth"
        />
        <AchievementCards achievements={achievements} />
      </Container>
    </Section>
  );
}
