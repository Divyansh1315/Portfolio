import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { SkillsHero } from "@/components/sections/skills/SkillsHero";
import { SkillsCategories } from "@/components/sections/skills/SkillsCategories";
import { SkillsUsage } from "@/components/sections/skills/SkillsUsage";
import { SkillsBridge } from "@/components/sections/skills/SkillsBridge";
import { getSkillGroups } from "@/sanity/lib/fetch";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Explore Divyansh Singh's skills across Power BI, analytics, AI, Power Automate, Python, Microsoft 365, and PMO.",
  openGraph: {
    title: "Skills | Divyansh Singh",
    description:
      "Explore Divyansh Singh's skills across Power BI, analytics, AI, Power Automate, Python, Microsoft 365, and PMO.",
  },
};

export default async function SkillsPage() {
  const skillGroups = await getSkillGroups();

  return (
    <div className="pt-24">
      <SkillsHero />
      <SkillsCategories skillGroups={skillGroups} />
      <SkillsUsage />
      <SkillsBridge />

      {/* CTA Section */}
      <Section>
        <Container>
          <div className="text-center">
            <SectionHeading
              eyebrow="IN PRACTICE"
              heading="See These Skills in Action"
              description="Explore real projects where these tools and capabilities come together."
            />
            <Button
              href="/projects"
              variant="primary"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              View Projects
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
