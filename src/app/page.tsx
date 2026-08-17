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
import {
  getSiteSettings,
  getHomepageContent,
  getFeaturedProjects,
  getExperience,
  getSkillGroups,
  getAchievements,
  getContactMethods,
} from "@/sanity/lib/fetch";

export default async function HomePage() {
  const [
    settings,
    homepage,
    featuredProjects,
    experience,
    skillGroups,
    achievements,
    contactMethods,
  ] = await Promise.all([
    getSiteSettings(),
    getHomepageContent(),
    getFeaturedProjects(),
    getExperience(),
    getSkillGroups(),
    getAchievements(),
    getContactMethods(),
  ]);

  return (
    <>
      <HeroSection settings={settings} />
      <CapabilitySection homepage={homepage} />
      <AboutSection />
      <WorkMethodSection homepage={homepage} />
      <FeaturedProjectsSection
        projects={featuredProjects}
        homepage={homepage}
      />
      <ExperiencePreviewSection
        experience={experience}
        homepage={homepage}
      />
      <SkillsSection skillGroups={skillGroups} homepage={homepage} />
      <AchievementsSection
        achievements={achievements}
        homepage={homepage}
      />
      <ResumeCTASection settings={settings} homepage={homepage} />
      <ContactSection
        contactMethods={contactMethods}
        homepage={homepage}
      />
    </>
  );
}
