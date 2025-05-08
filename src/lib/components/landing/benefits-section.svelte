<script lang="ts">
  import { Card, CardContent } from "$lib/components/ui/card";
  import { onMount } from "svelte";
</script>

<section id="benefits" class="py-16 md:py-24 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Una forma más inteligente de comer fuera.</h2>
      <p class="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
        RECO es una carta digital inteligente que personaliza la experiencia de cada comensal. 
        Funciona con un simple escaneo de QR - sin necesidad de app.
      </p>
    </div>
    
    <div class="grid md:grid-cols-3 gap-8">
      <!-- Benefit 1 -->
      <Card class="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
        <CardContent class="p-6">
          <div class="w-12 h-12 bg-blue-100 rounded-lg mb-5 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
              <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
            </svg>
          </div>
          
          <h3 class="text-xl font-bold text-gray-900 mb-3">Menús en tu idioma</h3>
          
          <p class="text-gray-600">
            Ver el menú en tu idioma preferido, sin complicaciones. Adaptado automáticamente para que 
            te sientas como en casa.
          </p>
        </CardContent>
      </Card>
      
      <!-- Benefit 2 -->
      <Card class="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
        <CardContent class="p-6">
          <div class="w-12 h-12 bg-green-100 rounded-lg mb-5 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
            </svg>
          </div>
          
          <h3 class="text-xl font-bold text-gray-900 mb-3">Recomendaciones personalizadas</h3>
          
          <p class="text-gray-600">
            Obtén recomendaciones inteligentes basadas en tus preferencias, dieta, y presupuesto. 
            Como tener un experto gastronómico personal.
          </p>
        </CardContent>
      </Card>
      
      <!-- Benefit 3 -->
      <Card class="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
        <CardContent class="p-6">
          <div class="w-12 h-12 bg-purple-100 rounded-lg mb-5 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="M7 15h0"></path>
              <path d="M11 15h0"></path>
              <path d="M15 15h0"></path>
            </svg>
          </div>
          
          <h3 class="text-xl font-bold text-gray-900 mb-3">Pide y paga desde el móvil</h3>
          
          <p class="text-gray-600">
            Simplifica tu experiencia pagando directamente desde tu dispositivo. Sin esperas, 
            sin complicaciones, solo disfruta.
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</section> 