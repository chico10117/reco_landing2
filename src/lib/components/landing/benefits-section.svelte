<script lang="ts">
  import { onMount } from "svelte";
</script>

<section id="benefits" class="py-16 md:py-24 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-left mb-12">
      <h2 class="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-600 leading-tight">Una forma más<br>inteligente de comer fuera.</h2>
      <p class="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
        RECO es una carta digital inteligente que personaliza la experiencia de cada comensal.
        Funciona con un simple escaneo de QR - sin necesidad de app.
      </p>
      <a href="#explora" class="mt-6 inline-block text-blue-600 font-medium hover:underline">Explorar cómo usarlo →</a>
    </div>
    
    <div class="grid md:grid-cols-3 gap-8 mt-16">
      <!-- Benefit 1 - Menús en tu idioma -->
      <div class="bg-white rounded-xl shadow-xl p-8">
        <div class="w-16 h-16 bg-blue-100 rounded-xl mb-6 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
        </div>
        
        <h3 class="text-2xl font-bold text-gray-900 mb-3">Menús en tu idioma</h3>
        
        <p class="text-gray-600">
          Ver el menú en tu idioma preferido, sin complicaciones. Adaptado automáticamente para que te sientas como en casa.
        </p>
      </div>
      
      <!-- Benefit 2 - Recomendaciones personalizadas -->
      <div class="bg-white rounded-xl shadow-xl p-8">
        <div class="w-16 h-16 bg-green-100 rounded-xl mb-6 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        
        <h3 class="text-2xl font-bold text-gray-900 mb-3">Recomendaciones personalizadas</h3>
        
        <p class="text-gray-600">
          Obtén recomendaciones inteligentes basadas en tus preferencias, dieta, y presupuesto. Como tener un experto gastronómico personal.
        </p>
      </div>
      
      <!-- Benefit 3 - Pide y paga desde el móvil -->
      <div class="bg-white rounded-xl shadow-xl p-8">
        <div class="w-16 h-16 bg-purple-100 rounded-xl mb-6 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        
        <h3 class="text-2xl font-bold text-gray-900 mb-3">Pide y paga desde el móvil</h3>
        
        <p class="text-gray-600">
          Simplifica tu experiencia pagando directamente desde tu dispositivo. Sin esperas, sin complicaciones, solo disfruta.
        </p>
      </div>
    </div>
  </div>
</section> 