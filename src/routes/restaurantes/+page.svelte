<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { languageStore } from '$lib/stores/language.svelte';
  import { t } from '$lib/utils/translations';

  // Create reactive translations
  const currentLang = $derived(languageStore.currentLanguage);
  const tr = (key: Parameters<typeof t>[0]) => t(key, currentLang);
</script>

<svelte:head>
  <title>{tr('restaurants')} | Reco</title>
  <meta name="description" content="{tr('restaurants_trust_title')}" />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
  <h1 class="text-4xl font-bold text-gray-900 mb-8">{tr('restaurants_title')}</h1>
  
  <div class="grid md:grid-cols-2 gap-8">
    <div>
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">{tr('restaurants_owner_title')}</h2>
      <p class="text-lg text-gray-600 mb-6">
        {tr('restaurants_owner_description')}
      </p>
      <ul class="space-y-4 mb-8">
        <li class="flex items-start">
          <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>{tr('restaurants_feature_smart_menus')}</span>
        </li>
        <li class="flex items-start">
          <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>{tr('restaurants_feature_ai_recommendations')}</span>
        </li>
        <li class="flex items-start">
          <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>{tr('restaurants_feature_data_analysis')}</span>
        </li>
      </ul>
      <Button variant="default" class="bg-blue-600 text-white hover:bg-blue-700">
        {tr('restaurants_demo_cta')}
      </Button>
    </div>
    
    <div class="bg-gray-50 p-8 rounded-lg">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">{tr('restaurants_trust_title')}</h2>
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