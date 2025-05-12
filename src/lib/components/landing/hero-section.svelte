<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { track } from "$lib/utils/analytics";

  let { onDiscoverClick, onRestaurantClick } = $props<{
    onDiscoverClick: () => void;
    onRestaurantClick: () => void;
  }>();
</script>
<!-- Hero Section -->
<section class="bg-white py-20 md:py-32 overflow-hidden relative">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="md:flex md:items-center md:justify-between">
      <div class="md:w-1/2 md:pr-12 mb-12 md:mb-0">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
          Pide mejor.<br>
          <span class="text-blue-600">Disfruta más.</span>
        </h1>
        
        <p class="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
          Reco es ese amigo experto que te ayuda a elegir como si conociera toda la carta.
          Te recomienda el plato perfecto según tu antojo, tu bolsillo y tu dieta en tu idioma y sin líos.
        </p>
        
        <div class="mt-10 flex flex-col sm:flex-row gap-4">
          <Button 
            size="lg" 
            class="rounded-full px-6 bg-blue-600 hover:bg-blue-700 text-white"
            on:click={() => {
              track('cta_click', { label: 'discover_how_it_works' });
              onDiscoverClick();
            }}
          >
            Descubre cómo funciona
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            class="rounded-full px-6 border-blue-600 text-blue-600 hover:bg-blue-50"
            on:click={() => {
              track('cta_click', { label: 'restaurant_help' });
              onRestaurantClick();
            }}
          >
            ¿Tienes un restaurante? Así te ayuda RECO
          </Button>
        </div>
        
        <p class="mt-8 text-sm text-gray-500">Confían en nosotros:</p>
        <div class="relative">
          <div class="absolute left-0 mt-2 flex flex-wrap items-center gap-8">
            <img src="/img/logo-yelmo.svg" alt="Cine Yelmo" class="h-20 opacity-100 hover:opacity-90 transition-opacity" />
            <img src="/img/logo-vips.svg" alt="Vips" class="h-16 opacity-100 hover:opacity-90 transition-opacity" />
            <img src="/img/logo-honest-greens.svg" alt="HonestGreens" class="h-16 opacity-100 hover:opacity-90 transition-opacity" />
          </div>
        </div>
        <!-- Espacio adicional para evitar que el contenido siguiente se superponga con los logos -->
        <div class="h-28"></div>
      </div>
      
      <div class="md:w-1/2 relative">
        <div class="relative z-10 transform transition-transform duration-500 hover:translate-y-[-10px]">
          <img
            src="/img/phone-mockup.png"
            alt="Reco app interface on mobile phone"
            class="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
            loading="eager"
            fetchpriority="high"
          />
        </div>
        
        <div class="absolute inset-0 bg-gradient-to-tr from-blue-100 via-transparent to-blue-50 rounded-full filter blur-3xl opacity-70"></div>
        
        <!-- Decorative elements -->
        <div class="absolute top-1/4 left-1/4 w-12 h-12 bg-yellow-400 rounded-full filter blur-xl opacity-70 animate-pulse"></div>
        <div class="absolute bottom-1/3 right-1/4 w-16 h-16 bg-blue-400 rounded-full filter blur-xl opacity-60 animate-pulse" style="animation-delay: 1s"></div>
      </div>
    </div>
  </div>
</section> 