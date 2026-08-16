"use client";

import { WorkMethodStep } from "@/types/portfolio";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

interface WorkMethodStepsProps {
  steps: WorkMethodStep[];
}

export function WorkMethodSteps({ steps }: WorkMethodStepsProps) {
  return (
    <StaggerContainer
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      staggerDelay={0.08}
    >
      {steps.map((step, index) => (
        <StaggerItem key={step.number}>
          <div className="relative flex flex-col p-6 rounded-xl border border-border bg-card h-full group hover:border-primary/30 transition-all duration-300">
            {/* Step Number */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold text-primary/60">
                {step.number}
              </span>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 w-6 h-px bg-border z-10" />
              )}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
