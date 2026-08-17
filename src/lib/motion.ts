/**
 * Shared motion presets for consistent animations across the portfolio.
 * All animations respect prefers-reduced-motion via the useReducedMotion hook
 * and the CSS media query in globals.css.
 */

/** Standard durations (seconds) */
export const duration = {
  fast: 0.25,
  base: 0.4,
  slow: 0.6,
} as const;

/** Standard easing curves */
export const ease = {
  out: [0.16, 1, 0.3, 1] as number[],
  inOut: [0.65, 0, 0.35, 1] as number[],
};

/** Stagger delay between child animations */
export const stagger = {
  fast: 0.06,
  base: 0.1,
  slow: 0.15,
} as const;

/** Fade-up entrance used across sections and cards */
export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease: ease.out },
  },
} as const;

/** Fade-in without vertical movement */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.base, ease: ease.out },
  },
} as const;

/** Scale entrance for visual elements */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.slow, ease: ease.out },
  },
} as const;

/** Stagger container — children animate in sequence */
export const staggerContainer = (delay = stagger.base) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: delay },
  },
});

/**
 * Returns reduced-motion-safe variants.
 * When reduced motion is preferred, strips transforms and uses instant opacity.
 */
export function getReducedMotionVariants(variants: {
  hidden: Record<string, unknown>;
  visible: Record<string, unknown>;
}) {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.01 },
    },
    // Keep originals accessible for runtime checks
    _original: variants,
  };
}

/** Viewport trigger settings for whileInView */
export const viewport = {
  once: true,
  margin: "-80px" as const,
};
