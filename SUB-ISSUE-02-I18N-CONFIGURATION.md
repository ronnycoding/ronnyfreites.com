# [SUB-ISSUE #2] Foundation - i18n Configuration with next-intl

## 🔗 Parent Issue
Part of **[EPIC] Next.js Portfolio Website - Complete Redesign with AI/Tech Aesthetic**

## 📋 Summary
Implement internationalization (i18n) using next-intl for English and Spanish language support with Server-Side Rendering (SSR) compatibility, locale-aware routing, and translation file structure.

## 🎯 Scope

### In Scope
- Configure next-intl with App Router for Next.js 15
- Set up locale routing structure (/en/, /es/)
- Create translation JSON files for English and Spanish
- Extract all content from resume.md into translation files
- Implement locale detection and routing middleware
- Create language switcher component skeleton (styling in #5)
- Configure locale-aware meta tags and OpenGraph
- Set up SSR-compatible translation loading
- Implement URL structure for locale switching
- Add RTL support infrastructure (future-proof)

### Out of Scope
- Language switcher UI design and animations (handled by #5)
- Translation of components not yet created
- Automatic translation services integration
- Content management system for translations
- Translation validation/linting tools

## 🔧 Technical Details

### Implementation Approach

#### 1. next-intl Configuration
Create `i18n.ts` in project root:
```typescript
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Supported locales
export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
    timeZone: 'America/Costa_Rica',
    now: new Date()
  };
});
```

#### 2. Middleware for Locale Routing
Create/update `middleware.ts`:
```typescript
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Never redirect to default locale
  localePrefix: 'always'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|es)/:path*']
};
```

#### 3. App Router Structure
Update `src/app/` directory:
```
src/app/
├── [locale]/
│   ├── layout.tsx        # Locale-specific layout
│   ├── page.tsx          # Home page
│   └── not-found.tsx     # 404 page
├── layout.tsx            # Root layout
├── not-found.tsx         # Root 404
└── globals.css
```

**Root Layout** (`src/app/layout.tsx`):
```typescript
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Ronny Freites',
    default: 'Ronny Freites - AI Software Engineer Consultant',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
```

**Locale Layout** (`src/app/[locale]/layout.tsx`):
```typescript
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate locale
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Fetch messages
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

#### 4. Translation File Structure
Create `messages/` directory in project root:

**messages/en.json**:
```json
{
  "navigation": {
    "about": "About",
    "experience": "Experience",
    "projects": "Projects",
    "certifications": "Certifications",
    "blog": "Blog",
    "contact": "Contact"
  },
  "hero": {
    "name": "Ronny Freites",
    "tagline": "Full-Stack Product Engineer | AI-Powered Product Builder | Content Creator for Software Engineers",
    "stats": {
      "experience": "9+ Years Experience",
      "followers": "1,110+ Followers",
      "certifications": "54 Certifications"
    },
    "location": "San José, Costa Rica",
    "cta": {
      "projects": "View Projects",
      "consultation": "Schedule Consultation"
    },
    "availability": "Available for consulting"
  },
  "about": {
    "title": "About",
    "summary": "Senior Software Engineer with 9+ years of experience specializing in enterprise full-stack development, serverless architecture, e-commerce platform engineering, and AI-powered solutions.",
    "highlights": {
      "experience": "9+ Years Experience",
      "enterprise": "Enterprise Systems",
      "ai": "AI Solutions",
      "opensource": "Open Source"
    }
  },
  "experience": {
    "title": "Professional Experience",
    "current": "Current",
    "jobs": [
      {
        "id": "loudcrowd",
        "title": "Senior Software Engineer",
        "company": "LoudCrowd",
        "duration": "Apr 2022 - Jul 2025",
        "period": "3 years 4 months",
        "location": "Remote",
        "description": "Architected and maintained a mission-critical enterprise serverless platform processing millions of e-commerce events and transactions daily.",
        "achievements": [
          "Spearheaded Impact Affiliate Network integration with robust web event processing pipelines",
          "Architected comprehensive influencer marketing platform with real-time analytics",
          "Implemented advanced database optimization strategies improving system reliability"
        ],
        "techStack": ["Python", "Flask", "AWS Lambda", "React", "TypeScript", "Apollo GraphQL", "PostgreSQL"]
      }
      // ... other jobs from resume.md
    ]
  },
  "expertise": {
    "title": "Expertise & Capabilities",
    "categories": [
      {
        "id": "fullstack",
        "title": "Full-Stack Development",
        "technologies": ["React", "TypeScript", "Node.js", "Python", "Next.js"]
      },
      {
        "id": "ai",
        "title": "AI & Machine Learning",
        "technologies": ["LangChain", "Claude", "AWS AI", "Google AI SDK"]
      }
      // ... other categories
    ]
  },
  "projects": {
    "title": "Featured Projects",
    "filters": {
      "all": "All",
      "ai": "AI/ML",
      "opensource": "Open Source",
      "ecommerce": "E-commerce",
      "fullstack": "Full-Stack"
    },
    "viewCase": "View Case Study",
    "items": [
      {
        "id": "guanacastelots",
        "name": "AI Powered Real Estate App",
        "description": "AI-powered real estate platform for Costa Rica properties with advanced semantic search",
        "url": "https://guanacastelotsforsale.com",
        "category": "ai",
        "techStack": ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Google AI"],
        "metrics": {
          "performance": "95+"
        }
      }
      // ... other projects
    ]
  },
  "certifications": {
    "title": "Certifications & Learning",
    "viewAll": "View all {count} certifications",
    "filters": {
      "all": "All",
      "ai": "AI/ML",
      "cloud": "Cloud",
      "frontend": "Frontend",
      "backend": "Backend"
    },
    "verify": "Verify",
    "items": [
      {
        "id": "langgraph",
        "name": "Foundation: Introduction to LangGraph",
        "issuer": "LangChain",
        "date": "Sep 2025",
        "credentialId": "q3u1a3g7qa",
        "url": "https://academy.langchain.com/certificates/q3u1a3g7qa",
        "skills": ["Artificial Intelligence", "LangChain", "LangGraph"]
      }
      // ... other certifications
    ]
  },
  "contact": {
    "title": "Get In Touch",
    "availability": "Available for new projects",
    "responseTime": "Usually responds within 24 hours",
    "form": {
      "name": "Name",
      "email": "Email",
      "company": "Company (optional)",
      "projectType": "Project Type",
      "message": "Message",
      "submit": "Send Message",
      "success": "Thank you! I'll get back to you soon.",
      "error": "Something went wrong. Please try again."
    },
    "methods": {
      "email": "ronnyangelo.freites@gmail.com",
      "linkedin": "linkedin.com/in/ronnyfreites",
      "twitter": "@ronnyfreites"
    }
  },
  "footer": {
    "tagline": "Building AI-powered solutions that matter",
    "quickLinks": "Quick Links",
    "resources": "Resources",
    "newsletter": {
      "title": "Newsletter",
      "placeholder": "Enter your email",
      "subscribe": "Subscribe",
      "success": "Subscribed successfully!",
      "error": "Please enter a valid email"
    },
    "copyright": "© 2025 Ronny Freites. All rights reserved.",
    "builtWith": "Built with Next.js + TypeScript",
    "backToTop": "Back to top"
  }
}
```

**messages/es.json**:
```json
{
  "navigation": {
    "about": "Acerca de",
    "experience": "Experiencia",
    "projects": "Proyectos",
    "certifications": "Certificaciones",
    "blog": "Blog",
    "contact": "Contacto"
  },
  "hero": {
    "name": "Ronny Freites",
    "tagline": "Ingeniero de Producto Full-Stack | Constructor de Productos con IA | Creador de Contenido para Ingenieros de Software",
    "stats": {
      "experience": "9+ Años de Experiencia",
      "followers": "1,110+ Seguidores",
      "certifications": "54 Certificaciones"
    },
    "location": "San José, Costa Rica",
    "cta": {
      "projects": "Ver Proyectos",
      "consultation": "Agendar Consulta"
    },
    "availability": "Disponible para consultoría"
  }
  // ... Spanish translations for all sections
}
```

#### 5. Usage in Components
**Example Component with Translations**:
```typescript
'use client';

import { useTranslations } from 'next-intl';

export function Navigation() {
  const t = useTranslations('navigation');

  return (
    <nav>
      <a href="#about">{t('about')}</a>
      <a href="#experience">{t('experience')}</a>
      <a href="#projects">{t('projects')}</a>
      {/* ... */}
    </nav>
  );
}
```

**Server Component Example**:
```typescript
import { useTranslations } from 'next-intl/server';

export default async function HeroSection() {
  const t = await useTranslations('hero');

  return (
    <section>
      <h1>{t('name')}</h1>
      <p>{t('tagline')}</p>
    </section>
  );
}
```

#### 6. Language Switcher Component
Create `src/components/shared/LanguageSwitcher/LanguageSwitcher.tsx`:
```typescript
'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales, type Locale } from '@/i18n';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: Locale) => {
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    // Navigate to new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <div>
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={locale === loc ? 'active' : ''}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
```

### Dependencies

#### Blocks
- None

#### Blocked By
- #1 (Project Setup) - requires next-intl installed

#### External Dependencies
- next-intl ^3.25.0
- Next.js 15.4.2 App Router

### Interface Definition

```yaml
inputs:
  - resume_content: /resume.md file with all professional content
  - locale_requirements: English (en) and Spanish (es)
  - routing_structure: /[locale]/path format

outputs:
  - i18n_config: i18n.ts configuration file
  - middleware: locale routing middleware
  - translation_files: messages/en.json and messages/es.json
  - locale_layouts: [locale]/layout.tsx and [locale]/page.tsx
  - language_switcher: LanguageSwitcher component
  - locale_utils: utility functions for locale handling

provides_to_next_issues:
  - useTranslations_hook: for accessing translations in components
  - locale_context: current locale available via useLocale()
  - translation_structure: standardized JSON structure for content
  - language_switcher: component for locale switching
  - locale_routing: automatic locale-based routing
```

## ✅ Acceptance Criteria

### Functional
- [ ] Visiting `/en` shows English content
- [ ] Visiting `/es` shows Spanish content
- [ ] Default locale redirects to `/en`
- [ ] Language switcher changes locale without losing page context
- [ ] All resume.md content extracted into translation files
- [ ] Translations load correctly on server-side rendering
- [ ] URL structure maintains locale prefix
- [ ] Browser language detection works

### Technical
- [ ] next-intl configured correctly with App Router
- [ ] Middleware intercepts requests and applies locale
- [ ] Translation files are valid JSON
- [ ] No hydration mismatches between server/client
- [ ] Locale is properly typed (Locale type)
- [ ] getTranslations works in Server Components
- [ ] useTranslations works in Client Components
- [ ] Meta tags include correct lang attribute

### Content
- [ ] All navigation items translated
- [ ] Hero section fully translated
- [ ] About section fully translated
- [ ] Experience entries fully translated
- [ ] Projects fully translated
- [ ] Certifications fully translated
- [ ] Contact form fully translated
- [ ] Footer fully translated

## 🧪 Testing Checklist

- [ ] Navigate to `/en` - shows English
- [ ] Navigate to `/es` - shows Spanish
- [ ] Click language switcher - changes language
- [ ] Refresh page on `/es` - stays in Spanish
- [ ] Check meta lang attribute - matches locale
- [ ] Test server-side translation loading
- [ ] Test client-side translation loading
- [ ] Verify no console errors related to i18n
- [ ] Check TypeScript types for translations
- [ ] Test missing translation keys - shows fallback

## 📦 Deliverables

1. **i18n.ts** - next-intl configuration
2. **middleware.ts** - locale routing middleware
3. **messages/en.json** - English translations (complete)
4. **messages/es.json** - Spanish translations (complete)
5. **src/app/[locale]/layout.tsx** - Locale layout
6. **src/app/[locale]/page.tsx** - Locale page
7. **LanguageSwitcher.tsx** - Language switcher component
8. **lib/i18n-utils.ts** - i18n utility functions
9. **Documentation** - I18N.md explaining usage

## ⏱️ Time Estimate
**6-8 hours** (including content extraction and translation)

## 🏷️ Labels
`i18n`, `foundation`, `configuration`, `critical`, `phase-1`

## 👤 Assignee
Frontend developer with next-intl experience, Spanish speaking preferred

## 🔗 Related Issues
- Depends on: #1 (Project Setup)
- Blocks: #5 (Navigation Bar) - needs language switcher
- Blocks: All content sections - need translations

## 📝 Notes
- Spanish translations can use resume.md as source (already has Spanish context)
- Ensure professional tone in both languages
- Use formal "usted" form in Spanish for professional context
- Consider hiring native Spanish speaker for translation review
- Test with Spanish-speaking colleagues before marking complete
- Create feature branch: `feature/i18n-configuration`
