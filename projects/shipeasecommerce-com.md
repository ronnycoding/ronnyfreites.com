# Project Name: ShipeaseCommerce.com

## Project URL:
- https://shipeasecommerce.com

## Project Overview

This is a Next.js 14 application for Shipease, a Shopify development agency. The site is built with TypeScript, Tailwind CSS, and Framer Motion for animations. It features internationalization (i18n) with English and Spanish locales.

## Development Commands

- `npm run dev` - Start development server on port 3300
- `npm run dev:w` - Start development server on default port (3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

### Internationalization
- Built with `next-intl` for i18n support
- Supports English (`en`) and Spanish (`es`) locales
- Routes are prefixed with locale (e.g., `/en/about`, `/es/about`)
- Translation files located in `messages/` directory
- Middleware handles locale routing automatically

### Key Directories
- `src/app/[locale]/` - App Router with dynamic locale segment
- `src/components/` - Reusable UI components
- `src/i18n/` - Internationalization configuration
- `messages/` - Translation files (en.json, es.json)

### Layout Structure
The application uses a nested layout system:
- `src/app/[locale]/layout.tsx` - Root layout with i18n provider
- `src/components/RootLayout.tsx` - Main layout component with navigation and animation
- Navigation includes mobile hamburger menu with smooth animations using Framer Motion

### Styling
- Tailwind CSS for styling
- Custom CSS files in `src/styles/`
- Framer Motion for animations and transitions
- Dark/light theme awareness in components

### Contact Form
- API route at `/api/contact` handles form submissions
- Uses nodemailer for email sending
- Includes reCAPTCHA v3 for spam protection
- Environment variables needed: `EMAIL_USER`, `EMAIL_PASS`, `EMAIL_TO`, `RECAPTCHA_SECRET_KEY`, `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`

### Content Management
- Blog posts and case studies written in MDX
- Custom MDX components for rich content
- Automatic layout wrapping for different content types
- Syntax highlighting with Shiki

## Development Notes

### Environment Variables
The application requires several environment variables for contact form functionality and reCAPTCHA integration.

### Package Manager
Uses npm with lock file present. The project also has a pnpm lock file but npm is configured in scripts.

### TypeScript Configuration
Full TypeScript setup with strict type checking enabled. Global types defined in `globals.d.ts`.

### Image Optimization
Uses Next.js Image component for optimized images. Team photos, client logos, and other assets stored in `src/images/`.
