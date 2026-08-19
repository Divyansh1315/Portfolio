import { createClient } from "next-sanity";
import { sanityConfig } from "./env";

/**
 * Sanity client for fetching published content.
 * Used in Server Components and API routes.
 *
 * useCdn is disabled because Next.js ISR + on-demand revalidation
 * (via Sanity webhook) handles caching. Using the CDN would add
 * a second cache layer that delays freshly published content from
 * appearing after revalidation.
 */
export const client = createClient({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  apiVersion: sanityConfig.apiVersion,
  useCdn: false,
  perspective: "published",
});

/**
 * Sanity client for fetching draft content in preview mode.
 * Uses a read token and disables CDN caching.
 * Only used server-side — never exposed to the browser.
 */
export const previewClient = createClient({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  apiVersion: sanityConfig.apiVersion,
  useCdn: false,
  token: sanityConfig.readToken,
  perspective: "drafts",
});

/**
 * Returns the appropriate client based on preview mode.
 */
export function getClient(preview = false) {
  return preview ? previewClient : client;
}
