# Ronny Freites - Portfolio Website

A modern, performant portfolio website built with Next.js 15, React 19, and shadcn/ui.

## Tech Stack

### Core Framework
- **Next.js 15.4.2** - React framework with App Router
- **React 19.1.0** - Latest React with concurrent features
- **TypeScript 5.x** - Strict type checking enabled
- **Bun** - Fast JavaScript runtime and package manager

### UI & Styling
- **shadcn/ui** - High-quality React components
- **Tailwind CSS v4** - Utility-first CSS framework
- **tailwindcss-animate** - Animation utilities
- **Lucide React** - Beautiful icon library

### Animation & Interaction
- **Framer Motion 12.x** - Production-ready animation library
- **React Three Fiber** - React renderer for Three.js (lazy-loaded)
- **Drei** - Helper components for Three.js

### Features
- **next-themes** - Dark/light mode support
- **next-intl** - Internationalization (English/Spanish)
- **react-icons** - Additional icon library

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles with CSS variables
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── sections/          # Page sections (Hero, Experience, etc.)
│   ├── interactive/       # Interactive components
│   └── shared/            # Shared/reusable components
├── lib/
│   ├── utils.ts          # Utility functions (cn, etc.)
│   └── constants.ts      # App constants
├── hooks/                 # Custom React hooks
└── types/                 # TypeScript type definitions
```

## Getting Started

### Prerequisites
- [Bun](https://bun.sh) installed on your machine

### Installation

```bash
# Install dependencies
bun install
```

### Development

```bash
# Run development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Build

```bash
# Create production build
bunx next build

# Start production server
bun start
```

### Linting

```bash
# Run ESLint
bun lint
```

### Type Checking

```bash
# Check TypeScript types
bunx tsc --noEmit
```

## Component Usage

### shadcn/ui Components

This project uses [shadcn/ui](https://ui.shadcn.com) components. To add new components:

```bash
bunx --bun shadcn@latest add [component-name]
```

Example:
```bash
bunx --bun shadcn@latest add input
bunx --bun shadcn@latest add form
bunx --bun shadcn@latest add select
```

### Using Components

```typescript
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello World</CardTitle>
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

## TypeScript Configuration

This project uses strict TypeScript mode with the following compiler options:
- `strictNullChecks`
- `strictFunctionTypes`
- `strictBindCallApply`
- `strictPropertyInitialization`
- `noImplicitAny`
- `noUnusedLocals`
- `noUnusedParameters`
- `noImplicitReturns`
- `noFallthroughCasesInSwitch`

## Styling

### Tailwind CSS

This project uses Tailwind CSS v4 with a custom configuration that includes:
- Custom color system with CSS variables
- Dark mode support (class-based)
- Custom animations (fadeIn, slideUp, slideDown, float, etc.)
- Responsive breakpoints

### Custom Animations

```typescript
// Using Tailwind animations
<div className="animate-fadeIn">Content</div>
<div className="animate-slideUp">Content</div>

// Using Framer Motion
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

## Migration Guide

This project was migrated from Chakra UI to shadcn/ui. See [MIGRATION.md](./MIGRATION.md) for:
- Detailed migration steps
- Component mapping
- Breaking changes
- Troubleshooting guide

## Features

- Modern, responsive design
- Dark/light mode support
- Smooth animations and transitions
- Optimized performance with React 19 features
- Full TypeScript coverage
- Accessible components (WCAG compliant)
- SEO optimized
- Internationalization ready (English/Spanish)

## Scripts

- `bun dev` - Start development server
- `bun build` - Create production build
- `bun start` - Start production server
- `bun lint` - Run ESLint
- `bunx tsc --noEmit` - Type check

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Documentation](https://react.dev)

## Deploy

This project can be deployed to:
- [Vercel](https://vercel.com) (recommended)
- [Netlify](https://www.netlify.com)
- Any platform supporting Next.js

## License

This is a personal portfolio project.

## Author

**Ronny Freites**
- GitHub: [@ronnycoding](https://github.com/ronnycoding)
- LinkedIn: [ronnyfreites](https://linkedin.com/in/ronnyfreites)

---

Built with Next.js, shadcn/ui, and Tailwind CSS
