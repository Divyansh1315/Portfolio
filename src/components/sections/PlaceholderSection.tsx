import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

interface PlaceholderSectionProps {
  id?: string;
  eyebrow: string;
  heading: string;
  description?: string;
  variant?: "default" | "surface";
  className?: string;
}

export function PlaceholderSection({
  id,
  eyebrow,
  heading,
  description,
  variant = "default",
  className,
}: PlaceholderSectionProps) {
  return (
    <Section id={id} variant={variant} className={className}>
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          heading={heading}
          description={description}
        />
        <div
          className={cn(
            "flex items-center justify-center min-h-[200px] rounded-xl border border-dashed border-border bg-surface/50"
          )}
        >
          <p className="text-sm text-muted-foreground">
            Content coming in Sprint 2+
          </p>
        </div>
      </Container>
    </Section>
  );
}
