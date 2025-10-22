/**
 * Common type definitions for the portfolio application
 */

/**
 * Navigation item
 */
export interface NavItem {
  id: string;
  label: string;
  href?: string;
}

/**
 * Social link
 */
export interface SocialLink {
  name: string;
  url: string;
  icon?: React.ComponentType<{ className?: string }>;
}

/**
 * Skill category
 */
export interface SkillCategory {
  name: string;
  skills: Skill[];
}

/**
 * Individual skill
 */
export interface Skill {
  name: string;
  level?: number;
  icon?: React.ComponentType<{ className?: string }>;
}

/**
 * Work experience
 */
export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  achievements?: string[];
  technologies?: string[];
}

/**
 * Project
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  links?: {
    demo?: string;
    github?: string;
    website?: string;
  };
}

/**
 * Animation variants
 */
export interface AnimationVariants {
  initial?: Record<string, unknown>;
  animate?: Record<string, unknown>;
  exit?: Record<string, unknown>;
  transition?: Record<string, unknown>;
}
