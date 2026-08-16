"use client";

import { Achievement } from "@/types/portfolio";
import { Badge } from "@/components/ui/Badge";
import { GraduationCap, Lightbulb, BarChart3 } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

const achievementIcons: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="h-5 w-5" />,
  Lightbulb: <Lightbulb className="h-5 w-5" />,
  BarChart3: <BarChart3 className="h-5 w-5" />,
};

interface AchievementCardsProps {
  achievements: Achievement[];
}

export function AchievementCards({ achievements }: AchievementCardsProps) {
  return (
    <StaggerContainer
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      staggerDelay={0.1}
    >
      {achievements.map((achievement) => (
        <StaggerItem key={achievement.id}>
          <div className="flex flex-col h-full p-6 rounded-xl border border-border bg-card hover:border-muted transition-all duration-300">
            {/* Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent mb-4">
              {achievementIcons[achievement.icon ?? ""] ?? <Lightbulb className="h-5 w-5" />}
            </div>

            {/* Category Badge */}
            <Badge variant="accent" className="mb-3 self-start">
              {achievement.category}
            </Badge>

            {/* Title */}
            <h3 className="text-base font-semibold text-foreground mb-2">
              {achievement.title}
            </h3>

            {/* Description */}
            <p className="text-sm leading-relaxed text-muted-foreground">
              {achievement.description}
            </p>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
