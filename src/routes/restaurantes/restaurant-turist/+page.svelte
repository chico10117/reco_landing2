<script lang="ts">
  import { Button } from "$lib/components/ui/button";
</script>

<svelte:head>
  <title>Restaurantes Turísticos | Reco</title>
  <meta name="description" content="Descubre cómo Reco puede ayudar a tu restaurante turístico a mejorar la experiencia de tus clientes internacionales." />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
  <h1 class="text-4xl font-bold text-gray-900 mb-4">Tu carta es parte de tu arte. Reco te ayuda a que se lea, se entienda y se disfrute como tú quieres.</h1>
  <p class="text-xl text-gray-600 mb-12">Lleva tu storytelling gastronómico al menú digital.</p>
  
  <div class="grid md:grid-cols-2 gap-8">
    <div>
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">¿Tienes un restaurante turístico?</h2>
      <p class="text-lg text-gray-600 mb-6">
        Descubre cómo Reco puede ayudarte a mejorar la experiencia de tus clientes internacionales y aumentar tus ventas.
      </p>
      <ul class="space-y-4 mb-8">
        <li class="flex items-start">
          <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Menús multilingües inteligentes</span>
        </li>
        <li class="flex items-start">
          <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Recomendaciones adaptadas a cada cultura</span>
        </li>
        <li class="flex items-start">
          <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Traducción automática de platos y descripciones</span>
        </li>
      </ul>
      <Button variant="default" class="bg-blue-600 text-white hover:bg-blue-700">
        Solicitar una demo
      </Button>
    </div>
    
    <div class="bg-gray-50 p-8 rounded-lg">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">Beneficios para restaurantes turísticos</h2>
      <div class="grid grid-cols-1 gap-4">
        <div class="bg-white p-4 rounded shadow-sm">
          <h3 class="font-semibold text-lg mb-2">Menús en múltiples idiomas</h3>
          <p class="text-sm text-gray-600">Ofrece tu carta en varios idiomas sin necesidad de imprimir múltiples versiones.</p>
        </div>
        <div class="bg-white p-4 rounded shadow-sm">
          <h3 class="font-semibold text-lg mb-2">Recomendaciones culturales</h3>
          <p class="text-sm text-gray-600">Sugerencias adaptadas a las preferencias gastronómicas de cada país.</p>
        </div>
        <div class="bg-white p-4 rounded shadow-sm">
          <h3 class="font-semibold text-lg mb-2">Mejora la experiencia</h3>
          <p class="text-sm text-gray-600">Los clientes internacionales se sienten como en casa con menús en su idioma.</p>
        </div>
      </div>
    </div>
  </div>
</div> 