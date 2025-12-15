<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { onMount } from 'svelte';
  import { track } from "$lib/utils/analytics";
  import Navbar from "$lib/components/landing/Navbar.svelte";
  import { languageStore } from '$lib/stores/language.svelte';

  // Make language reactive
  import { t } from '$lib/utils/translations';

  // Create reactive translations
  const currentLang = $derived(languageStore.currentLanguage);
  const tr = (key: Parameters<typeof t>[0]) => t(key, currentLang);

  // Calendly URL
  const calendlyUrl = "https://calendar.app.google/C3yhn8ZD1ZcMSCPC7";
  
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
      <h1 class="text-3xl font-bold text-gray-900 mb-6">{tr('contact_title')}</h1>
      
      <div class="bg-white rounded-3xl shadow-lg p-8 space-y-6">
        <div class="text-6xl mb-6">📅</div>
        <p class="text-gray-600 mb-6">
          {tr('contact_redirecting')}
        </p>
        
        <Button 
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-full shadow-lg transform transition-all hover:scale-105"
          on:click={redirectToCalendly}
        >
          {tr('contact_schedule_meeting')}
        </Button>
        
        <p class="text-sm text-gray-500 mt-4">
          {tr('contact_auto_redirect')}
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
          <a href="/privacy" class="text-gray-300 hover:text-blue-400 transition-colors">{tr('footer_privacy')}</a>
          <a href="/terms" class="text-gray-300 hover:text-blue-400 transition-colors">{tr('footer_terms')}</a>
        </nav>
      </div>
      <div class="border-t border-gray-800 my-6"></div>
      <p class="text-center text-gray-400 text-sm">&copy; {new Date().getFullYear()} Reco AI Solutions. {tr('footer_rights')}</p>
    </div>
  </footer>
</div>

<style>
  /* Add any custom styles here */
  .shadow-lg {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
</style>
