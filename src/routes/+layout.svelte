<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/components/landing/Navbar.svelte';
  import Footer from '$lib/components/landing/footer.svelte';
  import CookieConsentBanner from '$lib/components/ui/cookie-consent-banner.svelte';
  import { onMount } from 'svelte';
  import { initAnalytics } from '$lib/analytics';

  // Access route children via snippet prop instead of legacy slots
  import type { Snippet } from 'svelte';

  let { children } = $props<{ children?: Snippet }>();

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