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

  // Initialize Vercel Analytics immediately (correct SvelteKit implementation)
  inject({ mode: dev ? 'development' : 'production' });

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
    // Initialize analytics if user has already consented
    initAnalytics();
  });
</script>

<div class="min-h-screen bg-white text-gray-900 flex flex-col overflow-x-hidden">
  <Navbar />
  
  <main class="flex-grow">
    {@render children?.()}
  </main>

  <Footer />
  
  <!-- Cookie Consent Banner -->
  <CookieConsentBanner />
</div> 