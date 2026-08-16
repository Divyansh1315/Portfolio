"use client";

import { TechPill } from "@/components/ui/TechPill";
import { Capability } from "@/types/portfolio";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

interface CapabilityCardsProps {
  capabilities: Capability[];
  iconMap: Record<string, React.ReactNode>;
}

export function CapabilityCards({ capabilities, iconMap }: CapabilityCardsProps) {
  return (
    <StaggerContainer
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      staggerDelay={0.1}
    >
      {capabilities.map((cap) => (
        <StaggerItem key={cap.id}>
          <div className="group relative flex flex-col h-full p-6 rounded-xl border border-border bg-card hover:bg-card-hover hover:border-muted transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
            {/* Icon */}
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
              {iconMap[cap.icon] ?? null}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {cap.title}
            </h3>

            {/* Description */}
            <p className="text-sm leading-relaxed text-muted-foreground mb-4 flex-1">
              {cap.description}
            </p>

            {/* Technology Pills */}
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {cap.technologies.map((tech) => (
                <TechPill key={tech} label={tech} />
              ))}
            </div>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
