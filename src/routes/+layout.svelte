<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/components/landing/Navbar.svelte';
  import Footer from '$lib/components/landing/footer.svelte';
  import CookieConsentBanner from '$lib/components/ui/cookie-consent-banner.svelte';
  import { onMount } from 'svelte';
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
  import { initAnalytics } from '$lib/analytics';
  import { languageStore } from '$lib/stores/language.svelte';
  import type { PageData } from './$types';

  // Access route children via snippet prop instead of legacy slots
  import type { Snippet } from 'svelte';

  let { children, data } = $props<{ children?: Snippet; data: PageData }>();

  // Initialize language with server suggestion if available
  $effect(() => {
    if (data?.suggestedLanguage) {
      languageStore.initializeWithSuggestion(data.suggestedLanguage);
    }
  });

  // Update HTML lang attribute
  $effect(() => {
    if (typeof document !== 'undefined') {
      const lang = languageStore.currentLanguage;
      // Map to proper HTML lang codes
      const htmlLang = lang === 'es-MX' ? 'es-MX' : lang === 'en' ? 'en' : 'es';
      document.documentElement.lang = htmlLang;
    }
  });

  onMount(() => {
    // Defer all analytics initialization to reduce main thread blocking
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        // Initialize Vercel Analytics
        inject({ mode: dev ? 'development' : 'production' });
        // Initialize other analytics if user has already consented
        initAnalytics();
      }, { timeout: 3000 });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(() => {
        inject({ mode: dev ? 'development' : 'production' });
        initAnalytics();
      }, 100);
    }
  });
</script>

<div class="min-h-screen bg-white text-gray-900 flex flex-col overflow-x-hidden">
  <Navbar />
  
  <main class="flex-grow">
    {@render children?.()}
  </main>

  <Footer />

  <div class="bg-white py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <img
        src="/enisa.jpg"
        alt="ENISA"
        class="w-full h-auto object-contain"
        loading="lazy"
        decoding="async"
      />
    </div>
  </div>
  
  <!-- Cookie Consent Banner -->
  <CookieConsentBanner />
</div> 
