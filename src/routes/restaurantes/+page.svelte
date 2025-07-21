<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { languageStore } from '$lib/stores/language.svelte';
  import { t } from '$lib/utils/translations';
  import { Sparkles, ChefHat, Utensils, Globe, Landmark, PlusCircle } from 'lucide-svelte';

  // Create reactive translations
  const currentLang = $derived(languageStore.currentLanguage);
  const tr = (key: Parameters<typeof t>[0]) => t(key, currentLang);

  const restaurantTypes = [
    { 
      name: 'fast-casual' as const, 
      href: '/restaurantes/fast-casual', 
      icon: Sparkles,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    { 
      name: 'autor' as const, 
      href: '/restaurantes/autor', 
      icon: ChefHat,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    { 
      name: 'independiente' as const, 
      href: '/restaurantes/independiente', 
      icon: Utensils,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    { 
      name: 'multinacional' as const, 
      href: '/restaurantes/multinacional', 
      icon: Globe,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    { 
      name: 'turistico' as const, 
      href: '/restaurantes/turistico', 
      icon: Landmark,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    { 
      name: 'nuevo' as const, 
      href: '/restaurantes/nuevo', 
      icon: PlusCircle,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
  ];
</script>

<svelte:head>
  <title>{tr('restaurants')} | Reco</title>
  <meta name="description" content="{tr('restaurants_trust_title')}" />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
  <div class="text-center mb-12">
    <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{tr('restaurants_select_title')}</h1>
    <p class="text-xl text-gray-600">{tr('restaurants_select_description')}</p>
  </div>
  
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
    {#each restaurantTypes as type}
      <a href={type.href} class="group relative bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div class="flex items-start space-x-4">
          <div class="{type.bgColor} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
            <svelte:component this={type.icon} class="w-6 h-6 {type.color}" />
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {tr(type.name)}
            </h3>
          </div>
        </div>
      </a>
    {/each}
  </div>

  <div class="bg-gray-50 rounded-2xl p-8 md:p-12">
    <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">{tr('restaurants_trust_title')}</h2>
    <div class="mb-8">
      <p class="text-lg text-gray-600 text-center max-w-3xl mx-auto">
        {tr('restaurants_trust_description')}
      </p>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div class="flex items-center justify-center">
        <img src="/img/logo-yelmo.svg" alt="Yelmo" class="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity" />
      </div>
      <div class="flex items-center justify-center">
        <img src="/img/logo-vips.svg" alt="VIPS" class="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity" />
      </div>
      <div class="flex items-center justify-center">
        <img src="/img/logo-honest-greens.svg" alt="Honest Greens" class="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity" />
      </div>
      <div class="flex items-center justify-center">
        <img src="/img/logo-tgb.svg" alt="TGB" class="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity" />
      </div>
    </div>
  </div>
</div> 