<script lang="ts">
  import { Button } from "$lib/components/ui/button";
</script>

<svelte:head>
  <title>Restaurantes | Reco</title>
  <meta name="description" content="Descubre los restaurantes que utilizan Reco." />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
  <h1 class="text-4xl font-bold text-gray-900 mb-8">Restaurantes</h1>
  
  <div class="grid md:grid-cols-2 gap-8">
    <div>
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">¿Tienes un restaurante?</h2>
      <p class="text-lg text-gray-600 mb-6">
        Descubre cómo Reco puede ayudarte a mejorar la experiencia de tus comensales y aumentar tus ventas.
      </p>
      <ul class="space-y-4 mb-8">
        <li class="flex items-start">
          <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Menús digitales inteligentes y personalizados</span>
        </li>
        <li class="flex items-start">
          <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Recomendaciones basadas en IA</span>
        </li>
        <li class="flex items-start">
          <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Análisis de datos y tendencias</span>
        </li>
      </ul>
      <Button variant="default" class="bg-blue-600 text-white hover:bg-blue-700">
        Solicitar una demo
      </Button>
    </div>
    
    <div class="bg-gray-50 p-8 rounded-lg">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">Restaurantes que confían en Reco</h2>
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