<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { track } from "$lib/utils/analytics";
  import { onMount } from 'svelte';
  import VideoOverlay from '$lib/components/ui/video-overlay/video-overlay.svelte';

  let { onRestaurantClick } = $props<{
    onRestaurantClick: () => void;
  }>();

  let leftContent: HTMLElement;
  let rightContent: HTMLElement;
  let sectionElement: HTMLElement;
  let isVisible = $state(true);
  let videoOverlay: VideoOverlay;

  function onDiscoverClick() {
    // Track click event for analytics
    track('cta_click', { label: 'discover_how_it_works' });
    if (videoOverlay) {
      // Open video overlay when instance is available
      videoOverlay.open();
    } else {
      // Handle case where video overlay component is not mounted
    }
  }

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
  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10 md:pt-25 md:pb-16 lg:pb-12 lg:pt-30">
    <div class="md:flex md:items-center md:justify-between">
      <div 
        bind:this={leftContent}
        class="md:w-1/2 md:pr-12 mb-12 md:mb-0"
        class:animate-slide-left={isVisible}
      >
        <h1 class="mt-16 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          <span class="text-[#85A3FA] [text-shadow:0_2px_4px_rgba(0,0,0,0.2)]">El mejor amigo de tu cliente...</span><br>
          <span class="text-blue-600 [text-shadow:0_2px_4px_rgba(0,0,0,0.1)]">Que trabaja para ti.</span>
        </h1>
        
        <p class="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl drop-shadow-sm hover:drop-shadow-md transition-all duration-300 bg-gradient-to-r from-transparent via-white/50 to-transparent p-4 rounded-xl backdrop-blur-sm">
          Tu carta inteligente, sugiere platos, resuelve dudas y te ayuda a conocer mejor a tus clientes.
          <br>
          Todo desde el móvil, sin apps, sin complicaciones.
        </p>
        
        <div class="mt-10 flex flex-col sm:flex-row gap-4">
          <Button 
            size="lg" 
            class="rounded-full px-6 bg-blue-600 hover:bg-blue-700 text-white"
            on:click={onDiscoverClick}
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
        
        <p class="mt-16 text-lg text-gray-500">Confían en nosotros:</p>
        <div class="mt-16 flex flex-wrap items-center gap-8">
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
            src="/img/hero.png"
            alt="Reco app interface on mobile phone"
            class="w-full max-w-md mx-auto rounded-3xl"
            loading="eager"
            fetchpriority="high"
          />
        </div>
      </div>
    </div>
  </div>
  
  <!-- Add bottom gradient overlay -->
  <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-white to-white"></div>
</section>

<VideoOverlay bind:this={videoOverlay} />

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