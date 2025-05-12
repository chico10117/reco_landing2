# Table of Contents
- src/app.d.ts
- src/app.css
- src/hooks.server.js
- src/app.html
- src/lib/utils.ts
- src/routes/+layout.ts
- src/routes/+page.server.ts
- src/routes/+page.svelte
- src/routes/+error.svelte
- src/routes/+page.ts
- src/routes/+layout.svelte
- src/routes/+server.js
- src/routes/contact/+page.svelte
- src/routes/restaurantes/+page.server.ts
- src/routes/restaurantes/+page.svelte
- src/routes/restaurantes/+page.ts
- src/routes/restaurantes/+layout.svelte
- src/routes/restaurantes/+server.js
- src/routes/privacy/+page.svelte
- src/routes/nosotros/+page.server.ts
- src/routes/nosotros/+page.svelte
- src/routes/nosotros/+page.ts
- src/routes/nosotros/+server.js
- src/routes/terms/+page.svelte
- src/routes/noticias/+page.server.ts
- src/routes/noticias/+page.svelte
- src/routes/noticias/+page.ts
- src/routes/noticias/+server.js
- src/routes/precios/+page.server.ts
- src/routes/precios/+page.svelte
- src/routes/precios/+page.ts
- src/routes/precios/+layout.svelte
- src/routes/precios/+server.js
- src/lib/utils/analytics.ts
- src/lib/components/Navbar.svelte
- src/lib/data/partners.ts
- src/lib/analytics/index.ts
- src/lib/components/landing/how-it-works.svelte
- src/lib/components/landing/benefits-section.svelte
- src/lib/components/landing/contact-cta.svelte
- src/lib/components/landing/footer.svelte
- src/lib/components/landing/hero-section.svelte
- src/lib/components/landing/partners-strip.svelte
- src/lib/components/ui/card/card.svelte
- src/lib/components/ui/card/index.ts
- src/lib/components/ui/card/card-content.svelte
- src/lib/components/ui/input/input.svelte
- src/lib/components/ui/input/index.ts
- src/lib/components/ui/checkbox/checkbox.svelte
- src/lib/components/ui/checkbox/index.ts
- src/lib/components/ui/button/button.svelte
- src/lib/components/ui/button/index.ts
- src/lib/components/ui/button/variants.ts
- src/lib/components/ui/modal/modal.svelte

## File: src/app.d.ts

- Extension: .ts
- Language: typescript
- Size: 534 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```typescript
/// <reference types="@sveltejs/kit" />

declare namespace App {
  interface Locals {}
  interface Platform {}
  interface Session {}
  interface Stuff {}
}

// Environment variable declarations can be added here as needed
// No Google Sheets API variables required for the new landing page 

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {}; 
```

## File: src/app.css

- Extension: .css
- Language: unknown
- Size: 1303 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```unknown
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
    
    /* Reco specific colors */
    --reco-blue: 210 100% 50%;
    --reco-blue-light: 210 100% 95%;
    --reco-blue-dark: 210 100% 30%;
  }
}

@layer base {
  html {
    @apply scroll-smooth focus-visible:scroll-auto;
  }
  
  body {
    @apply bg-background text-foreground font-sans antialiased;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
}

/* Animations */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
} 
```

## File: src/hooks.server.js

- Extension: .js
- Language: javascript
- Size: 198 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```javascript
/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  // Procesar la solicitud normalmente
  const response = await resolve(event);
  return response;
} 
```

## File: src/app.html

- Extension: .html
- Language: html
- Size: 593 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```html
<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" href="%sveltekit.assets%/favicon.png" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
		%sveltekit.head%
	</head>
	<body data-sveltekit-preload-data="hover">
		<div style="display: contents">%sveltekit.body%</div>
	</body>
</html> 
```

## File: src/lib/utils.ts

- Extension: .ts
- Language: typescript
- Size: 169 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
} 
```

## File: src/routes/+layout.ts

- Extension: .ts
- Language: typescript
- Size: 1092 bytes
- Created: 2025-05-12 12:03:18
- Modified: 2025-05-12 12:03:18

### Code

```typescript
import type { LayoutLoad } from './$types';

// Configuración de SvelteKit
export const trailingSlash = 'never';

// Configuración de SSR
export const ssr = true;

// Configuración de prerendering
export const prerender = true;

interface MetaData {
  meta?: {
    title: string;
    description: string;
    canonical: string;
    openGraph: {
      title: string;
      description: string;
      image: string;
      url: string;
      type: string;
    };
  };
}

export const load: LayoutLoad = async ({ data }: { data: MetaData }) => {
  return {
    meta: data?.meta || {
      title: 'Reco - Pide mejor. Disfruta más.',
      description: 'Reco es un menú digital inteligente que personaliza la experiencia de cada comensal.',
      canonical: 'https://reco.chat',
      openGraph: {
        title: 'Reco - Pide mejor. Disfruta más.',
        description: 'Reco es un menú digital inteligente que personaliza la experiencia de cada comensal.',
        image: 'https://reco.chat/img/og-image.jpg',
        url: 'https://reco.chat',
        type: 'website'
      }
    }
  };
}; 
```

## File: src/routes/+page.server.ts

- Extension: .ts
- Language: typescript
- Size: 862 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```typescript
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async () => {
  return {
    meta: {
      title: 'Reco - Pide mejor. Disfruta más.',
      description: 'Reco es un menú digital inteligente que personaliza la experiencia de cada comensal. Te recomienda el plato perfecto según tu antojo, tu bolsillo y tu dieta en tu idioma y sin líos.',
      canonical: 'https://reco.chat',
      openGraph: {
        title: 'Reco - Pide mejor. Disfruta más.',
        description: 'Reco es un menú digital inteligente que personaliza la experiencia de cada comensal. Te recomienda el plato perfecto según tu antojo, tu bolsillo y tu dieta en tu idioma y sin líos.',
        image: 'https://reco.chat/img/og-image.jpg',
        url: 'https://reco.chat',
        type: 'website'
      }
    }
  };
}; 
```

## File: src/routes/+page.svelte

- Extension: .svelte
- Language: unknown
- Size: 1365 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```unknown
<script lang="ts">
  import HeroSection from '$lib/components/landing/hero-section.svelte';
  import BenefitsSection from '$lib/components/landing/benefits-section.svelte';
  import HowItWorks from '$lib/components/landing/how-it-works.svelte';
  import PartnersStrip from '$lib/components/landing/partners-strip.svelte';
  import ContactCTA from '$lib/components/landing/contact-cta.svelte';
  import { partners } from '$lib/data/partners';

  const handleDiscoverClick = () => {
    const howItWorksSection = document.getElementById('how-it-works');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRestaurantClick = () => {
    const benefitsSection = document.getElementById('benefits');
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
</script>

<svelte:head>
  <title>Reco - Pide mejor. Disfruta más.</title>
  <meta name="description" content="Reco es un menú digital inteligente que personaliza la experiencia de cada comensal. Te recomienda el plato perfecto según tu antojo, tu bolsillo y tu dieta en tu idioma y sin líos." />
</svelte:head>

<HeroSection 
  onDiscoverClick={handleDiscoverClick} 
  onRestaurantClick={handleRestaurantClick} 
/>

<BenefitsSection />

<HowItWorks />

<PartnersStrip {partners} />

<ContactCTA /> 
```

## File: src/routes/+error.svelte

- Extension: .svelte
- Language: unknown
- Size: 528 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```unknown
<script lang="ts">
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>{$page.status} | Reco</title>
</svelte:head>

<div class="flex flex-col items-center justify-center min-h-[70vh] px-4">
  <h1 class="text-6xl font-bold text-blue-600 mb-4">{$page.status}</h1>
  <p class="text-xl text-gray-600 mb-8">{$page.error?.message || 'Página no encontrada'}</p>
  <a 
    href="/" 
    class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
  >
    Volver al inicio
  </a>
</div> 
```

## File: src/routes/+page.ts

- Extension: .ts
- Language: typescript
- Size: 751 bytes
- Created: 2025-05-12 12:03:18
- Modified: 2025-05-12 12:03:18

### Code

```typescript
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async () => {
  return {
    meta: {
      title: 'Reco - Pide mejor. Disfruta más.',
      description: 'Reco es un menú digital inteligente que personaliza la experiencia de cada comensal. Te recomienda el plato perfecto según tu antojo, tu bolsillo y tu dieta en tu idioma y sin líos.',
      canonical: 'https://reco.chat',
      openGraph: {
        title: 'Reco - Pide mejor. Disfruta más.',
        description: 'Reco es un menú digital inteligente que personaliza la experiencia de cada comensal.',
        image: 'https://reco.chat/img/og-image.jpg',
        url: 'https://reco.chat',
        type: 'website'
      }
    }
  };
}; 
```

## File: src/routes/+layout.svelte

- Extension: .svelte
- Language: unknown
- Size: 320 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```unknown
<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/landing/footer.svelte';
</script>

<div class="min-h-screen bg-white text-gray-900 flex flex-col">
  <Navbar />
  
  <main class="flex-grow">
    <slot />
  </main>

  <Footer />
</div> 
```

## File: src/routes/+server.js

- Extension: .js
- Language: javascript
- Size: 700 bytes
- Created: 2025-05-12 12:03:18
- Modified: 2025-05-12 12:03:18

### Code

```javascript
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
  console.log('Solicitud recibida para:', url.pathname);
  
  // Lista de rutas válidas
  const validRoutes = ['/restaurantes', '/precios', '/noticias', '/nosotros'];
  
  // Si la URL es una de nuestras rutas válidas, redirigir a la misma
  if (validRoutes.includes(url.pathname)) {
    console.log('Ruta válida encontrada, manteniendo en:', url.pathname);
    return new Response('', {
      status: 200
    });
  }
  
  // Si no es una ruta que queremos manejar específicamente, continuar con el flujo normal
  return new Response('Not found', { status: 404 });
} 
```

## File: src/routes/contact/+page.svelte

- Extension: .svelte
- Language: unknown
- Size: 2617 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```unknown
<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { onMount } from 'svelte';
  import { track } from "$lib/utils/analytics";
  import Navbar from "$lib/components/Navbar.svelte";

  // Calendly URL
  const calendlyUrl = "https://calendly.com/fernando-lqrb/15min";
  
  // Function to redirect to Calendly
  function redirectToCalendly() {
    window.location.href = calendlyUrl;
  }

  // Function to navigate home
  function navigateHome() {
    window.location.href = '/';
  }

  // Auto-redirect after a short delay
  onMount(() => {
    setTimeout(redirectToCalendly, 1000);
  });
</script>

<div class="min-h-screen bg-white">
  <!-- Navigation -->
  <Navbar />

  <!-- Content -->
  <div class="pt-20 pb-12 flex items-center justify-center min-h-[60vh]">
    <div class="max-w-md mx-auto px-4 text-center">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">Contacto</h1>
      
      <div class="bg-white rounded-3xl shadow-lg p-8 space-y-6">
        <div class="text-6xl mb-6">📅</div>
        <p class="text-gray-600 mb-6">
          Redirigiendo a Calendly para agendar una reunión...
        </p>
        
        <Button 
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-full shadow-lg transform transition-all hover:scale-105"
          on:click={redirectToCalendly}
        >
          Agendar una reunión
        </Button>
        
        <p class="text-sm text-gray-500 mt-4">
          Si no eres redirigido automáticamente, haz clic en el botón de arriba.
        </p>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-gray-900 text-gray-100 py-8 fixed bottom-0 w-full">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <a href="/" class="block mb-4 md:mb-0">
          <img src="/img/reco-logo.svg" alt="Reco" class="h-7" />
        </a>
        <nav class="space-x-6">
          <a href="/privacy" class="text-gray-300 hover:text-blue-400 transition-colors">Política de Privacidad</a>
          <a href="/terms" class="text-gray-300 hover:text-blue-400 transition-colors">Términos de Servicio</a>
        </nav>
      </div>
      <div class="border-t border-gray-800 my-6"></div>
      <p class="text-center text-gray-400 text-sm">&copy; {new Date().getFullYear()} Reco AI Solutions. Todos los derechos reservados.</p>
    </div>
  </footer>
</div>

<style>
  /* Add any custom styles here */
  .shadow-lg {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
</style>

```

## File: src/routes/restaurantes/+page.server.ts

- Extension: .ts
- Language: typescript
- Size: 580 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```typescript
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async () => {
  return {
    meta: {
      title: 'Restaurantes | Reco',
      description: 'Descubre los restaurantes que utilizan Reco.',
      canonical: 'https://reco.chat/restaurantes',
      openGraph: {
        title: 'Restaurantes | Reco',
        description: 'Descubre los restaurantes que utilizan Reco.',
        image: 'https://reco.chat/img/og-image.jpg',
        url: 'https://reco.chat/restaurantes',
        type: 'website'
      }
    }
  };
}; 
```

## File: src/routes/restaurantes/+page.svelte

- Extension: .svelte
- Language: unknown
- Size: 3048 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```unknown
<script lang="ts">
  import { Button } from "$lib/components/ui/button";
</script>

<svelte:head>
  <title>Restaurantes | Reco</title>
  <meta name="description" content="Descubre los restaurantes que utilizan Reco." />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
  <h1 class="text-4xl font-bold text-gray-900 mb-8">Restaurantes</h1>
  
  <div class="grid md:grid-cols-2 gap-8">
    <div>
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">¿Tienes un restaurante?</h2>
      <p class="text-lg text-gray-600 mb-6">
        Descubre cómo Reco puede ayudarte a mejorar la experiencia de tus comensales y aumentar tus ventas.
      </p>
      <ul class="space-y-4 mb-8">
        <li class="flex items-start">
          <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Menús digitales inteligentes y personalizados</span>
        </li>
        <li class="flex items-start">
          <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Recomendaciones basadas en IA</span>
        </li>
        <li class="flex items-start">
          <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Análisis de datos y tendencias</span>
        </li>
      </ul>
      <Button variant="default" class="bg-blue-600 text-white hover:bg-blue-700">
        Solicitar una demo
      </Button>
    </div>
    
    <div class="bg-gray-50 p-8 rounded-lg">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">Restaurantes que confían en Reco</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-white p-4 rounded shadow-sm">
          <img src="/img/logo-yelmo.svg" alt="Yelmo" class="h-12 w-auto mb-2" />
          <p class="text-sm text-gray-600">Cadena líder de cines en España</p>
        </div>
        <div class="bg-white p-4 rounded shadow-sm">
          <img src="/img/logo-vips.svg" alt="VIPS" class="h-12 w-auto mb-2" />
          <p class="text-sm text-gray-600">Restaurantes casuales de calidad</p>
        </div>
        <div class="bg-white p-4 rounded shadow-sm">
          <img src="/img/logo-honest-greens.svg" alt="Honest Greens" class="h-12 w-auto mb-2" />
          <p class="text-sm text-gray-600">Comida saludable y sostenible</p>
        </div>
        <div class="bg-white p-4 rounded shadow-sm">
          <img src="/img/logo-tgb.svg" alt="TGB" class="h-12 w-auto mb-2" />
          <p class="text-sm text-gray-600">Las mejores hamburguesas gourmet</p>
        </div>
      </div>
    </div>
  </div>
</div> 
```

## File: src/routes/restaurantes/+page.ts

- Extension: .ts
- Language: typescript
- Size: 204 bytes
- Created: 2025-05-12 12:03:18
- Modified: 2025-05-12 12:03:18

### Code

```typescript
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  return {
    title: 'Restaurantes | Reco',
    description: 'Descubre los restaurantes que utilizan Reco.'
  };
}; 
```

## File: src/routes/restaurantes/+layout.svelte

- Extension: .svelte
- Language: unknown
- Size: 94 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```unknown
<script>
  // Este layout es específico para la sección de restaurantes
</script>

<slot /> 
```

## File: src/routes/restaurantes/+server.js

- Extension: .js
- Language: javascript
- Size: 232 bytes
- Created: 2025-05-12 12:03:18
- Modified: 2025-05-12 12:03:18

### Code

```javascript
export function GET() {
  // Este archivo asegura que la ruta /restaurantes exista como endpoint
  return new Response('Redirect to restaurantes page', {
    status: 303,
    headers: {
      Location: '/restaurantes'
    }
  });
} 
```

## File: src/routes/privacy/+page.svelte

- Extension: .svelte
- Language: unknown
- Size: 4546 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```unknown
<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { track } from "$lib/utils/analytics";
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<div class="min-h-screen bg-white">
  <!-- Navigation -->
  <Navbar />

  <!-- Content -->
  <div class="pt-20 pb-12">
    <div class="max-w-3xl mx-auto px-4">
      <h1 class="text-3xl font-bold text-gray-900 mb-8 pt-8">Política de Privacidad</h1>
      
      <div class="prose prose-red max-w-none">
        <p class="text-gray-600 mb-6">
          Última actualización: {new Date().toLocaleDateString('es-UY')}
        </p>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">1. Introducción</h2>
          <p class="text-gray-600 mb-4">
            En FanLatinas, nos tomamos muy en serio la privacidad de nuestros usuarios. Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos su información personal.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">2. Información que Recopilamos</h2>
          <p class="text-gray-600 mb-4">
            Recopilamos la siguiente información:
          </p>
          <ul class="list-disc pl-6 text-gray-600 mb-4">
            <li>Nombre</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de WhatsApp</li>
            <li>Preferencias de newsletter</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">3. Uso de la Información</h2>
          <p class="text-gray-600 mb-4">
            Utilizamos su información para:
          </p>
          <ul class="list-disc pl-6 text-gray-600 mb-4">
            <li>Proporcionar y mantener nuestros servicios</li>
            <li>Notificarle sobre cambios en nuestros servicios</li>
            <li>Permitirle participar en funciones interactivas</li>
            <li>Proporcionar atención al cliente</li>
            <li>Detectar y prevenir fraudes</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">4. Protección de Datos</h2>
          <p class="text-gray-600 mb-4">
            Implementamos medidas de seguridad adecuadas para proteger su información personal contra acceso, alteración, divulgación o destrucción no autorizada, de acuerdo con la Ley N° 18.331 de Protección de Datos Personales de Uruguay.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">5. Sus Derechos</h2>
          <p class="text-gray-600 mb-4">
            De acuerdo con la ley uruguaya, usted tiene derecho a:
          </p>
          <ul class="list-disc pl-6 text-gray-600 mb-4">
            <li>Acceder a sus datos personales</li>
            <li>Rectificar sus datos personales</li>
            <li>Cancelar sus datos personales</li>
            <li>Oponerse al tratamiento de sus datos personales</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">6. Contacto</h2>
          <p class="text-gray-600 mb-4">
            Si tiene preguntas sobre esta Política de Privacidad, puede contactarnos a través de:
          </p>
          <ul class="list-disc pl-6 text-gray-600 mb-4">
            <li>Email: privacy@fanlatinas.com</li>
            <li>WhatsApp: [Número de Contacto]</li>
          </ul>
        </section>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-gray-900 text-gray-100 py-8">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="text-2xl font-bold text-red-400 mb-4 md:mb-0">FanLatinas</div>
        <nav class="space-x-6">
          <a href="/terms" class="text-gray-300 hover:text-red-400 transition-colors">Términos de Servicio</a>
          <a href="https://calendly.com/fernando-lqrb/15min" class="text-gray-300 hover:text-red-400 transition-colors">Contacto</a>
        </nav>
      </div>
      <div class="border-t border-gray-800 my-6"></div>
      <p class="text-center text-gray-400 text-sm">&copy; {new Date().getFullYear()} FanLatinas. Todos los derechos reservados.</p>
    </div>
  </footer>
</div>

<style>
  /* Add any custom styles here */
  :global(.prose) {
    max-width: 65ch;
    margin: 0 auto;
  }
</style> 
```

## File: src/routes/nosotros/+page.server.ts

- Extension: .ts
- Language: typescript
- Size: 542 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```typescript
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async () => {
  return {
    meta: {
      title: 'Nosotros | Reco',
      description: 'Conoce al equipo detrás de Reco.',
      canonical: 'https://reco.chat/nosotros',
      openGraph: {
        title: 'Nosotros | Reco',
        description: 'Conoce al equipo detrás de Reco.',
        image: 'https://reco.chat/img/og-image.jpg',
        url: 'https://reco.chat/nosotros',
        type: 'website'
      }
    }
  };
}; 
```

## File: src/routes/nosotros/+page.svelte

- Extension: .svelte
- Language: unknown
- Size: 3243 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```unknown
<script lang="ts">
  const equipo = [
    {
      nombre: 'Ana García',
      cargo: 'CEO & Co-fundadora',
      foto: '/img/team/ana.jpg',
      bio: 'Experta en tecnología y restauración con más de 10 años de experiencia.'
    },
    {
      nombre: 'Carlos Rodríguez',
      cargo: 'CTO & Co-fundador',
      foto: '/img/team/carlos.jpg',
      bio: 'Ingeniero de software especializado en IA y experiencia de usuario.'
    },
    {
      nombre: 'Laura Martínez',
      cargo: 'Directora de Producto',
      foto: '/img/team/laura.jpg',
      bio: 'Especialista en diseño de productos digitales y experiencia de usuario.'
    }
  ];

  const valores = [
    {
      titulo: 'Innovación',
      descripcion: 'Buscamos constantemente nuevas formas de mejorar la experiencia gastronómica.',
      icono: '🚀'
    },
    {
      titulo: 'Calidad',
      descripcion: 'Nos comprometemos con la excelencia en cada aspecto de nuestro servicio.',
      icono: '⭐'
    },
    {
      titulo: 'Sostenibilidad',
      descripcion: 'Trabajamos por un futuro más sostenible para la industria de la restauración.',
      icono: '🌱'
    }
  ];
</script>

<svelte:head>
  <title>Nosotros | Reco</title>
  <meta name="description" content="Conoce al equipo detrás de Reco." />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
  <!-- Sección de Historia -->
  <div class="text-center mb-16">
    <h1 class="text-4xl font-bold text-gray-900 mb-4">Nuestra Historia</h1>
    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
      Reco nació de la pasión por la gastronomía y la tecnología. Nuestra misión es transformar 
      la experiencia de comer fuera haciéndola más personal, intuitiva y satisfactoria.
    </p>
  </div>

  <!-- Sección de Valores -->
  <div class="mb-16">
    <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Nuestros Valores</h2>
    <div class="grid md:grid-cols-3 gap-8">
      {#each valores as valor}
        <div class="text-center">
          <div class="text-4xl mb-4">{valor.icono}</div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{valor.titulo}</h3>
          <p class="text-gray-600">{valor.descripcion}</p>
        </div>
      {/each}
    </div>
  </div>

  <!-- Sección del Equipo -->
  <div>
    <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Nuestro Equipo</h2>
    <div class="grid md:grid-cols-3 gap-8">
      {#each equipo as miembro}
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src={miembro.foto} 
            alt={miembro.nombre}
            class="w-full h-64 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-1">{miembro.nombre}</h3>
            <p class="text-blue-600 mb-3">{miembro.cargo}</p>
            <p class="text-gray-600">{miembro.bio}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Sección de CTA -->
  <div class="mt-16 text-center">
    <p class="text-gray-600">
      ¿Quieres formar parte de nuestro equipo? 
      <a href="/contact" class="text-blue-600 hover:underline">Revisa nuestras ofertas de trabajo</a>
    </p>
  </div>
</div> 
```

## File: src/routes/nosotros/+page.ts

- Extension: .ts
- Language: typescript
- Size: 189 bytes
- Created: 2025-05-12 12:03:18
- Modified: 2025-05-12 12:03:18

### Code

```typescript
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  return {
    title: 'Nosotros | Reco',
    description: 'Conoce al equipo detrás de Reco.'
  };
}; 
```

## File: src/routes/nosotros/+server.js

- Extension: .js
- Language: javascript
- Size: 220 bytes
- Created: 2025-05-12 12:03:18
- Modified: 2025-05-12 12:03:18

### Code

```javascript
export function GET() {
  // Este archivo asegura que la ruta /nosotros exista como endpoint
  return new Response('Redirect to nosotros page', {
    status: 303,
    headers: {
      Location: '/nosotros'
    }
  });
} 
```

## File: src/routes/terms/+page.svelte

- Extension: .svelte
- Language: unknown
- Size: 6430 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```unknown
<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { track } from "$lib/utils/analytics";
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<div class="min-h-screen bg-white">
  <!-- Navigation -->
  <Navbar />

  <!-- Content -->
  <div class="pt-20 pb-12">
    <div class="max-w-3xl mx-auto px-4">
      <h1 class="text-3xl font-bold text-gray-900 mb-8 pt-8">Términos de Servicio</h1>
      
      <div class="prose prose-red max-w-none">
        <p class="text-gray-600 mb-6">
          Última actualización: {new Date().toLocaleDateString('es-UY')}
        </p>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">1. Aceptación de los Términos</h2>
          <p class="text-gray-600 mb-4">
            Al acceder y utilizar los servicios de FanLatinas, usted acepta estar legalmente obligado por estos términos de servicio. Si no está de acuerdo con alguno de estos términos, no debe utilizar nuestros servicios.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">2. Elegibilidad</h2>
          <p class="text-gray-600 mb-4">
            Para utilizar nuestros servicios, usted debe:
          </p>
          <ul class="list-disc pl-6 text-gray-600 mb-4">
            <li>Ser mayor de 18 años</li>
            <li>Tener capacidad legal para contratar</li>
            <li>Proporcionar información precisa y veraz</li>
            <li>Cumplir con todas las leyes y regulaciones aplicables</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">3. Servicios</h2>
          <p class="text-gray-600 mb-4">
            FanLatinas proporciona una plataforma que permite:
          </p>
          <ul class="list-disc pl-6 text-gray-600 mb-4">
            <li>Crear y gestionar perfiles profesionales</li>
            <li>Publicar contenido y servicios</li>
            <li>Interactuar con usuarios de manera segura</li>
            <li>Gestionar pagos y suscripciones</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">4. Tarifas y Pagos</h2>
          <p class="text-gray-600 mb-4">
            Los precios de nuestros servicios están sujetos a:
          </p>
          <ul class="list-disc pl-6 text-gray-600 mb-4">
            <li>Las tarifas publicadas en nuestra plataforma</li>
            <li>Impuestos aplicables según la legislación uruguaya</li>
            <li>Términos específicos de cada plan de suscripción</li>
            <li>Políticas de reembolso establecidas</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">5. Contenido y Conducta</h2>
          <p class="text-gray-600 mb-4">
            Los usuarios deben cumplir con:
          </p>
          <ul class="list-disc pl-6 text-gray-600 mb-4">
            <li>Las leyes y regulaciones aplicables</li>
            <li>Nuestras políticas de contenido</li>
            <li>Estándares de conducta profesional</li>
            <li>Respeto a los derechos de otros usuarios</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">6. Propiedad Intelectual</h2>
          <p class="text-gray-600 mb-4">
            Todo el contenido de la plataforma está protegido por:
          </p>
          <ul class="list-disc pl-6 text-gray-600 mb-4">
            <li>Derechos de autor</li>
            <li>Marcas registradas</li>
            <li>Otros derechos de propiedad intelectual</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">7. Limitación de Responsabilidad</h2>
          <p class="text-gray-600 mb-4">
            FanLatinas no será responsable por:
          </p>
          <ul class="list-disc pl-6 text-gray-600 mb-4">
            <li>Daños indirectos o consecuentes</li>
            <li>Pérdida de datos o ganancias</li>
            <li>Interrupciones del servicio</li>
            <li>Acciones de terceros</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">8. Modificaciones</h2>
          <p class="text-gray-600 mb-4">
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en la plataforma.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">9. Ley Aplicable</h2>
          <p class="text-gray-600 mb-4">
            Estos términos se rigen por las leyes de la República Oriental del Uruguay. Cualquier disputa será sometida a la jurisdicción exclusiva de los tribunales de Montevideo.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">10. Contacto</h2>
          <p class="text-gray-600 mb-4">
            Para cualquier consulta sobre estos términos, contáctenos en:
          </p>
          <ul class="list-disc pl-6 text-gray-600 mb-4">
            <li>Email: legal@fanlatinas.com</li>
            <li>WhatsApp: [Número de Contacto]</li>
          </ul>
        </section>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-gray-900 text-gray-100 py-8">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="text-2xl font-bold text-red-400 mb-4 md:mb-0">FanLatinas</div>
        <nav class="space-x-6">
          <a href="/privacy" class="text-gray-300 hover:text-red-400 transition-colors">Política de Privacidad</a>
          <a href="https://calendly.com/fernando-lqrb/15min" class="text-gray-300 hover:text-red-400 transition-colors">Contacto</a>
        </nav>
      </div>
      <div class="border-t border-gray-800 my-6"></div>
      <p class="text-center text-gray-400 text-sm">&copy; {new Date().getFullYear()} FanLatinas. Todos los derechos reservados.</p>
    </div>
  </footer>
</div>

<style>
  :global(.prose) {
    max-width: 65ch;
    margin: 0 auto;
  }
</style>

```

## File: src/routes/noticias/+page.server.ts

- Extension: .ts
- Language: typescript
- Size: 564 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```typescript
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async () => {
  return {
    meta: {
      title: 'Noticias | Reco',
      description: 'Últimas noticias y actualizaciones de Reco.',
      canonical: 'https://reco.chat/noticias',
      openGraph: {
        title: 'Noticias | Reco',
        description: 'Últimas noticias y actualizaciones de Reco.',
        image: 'https://reco.chat/img/og-image.jpg',
        url: 'https://reco.chat/noticias',
        type: 'website'
      }
    }
  };
}; 
```

## File: src/routes/noticias/+page.svelte

- Extension: .svelte
- Language: unknown
- Size: 1956 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```unknown
<script lang="ts">
  const noticias = [
    {
      fecha: '15 de Marzo, 2024',
      titulo: 'Reco se expande a nuevos mercados',
      resumen: 'Nuestra plataforma de menús digitales inteligentes ahora está disponible en más países.',
      imagen: '/img/news/expansion.jpg'
    },
    {
      fecha: '1 de Marzo, 2024',
      titulo: 'Nueva función: Recomendaciones personalizadas por IA',
      resumen: 'Mejoramos nuestro sistema de recomendaciones con inteligencia artificial más avanzada.',
      imagen: '/img/news/ai-recommendations.jpg'
    },
    {
      fecha: '15 de Febrero, 2024',
      titulo: 'Alianza estratégica con cadenas de restaurantes',
      resumen: 'Reco firma acuerdos con importantes cadenas para mejorar la experiencia de sus clientes.',
      imagen: '/img/news/partnership.jpg'
    }
  ];
</script>

<svelte:head>
  <title>Noticias | Reco</title>
  <meta name="description" content="Últimas noticias y actualizaciones de Reco." />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
  <h1 class="text-4xl font-bold text-gray-900 mb-8">Noticias y Actualizaciones</h1>

  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each noticias as noticia}
      <article class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img 
          src={noticia.imagen} 
          alt={noticia.titulo}
          class="w-full h-48 object-cover"
        />
        <div class="p-6">
          <p class="text-sm text-gray-500 mb-2">{noticia.fecha}</p>
          <h2 class="text-xl font-bold text-gray-900 mb-3">{noticia.titulo}</h2>
          <p class="text-gray-600">{noticia.resumen}</p>
        </div>
      </article>
    {/each}
  </div>

  <div class="mt-12 text-center">
    <p class="text-gray-600">
      ¿Quieres estar al día de nuestras novedades? 
      <a href="/contact" class="text-blue-600 hover:underline">Suscríbete a nuestro newsletter</a>
    </p>
  </div>
</div> 
```

## File: src/routes/noticias/+page.ts

- Extension: .ts
- Language: typescript
- Size: 200 bytes
- Created: 2025-05-12 12:03:18
- Modified: 2025-05-12 12:03:18

### Code

```typescript
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  return {
    title: 'Noticias | Reco',
    description: 'Últimas noticias y actualizaciones de Reco.'
  };
}; 
```

## File: src/routes/noticias/+server.js

- Extension: .js
- Language: javascript
- Size: 220 bytes
- Created: 2025-05-12 12:03:18
- Modified: 2025-05-12 12:03:18

### Code

```javascript
export function GET() {
  // Este archivo asegura que la ruta /noticias exista como endpoint
  return new Response('Redirect to noticias page', {
    status: 303,
    headers: {
      Location: '/noticias'
    }
  });
} 
```

## File: src/routes/precios/+page.server.ts

- Extension: .ts
- Language: typescript
- Size: 538 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```typescript
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async () => {
  return {
    meta: {
      title: 'Precios | Reco',
      description: 'Conoce nuestros planes y precios.',
      canonical: 'https://reco.chat/precios',
      openGraph: {
        title: 'Precios | Reco',
        description: 'Conoce nuestros planes y precios.',
        image: 'https://reco.chat/img/og-image.jpg',
        url: 'https://reco.chat/precios',
        type: 'website'
      }
    }
  };
}; 
```

## File: src/routes/precios/+page.svelte

- Extension: .svelte
- Language: unknown
- Size: 5956 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```unknown
<script lang="ts">
  import { Button } from "$lib/components/ui/button";
</script>

<svelte:head>
  <title>Precios | Reco</title>
  <meta name="description" content="Conoce nuestros planes y precios." />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
  <div class="text-center">
    <h1 class="text-4xl font-bold text-gray-900 mb-4">Planes y Precios</h1>
    <p class="text-xl text-gray-600 max-w-2xl mx-auto">
      Elige el plan que mejor se adapte a las necesidades de tu restaurante.
    </p>
  </div>

  <div class="mt-16 grid md:grid-cols-3 gap-8">
    <!-- Plan Básico -->
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="px-6 py-8">
        <h3 class="text-2xl font-bold text-gray-900 text-center">Básico</h3>
        <div class="mt-4 flex justify-center">
          <span class="text-5xl font-bold">29€</span>
          <span class="text-xl text-gray-500 self-end mb-1">/mes</span>
        </div>
        <ul class="mt-8 space-y-4">
          <li class="flex items-start">
            <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Menú digital básico</span>
          </li>
          <li class="flex items-start">
            <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Hasta 50 platos</span>
          </li>
          <li class="flex items-start">
            <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Soporte por email</span>
          </li>
        </ul>
      </div>
      <div class="px-6 pb-8">
        <Button variant="outline" class="w-full">Empezar ahora</Button>
      </div>
    </div>

    <!-- Plan Pro -->
    <div class="bg-blue-600 rounded-lg shadow-lg overflow-hidden transform scale-105">
      <div class="px-6 py-8">
        <h3 class="text-2xl font-bold text-white text-center">Pro</h3>
        <div class="mt-4 flex justify-center text-white">
          <span class="text-5xl font-bold">79€</span>
          <span class="text-xl opacity-80 self-end mb-1">/mes</span>
        </div>
        <ul class="mt-8 space-y-4 text-white">
          <li class="flex items-start">
            <svg class="h-6 w-6 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Todo lo del plan Básico</span>
          </li>
          <li class="flex items-start">
            <svg class="h-6 w-6 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Recomendaciones IA</span>
          </li>
          <li class="flex items-start">
            <svg class="h-6 w-6 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Análisis de datos</span>
          </li>
          <li class="flex items-start">
            <svg class="h-6 w-6 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Soporte prioritario</span>
          </li>
        </ul>
      </div>
      <div class="px-6 pb-8">
        <Button variant="default" class="w-full bg-white text-blue-600 hover:bg-white/90">
          Comenzar prueba gratuita
        </Button>
      </div>
    </div>

    <!-- Plan Enterprise -->
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="px-6 py-8">
        <h3 class="text-2xl font-bold text-gray-900 text-center">Enterprise</h3>
        <div class="mt-4 flex justify-center">
          <span class="text-5xl font-bold">Custom</span>
        </div>
        <ul class="mt-8 space-y-4">
          <li class="flex items-start">
            <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Todo lo del plan Pro</span>
          </li>
          <li class="flex items-start">
            <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Integración personalizada</span>
          </li>
          <li class="flex items-start">
            <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Soporte 24/7</span>
          </li>
        </ul>
      </div>
      <div class="px-6 pb-8">
        <Button variant="outline" class="w-full">Contactar ventas</Button>
      </div>
    </div>
  </div>

  <div class="mt-16 text-center">
    <p class="text-gray-600">
      ¿Necesitas más información? <a href="/contact" class="text-blue-600 hover:underline">Contacta con nosotros</a>
    </p>
  </div>
</div> 
```

## File: src/routes/precios/+page.ts

- Extension: .ts
- Language: typescript
- Size: 188 bytes
- Created: 2025-05-12 12:03:18
- Modified: 2025-05-12 12:03:18

### Code

```typescript
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  return {
    title: 'Precios | Reco',
    description: 'Conoce nuestros planes y precios.'
  };
}; 
```

## File: src/routes/precios/+layout.svelte

- Extension: .svelte
- Language: unknown
- Size: 89 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```unknown
<script>
  // Este layout es específico para la sección de precios
</script>

<slot /> 
```

## File: src/routes/precios/+server.js

- Extension: .js
- Language: javascript
- Size: 217 bytes
- Created: 2025-05-12 12:03:18
- Modified: 2025-05-12 12:03:18

### Code

```javascript
export function GET() {
  // Este archivo asegura que la ruta /precios exista como endpoint
  return new Response('Redirect to precios page', {
    status: 303,
    headers: {
      Location: '/precios'
    }
  });
} 
```

## File: src/lib/utils/analytics.ts

- Extension: .ts
- Language: typescript
- Size: 716 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```typescript
/**
 * Analytics utility for tracking events
 */

interface Window {
  gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
  hj?: (command: string, action: string, params?: Record<string, unknown>) => void;
}

/**
 * Track an event in analytics platforms
 * @param event The event name
 * @param data Optional event data
 */
export const track = (event: string, data?: Record<string, unknown>): void => {
  if (typeof window !== 'undefined') {
    // Track in Google Analytics
    if ((window as any).gtag) {
      (window as any).gtag('event', event, data);
    }
    
    // Track in Hotjar
    if ((window as any).hj) {
      (window as any).hj('event', event, data);
    }
  }
}; 
```

## File: src/lib/components/Navbar.svelte

- Extension: .svelte
- Language: unknown
- Size: 6502 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```unknown
<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { track } from "$lib/utils/analytics";
  import { onMount } from 'svelte';
  
  let isMenuOpen = false;
  let isMobile = false;
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
  
  function closeMenu() {
    isMenuOpen = false;
  }
  
  onMount(() => {
    const checkMobile = () => {
      isMobile = window.innerWidth < 1024;
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  });
</script>

<nav class="bg-blue-600 fixed w-full top-0 z-50 shadow-sm">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
    <!-- Logo y enlaces de navegación -->
    <div class="flex items-center lg:space-x-16">
      <a href="/" class="flex items-center">
        <img src="/img/reco-logo.svg" alt="Reco" class="h-8" />
      </a>
      
      <!-- Menú de navegación para escritorio -->
      <div class="hidden lg:flex lg:items-center">
        <a href="/restaurantes" class="text-white hover:text-white/80 flex items-center space-x-1 mx-6 px-6">
          <span>Restaurantes</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </a>
        <a href="/precios" class="text-white hover:text-white/80 mx-6 px-6">Precios</a>
        <a href="/noticias" class="text-white hover:text-white/80 mx-6 px-6">Noticias</a>
        <a href="/nosotros" class="text-white hover:text-white/80 flex items-center space-x-1 mx-6 px-6">
          <span>Nosotros</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </a>
      </div>
    </div>
    
    <!-- Parte derecha - Botones de acción y menú hamburguesa -->
    <div class="flex items-center">
      <!-- Enlaces de acción para escritorio -->
      <div class="hidden lg:flex lg:items-center lg:space-x-4">
        <a href="https://app.reco.chat/login" class="text-white hover:text-white/80 flex items-center space-x-1 px-4" on:click={() => track('nav_click', { label: 'restaurant_login' })}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span>Restaurantes | Login</span>
        </a>
        <a href="/contact">
          <Button 
            variant="default" 
            class="bg-white text-blue-600 hover:bg-white/90 font-medium rounded-md px-5 py-2"
            on:click={() => {
              track('nav_click', { label: 'contact_sales' });
            }}
          >
            Contacto Sales
          </Button>
        </a>
      </div>
      
      <!-- Menú hamburguesa para móviles - ahora a la derecha -->
      <button 
        class="text-white ml-4 lg:hidden" 
        on:click={toggleMenu}
        aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
      >
        {#if isMenuOpen}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        {:else}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        {/if}
      </button>
    </div>
  </div>

  <!-- Menú móvil desplegable -->
  {#if isMenuOpen}
    <div class="bg-blue-600 py-4 px-4 lg:hidden">
      <div class="flex flex-col space-y-4">
        <a href="/restaurantes" class="text-white hover:text-white/80 flex items-center space-x-1" on:click={closeMenu}>
          <span>Restaurantes</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </a>
        <a href="/precios" class="text-white hover:text-white/80" on:click={closeMenu}>Precios</a>
        <a href="/noticias" class="text-white hover:text-white/80" on:click={closeMenu}>Noticias</a>
        <a href="/nosotros" class="text-white hover:text-white/80 flex items-center space-x-1" on:click={closeMenu}>
          <span>Nosotros</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </a>
        <div class="pt-2 border-t border-blue-500">
          <a href="https://app.reco.chat/login" class="text-white hover:text-white/80 flex items-center space-x-1" on:click={closeMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>Restaurantes | Login</span>
          </a>
        </div>
        <a href="/contact" class="block w-full" on:click={closeMenu}>
          <Button 
            variant="default" 
            class="bg-white text-blue-600 hover:bg-white/90 font-medium rounded-md px-5 py-2 w-full"
            on:click={() => {
              track('nav_click', { label: 'contact_sales' });
            }}
          >
            Contacto Sales
          </Button>
        </a>
      </div>
    </div>
  {/if}
</nav>

<div class="h-16"></div> <!-- Espaciador para el navbar fijo -->

<style>
  /* Asegura que la transición del menú sea suave */
  nav div {
    transition: all 0.3s ease;
  }
</style> 
```

## File: src/lib/data/partners.ts

- Extension: .ts
- Language: typescript
- Size: 376 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```typescript
interface Partner {
  name: string;
  logoUrl: string;
}

export const partners: Partner[] = [
  { name: "Yelmo", logoUrl: "/img/logo-yelmo.svg" },
  { name: "VIPS", logoUrl: "/img/logo-vips.svg" },
  { name: "Honest Greens", logoUrl: "/img/logo-honest-greens.svg" },
  { name: "TGB", logoUrl: "/img/logo-tgb.svg" },
  { name: "FoodBox", logoUrl: "/img/logo-foodbox.svg" }
]; 
```

## File: src/lib/analytics/index.ts

- Extension: .ts
- Language: typescript
- Size: 1070 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```typescript
// Tipos para Google Analytics y Hotjar
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    hj: {
      (...args: any[]): void;
      q?: any[];
    };
    _hjSettings: {
      hjid: number;
      hjsv: number;
    };
  }
}

// Configuración de Google Analytics
export const initGoogleAnalytics = (id: string) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', id);
  }
};

// Configuración de Hotjar
export const initHotjar = (id: number) => {
  if (typeof window !== 'undefined') {
    window.hj = window.hj || function() {
      (window.hj.q = window.hj.q || []).push(arguments);
    };
    window._hjSettings = { hjid: id, hjsv: 6 };
    
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://static.hotjar.com/c/hotjar-${id}.js?sv=6`;
    document.head.appendChild(script);
  }
}; 
```

## File: src/lib/components/landing/how-it-works.svelte

- Extension: .svelte
- Language: unknown
- Size: 4501 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```unknown
<script lang="ts">
  import { onMount } from "svelte";
  
  interface Step {
    title: string;
    description: string;
    icon: string;
  }
  
  const steps: Step[] = [
    {
      title: "Escanea el QR",
      description: "Sin app, acceso directo al menú digital.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
      </svg>`
    },
    {
      title: "Pregunta lo que quieras",
      description: "¿Qué es lo más popular? ¿Soy vegano, qué puedo comer?",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>`
    },
    {
      title: "Decide sin dudar",
      description: "Reco te guía según tus gustos, dieta y bolsillo.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>`
    },
    {
      title: "Pide. Disfruta.",
      description: "Mejor elección, mejor experiencia.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>`
    }
  ];
  
  let stepsVisible = Array(steps.length).fill(false);
  
  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          stepsVisible[index] = true;
        }
      });
    }, { threshold: 0.3 });
    
    const stepElements = document.querySelectorAll('.step-item');
    stepElements.forEach(el => observer.observe(el));
    
    return () => {
      stepElements.forEach(el => observer.unobserve(el));
    };
  });
</script>

<section id="how-it-works" class="py-16 md:py-24 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900">¿Cómo funciona Reco?</h2>
      <p class="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
        Esta parte es para ti, comensal. Sí, tú. El que tiene hambre, dudas o simplemente quiere pedir mejor sin complicarse.
      </p>
    </div>
    
    <div class="max-w-4xl mx-auto">
      <div class="relative">
        <!-- Vertical line -->
        <div class="absolute left-8 inset-y-0 w-0.5 bg-gray-200"></div>
        
        {#each steps as step, i}
          <div 
            class="step-item relative flex items-start mb-12 transition-opacity duration-500 ease-in-out {stepsVisible[i] ? 'opacity-100' : 'opacity-0'}" 
            style="transition-delay: {i * 150}ms;"
            data-index={i}
          >
            <!-- Circle with icon -->
            <div class="z-10 flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg">
              {@html step.icon}
            </div>
            
            <div class="ml-6">
              <h3 class="text-xl font-bold text-gray-900">{step.title}</h3>
              <p class="mt-2 text-gray-600">{step.description}</p>
            </div>
          </div>
        {/each}
      </div>
      
      <div class="mt-12 bg-blue-50 p-6 rounded-lg">
        <p class="text-center text-blue-800">
          <strong>¿Tienes un restaurante?</strong> Descubre cómo Reco transforma estas preguntas en 
          insights que mejoran tu cocina.
        </p>
      </div>
    </div>
  </div>
</section> 
```

## File: src/lib/components/landing/benefits-section.svelte

- Extension: .svelte
- Language: unknown
- Size: 3487 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```unknown
<script lang="ts">
  import { onMount } from "svelte";
</script>

<section id="benefits" class="py-16 md:py-24 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-left mb-12">
      <h2 class="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-600 leading-tight">Una forma más<br>inteligente de comer fuera.</h2>
      <p class="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
        RECO es una carta digital inteligente que personaliza la experiencia de cada comensal.
        Funciona con un simple escaneo de QR - sin necesidad de app.
      </p>
      <a href="#explora" class="mt-6 inline-block text-blue-600 font-medium hover:underline">Explorar cómo usarlo →</a>
    </div>
    
    <div class="grid md:grid-cols-3 gap-8 mt-16">
      <!-- Benefit 1 - Menús en tu idioma -->
      <div class="bg-white rounded-xl shadow-xl p-8">
        <div class="w-16 h-16 bg-blue-100 rounded-xl mb-6 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
        </div>
        
        <h3 class="text-2xl font-bold text-gray-900 mb-3">Menús en tu idioma</h3>
        
        <p class="text-gray-600">
          Ver el menú en tu idioma preferido, sin complicaciones. Adaptado automáticamente para que te sientas como en casa.
        </p>
      </div>
      
      <!-- Benefit 2 - Recomendaciones personalizadas -->
      <div class="bg-white rounded-xl shadow-xl p-8">
        <div class="w-16 h-16 bg-green-100 rounded-xl mb-6 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        
        <h3 class="text-2xl font-bold text-gray-900 mb-3">Recomendaciones personalizadas</h3>
        
        <p class="text-gray-600">
          Obtén recomendaciones inteligentes basadas en tus preferencias, dieta, y presupuesto. Como tener un experto gastronómico personal.
        </p>
      </div>
      
      <!-- Benefit 3 - Pide y paga desde el móvil -->
      <div class="bg-white rounded-xl shadow-xl p-8">
        <div class="w-16 h-16 bg-purple-100 rounded-xl mb-6 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        
        <h3 class="text-2xl font-bold text-gray-900 mb-3">Pide y paga desde el móvil</h3>
        
        <p class="text-gray-600">
          Simplifica tu experiencia pagando directamente desde tu dispositivo. Sin esperas, sin complicaciones, solo disfruta.
        </p>
      </div>
    </div>
  </div>
</section> 
```

## File: src/lib/components/landing/contact-cta.svelte

- Extension: .svelte
- Language: unknown
- Size: 1715 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```unknown
<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { track } from "$lib/utils/analytics";
  
  // Changed from props to constants since they're not being used as component props
  const salesEmail: string = "sales@reco.chat";
  const trialHref: string = "/contact";
  const calendlyUrl: string = "https://calendly.com/fernando-lqrb/15min";
</script>

<section class="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-6">Transforma la experiencia de tus clientes con Reco</h2>
    
    <p class="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
      Potencia tu restaurante con recomendaciones inteligentes, pagos más rápidos y clientes más satisfechos.
      Descubre cómo Reco puede ayudarte a crecer.
    </p>
    
    <div class="flex flex-col sm:flex-row gap-6 justify-center">
      <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
        <Button 
          size="lg" 
          class="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8 w-full"
          on:click={() => {
            track('cta_click', { label: 'contact_sales' });
          }}
        >
          Contacta con ventas
        </Button>
      </a>
      
      <a href={trialHref}>
        <Button 
          variant="outline" 
          size="lg" 
          class="border-white text-blue-600 hover:bg-blue-700 hover:text-white rounded-full px-8 w-full"
          on:click={() => {
            track('cta_click', { label: 'free_trial' });
          }}
        >
          Prueba gratis
        </Button>
      </a>
    </div>
  </div>
</section> 
```

## File: src/lib/components/landing/footer.svelte

- Extension: .svelte
- Language: unknown
- Size: 3203 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```unknown
<script lang="ts">
  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-gray-900 text-white py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <a href="/" class="block mb-4">
          <img src="/img/reco-logo.svg" alt="Reco" class="h-8" />
        </a>
        <p class="text-gray-400 text-sm">
          Transformando la experiencia gastronómica con inteligencia artificial.
        </p>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-4">Empresa</h3>
        <ul class="space-y-2">
          <li><a href="/nosotros" class="hover:text-blue-400">Nosotros</a></li>
          <li><a href="/noticias" class="hover:text-blue-400">Noticias</a></li>
          <li><a href="/contact" class="hover:text-blue-400">Contacto</a></li>
        </ul>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-4">Productos</h3>
        <ul class="space-y-2">
          <li><a href="/restaurantes" class="hover:text-blue-400">Restaurantes</a></li>
          <li><a href="/precios" class="hover:text-blue-400">Precios</a></li>
        </ul>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-4">Legal</h3>
        <ul class="space-y-2">
          <li><a href="/privacy" class="hover:text-blue-400">Privacidad</a></li>
          <li><a href="/terms" class="hover:text-blue-400">Términos</a></li>
        </ul>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-4">Síguenos</h3>
        <div class="flex space-x-4">
          <a href="https://twitter.com/reco" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400">
            <span class="sr-only">Twitter</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
          </a>
          <a href="https://linkedin.com/company/reco" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400">
            <span class="sr-only">LinkedIn</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    
    <div class="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
      <p>&copy; {currentYear} Reco. Todos los derechos reservados.</p>
    </div>
  </div>
</footer> 
```

## File: src/lib/components/landing/hero-section.svelte

- Extension: .svelte
- Language: unknown
- Size: 3447 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```unknown
<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { track } from "$lib/utils/analytics";

  export let onDiscoverClick: () => void;
  export let onRestaurantClick: () => void;
</script>
<!-- Hero Section -->
<section class="bg-white py-20 md:py-32 overflow-hidden relative">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="md:flex md:items-center md:justify-between">
      <div class="md:w-1/2 md:pr-12 mb-12 md:mb-0">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
          Pide mejor.<br>
          <span class="text-blue-600">Disfruta más.</span>
        </h1>
        
        <p class="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
          Reco es ese amigo experto que te ayuda a elegir como si conociera toda la carta.
          Te recomienda el plato perfecto según tu antojo, tu bolsillo y tu dieta en tu idioma y sin líos.
        </p>
        
        <div class="mt-10 flex flex-col sm:flex-row gap-4">
          <Button 
            size="lg" 
            class="rounded-full px-6 bg-blue-600 hover:bg-blue-700 text-white"
            on:click={() => {
              track('cta_click', { label: 'discover_how_it_works' });
              onDiscoverClick();
            }}
          >
            Descubre cómo funciona
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            class="rounded-full px-6 border-blue-600 text-blue-600 hover:bg-blue-50"
            on:click={() => {
              track('cta_click', { label: 'restaurant_help' });
              onRestaurantClick();
            }}
          >
            ¿Tienes un restaurante? Así te ayuda RECO
          </Button>
        </div>
        
        <p class="mt-8 text-sm text-gray-500">Confían en nosotros:</p>
        <div class="relative">
          <div class="absolute left-0 mt-2 flex flex-wrap items-center gap-8">
            <img src="/Yelmo.png" alt="Cine Yelmo" class="h-20 opacity-100 hover:opacity-90 transition-opacity" />
            <img src="/VIPS.png" alt="Vips" class="h-16 opacity-100 hover:opacity-90 transition-opacity" />
            <img src="/HonestGreens.png" alt="HonestGreens" class="h-16 opacity-100 hover:opacity-90 transition-opacity" />
          </div>
        </div>
        <!-- Espacio adicional para evitar que el contenido siguiente se superponga con los logos -->
        <div class="h-28"></div>
      </div>
      
      <div class="md:w-1/2 relative">
        <div class="relative z-10 transform transition-transform duration-500 hover:translate-y-[-10px]">
          <img
            src="/img/phone-mockup.png"
            alt="Reco app interface on mobile phone"
            class="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
            loading="eager"
            fetchpriority="high"
          />
        </div>
        
        <div class="absolute inset-0 bg-gradient-to-tr from-blue-100 via-transparent to-blue-50 rounded-full filter blur-3xl opacity-70"></div>
        
        <!-- Decorative elements -->
        <div class="absolute top-1/4 left-1/4 w-12 h-12 bg-yellow-400 rounded-full filter blur-xl opacity-70 animate-pulse"></div>
        <div class="absolute bottom-1/3 right-1/4 w-16 h-16 bg-blue-400 rounded-full filter blur-xl opacity-60 animate-pulse" style="animation-delay: 1s"></div>
      </div>
    </div>
  </div>
</section> 
```

## File: src/lib/components/landing/partners-strip.svelte

- Extension: .svelte
- Language: unknown
- Size: 1120 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```unknown
<script lang="ts">
  interface Partner {
    name: string;
    logoUrl: string;
  }
  
  export let partners: Partner[] = [
    { name: "Yelmo", logoUrl: "/img/logo-yelmo.svg" },
    { name: "VIPS", logoUrl: "/img/logo-vips.svg" },
    { name: "Honest Greens", logoUrl: "/img/logo-honest-greens.svg" },
    { name: "TGB", logoUrl: "/img/logo-tgb.svg" },
    { name: "FoodBox", logoUrl: "/img/logo-foodbox.svg" }
  ];
</script>

<section class="py-12 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-8">
      <h3 class="text-lg font-medium text-gray-900">Empresas que confían en Reco</h3>
    </div>
    
    <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16">
      {#each partners as partner}
        <div class="flex items-center justify-center">
          <img 
            src={partner.logoUrl} 
            alt={partner.name} 
            class="h-8 md:h-12 max-w-[120px] md:max-w-[160px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
          />
        </div>
      {/each}
    </div>
  </div>
</section> 
```

## File: src/lib/components/ui/card/card.svelte

- Extension: .svelte
- Language: unknown
- Size: 288 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```unknown
<script lang="ts">
  import { cn } from "$lib/utils";

  let className: string | undefined = undefined;
  export { className as class };
</script>

<div
  class={cn(
    "rounded-lg border bg-card text-card-foreground shadow-sm",
    className
  )}
  {...$$restProps}
>
  <slot />
</div> 
```

## File: src/lib/components/ui/card/index.ts

- Extension: .ts
- Language: typescript
- Size: 113 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```typescript
export { default as Card } from "./card.svelte";
export { default as CardContent } from "./card-content.svelte"; 
```

## File: src/lib/components/ui/card/card-content.svelte

- Extension: .svelte
- Language: unknown
- Size: 223 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```unknown
<script lang="ts">
  import { cn } from "$lib/utils";

  let className: string | undefined = undefined;
  export { className as class };
</script>

<div class={cn("p-6 pt-0", className)} {...$$restProps}>
  <slot />
</div> 
```

## File: src/lib/components/ui/input/input.svelte

- Extension: .svelte
- Language: unknown
- Size: 702 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```unknown
<script lang="ts">
  import { cn } from "$lib/utils";
  import type { HTMLInputAttributes } from "svelte/elements";

  interface $$Props extends HTMLInputAttributes {
    class?: string;
  }

  let className: string | undefined = undefined;
  export { className as class };
</script>

<input
  class={cn(
    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    className
  )}
  {...$$restProps}
/> 
```

## File: src/lib/components/ui/input/index.ts

- Extension: .ts
- Language: typescript
- Size: 51 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```typescript
export { default as Input } from "./input.svelte"; 
```

## File: src/lib/components/ui/checkbox/checkbox.svelte

- Extension: .svelte
- Language: unknown
- Size: 953 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```unknown
<script lang="ts">
  import { cn } from "$lib/utils";
  import { Check } from "lucide-svelte";

  interface $$Props {
    checked?: boolean;
    class?: string;
    id?: string;
  }

  let className: string | undefined = undefined;
  export let checked = false;
  export { className as class };
</script>

<div
  class={cn(
    "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
    className
  )}
  data-state={checked ? "checked" : "unchecked"}
>
  {#if checked}
    <div class="flex items-center justify-center text-current">
      <Check class="h-4 w-4" />
    </div>
  {/if}
  <input
    type="checkbox"
    bind:checked
    class="absolute h-4 w-4 opacity-0"
    {...$$restProps}
  />
</div> 
```

## File: src/lib/components/ui/checkbox/index.ts

- Extension: .ts
- Language: typescript
- Size: 57 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```typescript
export { default as Checkbox } from "./checkbox.svelte"; 
```

## File: src/lib/components/ui/button/button.svelte

- Extension: .svelte
- Language: unknown
- Size: 876 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```unknown
<script lang="ts">
  import { cn } from "$lib/utils";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { buttonVariants, type ButtonVariants } from "./variants";
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  interface $$Props extends HTMLButtonAttributes {
    variant?: ButtonVariants["variant"];
    size?: ButtonVariants["size"];
    class?: string;
  }

  let className: string | undefined = undefined;
  export let variant: $$Props["variant"] = "default";
  export let size: $$Props["size"] = "default";
  export { className as class };

  function handleClick(event: MouseEvent) {
    console.log('Button clicked');
    dispatch('click', event);
  }
</script>

<button
  class={cn(buttonVariants({ variant, size }), className)}
  on:click={handleClick}
  {...$$restProps}
>
  <slot />
</button> 
```

## File: src/lib/components/ui/button/index.ts

- Extension: .ts
- Language: typescript
- Size: 98 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```typescript
export { default as Button } from "./button.svelte";
export { buttonVariants } from "./variants"; 
```

## File: src/lib/components/ui/button/variants.ts

- Extension: .ts
- Language: typescript
- Size: 1250 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```typescript
import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>; 
```

## File: src/lib/components/ui/modal/modal.svelte

- Extension: .svelte
- Language: unknown
- Size: 1060 bytes
- Created: 2025-05-12 10:50:54
- Modified: 2025-05-12 10:50:54

### Code

```unknown
<script lang="ts">
  import { fade } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';
  
  export let showModal: boolean;
  
  const dispatch = createEventDispatcher();
  
  $: {
    console.log('Modal showModal value changed:', showModal);
  }
  
  function closeModal() {
    console.log('Closing modal...');
    showModal = false;
    dispatch('close');
  }
</script>

{#if showModal}
  <div 
    class="fixed inset-0 bg-black/50 z-[100]"
    transition:fade
    on:click={closeModal}
  >
    <div 
      class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg w-full max-w-lg"
      on:click|stopPropagation
    >
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold">Únete a la Lista de Espera</h2>
        <button 
          class="text-gray-500 hover:text-gray-700"
          on:click={closeModal}
        >
          ✕
        </button>
      </div>
      <slot />
    </div>
  </div>
{:else}
  <div class="hidden">Modal is closed</div>
{/if} 
```

