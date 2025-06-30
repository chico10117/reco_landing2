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

## Important Notes

- Never remove existing functionality or debug code
- This is a marketing site focused on conversions and lead generation
- Images in `/static/img/` are referenced throughout components
- Uses pnpm as package manager (Node.js 20.x required)
- Deployed on Vercel with adapter-vercel
- All new components should follow existing patterns and use the established UI component library

# Sistema de Traducciones Implementado

## Resumen
Se ha implementado un sistema completo de traducciones para toda la aplicación Reco. Cuando el usuario presiona el botón de cambio de idioma, todas las páginas se traducen automáticamente entre español e inglés.

## Archivos Principales Creados/Modificados

### Sistema de Traducciones
- `src/lib/stores/language.svelte.ts` - Store reactivo para manejar el idioma actual
- `src/lib/utils/translations.ts` - Todas las traducciones en español e inglés
- `src/lib/components/ui/language-toggle.svelte` - Botón para cambiar idioma

### Páginas Traducidas
1. **Página Principal (`/`)** - Landing page completa
2. **Precios (`/precios`)** - Planes básico, pro y enterprise
3. **Nosotros (`/nosotros`)** - Equipo y valores de la empresa
4. **Blog (`/posts`)** - Lista de artículos
5. **Restaurantes (`/restaurantes`)** - Página principal de restaurantes
6. **Fast-casual (`/restaurantes/fast-casual`)** - Página específica para cadenas

### Componentes Traducidos
- Navbar - Menú de navegación completo
- Footer - Enlaces y información legal
- ContactCTA - Llamada a la acción
- HeroSection - Sección principal del landing

## Características del Sistema

### Persistencia
- El idioma seleccionado se guarda en `localStorage`
- Se mantiene entre sesiones del navegador

### Reactividad
- Cambio inmediato de idioma en toda la aplicación
- Sin necesidad de recargar la página

### Cobertura Completa
- Todas las páginas principales traducidas
- Menús de navegación y footer incluidos
- Metadatos de SEO (títulos y descripciones)

## Uso del Sistema

### Cambio de Idioma
El usuario puede cambiar el idioma usando el botón en la esquina superior derecha del navbar, que muestra "ES/EN" con un ícono de globo.

### Para Desarrolladores
```typescript
import { languageStore } from '$lib/stores/language.svelte';
import { t } from '$lib/utils/translations';

// Usar en componentes
<h1>{t('pricing_title', languageStore.currentLanguage)}</h1>
```

## Páginas Pendientes
Las siguientes subpáginas de restaurantes aún no están traducidas (requieren contenido específico):
- `/restaurantes/autor`
- `/restaurantes/independiente` 
- `/restaurantes/multinacional`
- `/restaurantes/turistico`
- `/restaurantes/nuevo`

## Estado
✅ **Completado** - Sistema funcionando en todas las páginas principales