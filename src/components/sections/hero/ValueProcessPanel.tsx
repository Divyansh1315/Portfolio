"use client";

import { useEffect, useState, useRef } from "react";

const processSteps = [
  { title: "Business Problem", context: "Where the friction actually is" },
  { title: "Data", context: "Excel \u2022 SQL \u2022 Operational systems" },
  { title: "Analytics", context: "Power BI \u2022 DAX \u2022 Modeling" },
  { title: "AI", context: "Bedrock \u2022 Generative AI" },
  { title: "Automation", context: "Power Automate \u2022 n8n" },
  { title: "Business Impact", context: "Better, faster decisions" },
] as const;

const outcomePills = ["Visibility", "Faster Decisions", "Efficiency", "Action"];

export function ValueProcessPanel() {
  const [activeStep, setActiveStep] = useState(-1);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setActiveStep(processSteps.length - 1);
      return;
    }

    if (hasAnimated.current) return;
    hasAnimated.current = true;

    // Progressive activation with staggered timing
    const baseDelay = 800; // ms after mount before starting
    const stepInterval = 170; // ms between each step

    const timers: NodeJS.Timeout[] = [];
    processSteps.forEach((_, i) => {
      const timer = setTimeout(() => {
        setActiveStep(i);
      }, baseDelay + i * stepInterval);
      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  const progress = activeStep >= 0 ? ((activeStep + 1) / processSteps.length) * 100 : 0;

  return (
    <div className="relative rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-5 sm:p-6 overflow-hidden">
      {/* Faint internal grid */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Subtle blue ambient glow at top-right */}
      <div
        className="absolute -top-20 -right-20 w-48 h-48 bg-primary/[0.06] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Panel Header */}
      <div className="relative flex items-center justify-between mb-5">
        <h2 className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-muted-foreground">
          How I Create Value
        </h2>
        <div className="w-2 h-2 rounded-full bg-primary/60" aria-hidden="true" />
      </div>

      {/* Process Steps */}
      <div className="relative" role="list" aria-label="Value creation process">
        {/* Vertical connector track */}
        <div className="absolute left-[7px] top-3 bottom-3 w-px bg-border/30" aria-hidden="true" />

        {/* Animated connector fill */}
        <div
          className="absolute left-[7px] top-3 w-px bg-primary/50 transition-all duration-500 ease-out"
          style={{ height: `${progress * 0.85}%` }}
          aria-hidden="true"
        />

        <div className="space-y-0">
          {processSteps.map((step, index) => {
            const isActive = index <= activeStep;
            const isCurrent = index === activeStep;
            return (
              <div
                key={step.title}
                role="listitem"
                className={`relative flex items-center gap-4 py-3 transition-all duration-300 ${
                  isActive ? "opacity-100" : "opacity-40"
                }`}
              >
                {/* Node */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`w-[15px] h-[15px] rounded-full border-2 transition-all duration-400 ${
                      isActive
                        ? "border-primary bg-primary/20"
                        : "border-border bg-surface"
                    } ${isCurrent && index === processSteps.length - 1 ? "shadow-[0_0_8px_rgba(59,130,246,0.3)]" : ""}`}
                  >
                    <div
                      className={`absolute inset-[3px] rounded-full transition-all duration-300 ${
                        isActive ? "bg-primary/60" : "bg-transparent"
                      }`}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex items-center justify-between min-w-0">
                  <span
                    className={`text-sm font-semibold transition-colors duration-300 ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {step.title}
                  </span>
                  <span
                    className={`text-xs text-right transition-opacity duration-300 ml-3 ${
                      isActive ? "text-muted-foreground opacity-100" : "text-muted opacity-0"
                    }`}
                  >
                    {step.context}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Outcome Pills */}
      <div
        className={`relative flex flex-wrap gap-2 mt-5 pt-4 border-t border-border/30 transition-opacity duration-500 ${
          activeStep >= processSteps.length - 1 ? "opacity-100" : "opacity-0"
        }`}
      >
        {outcomePills.map((pill) => (
          <span
            key={pill}
            className="px-3 py-1 rounded-md text-xs font-medium bg-surface-secondary border border-border/50 text-muted-foreground"
          >
            {pill}
          </span>
        ))}
      </div>
    </div>
  );
}
