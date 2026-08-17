import { createClient } from "next-sanity";
import { sanityConfig } from "./env";

/**
 * Sanity client for fetching published content.
 * Used in Server Components and API routes.
 */
export const client = createClient({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  apiVersion: sanityConfig.apiVersion,
  useCdn: true,
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
