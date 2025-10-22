# [SUB-ISSUE #6] Hero - Above the Fold Impact Section

## 🔗 Parent Issue
Part of **[EPIC] Next.js Portfolio Website - Complete Redesign with AI/Tech Aesthetic**

## 📋 Summary
Create the hero section with full viewport height, parallax scrolling, animated gradient background, 3D floating geometric shapes, particle system, typewriter animation, profile image with gradient border, animated stats counter, and scroll indicator.

## 🎯 Scope

### In Scope
- Full viewport (100vh) hero section layout
- Animated gradient mesh background (cyan to purple)
- 3D wireframe geometric shapes (icosahedrons and toruses) using React Three Fiber
- Particle system with connection lines (50-80 particles, max 150px connection distance)
- Large headline with gradient text effect
- Typewriter animation on subheadline with cursor blink
- Profile image with animated gradient border (300px desktop, 200px mobile)
- Animated stats counter (count-up on viewport entry)
- Scroll indicator with animated chevron
- Availability badge with green dot
- Two CTA buttons: "View Projects" and "Schedule Consultation"
- Responsive grid layout (60% text, 40% visual on desktop; stacked on mobile)
- Parallax scrolling effect on background elements
- Content mapped from resume.md via i18n translations

### Out of Scope
- Navigation bar (handled by #5)
- Actual consultation booking system (placeholder link)
- Profile image upload/management system
- Real-time availability status (hardcoded for now)
- Advanced particle physics simulations
- Video background alternative

## 🔧 Technical Details

### Implementation Approach

#### 1. Component Structure
Create `src/components/sections/HeroSection/`:
```
HeroSection/
├── HeroSection.tsx           # Main component
├── GradientBackground.tsx     # Gradient mesh background
├── ParticleSystem.tsx         # Particle effects (client-side)
├── GeometricShapes.tsx        # 3D shapes with React Three Fiber
├── TypewriterText.tsx         # Typewriter animation
├── StatsCounter.tsx           # Animated counter
├── ScrollIndicator.tsx        # Scroll chevron animation
└── index.ts                   # Exports
```

#### 2. Main Hero Section Component
**HeroSection.tsx**:
```typescript
'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Suspense, lazy } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import GradientBackground from './GradientBackground';
import TypewriterText from './TypewriterText';
import StatsCounter from './StatsCounter';
import ScrollIndicator from './ScrollIndicator';

// Lazy load heavy components
const ParticleSystem = lazy(() => import('./ParticleSystem'));
const GeometricShapes = lazy(() => import('./GeometricShapes'));

export default function HeroSection() {
  const t = useTranslations('hero');

  const stats = [
    { value: 9, suffix: '+', label: t('stats.experience') },
    { value: 1110, suffix: '+', label: t('stats.followers') },
    { value: 54, suffix: '', label: t('stats.certifications') },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <GradientBackground />

      {/* Particle System (Client-side only) */}
      <Suspense fallback={null}>
        <ParticleSystem particleCount={70} maxDistance={150} />
      </Suspense>

      {/* 3D Geometric Shapes (Lazy-loaded) */}
      <Suspense fallback={null}>
        <GeometricShapes />
      </Suspense>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Text Content - 60% */}
          <motion.div
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Name with Gradient */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-purple-dark bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('name')}
            </motion.h1>

            {/* Typewriter Tagline */}
            <TypewriterText
              text={t('tagline')}
              className="text-xl sm:text-2xl lg:text-3xl text-dark-text dark:text-dark-text"
            />

            {/* Location Badge */}
            <motion.div
              className="flex items-center gap-2 text-sm sm:text-base text-dark-text/80 dark:text-dark-text/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{t('location')}</span>
              <span className="mx-2">•</span>
              <span className="text-sm px-3 py-1 bg-green-500/10 text-green-500 rounded-full border border-green-500/20">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                {t('availability')}
              </span>
            </motion.div>

            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => (
                <StatsCounter
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  delay={index * 0.2}
                />
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent-cyan to-accent-purple hover:opacity-90 transition-opacity"
                asChild
              >
                <a href="#projects">{t('cta.projects')}</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent-cyan text-accent-cyan hover:bg-accent-cyan/10"
                asChild
              >
                <a href="#contact">{t('cta.consultation')}</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image - 40% */}
          <motion.div
            className="lg:col-span-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Animated Gradient Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-purple-dark rounded-full blur-lg opacity-75 animate-pulse-slow" />

              {/* Profile Image */}
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/10 backdrop-blur-sm">
                <Image
                  src="/images/profile.jpg" // Placeholder
                  alt={t('name')}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}
```

#### 3. Gradient Background Component
**GradientBackground.tsx**:
```typescript
'use client';

import { motion } from 'framer-motion';

export default function GradientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-secondary-bg to-dark-bg" />

      {/* Animated gradient mesh */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(135deg, #00D9FF 0%, #7C3AED 100%)',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        }}
      />

      {/* Radial gradient spotlight */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-dark-bg/50" />
    </div>
  );
}
```

#### 4. Particle System Component
**ParticleSystem.tsx** (Client-side only):
```typescript
'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface ParticleSystemProps {
  particleCount?: number;
  maxDistance?: number;
}

export default function ParticleSystem({
  particleCount = 70,
  maxDistance = 150,
}: ParticleSystemProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize particles
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Move particle
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.fillStyle = 'rgba(0, 217, 255, 0.5)';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.strokeStyle = `rgba(0, 217, 255, ${
              0.2 * (1 - distance / maxDistance)
            })`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [particleCount, maxDistance]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
```

#### 5. Typewriter Animation
**TypewriterText.tsx**:
```typescript
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  className?: string;
  typingSpeed?: number;
}

export default function TypewriterText({
  text,
  className = '',
  typingSpeed = 50,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, typingSpeed]);

  return (
    <div className={className}>
      {displayText}
      <motion.span
        className="inline-block w-[3px] h-[1em] bg-accent-cyan ml-1"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
      />
    </div>
  );
}
```

#### 6. Stats Counter Component
**StatsCounter.tsx**:
```typescript
'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface StatsCounterProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

export default function StatsCounter({
  value,
  suffix = '',
  label,
  delay = 0,
}: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl lg:text-4xl font-bold text-accent-cyan">
        {count}{suffix}
      </div>
      <div className="text-sm text-dark-text/60 dark:text-dark-text/60 mt-1">
        {label}
      </div>
    </div>
  );
}
```

#### 7. Scroll Indicator
**ScrollIndicator.tsx**:
```typescript
'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5, duration: 0.6 }}
      onClick={() => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth',
        });
      }}
    >
      <span className="text-sm text-dark-text/60 dark:text-dark-text/60">
        Scroll to explore
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-accent-cyan" />
      </motion.div>
    </motion.div>
  );
}
```

### Dependencies

#### Blocks
- None (can be developed independently)

#### Blocked By
- #3 (Theme System) - needs theme colors
- #4 (Tailwind + shadcn/ui) - needs styling system

#### External Dependencies
- framer-motion
- next/image
- lucide-react
- React Three Fiber (for 3D shapes)
- next-intl (for translations)

### Interface Definition

```yaml
inputs:
  - translations: hero translations from messages/[locale].json
  - profile_image: /public/images/profile.jpg
  - theme_colors: Tailwind CSS custom colors

outputs:
  - hero_section: Full viewport hero component
  - particle_system: Animated particle background
  - typewriter_animation: Animated text effect
  - stats_counter: Animated number counter
  - scroll_indicator: Scroll prompt with animation
  - gradient_background: Animated gradient mesh

provides_to_next_issues:
  - particle_system: Reusable for other sections
  - stats_counter: Reusable for metrics display
  - gradient_background: Reusable pattern
  - scroll_animations: Animation patterns
```

## ✅ Acceptance Criteria

### Functional
- [ ] Hero section displays at full viewport height
- [ ] Gradient background animates smoothly
- [ ] Particle system renders 70 particles with connections
- [ ] 3D shapes rotate in background (when loaded)
- [ ] Typewriter animation types out tagline
- [ ] Stats counter animates on viewport entry
- [ ] Scroll indicator bounces and scrolls on click
- [ ] Profile image loads with gradient border
- [ ] Availability badge shows green dot with pulse
- [ ] CTA buttons navigate to correct sections
- [ ] Content displays in both English and Spanish

### Responsive
- [ ] Desktop (>1024px): 60/40 text/visual split
- [ ] Tablet (768-1023px): Stacked layout
- [ ] Mobile (<768px): Centered single column
- [ ] Profile image: 300px desktop, 200px mobile
- [ ] Text scales appropriately on all devices
- [ ] Particle system performs well on mobile
- [ ] 3D shapes lazy-load and don't block render

### Performance
- [ ] First Contentful Paint < 1.5s
- [ ] No layout shift during image load
- [ ] Particle system runs at 60fps
- [ ] 3D shapes lazy-loaded via Suspense
- [ ] Images optimized with Next.js Image
- [ ] Animations use transform and opacity only
- [ ] No janky scroll performance

### Accessibility
- [ ] Heading hierarchy correct (h1 for name)
- [ ] All images have alt text
- [ ] Buttons keyboard accessible
- [ ] Focus indicators visible
- [ ] Color contrast ratios meet WCAG AA
- [ ] Reduced motion respected (no animations if prefersReducedMotion)
- [ ] Screen reader announces stats correctly

## 🧪 Testing Checklist

- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on mobile devices (iOS, Android)
- [ ] Test with JavaScript disabled (SSR content)
- [ ] Test with slow network (3G throttling)
- [ ] Test reduced motion preferences
- [ ] Test screen reader (NVDA/VoiceOver)
- [ ] Test keyboard navigation (Tab, Enter)
- [ ] Verify translations in both locales
- [ ] Check Lighthouse performance score
- [ ] Test on various viewport sizes (320px-2560px)

## 📦 Deliverables

1. **HeroSection.tsx** - Main hero component
2. **GradientBackground.tsx** - Animated background
3. **ParticleSystem.tsx** - Particle effects
4. **GeometricShapes.tsx** - 3D shapes with R3F
5. **TypewriterText.tsx** - Typewriter animation
6. **StatsCounter.tsx** - Animated counter
7. **ScrollIndicator.tsx** - Scroll prompt
8. **Profile image** - /public/images/profile.jpg
9. **Tests** - Unit tests for components
10. **Storybook stories** - Component documentation

## ⏱️ Time Estimate
**16-20 hours** (including 3D implementation and testing)

## 🏷️ Labels
`hero`, `section`, `animations`, `3d`, `high-priority`, `phase-2`

## 👤 Assignee
Frontend developer with Framer Motion and React Three Fiber experience

## 🔗 Related Issues
- Depends on: #3 (Theme System)
- Depends on: #4 (Tailwind + shadcn/ui)
- Related to: #15 (Animations Integration)
- Related to: #16 (3D Elements)

## 📝 Notes
- Profile image placeholder needed from Ronny
- 3D shapes should be subtle, not distracting
- Particle system should perform well on mobile
- Consider adding parallax mouse movement to 3D shapes
- Test with various profile image aspect ratios
- Ensure animations don't cause motion sickness
- Create feature branch: `feature/hero-section`
