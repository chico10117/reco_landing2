<script lang="ts">
  import { Button } from "$lib/components/ui/button";
</script>

<svelte:head>
  <title>Precios | Reco</title>
  <meta name="description" content="Conoce nuestros planes y precios." />
</svelte:head>

<!-- Hero Section with Blue Gradient -->
<div class="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
  <!-- Background Pattern -->
  <div class="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
  <div class="absolute inset-0 bg-gradient-to-t from-blue-900/20"></div>
  
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="text-center">
      <h1 class="text-5xl md:text-6xl font-bold text-white mb-6">
        Planes y <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">Precios</span>
      </h1>
      <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
        Elige el plan que mejor se adapte a las necesidades de tu restaurante.
      </p>
      <div class="mt-2 flex justify-center">
        <div class="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30">
          <span class="text-blue-200 text-sm font-medium">✨ Sin compromisos • Cancela cuando quieras</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Pricing Cards Section -->
<div class="relative -mt-6 pb-20">
  <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
    <div class="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 items-center md:items-stretch">
      
      <!-- Plan Básico -->
      <div class="relative group w-72 md:w-full">
        <div class="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
        <div class="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          <div class="px-4 py-6 md:px-8 md:py-12">
            <div class="text-center">
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-2">Básico</h3>
              <div class="mb-2">
                <span class="text-4xl md:text-6xl font-bold text-green-600">Gratis</span>
              </div>
              <div class="inline-flex items-center px-2 py-1 md:px-3 md:py-1 rounded-full bg-green-50 border border-green-200 mb-4 md:mb-8">
                <span class="text-green-700 text-xs md:text-sm font-medium">🎉 Plan gratuito</span>
              </div>
            </div>
            
            <ul class="space-y-2 md:space-y-4">
              <li class="flex items-start">
                <div class="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-green-100 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5">
                  <svg class="w-3 h-3 md:w-4 md:h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span class="text-sm md:text-base text-gray-700">Menú digital básico</span>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-green-100 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5">
                  <svg class="w-3 h-3 md:w-4 md:h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span class="text-sm md:text-base text-gray-700">Hasta 50 platos</span>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-green-100 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5">
                  <svg class="w-3 h-3 md:w-4 md:h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span class="text-sm md:text-base text-gray-700">Soporte por email</span>
              </li>
            </ul>
          </div>
          <div class="px-4 pb-4 md:px-8 md:pb-8">
            <a href="https://carta.reco.chat" target="_blank" rel="noopener noreferrer" class="block">
              <Button variant="outline" class="w-full h-10 md:h-12 text-sm md:text-lg font-semibold border-2 border-green-300 text-green-700 hover:bg-green-50 transition-all duration-200">
                Empezar ahora
              </Button>
            </a>
          </div>
        </div>
      </div>

      <!-- Plan Pro - Featured -->
      <div class="relative group w-72 md:w-full">
        <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-300"></div>
        <div class="relative">
          <!-- Popular Badge -->
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
            <div class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white text-sm font-bold shadow-lg">
              ⭐ Más Popular
            </div>
          </div>
          
          <div class="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-2xl shadow-2xl overflow-hidden transform scale-105">
            <div class="px-4 py-6 md:px-8 md:py-12">
                <div class="text-center">
                 <h3 class="text-xl md:text-2xl font-bold text-white mb-2">Pro</h3>
                 <div class="mb-2">
                   <span class="text-4xl md:text-6xl font-bold text-white">24.99€</span>
                   <span class="text-base md:text-xl text-blue-200 ml-1">/mes</span>
                 </div>
                <div class="inline-flex items-center px-2 py-1 md:px-3 md:py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4 md:mb-8">
                  <span class="text-white text-xs md:text-sm font-medium">🚀 Recomendado</span>
                </div>
              </div>
              
              <ul class="space-y-2 md:space-y-4">
                <li class="flex items-start">
                  <div class="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-white/20 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5">
                    <svg class="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span class="text-sm md:text-base text-blue-100">Todo lo del plan Básico</span>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-white/20 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5">
                    <svg class="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span class="text-sm md:text-base text-blue-100">Recomendaciones IA</span>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-white/20 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5">
                    <svg class="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span class="text-sm md:text-base text-blue-100">Análisis de datos</span>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-white/20 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5">
                    <svg class="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span class="text-sm md:text-base text-blue-100">Soporte prioritario</span>
                </li>
              </ul>
            </div>
            <div class="px-4 pb-4 md:px-8 md:pb-8">
              <Button class="w-full h-10 md:h-12 text-sm md:text-lg font-semibold bg-white text-blue-700 hover:bg-blue-50 shadow-lg transition-all duration-200">
                Empezar
              </Button>
            </div>
          </div>
        </div>
      </div>

      <!-- Plan Enterprise -->
      <div class="relative group w-72 md:w-full">
        <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
        <div class="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          <div class="px-4 py-6 md:px-8 md:py-12">
            <div class="text-center">
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div class="mb-2 px-2">
                <span class="text-2xl md:text-3xl font-bold text-purple-600 leading-tight">Cadenas/Empresarial</span>
              </div>
              <div class="inline-flex items-center px-2 py-1 md:px-3 md:py-1 rounded-full bg-purple-50 border border-purple-200 mb-4 md:mb-8">
                <span class="text-purple-700 text-xs md:text-sm font-medium">💼 Empresas</span>
              </div>
            </div>
            
            <ul class="space-y-2 md:space-y-4 mb-2">
              <li class="flex items-start">
                <div class="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-purple-100 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5">
                  <svg class="w-3 h-3 md:w-4 md:h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span class="text-sm md:text-base text-gray-700">Todo lo del plan Pro</span>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-purple-100 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5">
                  <svg class="w-3 h-3 md:w-4 md:h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span class="text-sm md:text-base text-gray-700">Integración personalizada</span>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-purple-100 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5">
                  <svg class="w-3 h-3 md:w-4 md:h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span class="text-sm md:text-base text-gray-700">Soporte 24/7</span>
              </li>
            </ul>
          </div>
          <div class="px-4 pb-6 md:px-8 md:pb-12">
            <a href="https://calendly.com/fernando-lqrb/15min?month=2025-06" target="_blank" rel="noopener noreferrer" class="block">
              <Button variant="outline" class="w-full h-10 md:h-12 text-sm md:text-lg font-semibold border-2 border-purple-300 text-purple-700 hover:bg-purple-50 transition-all duration-200">
                Contactar ventas
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Bottom CTA Section -->
<div class="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
  <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold text-gray-900 mb-4">
      ¿Tienes preguntas sobre nuestros <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">planes</span>?
    </h2>
    <p class="text-xl text-gray-600 mb-8">
      Nuestro equipo está aquí para ayudarte a encontrar la solución perfecta
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <Button class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
        Hablar con ventas
      </Button>
      <Button variant="outline" class="border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-3 text-lg">
        Ver demo gratuita
      </Button>
    </div>
  </div>
</div> 