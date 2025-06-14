<script lang="ts">
  import { onMount } from 'svelte';
  import { Button } from '$lib/components/ui/button';
  import { 
    hasUserConsented, 
    acceptAllCookies, 
    acceptEssentialOnly,
    type CookiePreferences,
    setConsentPreferences,
    COOKIE_DESCRIPTIONS
  } from '$lib/utils/cookies';
  import { track } from '$lib/utils/analytics';
  import { isAnalyticsConfigured } from '$lib/analytics';

  let showBanner = $state(false);
  let showDetails = $state(false);
  let preferences = $state<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  onMount(() => {
    // Only show banner if user hasn't consented yet
    if (!hasUserConsented()) {
      showBanner = true;
    }
  });

  function handleAcceptAll() {
    acceptAllCookies();
    showBanner = false;
    track('cookie_consent', { action: 'accept_all' });
    
    // Reload page to initialize analytics
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  }

  function handleAcceptEssential() {
    acceptEssentialOnly();
    showBanner = false;
    track('cookie_consent', { action: 'essential_only' });
  }

  function handleCustomize() {
    setConsentPreferences(preferences);
    showBanner = false;
    track('cookie_consent', { 
      action: 'customize',
      analytics: preferences.analytics,
      marketing: preferences.marketing
    });
    
    // Reload page if analytics was enabled
    if (preferences.analytics && typeof window !== 'undefined') {
      window.location.reload();
    }
  }

  function toggleDetails() {
    showDetails = !showDetails;
    track('cookie_consent', { action: 'toggle_details', show: showDetails });
  }
</script>

{#if showBanner}
  <div class="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
    <div class="max-w-7xl mx-auto p-4 sm:p-6">
      {#if !showDetails}
        <!-- Simple Banner -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div class="flex-1">
            <p class="text-sm text-gray-700">
              🍪 Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. 
              <button 
                onclick={toggleDetails}
                class="text-blue-600 hover:text-blue-700 underline font-medium"
              >
                Más información
              </button>
            </p>
          </div>
          <div class="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Button
              variant="outline"
              size="sm"
              onclick={handleAcceptEssential}
              class="text-sm"
            >
              Solo esenciales
            </Button>
            <Button
              size="sm"
              onclick={handleAcceptAll}
              class="bg-blue-600 hover:bg-blue-700 text-white text-sm"
            >
              Aceptar todas
            </Button>
          </div>
        </div>
      {:else}
        <!-- Detailed Settings -->
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold text-gray-900">
              Configuración de Cookies
            </h3>
            <button
              onclick={toggleDetails}
              class="text-gray-500 hover:text-gray-700"
              aria-label="Cerrar configuración"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <p class="text-sm text-gray-600">
            Personaliza qué cookies quieres permitir. Puedes cambiar estas preferencias en cualquier momento.
          </p>

          <div class="space-y-4">
            {#each Object.entries(COOKIE_DESCRIPTIONS) as [key, desc]}
              {@const cookieKey = key as keyof CookiePreferences}
              <div class="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg">
                <div class="flex-shrink-0 pt-1">
                  <input
                    type="checkbox"
                    id={cookieKey}
                    bind:checked={preferences[cookieKey]}
                    disabled={cookieKey === 'essential'}
                    class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 disabled:opacity-50"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <label for={cookieKey} class="block text-sm font-medium text-gray-900">
                    {desc.name}
                    {#if cookieKey === 'essential'}
                      <span class="text-xs text-gray-500 font-normal">(Obligatorias)</span>
                    {/if}
                  </label>
                  <p class="text-xs text-gray-600 mt-1">
                    {desc.description}
                  </p>
                  <p class="text-xs text-gray-500 mt-1">
                    <strong>Ejemplos:</strong> {desc.examples}
                  </p>
                </div>
              </div>
            {/each}
          </div>

          <div class="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
            <Button
              variant="outline"
              size="sm"
              onclick={handleAcceptEssential}
              class="text-sm"
            >
              Solo esenciales
            </Button>
            <Button
              variant="outline"
              size="sm"
              onclick={handleCustomize}
              class="text-sm"
            >
              Guardar preferencias
            </Button>
            <Button
              size="sm"
              onclick={handleAcceptAll}
              class="bg-blue-600 hover:bg-blue-700 text-white text-sm"
            >
              Aceptar todas
            </Button>
          </div>
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>
  /* Ensure banner stays above other content */
  :global(body:has(.cookie-banner)) {
    padding-bottom: env(keyboard-inset-height, 0);
  }
</style>