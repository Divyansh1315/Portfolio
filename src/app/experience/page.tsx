import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Download } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { isPlaceholder } from "@/lib/utils";
import { ExperienceHero } from "@/components/sections/experience/ExperienceHero";
import { ExperienceSummary } from "@/components/sections/experience/ExperienceSummary";
import { ExperienceTimeline } from "@/components/sections/experience/ExperienceTimeline";
import { ExperienceThemes } from "@/components/sections/experience/ExperienceThemes";
import { ExperienceCredentials } from "@/components/sections/experience/ExperienceCredentials";

export const metadata: Metadata = {
  title: "Experience | Divyansh Singh",
  description:
    "Professional experience of Divyansh Singh across project governance, analytics, automation, reporting, and applied AI.",
};

export default function ExperiencePage() {
  return (
    <div className="pt-24">
      <ExperienceHero />
      <ExperienceSummary />
      <ExperienceTimeline />
      <ExperienceThemes />
      <ExperienceCredentials />

      {/* CTA Section */}
      <Section>
        <Container>
          <div className="text-center">
            <SectionHeading
              eyebrow="NEXT"
              heading="See These Skills in Action"
              description="Explore the projects where these capabilities come together."
            />
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                href="/projects"
                variant="primary"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Explore Projects
              </Button>
              {!isPlaceholder(personalInfo.resumePath) && (
                <Button
                  href={personalInfo.resumePath}
                  variant="secondary"
                  external
                  icon={<Download className="h-4 w-4" />}
                >
                  Download Resume
                </Button>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
