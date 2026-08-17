import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { capabilities } from "@/data/capabilities";
import { CapabilityCards } from "./CapabilityCards";
import { BarChart3, Brain, Workflow, Target } from "lucide-react";
import type { SanityHomepageContent } from "@/sanity/lib/types";

const iconMap: Record<string, React.ReactNode> = {
  BarChart3: <BarChart3 className="h-5 w-5" />,
  Brain: <Brain className="h-5 w-5" />,
  Workflow: <Workflow className="h-5 w-5" />,
  Target: <Target className="h-5 w-5" />,
};

interface CapabilitySectionProps {
  homepage: SanityHomepageContent | null;
}

export function CapabilitySection({ homepage }: CapabilitySectionProps) {
  return (
    <Section id="capabilities">
      <Container>
        <SectionHeading
          eyebrow={homepage?.capabilitiesEyebrow || "WHAT I DO"}
          heading={homepage?.capabilitiesHeading || "Core Capabilities"}
          description={homepage?.capabilitiesDescription || "I combine analytics, automation, AI, and structured problem-solving to build practical business solutions."}
        />
        <CapabilityCards capabilities={capabilities} iconMap={iconMap} />
      </Container>
    </Section>
  );
}
