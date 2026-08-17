"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { ProjectFeature } from "@/types/portfolio";
import {
  BarChart3,
  MessageSquare,
  FileText,
  Lightbulb,
  ClipboardList,
  Workflow,
  Search,
  Mail,
  ShieldAlert,
  PieChart,
  Hash,
  Building2,
  Target,
  TrendingUp,
  Filter,
  Clock,
  Calendar,
  CheckCircle,
  Play,
  AlertTriangle,
  ArrowUpCircle,
  GitBranch,
  Sparkles,
  Braces,
  Database,
  Repeat,
} from "lucide-react";
import { ElementType } from "react";

const iconMap: Record<string, ElementType> = {
  BarChart3,
  MessageSquare,
  FileText,
  Lightbulb,
  ClipboardList,
  Workflow,
  Search,
  Mail,
  ShieldAlert,
  PieChart,
  Hash,
  Building2,
  Target,
  TrendingUp,
  Filter,
  Clock,
  Calendar,
  CheckCircle,
  Play,
  AlertTriangle,
  ArrowUpCircle,
  GitBranch,
  Sparkles,
  Braces,
  Database,
  Repeat,
};

interface ProjectFeaturesProps {
  features: ProjectFeature[];
}

export function ProjectFeatures({ features }: ProjectFeaturesProps) {
  return (
    <section className="py-(--spacing-section-y)">
      <Container>
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Key Features
          </p>
          <h2 className="text-[length:var(--font-size-h2)] font-bold text-foreground mb-10">
            What It Does
          </h2>
        </AnimatedSection>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {features.map((feature, i) => {
            const IconComponent = feature.icon ? iconMap[feature.icon] : null;

            return (
              <StaggerItem key={i}>
                <div className="h-full p-6 rounded-xl border border-border bg-card hover:bg-card-hover hover:border-muted transition-all">
                  {IconComponent && (
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                  )}
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
