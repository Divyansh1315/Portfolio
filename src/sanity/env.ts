/**
 * Typed environment variable access for Sanity configuration.
 * Centralizes all Sanity-related env vars with runtime validation.
 */

export const sanityConfig = {
  projectId: assertValue(
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    "NEXT_PUBLIC_SANITY_PROJECT_ID is not set"
  ),
  dataset: assertValue(
    process.env.NEXT_PUBLIC_SANITY_DATASET,
    "NEXT_PUBLIC_SANITY_DATASET is not set"
  ),
  apiVersion:
    process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-12-01",
  /**
   * Used for server-side fetching of draft content.
   * Never exposed to the browser.
   */
  readToken: process.env.SANITY_API_READ_TOKEN,
  /**
   * Secret used to validate revalidation webhook requests.
   */
  revalidateSecret: process.env.SANITY_REVALIDATE_SECRET,
} as const;

function assertValue<T>(value: T | undefined, errorMessage: string): T {
  if (value === undefined || value === "") {
    throw new Error(errorMessage);
  }
  return value;
}
