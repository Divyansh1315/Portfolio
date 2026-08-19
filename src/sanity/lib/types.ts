/**
 * Typed interfaces for Sanity query results.
 * Maps to the GROQ projections in queries.ts.
 */

export interface SanityImageAsset {
  _id: string;
  url: string;
}

export interface SanityImage {
  asset: SanityImageAsset | null;
  alt?: string;
}

export interface SanityFileAsset {
  _id: string;
  url: string;
  originalFilename?: string;
}

export interface SanityFile {
  asset: SanityFileAsset | null;
}

export interface SanitySiteSettings {
  name: string;
  headline: string;
  tagline: string;
  summary: string;
  profileImage: SanityImage | null;
  availabilityStatus: string | null;
  showAvailability: boolean;
  primaryCtaLabel: string | null;
  primaryCtaUrl: string | null;
  secondaryCtaLabel: string | null;
  secondaryCtaUrl: string | null;
  siteUrl: string;
  defaultSeoTitle: string;
  defaultSeoDescription: string;
  defaultOgImage: SanityImage | null;
  resumeFile: SanityFile | null;
  resumeButtonLabel: string | null;
  showResumeCta: boolean;
  footerText: string | null;
}

export interface SanityHomepageContent {
  capabilitiesEyebrow: string | null;
  capabilitiesHeading: string | null;
  capabilitiesDescription: string | null;
  workMethodEyebrow: string | null;
  workMethodHeading: string | null;
  workMethodDescription: string | null;
  projectsEyebrow: string | null;
  projectsHeading: string | null;
  projectsDescription: string | null;
  experienceEyebrow: string | null;
  experienceHeading: string | null;
  experienceDescription: string | null;
  skillsEyebrow: string | null;
  skillsHeading: string | null;
  skillsDescription: string | null;
  achievementsEyebrow: string | null;
  achievementsHeading: string | null;
  resumeCtaHeading: string | null;
  resumeCtaDescription: string | null;
  contactEyebrow: string | null;
  contactHeading: string | null;
  contactDescription: string | null;
}

export interface SanityAbout {
  eyebrow: string | null;
  heading: string;
  shortIntro: string;
  biography: unknown[] | null; // Portable Text blocks
  profileImage: SanityImage | null;
  focusAreas: string[] | null;
  careerHighlights: string[] | null;
  location: string | null;
  currentRole: string | null;
  yearsOfExperience: number | null;
  isVisible: boolean;
}

export interface SanityArchitectureStep {
  _key: string;
  title: string;
  description?: string;
}

export interface SanityProjectFeature {
  _key: string;
  title: string;
  description: string;
  icon?: string;
}

export interface SanityProjectScreenshot {
  _key: string;
  image: SanityImage | null;
  title: string;
  description?: string;
  alt: string;
}

export interface SanityTechGroup {
  _key: string;
  label: string;
  items: string[];
}

export interface SanityProjectChallenge {
  _key: string;
  challenge: string;
  decision: string;
}

/** Controlled project type categories for portfolio grouping. */
export type SanityProjectType = "sql" | "power-bi" | "excel" | "ai" | "automation";

export interface SanityProject {
  _id: string;
  title: string;
  slug: { current: string };
  subtitle: string;
  description: string;
  category: string[];
  technologies: string[];
  featured: boolean;
  coverImage: SanityImage | null;
  liveUrl?: string;
  githubUrl?: string;
  documentationUrl?: string;
  projectType?: SanityProjectType;
  role?: string;
  timeline?: string;
  status?: string;
  displayOrder: number;
  // Case study fields (only in full project query)
  overview?: string;
  businessProblem?: string[];
  objective?: string;
  roleDetails?: string[];
  solution?: string;
  architecture?: SanityArchitectureStep[];
  features?: SanityProjectFeature[];
  screenshots?: SanityProjectScreenshot[];
  techGroups?: SanityTechGroup[];
  businessValue?: string[];
  challenges?: SanityProjectChallenge[];
  learnings?: string[];
  confidentialityNote?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoImage?: SanityImage | null;
}

export interface SanityExperience {
  _id: string;
  company: string;
  role: string;
  employmentType?: string;
  location?: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  summary?: string;
  responsibilities?: string[];
  achievements?: string[];
  technologies?: string[];
  companyLogo: SanityImage | null;
  displayOrder: number;
  featured: boolean;
}

export interface SanitySkillGroup {
  _id: string;
  name: string;
  description?: string;
  skills: { _key: string; name: string; level?: string }[];
  icon?: string;
  displayOrder: number;
}

export interface SanityCertification {
  _id: string;
  name: string;
  issuer?: string;
  issueDate?: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  certificateImage: SanityImage | null;
  description?: string;
  skillsDemonstrated?: string[];
  featured: boolean;
  displayOrder: number;
}

export interface SanityAchievement {
  _id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  icon?: string;
  displayOrder: number;
}

export interface SanityContactMethod {
  _id: string;
  type: string;
  label: string;
  value?: string;
  url: string;
  icon: string;
  isPreferred: boolean;
  displayOrder: number;
}
