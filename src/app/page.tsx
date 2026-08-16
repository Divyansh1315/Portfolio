import { HeroSection } from "@/components/sections/HeroSection";
import { CapabilitySection } from "@/components/sections/CapabilitySection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WorkMethodSection } from "@/components/sections/WorkMethodSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { ExperiencePreviewSection } from "@/components/sections/ExperiencePreviewSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { ResumeCTASection } from "@/components/sections/ResumeCTASection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CapabilitySection />
      <AboutSection />
      <WorkMethodSection />
      <FeaturedProjectsSection />
      <ExperiencePreviewSection />
      <SkillsSection />
      <AchievementsSection />
      <ResumeCTASection />
      <ContactSection />
    </>
  );
}
