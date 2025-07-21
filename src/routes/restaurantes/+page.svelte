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
  
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
    {#each restaurantTypes as type}
      <a href={type.href} class="group relative bg-white rounded-2xl border-2 border-gray-100 p-8 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
        <!-- Background gradient on hover -->
        <div class="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-100/0 group-hover:from-blue-50/50 group-hover:to-blue-100/30 transition-all duration-300"></div>
        
        <!-- Content -->
        <div class="relative z-10">
          <div class="flex items-center space-x-4 mb-4">
            <div class="{type.bgColor} p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <svelte:component this={type.icon} class="w-8 h-8 {type.color}" />
            </div>
          </div>
          <h3 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {tr(type.name)}
          </h3>
        </div>

        <!-- Decorative corner accent -->
        <div class="absolute -top-1 -right-1 w-16 h-16 bg-gradient-to-br {type.bgColor} opacity-10 rounded-bl-3xl group-hover:opacity-20 transition-opacity duration-300"></div>
      </a>
    {/each}
  </div>
</div> 