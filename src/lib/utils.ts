import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines clsx and tailwind-merge for conditional class merging
 * without Tailwind class conflicts.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Checks if a value is a placeholder string (e.g. "[ADD_...]", "#", or empty)
 */
export function isPlaceholder(value: string | undefined | null): boolean {
  if (!value) return true;
  if (value.trim() === "") return true;
  if (value === "#") return true;
  if (value.startsWith("[ADD_")) return true;
  if (value.startsWith("[add_")) return true;
  return false;
}

/**
 * Checks if a file exists at a public path.
 * For resume and other asset files, this helps determine
 * whether to show or hide download CTAs.
 */
export function hasValue(value: string | undefined | null): boolean {
  return !isPlaceholder(value);
}
