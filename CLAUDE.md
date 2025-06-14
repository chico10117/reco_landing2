# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the landing page for Reco, an AI-powered digital menu platform for restaurants. Built with SvelteKit using Svelte 5 with the new runes syntax, styled with Tailwind CSS, and uses shadcn-svelte for UI components.

## Development Commands

- `pnpm dev` - Start development server
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
- `src/lib/utils/analytics.ts` - Analytics tracking utilities
- `static/` - Static assets and images

### Key Components
- `hero-section.svelte` - Main hero with animated text and CTAs
- `benefits-section.svelte` - Feature showcase cards
- `how-it-works.svelte` - Step-by-step process explanation
- `partners-strip.svelte` - Company logos display
- `contact-cta.svelte` - Contact and demo sections

### Styling System
- Uses Tailwind with custom CSS variables for theming
- Custom `reco-blue` color scheme defined in tailwind.config.js
- Component variants managed through class-variance-authority
- Responsive design with mobile-first approach

### Analytics Integration
- Google Analytics and Hotjar integration
- Custom event tracking through `track()` utility
- Page view and interaction monitoring

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
- `PUBLIC_ANALYTICS_ENABLED` - Set to 'false' to disable analytics

### Cookie Consent System
- GDPR-compliant cookie banner appears on first visit
- Users can manage preferences at `/cookies` page
- Analytics only loads with user consent
- Three categories: Essential, Analytics, Marketing

## Important Notes

- Never remove existing functionality or debug code
- This is a marketing site focused on conversions and lead generation
- Images in `/static/img/` are referenced throughout components
- Uses pnpm as package manager (Node.js 20.x required)
- Deployed on Vercel with adapter-vercel
- All new components should follow existing patterns and use the established UI component library