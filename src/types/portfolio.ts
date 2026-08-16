export interface PersonalInfo {
  name: string;
  headline: string;
  tagline: string;
  summary: string;
  email: string;
  linkedIn: string;
  github: string;
  resumePath: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ArchitectureStep {
  title: string;
  description?: string;
}

export interface ProjectScreenshot {
  src?: string;
  title: string;
  description?: string;
  alt: string;
}

export interface ProjectChallenge {
  challenge: string;
  decision: string;
}

export interface TechGroup {
  label: string;
  items: string[];
}

export interface ProjectCaseStudy {
  overview: string;
  businessProblem: string[];
  objective: string;
  role: string[];
  solution: string;
  architecture: ArchitectureStep[];
  features: ProjectFeature[];
  screenshots: ProjectScreenshot[];
  techGroups: TechGroup[];
  businessValue: string[];
  challenges: ProjectChallenge[];
  learnings: string[];
  confidentialityNote?: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string[];
  description: string;
  technologies: string[];
  featured: boolean;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudy?: ProjectCaseStudy;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate?: string;
  endDate?: string;
  current?: boolean;
  location?: string;
  summary?: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level?: "beginner" | "intermediate" | "advanced" | "expert";
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  icon?: string;
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  icon: string;
}

export interface WorkMethodStep {
  number: string;
  title: string;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  qualification: string;
  field?: string;
  startDate?: string;
  endDate?: string;
  location?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer?: string;
  issueDate?: string;
  credentialUrl?: string;
  credentialId?: string;
  description?: string;
}

export interface SkillUsage {
  skill: string;
  context: string;
}

export interface ExperienceTheme {
  id: string;
  title: string;
  description: string;
  icon: string;
}
