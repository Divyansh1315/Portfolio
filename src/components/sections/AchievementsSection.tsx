import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AchievementCards } from "./AchievementCards";
import type { SanityAchievement, SanityHomepageContent } from "@/sanity/lib/types";

interface AchievementsSectionProps {
  achievements: SanityAchievement[];
  homepage: SanityHomepageContent | null;
}

export function AchievementsSection({ achievements, homepage }: AchievementsSectionProps) {
  if (achievements.length === 0) return null;

  // Map Sanity achievements to the shape AchievementCards expects
  const mapped = achievements.map((a) => ({
    id: a._id,
    title: a.title,
    description: a.description,
    date: a.date,
    category: a.category,
    icon: a.icon,
  }));

  return (
    <Section id="achievements" variant="surface">
      <Container>
        <SectionHeading
          eyebrow={homepage?.achievementsEyebrow || "BEYOND THE DAY-TO-DAY"}
          heading={homepage?.achievementsHeading || "Learning, Innovation & Professional Growth"}
        />
        <AchievementCards achievements={mapped} />
      </Container>
    </Section>
  );
}
