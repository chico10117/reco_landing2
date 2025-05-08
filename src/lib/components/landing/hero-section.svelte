<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { track } from "$lib/utils/analytics";

  export let onDiscoverClick: () => void;
  export let onRestaurantClick: () => void;
</script>

<section class="bg-baby-blue py-20 md:py-32 overflow-hidden relative">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="md:flex md:items-center md:justify-between">
      <div class="md:w-1/2 md:pr-12 mb-12 md:mb-0">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Pide mejor.<br>
          <span class="text-dark-blue">Disfruta más.</span>
        </h1>
        
        <p class="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
          Reco es ese amigo experto que te ayuda a elegir como si conociera toda la carta.
          Te recomienda el plato perfecto según tu antojo, tu bolsillo y tu dieta en tu idioma y sin líos.
        </p>
        
        <div class="mt-10 flex flex-col sm:flex-row gap-4">
          <Button 
            size="lg" 
            class="rounded-full px-6 bg-dark-blue hover:bg-blue-purple text-white"
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
            class="rounded-full px-6 border-dark-blue text-dark-blue hover:bg-blue-purple hover:text-white hover:border-blue-purple"
            on:click={() => {
              track('cta_click', { label: 'restaurant_help' });
              onRestaurantClick();
            }}
          >
            ¿Tienes un restaurante? Así te ayuda RECO
          </Button>
        </div>
        
        <div class="mt-8">
          <p class="text-sm text-gray-500 mb-3">Confían en nosotros:</p>
          <div class="flex items-center gap-6">
            <img src="/img/logo-yelmo.svg" alt="Yelmo" class="h-8 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="/img/logo-vips.svg" alt="VIPS" class="h-8 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="/img/logo-honest-greens.svg" alt="Honest Greens" class="h-8 opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>
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
        
        <div class="absolute inset-0 bg-gradient-to-tr from-blue-purple via-transparent to-baby-blue rounded-full filter blur-3xl opacity-70"></div>
        
        <!-- Decorative elements -->
        <div class="absolute top-1/4 left-1/4 w-12 h-12 bg-dark-blue rounded-full filter blur-xl opacity-70 animate-pulse"></div>
        <div class="absolute bottom-1/3 right-1/4 w-16 h-16 bg-blue-purple rounded-full filter blur-xl opacity-60 animate-pulse" style="animation-delay: 1s"></div>
      </div>
    </div>
  </div>
</section> 