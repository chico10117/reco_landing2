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
<section bind:this={sectionElement} class="relative min-h-screen overflow-x-hidden hero-section bg-white" style="background: radial-gradient(ellipse 60% 40% at 50% 40%, #dbeafe 0%, #e0e7ef 60%, #fff 100%);">
  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-12 lg:pt-16 pb-24 md:pb-32">
    <div class="flex flex-col-reverse md:flex-row md:items-center md:justify-between">
      <div 
        bind:this={leftContent}
        class="md:w-1/2 md:pr-12 mb-12 md:mb-0 flex flex-col"
        class:animate-slide-left={isVisible}
      >
        <div class="flex-grow">
          <h1 class="mt-0 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            <span class="text-black">La mejor experiencia QR</span><br>
            <span class="text-blue-600 whitespace-nowrap">Para tus clientes</span>
          </h1>
          <div class="mt-4 text-base md:text-lg text-gray-600 max-w-2xl">
            <p class="mb-3">La carta más inteligente que:</p>
            <ul class="space-y-2 ml-4">
              <li class="flex items-start">
                <span class="text-blue-600 mr-3 mt-1">•</span>
                <span>Sugiere platos personalizados</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 mr-3 mt-1">•</span>
                <span>Resuelve dudas al instante</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 mr-3 mt-1">•</span>
                <span>Te ayuda a conocer mejor a tus clientes</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 mr-3 mt-1">•</span>
                <span>Todo desde el móvil, sin capacitaciones, sin complicaciones</span>
              </li>
            </ul>
            <!-- Imagen solo en móvil -->
            <div class="flex justify-center my-6 md:hidden">
              <a 
                href="https://fiamma.reco.restaurant" 
                target="_blank" 
                rel="noopener noreferrer"
                class="cursor-pointer w-[85%]"
              >
                <img
                  src="/img/hero.png"
                  alt="Reco app interface on mobile phone"
                  fetchpriority="high"
                  style="box-shadow:none;background:none;border-radius:0;"
                  class="w-full"
                />
              </a>
            </div>
          </div>
          <div class="mt-8 flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              class="rounded-full px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-200 focus:ring-2 focus:ring-blue-300 focus:outline-none text-lg"
              on:click={onDiscoverClick}
            >
              Descubre cómo funciona
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              class="rounded-full px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 shadow-lg transition-all duration-200 focus:ring-2 focus:ring-blue-200 focus:outline-none text-lg"
              on:click={() => {
                track('cta_click', { label: 'restaurant_help' });
                onRestaurantClick();
              }}
            >
              ¿Quieres que tu carta trabaje para ti?
            </Button>
          </div>
          <p class="mt-10 text-base text-gray-500">Confían en nosotros:</p>
          <div class="mt-2 flex flex-wrap items-center gap-8">
            <img src="/cinepolis.png" alt="Cinepolis" class="h-8 md:h-10 opacity-100 hover:opacity-90 transition-opacity" />
            <img src="/Basque.png" alt="Basque" class="h-8 md:h-12 opacity-100 hover:opacity-90 transition-opacity" />
            <img src="/Yelmo.svg" alt="Cine Yelmo" class="h-6 md:h-8 opacity-100 hover:opacity-90 transition-opacity" />
          </div>
        </div>
        
        <!-- Nuevo contenedor para el botón demo -->
        <div class="mt-auto pt-20">
          <div class="relative w-full overflow-x-visible">
            <a 
              href="https://carta.reco.chat/login" 
              class="absolute right-0 md:right-[-100px] lg:right-[-200px] whitespace-nowrap inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 text-lg font-medium shadow-lg transition-all duration-200" 
              target="_blank" 
              rel="noopener"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 flex-shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>Crea tu carta demo acá</span>
            </a>
          </div>
        </div>
      </div>
      <div 
        bind:this={rightContent}
        class="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0"
        class:animate-slide-right={isVisible}
      >
        <!-- Imagen en desktop -->
        <div 
          class="hidden md:block w-[70%] max-w-4xl"
        >
          <a 
            href="https://fiamma.reco.restaurant" 
            target="_blank" 
            rel="noopener noreferrer"
            class="cursor-pointer"
          >
            <img
              src="/img/hero.png"
              alt="Reco app interface on mobile phone"
              fetchpriority="high"
              style="box-shadow:none;background:none;border-radius:0;"
              class="w-full"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- Add bottom gradient overlay -->
  <div class="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-white to-white"></div>
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