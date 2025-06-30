<script lang="ts">
  import { onMount } from 'svelte';
  import Navbar from "$lib/components/landing/Navbar.svelte";
  import Footer from "$lib/components/landing/footer.svelte";
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
  import { languageStore } from '$lib/stores/language.svelte';
  import { t } from '$lib/utils/translations';

  // Create reactive translations using Svelte 5 runes
  const currentLang = $derived(languageStore.currentLanguage);
  
  // Reactive function using $derived
  const tr = $derived.by(() => {
    return (key: string) => t(key as any, currentLang);
  });

  // Make language reactive

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
    saveMessage = tr('cookies_preferences_saved');
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
    if (confirm(tr('cookies_confirm_delete'))) {
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

  const cookieTypes = ['essential', 'analytics', 'marketing'] as const;
</script>

<svelte:head>
  <title>{tr('cookies_title')} - Reco</title>
  <meta name="description" content={tr('cookies_meta_description')} />
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="min-h-screen bg-white">
  <!-- Navigation -->
  <Navbar />

  <div class="pt-20 pb-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <!-- Header -->
        <div class="px-6 py-8 border-b border-gray-200">
          <h1 class="text-3xl font-bold text-gray-900">
            {tr('cookies_settings_title')}
          </h1>
          <p class="mt-2 text-gray-600">
            {tr('cookies_settings_subtitle')}
          </p>
          
          {#if currentConsent}
            <div class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
              <p class="text-sm text-blue-800">
                <strong>{tr('cookies_current_status')}</strong> 
                {tr('cookies_consent_granted')} {new Date(currentConsent.timestamp).toLocaleDateString(currentLang === 'es' ? 'es-ES' : 'en-US', {
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
                <strong>{languageStore.currentLanguage === 'es' ? 'No has configurado tus preferencias de cookies aún.' : 'You haven\'t configured your cookie preferences yet.'}</strong> 
                {languageStore.currentLanguage === 'es' ? 'Configúralas a continuación para mejorar tu experiencia.' : 'Configure them below to improve your experience.'}
              </p>
            </div>
          {/if}
        </div>

        <!-- Cookie Categories -->
        <div class="px-6 py-6">
          <div class="space-y-6">
            {#each cookieTypes as cookieKey}
              <div class="border border-gray-200 rounded-lg p-6">
                <div class="flex items-start justify-between">
                  <div class="flex-1 min-w-0 pr-4">
                    <h3 class="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      {tr(`cookies_${cookieKey}_name`)}
                      {#if cookieKey === 'essential'}
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {tr('cookies_required_label')}
                        </span>
                      {/if}
                    </h3>
                    <p class="mt-2 text-gray-600">
                      {tr(`cookies_${cookieKey}_description`)}
                    </p>
                    <div class="mt-3">
                      <h4 class="text-sm font-medium text-gray-900">{tr('cookies_examples_label')}</h4>
                      <p class="text-sm text-gray-500 mt-1">
                        {tr(`cookies_${cookieKey}_examples`)}
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
              {languageStore.currentLanguage === 'es' ? 'Guardar Preferencias' : 'Save Preferences'}
            </Button>
            
            <Button
              variant="outline"
              onclick={handleReset}
            >
              {languageStore.currentLanguage === 'es' ? 'Restablecer' : 'Reset'}
            </Button>
            
            <Button
              variant="outline"
              onclick={handleClearAll}
              class="text-red-600 border-red-300 hover:bg-red-50"
            >
              {languageStore.currentLanguage === 'es' ? 'Eliminar Todas las Preferencias' : 'Delete All Preferences'}
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
            {languageStore.currentLanguage === 'es' ? 'Información Adicional' : 'Additional Information'}
          </h3>
          
          <div class="space-y-4 text-sm text-gray-600">
            <div>
              <h4 class="font-medium text-gray-900">{languageStore.currentLanguage === 'es' ? '¿Qué son las cookies?' : 'What are cookies?'}</h4>
              <p class="mt-1">
                {languageStore.currentLanguage === 'es' 
                  ? 'Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Nos ayudan a recordar tus preferencias y mejorar tu experiencia de navegación.'
                  : 'Cookies are small text files that are stored on your device when you visit a website. They help us remember your preferences and improve your browsing experience.'}
              </p>
            </div>
            
            <div>
              <h4 class="font-medium text-gray-900">{languageStore.currentLanguage === 'es' ? '¿Cómo utilizamos tus datos?' : 'How do we use your data?'}</h4>
              <p class="mt-1">
                {languageStore.currentLanguage === 'es'
                  ? 'Solo utilizamos datos agregados y anónimos para mejorar nuestro sitio web. Nunca compartimos información personal con terceros sin tu consentimiento explícito.'
                  : 'We only use aggregated and anonymous data to improve our website. We never share personal information with third parties without your explicit consent.'}
              </p>
            </div>
            
            <div>
              <h4 class="font-medium text-gray-900">{languageStore.currentLanguage === 'es' ? 'Tus derechos' : 'Your rights'}</h4>
              <p class="mt-1">
                {languageStore.currentLanguage === 'es'
                  ? 'Puedes cambiar tus preferencias en cualquier momento visitando esta página. También puedes eliminar todas las cookies desde la configuración de tu navegador.'
                  : 'You can change your preferences at any time by visiting this page. You can also delete all cookies from your browser settings.'}
              </p>
            </div>
          </div>

          <div class="mt-6 pt-4 border-t border-gray-200">
            <p class="text-xs text-gray-500">
              {languageStore.currentLanguage === 'es' ? 'Para más información, consulta nuestra' : 'For more information, see our'} 
              <a href="/privacy" class="text-blue-600 hover:text-blue-700 underline">{tr('footer_privacy')}</a>
              {languageStore.currentLanguage === 'es' ? ' y nuestros ' : ' and our '}
              <a href="/terms" class="text-blue-600 hover:text-blue-700 underline">{tr('footer_terms')}</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <Footer />
</div>