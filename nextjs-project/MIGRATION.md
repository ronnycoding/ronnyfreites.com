# Migration Guide: Chakra UI to shadcn/ui + Tailwind CSS v4

## Overview

This document outlines the migration from Chakra UI to shadcn/ui with Tailwind CSS v4 for the Next.js portfolio project.

**Migration Date:** October 21, 2025
**Issue:** #4 - [SUB-ISSUE #1] Foundation - Project Setup & Dependencies Migration
**Branch:** issue-3-epic-portfolio-redesign

## What Changed

### Dependencies Removed

- `@chakra-ui/react` (v3.22.0) - Temporarily reinstalled for backward compatibility
- `@emotion/react` (v11.14.0) - Temporarily reinstalled for backward compatibility

**Note:** Chakra UI dependencies were temporarily reinstalled to maintain compatibility with existing components. These will be fully removed in subsequent migration phases as components are converted to shadcn/ui.

### Dependencies Added

#### Animation & Theme Libraries
- `framer-motion` (v12.23.24) - Advanced animation library
- `next-themes` (v0.4.6) - Theme management for Next.js
- `next-intl` (v4.3.12) - Internationalization support

#### 3D Graphics Libraries (Lazy-loaded)
- `@react-three/fiber` (v9.4.0) - React renderer for Three.js
- `@react-three/drei` (v10.7.6) - Helper components for Three.js
- `three` (v0.180.0) - 3D graphics library
- `@types/three` (v0.180.0) - TypeScript types for Three.js

#### UI Utilities
- `class-variance-authority` (v0.7.1) - CVA for component variants
- `clsx` (v2.1.1) - Conditional class names
- `tailwind-merge` (v3.3.1) - Merge Tailwind classes without conflicts
- `lucide-react` (v0.546.0) - Icon library

#### Tailwind CSS Plugins
- `tailwindcss-animate` (v1.0.7) - Animation utilities for Tailwind

### Configuration Changes

#### TypeScript Configuration (`tsconfig.json`)
Enhanced strict mode with additional compiler options:
- `strictNullChecks: true`
- `strictFunctionTypes: true`
- `strictBindCallApply: true`
- `strictPropertyInitialization: true`
- `noImplicitAny: true`
- `noUnusedLocals: true`
- `noUnusedParameters: true`
- `noImplicitReturns: true`
- `noFallthroughCasesInSwitch: true`

#### Tailwind Configuration (`tailwind.config.ts`)
Created comprehensive Tailwind CSS v4 configuration with:
- **Dark mode:** Class-based strategy
- **Custom colors:** shadcn/ui color system with CSS variables
- **Custom animations:** fadeIn, slideUp, slideDown, slideLeft, slideRight, float
- **Custom fonts:** Geist Sans and Geist Mono
- **Border radius:** Dynamic radius variables
- **Chart colors:** 5 pre-defined chart color schemes

#### Global Styles (`src/app/globals.css`)
Updated with shadcn/ui CSS variables:
- Light and dark theme color definitions
- CSS custom properties for theming
- Base styles with Tailwind directives
- Horizontal overflow prevention

#### shadcn/ui Configuration (`components.json`)
Created shadcn/ui configuration:
- **Style:** Default
- **Base color:** Slate
- **CSS variables:** Yes
- **RSC support:** Yes
- **TypeScript:** Yes
- **Path aliases:** Configured for components, utils, ui, lib, hooks

### Directory Structure

Created new organized directory structure:

```
src/
├── app/                    # Next.js app directory (existing)
├── components/
│   ├── ui/                # shadcn/ui components (auto-created)
│   │   ├── accordion.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── navigation-menu.tsx
│   │   ├── separator.tsx
│   │   ├── skeleton.tsx
│   │   ├── tabs.tsx
│   │   └── tooltip.tsx
│   ├── sections/          # Section components (new)
│   ├── interactive/       # Interactive components (new)
│   └── shared/            # Shared components (new)
├── lib/                   # Utility functions (new)
│   ├── utils.ts          # cn() utility and helpers
│   └── constants.ts      # App constants and configuration
├── hooks/                 # Custom React hooks (new)
└── types/                 # TypeScript type definitions (new)
    └── index.ts          # Common types
```

### Utility Functions

#### `src/lib/utils.ts`
```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
```

**Purpose:** Combines class names using clsx and tailwind-merge to prevent class conflicts.

#### `src/lib/constants.ts`
- Application constants (name, description)
- Social media links
- Navigation sections
- Animation configuration
- Breakpoints matching Tailwind defaults

#### `src/types/index.ts`
Common TypeScript interfaces:
- `NavItem` - Navigation items
- `SocialLink` - Social media links
- `SkillCategory` - Skill categories
- `Skill` - Individual skills
- `Experience` - Work experience
- `Project` - Portfolio projects
- `AnimationVariants` - Animation configurations

## shadcn/ui Components Installed

The following components have been installed and are ready to use:

1. **Accordion** - Expandable/collapsible content
2. **Button** - Primary button component
3. **Card** - Content container with header, content, footer
4. **Dialog** - Modal dialogs
5. **Dropdown Menu** - Contextual menus
6. **Navigation Menu** - Navigation components
7. **Separator** - Visual divider
8. **Skeleton** - Loading placeholders
9. **Tabs** - Tabbed interfaces
10. **Tooltip** - Hover information

## How to Use shadcn/ui Components

### Basic Usage

```typescript
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello World</CardTitle>
        <CardDescription>This is a shadcn/ui card</CardDescription>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
}
```

### Using the cn() Utility

```typescript
import { cn } from "@/lib/utils";

export function MyComponent({ className }: { className?: string }) {
  return (
    <div className={cn("bg-primary text-white p-4", className)}>
      Content
    </div>
  );
}
```

### Adding More Components

To add additional shadcn/ui components:

```bash
bunx --bun shadcn@latest add [component-name]
```

Example:
```bash
bunx --bun shadcn@latest add input
bunx --bun shadcn@latest add form
bunx --bun shadcn@latest add select
```

## Testing & Validation

### All Tests Passed ✓

1. **TypeScript Compilation:** No errors
   ```bash
   bunx tsc --noEmit
   ```

2. **ESLint:** No warnings or errors
   ```bash
   bun lint
   ```

3. **Production Build:** Successful
   ```bash
   bunx next build
   ```

4. **Dev Server:** Starts without errors
   ```bash
   bun dev
   ```

## Migration Status

### Completed ✓
- [x] Remove Chakra UI dependencies (temporarily reinstalled)
- [x] Install new dependencies
- [x] Initialize shadcn/ui
- [x] Install base components
- [x] Update TypeScript configuration
- [x] Create Tailwind configuration
- [x] Update global styles
- [x] Create directory structure
- [x] Create utility files
- [x] Fix TypeScript errors
- [x] Test dev server, build, and lint

### Pending (Future Sub-Issues)
- [ ] Migrate Navigation component
- [ ] Migrate Hero section
- [ ] Migrate Experience section
- [ ] Migrate Skills section
- [ ] Migrate Projects section
- [ ] Migrate Contact section
- [ ] Remove Chakra UI completely

## Important Notes

1. **Chakra UI Compatibility:** Existing components continue to use Chakra UI. They will be migrated incrementally in subsequent sub-issues.

2. **Strict TypeScript:** TypeScript strict mode is now enabled. All new code must comply with strict type checking.

3. **Tailwind CSS v4:** The project uses Tailwind CSS v4. Ensure you're familiar with the latest features and breaking changes.

4. **Path Aliases:** Use `@/` prefix for imports (e.g., `@/components/ui/button`, `@/lib/utils`).

5. **Component Strategy:** New components should use shadcn/ui + Tailwind CSS. Avoid using Chakra UI for new development.

6. **Animation Strategy:** Use Framer Motion for complex animations and Tailwind CSS animations for simple transitions.

7. **3D Components:** Three.js components should be lazy-loaded to optimize bundle size.

## Next Steps

The foundation is now in place for the portfolio redesign. Subsequent sub-issues will:

1. **SUB-ISSUE #2:** Configure i18n for English/Spanish support
2. **SUB-ISSUE #3:** Implement theme system with dark/light mode
3. **SUB-ISSUE #4:** Create reusable component library
4. **SUB-ISSUE #5:** Implement responsive layouts
5. **SUB-ISSUE #6:** Migrate Hero section
6. And more...

## Support & Resources

- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Three.js Documentation](https://threejs.org/docs/)

## Troubleshooting

### Issue: Component not found
**Solution:** Ensure the component is installed via `bunx --bun shadcn@latest add [component]`

### Issue: Tailwind classes not working
**Solution:** Verify `tailwind.config.ts` includes the correct content paths

### Issue: TypeScript errors in components
**Solution:** Check that strict mode requirements are met (proper types, null checks, etc.)

### Issue: Build fails
**Solution:** Run `bunx tsc --noEmit` to identify TypeScript errors

## Contributors

- **Ronny Freites** - Initial migration and setup

---

**Last Updated:** October 21, 2025
**Version:** 1.0.0
