<script lang="ts">
  import { Button } from "$lib/components/ui/button";
</script>

<svelte:head>
  <title>Precios | Reco</title>
  <meta name="description" content="Conoce nuestros planes y precios." />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
  <div class="text-center">
    <h1 class="text-4xl font-bold text-gray-900 mb-4">Planes y Precios</h1>
    <p class="text-xl text-gray-600 max-w-2xl mx-auto">
      Elige el plan que mejor se adapte a las necesidades de tu restaurante.
    </p>
  </div>

  <div class="mt-16 grid md:grid-cols-3 gap-8">
    <!-- Plan Básico -->
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="px-6 py-8">
        <h3 class="text-2xl font-bold text-gray-900 text-center">Básico</h3>
        <div class="mt-4 flex justify-center">
          <span class="text-5xl font-bold">29€</span>
          <span class="text-xl text-gray-500 self-end mb-1">/mes</span>
        </div>
        <ul class="mt-8 space-y-4">
          <li class="flex items-start">
            <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Menú digital básico</span>
          </li>
          <li class="flex items-start">
            <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Hasta 50 platos</span>
          </li>
          <li class="flex items-start">
            <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Soporte por email</span>
          </li>
        </ul>
      </div>
      <div class="px-6 pb-8">
        <Button variant="outline" class="w-full">Empezar ahora</Button>
      </div>
    </div>

    <!-- Plan Pro -->
    <div class="bg-blue-600 rounded-lg shadow-lg overflow-hidden transform scale-105">
      <div class="px-6 py-8">
        <h3 class="text-2xl font-bold text-white text-center">Pro</h3>
        <div class="mt-4 flex justify-center text-white">
          <span class="text-5xl font-bold">79€</span>
          <span class="text-xl opacity-80 self-end mb-1">/mes</span>
        </div>
        <ul class="mt-8 space-y-4 text-white">
          <li class="flex items-start">
            <svg class="h-6 w-6 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Todo lo del plan Básico</span>
          </li>
          <li class="flex items-start">
            <svg class="h-6 w-6 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Recomendaciones IA</span>
          </li>
          <li class="flex items-start">
            <svg class="h-6 w-6 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Análisis de datos</span>
          </li>
          <li class="flex items-start">
            <svg class="h-6 w-6 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Soporte prioritario</span>
          </li>
        </ul>
      </div>
      <div class="px-6 pb-8">
        <Button variant="default" class="w-full bg-white text-blue-600 hover:bg-white/90">
          Comenzar prueba gratuita
        </Button>
      </div>
    </div>

    <!-- Plan Enterprise -->
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="px-6 py-8">
        <h3 class="text-2xl font-bold text-gray-900 text-center">Enterprise</h3>
        <div class="mt-4 flex justify-center">
          <span class="text-5xl font-bold">Custom</span>
        </div>
        <ul class="mt-8 space-y-4">
          <li class="flex items-start">
            <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Todo lo del plan Pro</span>
          </li>
          <li class="flex items-start">
            <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Integración personalizada</span>
          </li>
          <li class="flex items-start">
            <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Soporte 24/7</span>
          </li>
        </ul>
      </div>
      <div class="px-6 pb-8">
        <Button variant="outline" class="w-full">Contactar ventas</Button>
      </div>
    </div>
  </div>

  <div class="mt-16 text-center">
    <p class="text-gray-600">
      ¿Necesitas más información? <a href="/contact" class="text-blue-600 hover:underline">Contacta con nosotros</a>
    </p>
  </div>
</div> 