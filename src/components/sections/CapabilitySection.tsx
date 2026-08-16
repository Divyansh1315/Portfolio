import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { capabilities } from "@/data/capabilities";
import { BarChart3, Brain, Workflow, Target } from "lucide-react";
import { CapabilityCards } from "./CapabilityCards";

const iconMap: Record<string, React.ReactNode> = {
  BarChart3: <BarChart3 className="h-6 w-6" />,
  Brain: <Brain className="h-6 w-6" />,
  Workflow: <Workflow className="h-6 w-6" />,
  Target: <Target className="h-6 w-6" />,
};

export function CapabilitySection() {
  return (
    <Section id="capabilities" variant="surface">
      <Container>
        <SectionHeading
          eyebrow="WHAT I DO"
          heading="Where Business Meets Technology"
          description="I combine business understanding with analytics, automation, and AI to solve practical operational and decision-making challenges."
        />
        <CapabilityCards capabilities={capabilities} iconMap={iconMap} />
      </Container>
    </Section>
  );
}
