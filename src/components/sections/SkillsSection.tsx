import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillsGrid } from "./SkillsGrid";
import type { SanitySkillGroup, SanityHomepageContent } from "@/sanity/lib/types";

interface SkillsSectionProps {
  skillGroups: SanitySkillGroup[];
  homepage: SanityHomepageContent | null;
}

export function SkillsSection({ skillGroups, homepage }: SkillsSectionProps) {
  if (skillGroups.length === 0) return null;

  // Map Sanity skill groups to the shape SkillsGrid expects
  const categories = skillGroups.map((group) => ({
    id: group._id,
    name: group.name,
    skills: group.skills.map((s) => ({
      name: s.name,
      level: s.level as "beginner" | "intermediate" | "advanced" | "expert" | undefined,
    })),
  }));

  return (
    <Section id="skills">
      <Container>
        <SectionHeading
          eyebrow={homepage?.skillsEyebrow || "SKILLS"}
          heading={homepage?.skillsHeading || "Tools I Use to Turn Ideas Into Solutions"}
          description={homepage?.skillsDescription || "A practical technology stack spanning analytics, automation, AI, development, and project management."}
        />
        <SkillsGrid categories={categories} />
      </Container>
    </Section>
  );
}
