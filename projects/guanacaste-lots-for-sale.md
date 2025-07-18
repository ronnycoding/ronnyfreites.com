# Project Name: Guanacaste Lots For Sale

## Project Overview

**GuanacasteLotsForSale** is a comprehensive Next.js 15 real estate platform specifically designed for selling and renting properties in Guanacaste, Costa Rica. It's a full-stack application featuring advanced AI-powered content generation, multi-language support, semantic search capabilities, and integrated communication systems.

### Project url
https://guanacastelotsforsale.com

### Core Features
- **Multi-language Property Listings**: Support for 13 languages including English, Spanish, French, German, Chinese, Japanese, Korean, Russian, Italian, Arabic, Portuguese, Hindi, and Turkish
- **AI-Powered Content Generation**: Automated property descriptions, content improvement, and multi-language translations using Google AI SDK
- **Semantic Search**: Vector-based property search using embeddings for enhanced discovery
- **Advanced Location Services**: Google Maps integration with autocomplete, place details, and nearby places
- **Real-time Communication**: WhatsApp-style messaging system between property owners and inquirers
- **Content Safety**: Automated image and video safety validation using Google Cloud Vision and Video Intelligence APIs
- **Multi-step Property Creation**: Comprehensive property form with draft persistence and file upload capabilities
- **Featured Properties**: Premium property promotion system with time-based featuring
- **Contact Management**: Built-in CRM for managing property inquiries and submissions
- **Usage Analytics**: AI credit tracking and usage monitoring system
- **SEO Optimization**: Localized SEO with meta descriptions and titles for each property
- **Responsive Design**: Mobile-first design with Material-UI components

## Development Commands

- `bun dev` - Start development server with Turbopack on port 3000
- `bun build` - Build production application (runs type check first)
- `bun lint` - Run ESLint with zero warnings allowed
- `bun check-types` - Type check without emitting files
- `bun start` - Start production server

## Database Commands

- `bun run db:generate` - Generate Prisma client
- `bun run db:migrate` - Run database migrations in development
- `bun run db:deploy` - Deploy migrations to production
- `bun run db:push` - Push schema changes directly to database
- `bun run db:studio` - Open Prisma Studio for database management
- `bun run db:seed` - Seed database with initial data
- `bun run db:reset` - Reset database (force)

## Translation Commands

- `bun run gen:translations` - Generate translations from Excel file using `/translations-cli/generate.cjs`

## Technology Stack

### Frontend
- **Framework**: Next.js 15 with App Router and Turbopack
- **UI Framework**: Material-UI (MUI) v7 with Emotion styling
- **Language**: TypeScript 5.8.2 with strict mode
- **Styling**: Emotion CSS-in-JS with Material-UI system
- **Icons**: Material-UI Icons and React Icons
- **Forms**: React Hook Form with Zod validation
- **Maps**: Google Maps API with React Google Maps integration
- **File Upload**: React Dropzone with Firebase Storage
- **Sliders**: React Slick and Swiper for image galleries
- **Rich Text**: React Simple WYSIWYG editor
- **Notifications**: React Toastify for user feedback

### Backend
- **Runtime**: Bun (package manager and runtime)
- **Database**: PostgreSQL with pgvector extension for embeddings
- **ORM**: Prisma 6.8.2 with custom client generation
- **Authentication**: Clerk with Next.js integration
- **AI Services**: Google AI SDK (Gemini) for content generation
- **Cloud Services**: Google Cloud Vision and Video Intelligence APIs
- **File Storage**: Firebase Storage with security validation
- **Location Services**: Google Maps Places API and Geocoding

### Development Tools
- **Linting**: ESLint with zero warnings policy
- **Type Checking**: TypeScript compiler with strict mode
- **Build Tool**: Turbo for caching and optimization
- **Container**: Docker support with PostgreSQL setup
- **Translation**: Custom Excel-to-JSON translation generator

## Architecture

### Multi-language Support
- Uses next-intl for internationalization with locales: en-US, es-CR
- Routing configured for locale-based paths (/en/..., /es/...)
- Property content supports AI-generated translations
- Translation files in `/messages/` directory

### Authentication & Authorization
- Clerk integration with middleware protection for property creation/editing routes
- User model stores Clerk auth provider ID
- Protected routes: `/properties/new`, `/properties/my-properties`, location APIs

### Database Schema (Prisma)
- **Property**: Core entity with ownership, location, pricing, amenities, vector embeddings for semantic search
- **PropertyTranslation**: Localized content (title, description, meta) with AI generation tracking
- **Asset**: Images, videos, documents, virtual tours, floor plans linked to properties
- **AssetTranslation**: Localized asset descriptions and titles
- **User**: Connected via Clerk auth with usage tracking
- **ChatSession/ChatMessage**: WhatsApp-style messaging system with phone number integration
- **UsageRecord**: Tracks AI credit usage per user, session, and property
- **Plan**: Subscription plans with AI credits and feature limits
- **PropertyTag/PropertyTagRelation**: Tagging system for property categorization
- **ContactSubmission**: CRM system for managing property inquiries and leads

### Property Form System
- Multi-step form with stepper navigation
- Draft persistence using localStorage
- File upload with Firebase Storage integration
- Google Maps integration for location selection
- AI content generation and improvement features

### AI Features
- Property content generation using Google AI SDK
- Content improvement with custom prompts
- Multi-language translation generation
- Image/video safety checking with Google Cloud Vision/Video Intelligence APIs
- AI Agent Integration: N8N-based AI agent that consumes the MCP (Model Context Protocol) server to provide automated information and data processing capabilities

### API Structure
- **Location Services**: `/api/location-autocomplete`, `/api/place-details`, `/api/nearby-places`
- **AI Content Generation**: `/api/ai/generate-property`, `/api/ai/improve-property-content`
- **Property Management**: `/api/property`, `/api/property/[propertyId]`, `/api/property-details`
- **Content Safety**: `/api/image-safe`, `/api/video-safe` (Google Cloud Vision/Video Intelligence)
- **Authentication**: `/api/clerk` (webhook integration)
- **Data Export**: `/api/xml` (XML sitemap/feed generation)
- **MCP Integration**: `/api/mcp` (Model Context Protocol support)

### UI Components
- Material-UI based design system
- Custom components in `/app/components/`
- Property form components in `/app/components/PropertyForm/`
- Reusable UI components in `/app/components/ui/`

### Page Structure
- **Landing Page**: Hero section with property search and featured listings
- **Property Listings**: `/properties/explore` with advanced filtering and semantic search
- **Property Details**: `/properties/[propertyId]` with image galleries, location maps, and contact forms
- **Property Management**: `/properties/new`, `/properties/edit/[propertyId]`, `/my-properties`
- **Static Pages**: About, Contact, Help, Privacy Policy, Terms of Use, Careers, Investors, etc.
- **Multi-language Routing**: All pages support `/en/` and `/es/` prefixes with next-intl

### Environment Requirements
- **Google Maps API**: Location services, autocomplete, place details, nearby places
- **Google AI API**: Gemini models for content generation and improvement
- **Google Cloud Credentials**: Vision and Video Intelligence APIs for content safety
- **Clerk Authentication**: User management and authentication
- **PostgreSQL Database**: Main database with pgvector extension for embeddings
- **Firebase Configuration**: File storage with security validation
- **Webhook URLs**: For Clerk authentication callbacks

### Security Features
- **Content Moderation**: Automated image and video safety checking
- **Authentication Middleware**: Route protection for property creation/editing
- **Input Validation**: Zod schemas for all form inputs and API endpoints
- **CORS Configuration**: Proper cross-origin resource sharing setup
- **SQL Injection Protection**: Prisma ORM with parameterized queries
- **XSS Prevention**: Content sanitization for user-generated content

### Performance Optimizations
- **Vector Search**: pgvector extension for semantic property search
- **Image Optimization**: Next.js Image component with Firebase CDN
- **Code Splitting**: Dynamic imports for heavy components
- **Caching**: Build-time caching with Turbo
- **Database Indexing**: Optimized queries with proper indexes
- **Lazy Loading**: Deferred loading for non-critical components

## Development Notes

- Uses Bun as package manager and runtime (note: package.json shows pnpm as packageManager)
- TypeScript strict mode enabled with comprehensive type checking
- ESLint configured with zero warnings policy for code quality
- Turbo for build caching and optimization
- Prisma generates client to `/prisma-client/` directory
- Images stored in Firebase Storage with safety validation
- Location data enhanced with Google Places API details
- Automatic database seeding on postinstall hook
- Multi-language support with Excel-based translation management
- Docker support for PostgreSQL with pgvector extension
