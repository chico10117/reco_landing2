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

  // Create reactive translations
  const currentLang = $derived(languageStore.currentLanguage);
  const tr = (key: Parameters<typeof t>[0]) => t(key, currentLang);

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
    saveMessage = languageStore.currentLanguage === 'es' ? 'Preferencias guardadas correctamente' : 'Preferences saved successfully';
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
    const confirmMessage = languageStore.currentLanguage === 'es' 
      ? '¿Estás seguro de que quieres eliminar todas las preferencias de cookies? Esto requerirá que vuelvas a dar tu consentimiento.'
      : 'Are you sure you want to delete all cookie preferences? This will require you to consent again.';
      
    if (confirm(confirmMessage)) {
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

  const cookieDescriptions = {
    es: {
      essential: {
        name: 'Cookies Esenciales',
        description: 'Estas cookies son necesarias para el funcionamiento básico del sitio web.',
        examples: 'Preferencias de cookies, estado de sesión, seguridad'
      },
      analytics: {
        name: 'Cookies de Análisis',
        description: 'Nos ayudan a entender cómo interactúas con nuestro sitio web.',
        examples: 'Google Analytics, análisis de rendimiento'
      },
      marketing: {
        name: 'Cookies de Marketing',
        description: 'Se utilizan para mostrar anuncios relevantes y campañas de marketing.',
        examples: 'Cookies de publicidad, seguimiento de conversiones'
      }
    },
    en: {
      essential: {
        name: 'Essential Cookies',
        description: 'These cookies are necessary for the basic functioning of the website.',
        examples: 'Cookie preferences, session state, security'
      },
      analytics: {
        name: 'Analytics Cookies',
        description: 'Help us understand how you interact with our website.',
        examples: 'Google Analytics, performance analysis'
      },
      marketing: {
        name: 'Marketing Cookies',
        description: 'Used to show relevant ads and marketing campaigns.',
        examples: 'Advertising cookies, conversion tracking'
      }
    }
  };
</script>

<svelte:head>
  <title>{tr('cookies_title')} - Reco</title>
  <meta name="description" content={languageStore.currentLanguage === 'es' ? 'Gestiona tus preferencias de cookies para el sitio web de Reco' : 'Manage your cookie preferences for the Reco website'} />
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
            {languageStore.currentLanguage === 'es' ? 'Configuración de Cookies' : 'Cookie Settings'}
          </h1>
          <p class="mt-2 text-gray-600">
            {languageStore.currentLanguage === 'es' ? 'Gestiona tus preferencias de cookies y privacidad para reco.chat' : 'Manage your cookie and privacy preferences for reco.chat'}
          </p>
          
          {#if currentConsent}
            <div class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
              <p class="text-sm text-blue-800">
                <strong>{languageStore.currentLanguage === 'es' ? 'Estado actual:' : 'Current status:'}</strong> 
                {languageStore.currentLanguage === 'es' ? 'Consentimiento otorgado el' : 'Consent granted on'} {new Date(currentConsent.timestamp).toLocaleDateString(languageStore.currentLanguage === 'es' ? 'es-ES' : 'en-US', {
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
            {#each Object.entries(cookieDescriptions[languageStore.currentLanguage]) as [key, desc]}
              {@const cookieKey = key as keyof CookiePreferences}
              <div class="border border-gray-200 rounded-lg p-6">
                <div class="flex items-start justify-between">
                  <div class="flex-1 min-w-0 pr-4">
                    <h3 class="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      {desc.name}
                      {#if cookieKey === 'essential'}
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {languageStore.currentLanguage === 'es' ? 'Obligatorias' : 'Required'}
                        </span>
                      {/if}
                    </h3>
                    <p class="mt-2 text-gray-600">
                      {desc.description}
                    </p>
                    <div class="mt-3">
                      <h4 class="text-sm font-medium text-gray-900">{languageStore.currentLanguage === 'es' ? 'Ejemplos:' : 'Examples:'}</h4>
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