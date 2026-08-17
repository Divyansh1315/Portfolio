/**
 * Centralized data fetching functions for Sanity content.
 * Each function returns typed data ready for component consumption.
 * Handles caching via Next.js revalidation tags.
 */
import { client } from "../client";
import {
  siteSettingsQuery,
  homepageContentQuery,
  aboutQuery,
  allProjectsQuery,
  featuredProjectsQuery,
  projectBySlugQuery,
  projectSlugsQuery,
  experienceQuery,
  skillGroupsQuery,
  certificationsQuery,
  achievementsQuery,
  contactMethodsQuery,
} from "./queries";
import type {
  SanityProject,
  SanityExperience,
  SanitySkillGroup,
  SanityCertification,
  SanityAchievement,
  SanityContactMethod,
  SanitySiteSettings,
  SanityAbout,
  SanityHomepageContent,
} from "./types";

/**
 * Fetch with Next.js caching and revalidation tags.
 */
async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  tags: string[] = []
): Promise<T> {
  return client.fetch<T>(query, params, {
    next: {
      revalidate: 60, // Revalidate every 60 seconds by default
      tags,
    },
  });
}

// ─── Public fetch functions ─────────────────────────────────────────────────────

export async function getSiteSettings(): Promise<SanitySiteSettings | null> {
  return sanityFetch<SanitySiteSettings | null>(
    siteSettingsQuery,
    {},
    ["siteSettings"]
  );
}

export async function getHomepageContent(): Promise<SanityHomepageContent | null> {
  return sanityFetch<SanityHomepageContent | null>(
    homepageContentQuery,
    {},
    ["homepageContent"]
  );
}

export async function getAbout(): Promise<SanityAbout | null> {
  return sanityFetch<SanityAbout | null>(aboutQuery, {}, ["about"]);
}

export async function getAllProjects(): Promise<SanityProject[]> {
  return sanityFetch<SanityProject[]>(allProjectsQuery, {}, ["projects"]);
}

export async function getFeaturedProjects(): Promise<SanityProject[]> {
  return sanityFetch<SanityProject[]>(featuredProjectsQuery, {}, ["projects"]);
}

export async function getProjectBySlug(
  slug: string
): Promise<SanityProject | null> {
  return sanityFetch<SanityProject | null>(
    projectBySlugQuery,
    { slug },
    ["projects", `project-${slug}`]
  );
}

export async function getProjectSlugs(): Promise<{ slug: string }[]> {
  return sanityFetch<{ slug: string }[]>(projectSlugsQuery, {}, ["projects"]);
}

export async function getExperience(): Promise<SanityExperience[]> {
  return sanityFetch<SanityExperience[]>(experienceQuery, {}, ["experience"]);
}

export async function getSkillGroups(): Promise<SanitySkillGroup[]> {
  return sanityFetch<SanitySkillGroup[]>(skillGroupsQuery, {}, ["skills"]);
}

export async function getCertifications(): Promise<SanityCertification[]> {
  return sanityFetch<SanityCertification[]>(certificationsQuery, {}, [
    "certifications",
  ]);
}

export async function getAchievements(): Promise<SanityAchievement[]> {
  return sanityFetch<SanityAchievement[]>(achievementsQuery, {}, [
    "achievements",
  ]);
}

export async function getContactMethods(): Promise<SanityContactMethod[]> {
  return sanityFetch<SanityContactMethod[]>(contactMethodsQuery, {}, [
    "contact",
  ]);
}
