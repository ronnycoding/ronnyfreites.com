# [SUB-ISSUE #1] Foundation - Project Setup & Dependencies Migration

## 🔗 Parent Issue
Part of **[EPIC] Next.js Portfolio Website - Complete Redesign with AI/Tech Aesthetic**

## 📋 Summary
Migrate project dependencies from Chakra UI to shadcn/ui + Tailwind CSS v4, upgrade packages, and establish the foundation for the complete portfolio redesign. This is the critical first step that all other sub-issues depend on.

## 🎯 Scope

### In Scope
- Remove Chakra UI dependencies (@chakra-ui/react, @emotion/react)
- Install and configure Tailwind CSS v4 (already in devDependencies, needs configuration)
- Install shadcn/ui CLI and initialize component system
- Install Framer Motion for animations
- Install next-themes for dark/light mode support
- Install next-intl for internationalization (setup in separate issue)
- Install React Three Fiber and related 3D libraries (lazy-loaded)
- Update TypeScript configuration to strict mode
- Set up project directory structure for new architecture
- Create base configuration files (tailwind.config.ts, components.json)
- Verify Next.js 15.4.2 compatibility with all new dependencies

### Out of Scope
- Actual i18n configuration (handled by #2)
- Theme provider implementation (handled by #3)
- Component migration (handled by subsequent issues)
- Content migration from resume.md (handled by content-specific issues)
- Animation implementation (handled by #15)

## 🔧 Technical Details

### Implementation Approach

#### 1. Dependency Cleanup
```bash
# Remove Chakra UI
bun remove @chakra-ui/react @emotion/react

# Verify removal from package.json
```

#### 2. Install Core Dependencies
```bash
# Tailwind CSS v4 (already installed, verify configuration)
# Install shadcn/ui
bunx --bun shadcn@latest init

# Install animation and interaction libraries
bun add framer-motion

# Install theme system
bun add next-themes

# Install i18n foundation
bun add next-intl

# Install 3D libraries (lazy-loaded in components)
bun add @react-three/fiber @react-three/drei three
bun add -D @types/three

# Install UI utilities
bun add class-variance-authority clsx tailwind-merge
bun add lucide-react # for icons
```

#### 3. TypeScript Strict Mode Configuration
Update `tsconfig.json`:
```json
{
  "compilerOptions": {
    "strict": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitAny": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    // ... existing Next.js config
  }
}
```

#### 4. Tailwind CSS v4 Configuration
Create/update `tailwind.config.ts`:
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark mode colors
        'dark-bg': '#0A0E27',
        'dark-secondary-bg': '#151B3B',
        'dark-card-bg': '#1A2142',
        'dark-text': '#E8EAED',
        'dark-border': 'rgba(255, 255, 255, 0.1)',
        // Light mode colors
        'light-bg': '#FAFBFC',
        'light-secondary-bg': '#FFFFFF',
        'light-card-bg': '#FFFFFF',
        'light-text': '#1F2937',
        'light-border': 'rgba(0, 0, 0, 0.08)',
        // Accent colors
        'accent-cyan': '#00D9FF',
        'accent-cyan-dark': '#0891B2',
        'accent-purple': '#7C3AED',
        'accent-purple-dark': '#6D28D9',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'var(--font-geist-sans)', 'sans-serif'],
        mono: ['JetBrains Mono', 'var(--font-geist-mono)', 'monospace'],
        geometric: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
```

#### 5. shadcn/ui Configuration
Initialize shadcn/ui and install base components:
```bash
# Initialize (interactive CLI)
bunx --bun shadcn@latest init

# Install essential components
bunx --bun shadcn@latest add button
bunx --bun shadcn@latest add card
bunx --bun shadcn@latest add dialog
bunx --bun shadcn@latest add dropdown-menu
bunx --bun shadcn@latest add navigation-menu
bunx --bun shadcn@latest add separator
bunx --bun shadcn@latest add skeleton
bunx --bun shadcn@latest add tabs
bunx --bun shadcn@latest add tooltip
bunx --bun shadcn@latest add accordion
bunx --bun shadcn@latest add carousel
```

#### 6. Directory Structure
Create new directory structure:
```
src/
├── app/
│   ├── [locale]/          # i18n routing (created in #2)
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── layout.tsx
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── sections/          # Page sections
│   │   ├── HeroSection/
│   │   ├── AboutSection/
│   │   ├── ExperienceSection/
│   │   ├── ProjectsSection/
│   │   ├── CertificationsSection/
│   │   ├── ContactSection/
│   │   └── Footer/
│   ├── interactive/       # Interactive elements
│   │   ├── FloatingActionButton/
│   │   ├── CursorEffects/
│   │   └── ScrollProgress/
│   └── shared/            # Shared components
│       ├── Navigation/
│       ├── ThemeToggle/
│       └── LanguageSwitcher/
├── lib/
│   ├── utils.ts           # Utility functions
│   └── constants.ts       # Constants
├── hooks/
│   ├── useScrollProgress.ts
│   ├── useIntersectionObserver.ts
│   └── useMediaQuery.ts
├── types/
│   └── index.ts           # Type definitions
└── styles/
    └── globals.css        # Global styles
```

### Dependencies

#### Blocks
- None (first issue in dependency chain)

#### Blocked By
- None

#### External Dependencies
```json
{
  "dependencies": {
    "next": "15.4.2",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "framer-motion": "^11.0.0",
    "next-themes": "^0.4.0",
    "next-intl": "^3.25.0",
    "@react-three/fiber": "^8.16.0",
    "@react-three/drei": "^9.105.0",
    "three": "^0.164.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0",
    "lucide-react": "^0.index.363.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@types/three": "^0.164.0",
    "eslint": "^9",
    "eslint-config-next": "15.4.2",
    "tailwindcss": "^4",
    "tailwindcss-animate": "^1.0.7",
    "typescript": "^5"
  }
}
```

### Interface Definition

```yaml
inputs:
  - current_dependencies: package.json with Chakra UI
  - current_structure: src/ directory with existing components

outputs:
  - updated_dependencies: package.json with new stack
  - tailwind_config: configured tailwind.config.ts
  - tsconfig: strict mode TypeScript configuration
  - components_json: shadcn/ui configuration
  - directory_structure: new organized file structure
  - utility_files: lib/utils.ts, lib/constants.ts
  - base_ui_components: shadcn/ui components installed

provides_to_next_issues:
  - configured_tailwind: Tailwind CSS v4 ready for styling
  - shadcn_components: UI component library for building sections
  - typescript_strict: Type-safe development environment
  - directory_structure: Organized codebase for new components
  - animation_library: Framer Motion ready for use
  - theme_library: next-themes ready for dark/light mode
  - i18n_library: next-intl ready for configuration
```

## ✅ Acceptance Criteria

### Functional
- [ ] All Chakra UI dependencies removed from package.json
- [ ] All new dependencies installed successfully with correct versions
- [ ] `bun dev` starts without errors
- [ ] `bun build` completes successfully
- [ ] TypeScript strict mode enabled with no errors in existing code
- [ ] Tailwind CSS classes work in components
- [ ] shadcn/ui components render correctly
- [ ] Directory structure created and organized

### Technical
- [ ] No dependency version conflicts
- [ ] package.json has correct dependency versions
- [ ] tsconfig.json has strict mode enabled
- [ ] tailwind.config.ts properly configured with custom colors
- [ ] components.json created by shadcn/ui init
- [ ] lib/utils.ts contains cn() utility function
- [ ] All TypeScript errors resolved
- [ ] ESLint passes with no errors

### Documentation
- [ ] Updated README.md with new tech stack
- [ ] Documented color palette in tailwind.config.ts
- [ ] Added comments to configuration files
- [ ] Created MIGRATION.md documenting changes

## 🧪 Testing Checklist

- [ ] Run `bun install` - installs without errors
- [ ] Run `bun dev` - starts development server
- [ ] Run `bun build` - builds successfully
- [ ] Run `bun lint` - no linting errors
- [ ] Import shadcn/ui Button component - renders correctly
- [ ] Apply Tailwind classes - styling works
- [ ] Check TypeScript strict mode - no type errors
- [ ] Verify directory structure - all folders exist

## 📦 Deliverables

1. **Updated package.json** with all new dependencies
2. **tailwind.config.ts** with custom design system
3. **tsconfig.json** with strict mode enabled
4. **components.json** from shadcn/ui
5. **Directory structure** as specified above
6. **lib/utils.ts** with utility functions
7. **lib/constants.ts** with project constants
8. **Updated README.md** documenting new stack
9. **MIGRATION.md** documenting changes from Chakra UI

## ⏱️ Time Estimate
**8-12 hours** (including testing and documentation)

## 🏷️ Labels
`foundation`, `dependencies`, `configuration`, `critical`, `phase-1`

## 👤 Assignee
Backend/Infrastructure specialist or full-stack developer with Next.js experience

## 🔗 Related Issues
- Blocks: #2 (i18n Configuration)
- Blocks: #3 (Theme System)
- Blocks: #4 (Tailwind + shadcn/ui Setup)
- Blocks: All subsequent component issues

## 📝 Notes
- Use Bun package manager (already configured in project)
- Test thoroughly before marking complete - this is critical path
- Keep Chakra UI components temporarily for reference during migration
- Create feature branch: `feature/foundation-setup`
- PR should include before/after screenshots of `bun dev` output
- Ensure all team members can run project after merge
