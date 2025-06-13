<script lang="ts">
  import { Button } from "$lib/components/ui/button";
</script>

<svelte:head>
  <title>Precios | Reco</title>
  <meta name="description" content="Conoce nuestros planes y precios." />
</svelte:head>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div class="text-center">
    <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">Planes y Precios</h1>
    <p class="text-lg sm:text-xl text-gray-600"><strong>Comenzar prueba gratuita</strong></p>
  </div>

  <div class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto group/pricing">
    <!-- Plan Gratis -->
    <div class="bg-[#85A3FA] text-white rounded-3xl shadow-lg overflow-hidden border-2 border-[#85A3FA] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-[#547EF7] hover:border-[#547EF7] group/card max-w-sm mx-auto w-full flex flex-col min-h-[600px] hover:z-10">
      <div class="px-6 py-6 flex-grow">
        <div class="flex justify-center mb-2">
          <img src="/img/Gratis2.png" alt="Plan Gratis" class="w-52 sm:w-56 lg:w-60 h-36 sm:h-40 lg:h-44 object-contain" />
        </div>
        <h3 class="text-xl sm:text-2xl font-bold text-center">Plan Gratis</h3>
        <div class="mt-2 flex justify-center items-baseline">
          <span class="text-3xl sm:text-4xl font-bold">0€</span>
          <span class="text-base sm:text-lg font-semibold">/mes</span>
        </div>
        <ul class="mt-4 space-y-2">
          <li class="flex items-center space-x-2">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-base">Acceso a la plataforma</span>
          </li>
          <li class="flex items-center space-x-2">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-base">Recomendaciones básicas</span>
          </li>
          <li class="flex items-center space-x-2">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-base">Soporte por email</span>
          </li>
        </ul>
      </div>
      <div class="px-6 pb-6">
        <div class="mt-4">
          <a href="/registro" class="block w-full bg-white text-[#85A3FA] group-hover/card:text-[#547EF7] rounded-2xl px-4 py-2 text-base font-bold transition-all duration-300 group-hover/card:scale-105 group-hover/card:shadow-md group-hover/card:bg-gray-50 text-center">Empezar ahora</a>
        </div>
      </div>
    </div>

    <!-- Plan Básico -->
    <div class="bg-[#547EF7] text-white rounded-3xl shadow-xl overflow-hidden border-2 border-[#547EF7] transition-all duration-300 scale-105 group/card max-w-sm mx-auto w-full flex flex-col min-h-[600px] z-20 group-hover/pricing:scale-100 group-hover/pricing:bg-[#85A3FA] group-hover/pricing:border-[#85A3FA] group-hover/pricing:shadow-lg hover:!scale-105 hover:!shadow-xl hover:!bg-[#547EF7] hover:!border-[#547EF7] hover:z-30">
      <div class="px-6 py-6 flex-grow">
        <div class="flex justify-center mb-2">
          <img src="/img/Basic.png" alt="Plan Básico" class="w-52 sm:w-56 lg:w-60 h-36 sm:h-40 lg:h-44 object-contain" />
        </div>
        <h3 class="text-xl sm:text-2xl font-bold text-center">Plan Básico</h3>
        <div class="mt-2 flex justify-center items-baseline">
          <span class="text-3xl sm:text-4xl font-bold">24.99€</span>
          <span class="text-base sm:text-lg font-semibold">/mes</span>
        </div>
        <ul class="mt-4 space-y-2">
          <li class="flex items-center space-x-2">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-base">Todo lo del plan Gratis</span>
          </li>
          <li class="flex items-center space-x-2">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
            <span class="text-base">Menú digital personalizado</span>
          </li>
          <li class="flex items-center space-x-2">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
            <span class="text-base">100 platos disponibles</span>
          </li>
          <li class="flex items-center space-x-2">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
            <span class="text-base">Soporte prioritario</span>
          </li>
        </ul>
      </div>
      <div class="px-6 pb-6">
        <div class="mt-4">
          <a href="/registro" class="block w-full bg-white text-[#547EF7] group-hover/pricing:text-[#85A3FA] group-hover/card:text-[#547EF7] rounded-2xl px-4 py-2 text-base font-bold transition-all duration-300 group-hover/card:scale-105 group-hover/card:shadow-md group-hover/card:bg-gray-50 text-center">Empezar ahora</a>
        </div>
      </div>
    </div>

    <!-- Plan Cadena -->
    <div class="bg-[#85A3FA] text-white rounded-3xl shadow-lg overflow-hidden border-2 border-[#85A3FA] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-[#547EF7] hover:border-[#547EF7] group/card max-w-sm mx-auto w-full flex flex-col min-h-[600px] hover:z-10">
      <div class="px-6 py-6 flex-grow">
        <div class="flex justify-center mb-2">
          <img src="/img/Emp2.png" alt="Plan Cadena" class="w-52 sm:w-56 lg:w-60 h-36 sm:h-40 lg:h-44 object-contain" />
        </div>
        <h3 class="text-xl sm:text-2xl font-bold text-center">Plan Cadena</h3>
        <div class="mt-2 flex justify-center items-baseline">
          <span class="text-3xl sm:text-4xl font-bold">Custom</span>
        </div>
        <ul class="mt-4 space-y-2">
          <li class="flex items-center space-x-2">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-base">Todo lo del plan Básico</span>
          </li>
          <li class="flex items-center space-x-2">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
            <span class="text-base">Integración personalizada</span>
          </li>
          <li class="flex items-center space-x-2">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
            <span class="text-base">Soporte 24/7</span>
          </li>
        </ul>
      </div>
      <div class="px-6 pb-6">
        <div class="mt-4">
          <a href="/contacto" class="block w-full bg-white text-[#85A3FA] group-hover/card:text-[#547EF7] rounded-2xl px-4 py-2 text-base font-bold transition-all duration-300 group-hover/card:scale-105 group-hover/card:shadow-md group-hover/card:bg-gray-50 text-center">Contactar ventas</a>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-16 text-center">
    <p class="text-gray-600">
      ¿Necesitas más información? <a href="/contact" class="text-blue-600 hover:underline">Contacta con nosotros</a>
    </p>
  </div>
</div> 