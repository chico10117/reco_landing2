<script lang="ts">
  import { onMount } from 'svelte';
  import { Button } from '$lib/components/ui/button';
  import { 
    getConsentStatus,
    setConsentPreferences,
    clearConsent,
    type CookiePreferences,
    COOKIE_DESCRIPTIONS,
    DEFAULT_PREFERENCES
  } from '$lib/utils/cookies';
  import { track } from '$lib/utils/analytics';

  let preferences = $state<CookiePreferences>({ ...DEFAULT_PREFERENCES });
  let currentConsent = $state<ReturnType<typeof getConsentStatus>>(null);
  let saveMessage = $state('');

  onMount(() => {
    currentConsent = getConsentStatus();
    if (currentConsent) {
      preferences = { ...currentConsent.preferences };
    }
  });

  function handleSave() {
    setConsentPreferences(preferences);
    saveMessage = 'Preferencias guardadas correctamente';
    track('cookie_preferences', { action: 'save', ...preferences });
    
    // Reload page if analytics settings changed
    if (preferences.analytics && typeof window !== 'undefined') {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
    
    // Clear message after 3 seconds
    setTimeout(() => {
      saveMessage = '';
    }, 3000);
  }

  function handleClearAll() {
    if (confirm('¿Estás seguro de que quieres eliminar todas las preferencias de cookies? Esto requerirá que vuelvas a dar tu consentimiento.')) {
      clearConsent();
      track('cookie_preferences', { action: 'clear_all' });
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  }

  function handleReset() {
    preferences = { ...DEFAULT_PREFERENCES };
    track('cookie_preferences', { action: 'reset' });
  }
</script>

<svelte:head>
  <title>Configuración de Cookies - Reco</title>
  <meta name="description" content="Gestiona tus preferencias de cookies para el sitio web de Reco" />
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="min-h-screen bg-gray-50 py-12">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <!-- Header -->
      <div class="px-6 py-8 border-b border-gray-200">
        <h1 class="text-3xl font-bold text-gray-900">
          Configuración de Cookies
        </h1>
        <p class="mt-2 text-gray-600">
          Gestiona tus preferencias de cookies y privacidad para reco.chat
        </p>
        
        {#if currentConsent}
          <div class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p class="text-sm text-blue-800">
              <strong>Estado actual:</strong> Consentimiento otorgado el {new Date(currentConsent.timestamp).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
        {:else}
          <div class="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
            <p class="text-sm text-yellow-800">
              <strong>No has configurado tus preferencias de cookies aún.</strong> 
              Configúralas a continuación para mejorar tu experiencia.
            </p>
          </div>
        {/if}
      </div>

      <!-- Cookie Categories -->
      <div class="px-6 py-6">
        <div class="space-y-6">
          {#each Object.entries(COOKIE_DESCRIPTIONS) as [key, desc]}
            {@const cookieKey = key as keyof CookiePreferences}
            <div class="border border-gray-200 rounded-lg p-6">
              <div class="flex items-start justify-between">
                <div class="flex-1 min-w-0 pr-4">
                  <h3 class="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    {desc.name}
                    {#if cookieKey === 'essential'}
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        Obligatorias
                      </span>
                    {/if}
                  </h3>
                  <p class="mt-2 text-gray-600">
                    {desc.description}
                  </p>
                  <div class="mt-3">
                    <h4 class="text-sm font-medium text-gray-900">Ejemplos:</h4>
                    <p class="text-sm text-gray-500 mt-1">
                      {desc.examples}
                    </p>
                  </div>
                </div>
                <div class="flex-shrink-0">
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      bind:checked={preferences[cookieKey]}
                      disabled={cookieKey === 'essential'}
                      class="sr-only peer"
                    />
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"></div>
                  </label>
                </div>
              </div>
            </div>
          {/each}
        </div>

        <!-- Action Buttons -->
        <div class="mt-8 flex flex-col sm:flex-row gap-4">
          <Button
            onclick={handleSave}
            class="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Guardar Preferencias
          </Button>
          
          <Button
            variant="outline"
            onclick={handleReset}
          >
            Restablecer
          </Button>
          
          <Button
            variant="outline"
            onclick={handleClearAll}
            class="text-red-600 border-red-300 hover:bg-red-50"
          >
            Eliminar Todas las Preferencias
          </Button>
        </div>

        {#if saveMessage}
          <div class="mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
            <p class="text-sm text-green-800">✓ {saveMessage}</p>
          </div>
        {/if}
      </div>

      <!-- Information Section -->
      <div class="px-6 py-6 bg-gray-50 border-t border-gray-200">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">
          Información Adicional
        </h3>
        
        <div class="space-y-4 text-sm text-gray-600">
          <div>
            <h4 class="font-medium text-gray-900">¿Qué son las cookies?</h4>
            <p class="mt-1">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. 
              Nos ayudan a recordar tus preferencias y mejorar tu experiencia de navegación.
            </p>
          </div>
          
          <div>
            <h4 class="font-medium text-gray-900">¿Cómo utilizamos tus datos?</h4>
            <p class="mt-1">
              Solo utilizamos datos agregados y anónimos para mejorar nuestro sitio web. 
              Nunca compartimos información personal con terceros sin tu consentimiento explícito.
            </p>
          </div>
          
          <div>
            <h4 class="font-medium text-gray-900">Tus derechos</h4>
            <p class="mt-1">
              Puedes cambiar tus preferencias en cualquier momento visitando esta página. 
              También puedes eliminar todas las cookies desde la configuración de tu navegador.
            </p>
          </div>
        </div>

        <div class="mt-6 pt-4 border-t border-gray-200">
          <p class="text-xs text-gray-500">
            Para más información, consulta nuestra 
            <a href="/privacy" class="text-blue-600 hover:text-blue-700 underline">Política de Privacidad</a>
            y nuestros 
            <a href="/terms" class="text-blue-600 hover:text-blue-700 underline">Términos de Servicio</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>