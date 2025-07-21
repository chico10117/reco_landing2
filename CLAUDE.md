# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the landing page for Reco, an AI-powered digital menu platform for restaurants. Built with SvelteKit using Svelte 5 with the new runes syntax, styled with Tailwind CSS, and uses shadcn-svelte for UI components.

## Development Commands

- `pnpm dev` - Start development server on localhost:5173
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm check` - Run Svelte type checking
- `pnpm check:watch` - Run type checking in watch mode
- `pnpm lint` - Run ESLint and Prettier checks
- `pnpm format` - Format code with Prettier

## Architecture

### Core Framework
- **SvelteKit**: Full-stack framework with SSR/SSG capabilities
- **Svelte 5**: Uses new runes syntax (`$state`, `$props`, `$derived`, `$effect`)
- **TypeScript**: Strict typing enabled
- **Tailwind CSS**: Utility-first styling with custom color system
- **shadcn-svelte**: Pre-built UI component library

### Project Structure
- `src/lib/components/landing/` - Landing page specific components
- `src/lib/components/ui/` - Reusable UI components (shadcn-based)
- `src/routes/` - SvelteKit file-based routing
- `src/lib/stores/` - Global state management (language store)
- `src/lib/utils/` - Utilities (analytics, translations, cookies)
- `src/lib/data/` - Static data (blog posts, partners)
- `static/` - Static assets and images

### Key Components
- `hero-section.svelte` - Main hero with animated text and CTAs
- `benefits-section.svelte` - Feature showcase cards
- `how-it-works.svelte` - Step-by-step process explanation
- `partners-strip.svelte` - Company logos display
- `contact-cta.svelte` - Contact and demo sections
- `language-toggle.svelte` - Language switcher (ES/EN)
- `cookie-consent-banner.svelte` - GDPR cookie consent

### Styling System
- Uses Tailwind with custom CSS variables for theming
- Custom `reco-blue` color scheme defined in tailwind.config.js
- Component variants managed through class-variance-authority
- Responsive design with mobile-first approach

### Analytics Integration
- Google Analytics and Hotjar integration
- Custom event tracking through `track()` utility
- Page view and interaction monitoring
- Consent-aware initialization (GDPR compliant)

## Svelte 5 Runes Guidelines

### State Management
- Use `$state()` for reactive variables
- Use `$derived()` for computed values
- Use `$effect()` for side effects with proper cleanup
- Use `$props()` for component props with TypeScript types

### Component Patterns
- Props: `let { name, age = 25 } = $props<{ name: string; age?: number }>();`
- Children: `let { children } = $props<{ children?: Snippet }>();`
- Rendering: `{@render children?.()}`

### SSR Safety
Always check for browser APIs:
```svelte
$effect(() => {
  if (typeof window === 'undefined') return;
  // Browser-only code here
});
```

## Cookie Management & Analytics

### Environment Variables Setup
Copy `.env.example` to `.env` and configure:
- `PUBLIC_GA_MEASUREMENT_ID` - Google Analytics Measurement ID (format: G-XXXXXXXXXX)
- `PUBLIC_HOTJAR_ID` - Hotjar Site ID (numbers only)
- `PUBLIC_VERCEL_ANALYTICS_ENABLED` - Set to 'false' to disable Vercel Analytics
- `PUBLIC_ANALYTICS_ENABLED` - Set to 'false' to disable all analytics

### Cookie Consent System
- GDPR-compliant cookie banner appears on first visit
- Users can manage preferences at `/cookies` page
- Analytics only loads with user consent
- Three categories: Essential, Analytics, Marketing
- Supports Google Analytics, Hotjar, and Vercel Analytics
- All analytics respect user consent and only initialize after acceptance

### Analytics Integration
- `src/lib/utils/analytics.ts` - Main tracking utility with consent checks
- `src/lib/utils/cookies.ts` - Cookie management and consent utilities
- `src/lib/analytics/index.ts` - Platform initialization (GA, Hotjar, Vercel)
- `src/lib/utils/vercel-analytics.ts` - Consent-aware Vercel Analytics wrapper

## Internationalization System

### Translation Implementation
- Complete Spanish/English translation system
- Language preference persisted in localStorage
- Real-time language switching without page reload

### Key Translation Files
- `src/lib/stores/language.svelte.ts` - Reactive language store
- `src/lib/utils/translations.ts` - All translation strings
- `src/lib/components/ui/language-toggle.svelte` - Language switcher UI

### Usage Pattern
```typescript
import { languageStore } from '$lib/stores/language.svelte';
import { t } from '$lib/utils/translations';

// In components
<h1>{t('pricing_title', languageStore.currentLanguage)}</h1>
```

### Translated Pages
- Landing page (`/`)
- Pricing (`/precios`)
- About us (`/nosotros`)
- Blog (`/posts`)
- Restaurants (`/restaurantes`)
- Fast-casual (`/restaurantes/fast-casual`)

### Pending Translations
- `/restaurantes/autor`
- `/restaurantes/independiente`
- `/restaurantes/multinacional`
- `/restaurantes/turistico`
- `/restaurantes/nuevo`

## Important Notes

- Never remove existing functionality or debug code (per .cursorrules)
- Don't remove comments or debugging code
- This is a marketing site focused on conversions and lead generation
- Images in `/static/img/` are referenced throughout components
- Uses pnpm as package manager (Node.js 20.x required)
- Deployed on Vercel with adapter-vercel
- All new components should follow existing patterns and use the established UI component library
- No test framework is currently configured

## Required Static Assets

The following images are required in `/static/img/`:
- `phone-mockup.webp` - Phone mockup showing Reco app
- `logo-yelmo.svg` - Yelmo Cines logo
- `logo-vips.svg` - VIPS restaurants logo
- `logo-honest-greens.svg` - Honest Greens logo
- `logo-tgb.svg` - The Good Burger logo
- `logo-foodbox.svg` - FoodBox logo
- `og-image.jpg` - Social media preview (1200x630px)

## Package Management

This project uses pnpm v10.2.0 with Node.js 20.x. Always use pnpm commands instead of npm or yarn.

## Build & Deployment

- Production builds use adapter-vercel
- Vercel deployment automatically configured
- Environment variables must be set in Vercel dashboard
- Analytics are automatically initialized on production builds