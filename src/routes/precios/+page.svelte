<script lang="ts">
  import { Button } from "$lib/components/ui/button";
</script>

<svelte:head>
  <title>Precios | Reco</title>
  <meta name="description" content="Conoce nuestros planes y precios." />
  <style>
    .shadow-3xl {
      box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25), 0 10px 25px -5px rgba(0, 0, 0, 0.1);
    }
    .shadow-4xl {
      box-shadow: 0 45px 80px -15px rgba(0, 0, 0, 0.3), 0 15px 35px -8px rgba(0, 0, 0, 0.15);
    }
  </style>
</svelte:head>

<!-- Hero Section with Blue Gradient -->
<div class="relative overflow-hidden bg-white" style="background: radial-gradient(ellipse 60% 40% at 50% 40%, #dbeafe 0%, #e0e7ef 60%, #fff 100%);">
  <!-- Background Pattern -->
  <div class="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
  
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="text-center">
      <h1 class="text-5xl md:text-6xl font-bold text-black mb-6">
        Planes y <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Precios</span>
      </h1>
      <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Elige el plan que mejor se adapte a las necesidades de tu restaurante.
      </p>
      <div class="mt-2 flex justify-center">
        <div class="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-200">
          <span class="text-blue-700 text-sm font-medium">✨ Sin compromisos • Cancela cuando quieras</span>
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
      <div class="relative group w-72 md:w-full cursor-pointer">
        <div class="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition-all duration-500"></div>
        <div class="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transform transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-3xl">
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
              <Button variant="outline" class="w-full h-10 md:h-12 text-sm md:text-lg font-semibold border-2 border-green-300 text-green-700 hover:bg-green-50 hover:border-green-400 hover:scale-105 hover:shadow-lg transition-all duration-200">
                Empezar ahora
              </Button>
            </a>
          </div>
        </div>
      </div>

      <!-- Plan Pro - Featured -->
      <div class="relative group w-72 md:w-full cursor-pointer">
        <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-2xl blur-lg opacity-50 group-hover:opacity-90 transition-all duration-500"></div>
        <div class="relative">
          <!-- Popular Badge -->
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110">
            <div class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white text-sm font-bold shadow-lg">
              ⭐ Más Popular
            </div>
          </div>
          
          <div class="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl shadow-2xl overflow-hidden transform scale-105 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-3 group-hover:shadow-4xl">
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
              <Button class="w-full h-10 md:h-12 text-sm md:text-lg font-semibold bg-white text-blue-700 hover:bg-blue-50 hover:scale-105 hover:shadow-xl shadow-lg transition-all duration-200">
                Empezar
              </Button>
            </div>
          </div>
        </div>
      </div>

      <!-- Plan Enterprise -->
      <div class="relative group w-72 md:w-full cursor-pointer">
        <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-75 transition-all duration-500"></div>
        <div class="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transform transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-3xl">
          <div class="px-4 py-6 md:px-8 md:py-12">
            <div class="text-center">
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div class="mb-2 px-2">
                <span class="text-2xl md:text-3xl font-bold text-blue-600 leading-tight">Plan Empresarial</span>
              </div>
              <div class="inline-flex items-center px-2 py-1 md:px-3 md:py-1 rounded-full bg-blue-50 border border-blue-200 mb-4 md:mb-8">
                <span class="text-blue-700 text-xs md:text-sm font-medium">💼 Empresas</span>
              </div>
            </div>
            
            <ul class="space-y-2 md:space-y-4 mb-2">
              <li class="flex items-start">
                <div class="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5">
                  <svg class="w-3 h-3 md:w-4 md:h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span class="text-sm md:text-base text-gray-700">Todo lo del plan Pro</span>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5">
                  <svg class="w-3 h-3 md:w-4 md:h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span class="text-sm md:text-base text-gray-700">Integración personalizada</span>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5">
                  <svg class="w-3 h-3 md:w-4 md:h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span class="text-sm md:text-base text-gray-700">Soporte 24/7</span>
              </li>
            </ul>
          </div>
          <div class="px-4 pb-6 md:px-8 md:pb-12">
            <a href="https://calendly.com/fernando-lqrb/15min?month=2025-06" target="_blank" rel="noopener noreferrer" class="block">
              <Button variant="outline" class="w-full h-10 md:h-12 text-sm md:text-lg font-semibold border-2 border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400 hover:scale-105 hover:shadow-lg transition-all duration-200">
                Contactar ventas
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

 