<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { track } from "$lib/utils/analytics";
  import { onMount } from 'svelte';

  let { onDiscoverClick, onRestaurantClick } = $props<{
    onDiscoverClick: () => void;
    onRestaurantClick: () => void;
  }>();

  let leftContent: HTMLElement;
  let rightContent: HTMLElement;
  let sectionElement: HTMLElement;
  let isVisible = $state(true);

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Cuando la sección entra en el viewport
            isVisible = true;
          } else {
            // Cuando la sección sale del viewport
            isVisible = false;
            // Resetear las animaciones para la próxima vez
            if (leftContent) {
              leftContent.style.animation = 'none';
              leftContent.offsetHeight;
              leftContent.style.animation = '';
            }
            if (rightContent) {
              rightContent.style.animation = 'none';
              rightContent.offsetHeight;
              rightContent.style.animation = '';
            }
          }
        });
      },
      {
        threshold: 0.2 // Trigger cuando al menos 20% de la sección es visible
      }
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  });
</script>

<!-- Hero Section -->
<section 
  bind:this={sectionElement}
  class="relative min-h-screen overflow-hidden hero-section bg-white"
>
  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
    <div class="md:flex md:items-center md:justify-between">
      <div 
        bind:this={leftContent}
        class="md:w-1/2 md:pr-12 mb-12 md:mb-0"
        class:animate-slide-left={isVisible}
      >
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          <span class="text-[#85A3FA]">Pide mejor.</span><br>
          <span class="text-blue-600">Disfruta más.</span>
        </h1>
        
        <p class="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
          El menú ya no es solo una lista de platos.
          Es el mejor amigo de tu cliente… que trabaja para ti.
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
        <div class="mt-4 flex flex-wrap items-center gap-8">
          <img src="/Yelmo.png" alt="Cine Yelmo" class="h-24 opacity-100 hover:opacity-90 transition-opacity" />
          <img src="/Basque.png" alt="Vips" class="h-20 opacity-100 hover:opacity-90 transition-opacity" />
          <img src="/HonestGreens.png" alt="HonestGreens" class="h-20 opacity-100 hover:opacity-90 transition-opacity" />
        </div>
      </div>
      
      <div 
        bind:this={rightContent}
        class="md:w-1/2 relative"
        class:animate-slide-right={isVisible}
      >
        <div class="relative z-10 transform transition-transform duration-500 hover:translate-y-[-10px]">
          <img
            src="/img/phone-mockup.png"
            alt="Reco app interface on mobile phone"
            class="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
            loading="eager"
            fetchpriority="high"
          />
        </div>
        
        <!-- Efectos decorativos -->
        <div class="absolute inset-0 bg-gradient-to-tr from-blue-100 via-transparent to-blue-50 rounded-full filter blur-3xl opacity-70"></div>
        <div class="absolute top-1/4 left-1/4 w-12 h-12 bg-yellow-400 rounded-full filter blur-xl opacity-70 animate-pulse"></div>
        <div class="absolute bottom-1/3 right-1/4 w-16 h-16 bg-blue-400 rounded-full filter blur-xl opacity-60 animate-pulse" style="animation-delay: 1s"></div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Animaciones y transiciones */
  :global(.animate-pulse) {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 0.7;
    }
    50% {
      opacity: 0.3;
    }
  }

  .animate-slide-left {
    animation: slideLeft 0.6s cubic-bezier(0.77, 0, 0.175, 1) forwards;
  }

  .animate-slide-right {
    animation: slideRight 0.6s cubic-bezier(0.77, 0, 0.175, 1) forwards;
  }

  @keyframes slideLeft {
    from {
      opacity: 0;
      transform: translateX(-100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideRight {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style> 