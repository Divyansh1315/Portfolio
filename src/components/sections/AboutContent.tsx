"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function AboutContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
      {/* Left Column — Copy */}
      <AnimatedSection className="lg:col-span-3 space-y-5">
        <p className="text-[length:var(--font-size-body-lg)] leading-relaxed text-muted-foreground">
          My professional journey has been centered around understanding how businesses operate, identifying where processes can be improved, and using technology to make those improvements more measurable and scalable.
        </p>
        <p className="text-[length:var(--font-size-body-lg)] leading-relaxed text-muted-foreground">
          Working in PMO has given me exposure to project governance, reporting, stakeholder coordination, operational challenges, and management decision-making.
        </p>
        <p className="text-[length:var(--font-size-body-lg)] leading-relaxed text-muted-foreground">
          Over time, I expanded this foundation into data analytics, business intelligence, automation, and applied AI—building dashboards, automated workflows, AI assistants, and business-focused technology solutions.
        </p>
        <p className="text-[length:var(--font-size-body-lg)] leading-relaxed text-muted-foreground">
          Today, I focus on creating solutions where business understanding meets technology execution.
        </p>
      </AnimatedSection>

      {/* Right Column — Feature Statement + Visual */}
      <AnimatedSection className="lg:col-span-2 flex flex-col gap-8" delay={0.2}>
        {/* Feature Statement */}
        <div className="relative p-6 rounded-xl border border-primary/20 bg-primary/5">
          <div className="absolute top-0 left-6 w-12 h-1 bg-primary rounded-b" />
          <p className="text-xl font-semibold text-foreground leading-relaxed mt-2">
            I don&apos;t start with technology.
          </p>
          <p className="text-xl font-semibold text-primary leading-relaxed">
            I start with the problem.
          </p>
        </div>

        {/* Conceptual Visual */}
        <div className="flex flex-col gap-0" aria-hidden="true">
          {[
            { label: "Business Context", color: "border-blue-500/30 text-blue-600 dark:text-blue-400" },
            { label: "Data & Process", color: "border-indigo-500/30 text-indigo-600 dark:text-indigo-400" },
            { label: "Solution Design", color: "border-violet-500/30 text-violet-600 dark:text-violet-400" },
            { label: "Technology", color: "border-purple-500/30 text-purple-600 dark:text-purple-400" },
            { label: "Business Value", color: "border-emerald-500/30 text-emerald-600 dark:text-emerald-400" },
          ].map((item, i, arr) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full border-2 ${item.color}`} />
                {i < arr.length - 1 && <div className="w-px h-8 bg-border" />}
              </div>
              <span className={`text-sm font-medium ${item.color}`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
