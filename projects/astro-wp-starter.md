# Project Name: Astro WP Starter

## Project Overview

This is a modern headless WordPress starter built with Astro that demonstrates best practices for creating fast, SEO-friendly websites using WordPress as a content management system. The project serves as a flexible foundation for developers who want to leverage WordPress's content management capabilities while delivering a modern frontend experience.

## Repo URL
- https://github.com/ronnycoding/astro-wp


**Key Features:**
- **Headless Architecture**: WordPress backend with Astro frontend for optimal performance
- **Type Safety**: Full TypeScript integration with auto-generated GraphQL types
- **SEO Optimized**: Yoast SEO integration with proper meta tag handling
- **Performance Focused**: Hybrid rendering, caching, and optimized asset delivery
- **Developer Experience**: Hot reloading, type checking, and Docker-based local development
- **Production Ready**: Configured for Vercel deployment with proper cache headers

**Use Cases:**
- Blog or content sites requiring WordPress content management
- Marketing websites with complex content requirements
- Projects needing WordPress plugin ecosystem while maintaining modern frontend
- Sites requiring SEO optimization and fast loading times
- Multi-author content platforms with editorial workflows

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build production site
- `npm run preview` - Preview production build locally
- `npm run start` - Start production server (requires build first)
- `npm run gen:types` - Generate TypeScript types from GraphQL schema using codegen

## Environment Setup

Required environment variables:
- `WORDPRESS_API_URL` - WordPress GraphQL endpoint (e.g., `https://yoursitename.com/graphql`)
- `GA_ID` - Google Analytics tracking ID (optional)
- `SITE_URL` - Site URL for sitemap generation

## Tech Stack

**Frontend Framework:**
- Astro 4.x with TypeScript support
- Hybrid rendering (SSR + SSG) configured for Vercel serverless deployment
- Apollo Client for GraphQL data fetching

**Styling & Assets:**
- CSS with custom properties (CSS variables) in `src/styles/global.css`
- Atkinson Hyperlegible font from Google Fonts
- SVG icons for social media links

**Data & Content Management:**
- WordPress as headless CMS
- WPGraphQL for API layer
- GraphQL Code Generator for type safety
- Yoast SEO for meta tag management

**Development Tools:**
- TypeScript with Astro's base configuration
- GraphQL Codegen with near-operation-file preset
- Docker Compose for local WordPress development

**Deployment & Performance:**
- Vercel serverless adapter
- Astro sitemap integration
- Cache headers for performance (`max-age=600, must-revalidate`)
- Google Analytics integration

## Architecture Overview

This is an Astro-based headless WordPress site that uses WPGraphQL for data fetching.

### Key Components

**Data Layer:**
- `src/lib/api.ts` - GraphQL API functions for WordPress data fetching
- `src/operations/` - GraphQL query definitions and generated TypeScript types
- `src/generated/` - Auto-generated GraphQL TypeScript types via codegen

**Component Structure:**
- `src/layouts/Layout.astro` - Main layout wrapper with header/footer
- `src/components/BaseHead.astro` - Meta tags, SEO, and Google Analytics
- `src/components/Header.astro` - Navigation with WordPress menu integration
- `src/components/Footer.astro` - Site footer
- `src/components/FormattedDate.astro` - Date formatting utility
- `src/components/HeaderLink.astro` - Navigation link component

**Routing System:**
- Uses `[...uri].astro` catch-all route that queries WordPress via `getNodeByUri`
- Dynamically resolves content types (Post, Page, Category) and renders appropriate templates
- `src/pages/index.astro` - Homepage with home page posts query
- URI handling with domain stripping utilities in `src/utils.ts`

**WordPress Integration:**
- Configured for Vercel serverless deployment with `output: "server"`
- Uses hybrid rendering model with cache headers (`max-age=600, must-revalidate`)
- SEO support via Yoast SEO plugin integration
- Menu support via WPGraphQL (PRIMARY menu location)
- Featured images and media handling
- Category and post relationship support

### GraphQL Code Generation

The project uses GraphQL Code Generator with the following workflow:
1. GraphQL operations defined in `src/operations/*.graphql`
2. Codegen reads from WordPress GraphQL endpoint (configurable in `codegen.yml`)
3. Generates TypeScript types in `src/generated/`
4. Near-operation-file preset creates co-located `.ts` files for each `.graphql` file

### Content Type Support

Built-in support for:
- Posts (`... on Post` fragment in getNodeByUri)
- Pages (`... on Page` fragment in getNodeByUri)
- Categories (`... on Category` fragment in getNodeByUri)

To add custom post types:
1. Add GraphQL fragment to `getNodeByUri` in `api.ts`
2. Add case to switch statement in `[...uri].astro`
3. Create appropriate template component
4. Run `npm run gen:types` to update TypeScript definitions

### Local Development with Docker

WordPress development environment included:
- `docker-compose.yml` sets up WordPress + MySQL
- WordPress runs on `localhost:8080`
- Pre-configured with required plugins in `wp/plugins/ronnyfreites/`
- Custom theme in `wp/themes/ronnyfreites/`

### WordPress Setup Requirements

Required WordPress plugins:
- WPGraphQL
- Yoast SEO (for SEO data)
- Advanced Custom Fields (ACF plugins included in wp/ folder)
- WPGraphQL ACF extension
- Additional plugins in `wp/plugins/ronnyfreites/`

The `wp/` directory contains a complete WordPress setup with plugins and themes.
