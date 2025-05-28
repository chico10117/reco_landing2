<script lang="ts">
  import ScrollTransition from '$lib/components/ui/scroll-transition.svelte';
</script>

<section id="benefits" class="pt-4 pb-16 md:pt-8 md:pb-24 bg-white relative">
  <div class="absolute -right-1/4 top-1/4 w-1/3 h-3/4">
    <div class="absolute inset-0 bg-[#4169E1] blur-2xl opacity-30 rounded-[40%_60%_60%_40%] animate-pulse"></div>
    <div class="absolute inset-0 bg-[#4169E1] blur-3xl opacity-20 rounded-[40%_60%_60%_40%] transform translate-x-10 animate-pulse" style="animation-delay: 0.5s;"></div>
    <div class="absolute inset-0 bg-[#4169E1] blur-3xl opacity-10 rounded-[40%_60%_60%_40%] transform translate-x-20 animate-pulse" style="animation-delay: 1s;"></div>
  </div>
  <div class="absolute -left-1/4 bottom-0 w-1/3 h-2/3">
    <div class="absolute inset-0 bg-[#4169E1] blur-2xl opacity-30 rounded-[60%_40%_40%_60%] animate-pulse"></div>
    <div class="absolute inset-0 bg-[#4169E1] blur-3xl opacity-20 rounded-[60%_40%_40%_60%] transform -translate-x-10 animate-pulse" style="animation-delay: 0.5s;"></div>
    <div class="absolute inset-0 bg-[#4169E1] blur-3xl opacity-10 rounded-[60%_40%_40%_60%] transform -translate-x-20 animate-pulse" style="animation-delay: 1s;"></div>
  </div>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <ScrollTransition>
      <div class="text-left mb-12">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-600 leading-tight">¿Tu carta vende o solo decora?</h1>

        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8">
          <br>Una carta profesional no es solo bonita.<br>
          Es clara, útil y estratégica.
        </h2>
        
        <div class="mb-8">
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Con Reco:</h3>
          
          <div class="space-y-4 text-lg md:text-xl text-gray-700">
            <div class="flex items-start">
              <span class="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-3 flex-shrink-0"></span>
              <span>Sabes qué platos realmente quieren tus clientes.</span>
            </div>
            <div class="flex items-start">
              <span class="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-3 flex-shrink-0"></span>
              <span>Reco aprende y propone mejoras en tu carta.</span>
            </div>
            <div class="flex items-start">
              <span class="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-3 flex-shrink-0"></span>
              <span>Vende como un camarero experto.</span>
            </div>
            <div class="flex items-start">
              <span class="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-3 flex-shrink-0"></span>
              <span>Habla todos los idiomas.</span>
            </div>
            <div class="flex items-start">
              <span class="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-3 flex-shrink-0"></span>
              <span>Se adapta al perfil de cada cliente.</span>
            </div>
          </div>
        </div>
        
        <h3 class="text-2xl md:text-3xl font-bold text-gray-900 text-center">
          No es solo diseño. Es ingeniería de carta.
        </h3>
        
        <a href="#how-it-works" class="mt-8 inline-block text-blue-600 font-medium hover:underline">Evalúa tu carta →</a>
      </div>
    </ScrollTransition>
    
    <div class="grid md:grid-cols-3 gap-8 mt-16">
      <!-- Benefit 1 - Menús en tu idioma -->
      <ScrollTransition delay={200}>
        <div class="bg-white rounded-xl shadow-xl p-8 transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] cursor-pointer">
          <div class="w-16 h-16 bg-blue-100 rounded-xl mb-6 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
          </div>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-3">Menús en tu idioma</h3>
          
          <p class="text-gray-600">
            Ver el menú en tu idioma preferido, sin complicaciones. Adaptado automáticamente para que te sientas como en casa.
          </p>
        </div>
      </ScrollTransition>
      
      <!-- Benefit 2 - Recomendaciones personalizadas -->
      <ScrollTransition delay={400}>
        <div class="bg-white rounded-xl shadow-xl p-8 transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] cursor-pointer">
          <div class="w-16 h-16 bg-green-100 rounded-xl mb-6 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-3">Recomendaciones personalizadas</h3>
          
          <p class="text-gray-600">
            Obtén recomendaciones inteligentes basadas en tus preferencias, dieta, y presupuesto. Como tener un experto gastronómico personal.
          </p>
        </div>
      </ScrollTransition>
      
      <!-- Benefit 3 - Pide y paga desde el móvil -->
      <ScrollTransition delay={600}>
        <div class="bg-white rounded-xl shadow-xl p-8 transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] cursor-pointer">
          <div class="w-16 h-16 bg-purple-100 rounded-xl mb-6 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-3">Pide y paga desde el móvil</h3>
          
          <p class="text-gray-600">
            Simplifica tu experiencia pagando directamente desde tu dispositivo. Sin esperas, sin complicaciones, solo disfruta.
          </p>
        </div>
      </ScrollTransition>
    </div>
  </div>
  <div class="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-white/0 via-white/70 to-white pointer-events-none"></div>
</section> 