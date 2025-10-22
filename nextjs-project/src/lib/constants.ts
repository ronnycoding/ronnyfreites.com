/**
 * Application constants and configuration
 */

export const APP_NAME = "Ronny Freites - Portfolio";
export const APP_DESCRIPTION = "Senior Software Engineer | Full-Stack Developer | E-commerce Specialist";

/**
 * Social media links
 */
export const SOCIAL_LINKS = {
  github: "https://github.com/ronnycoding",
  linkedin: "https://linkedin.com/in/ronnyfreites",
  twitter: "https://twitter.com/ronnycoding",
  email: "mailto:ronny@example.com",
} as const;

/**
 * Navigation sections
 */
export const NAV_SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

/**
 * Animation configuration
 */
export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
  },
  ease: {
    default: [0.25, 0.1, 0.25, 1],
    smooth: [0.4, 0, 0.2, 1],
    bounce: [0.68, -0.55, 0.265, 1.55],
  },
} as const;

/**
 * Breakpoints (matching Tailwind defaults)
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;
