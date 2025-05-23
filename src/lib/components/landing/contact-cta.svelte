<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { track } from "$lib/utils/analytics";
  import { onMount } from 'svelte';
  
  // Changed from props to constants since they're not being used as component props
  const salesEmail: string = "sales@reco.chat";
  const trialHref: string = "/contact";
  const calendlyUrl: string = "https://calendly.com/fernando-lqrb/15min";

  let sectionElement: HTMLElement;
  let contentElement: HTMLElement;
  let isVisible = $state(false);

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            isVisible = true;
          } else {
            isVisible = false;
            if (contentElement) {
              contentElement.style.animation = 'none';
              contentElement.offsetHeight;
              contentElement.style.animation = '';
            }
          }
        });
      },
      {
        threshold: 0.2
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

<section 
  bind:this={sectionElement}
  class="relative py-28 md:py-40 overflow-hidden w-full bg-white"
>
  <!-- Manchas azules eliminadas -->
  
  <div 
    bind:this={contentElement}
    class="relative z-10 w-full text-center"
    class:animate-slide-up={isVisible}
  >
    <h2 class="text-4xl md:text-5xl font-bold mb-16 text-blue-600">Transforma la experiencia de tus clientes con Reco</h2>
    
    <p class="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-20">
      Potencia tu restaurante con recomendaciones inteligentes, pagos más rápidos y clientes más satisfechos.
      Descubre cómo Reco puede ayudarte a crecer.
    </p>
    
    <div class="flex flex-col sm:flex-row gap-6 justify-center">
      <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
        <Button 
          size="lg" 
          class="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-8 w-full"
          on:click={() => {
            track('cta_click', { label: 'contact_sales' });
          }}
        >
          Contacta con ventas
        </Button>
      </a>
      
      <a href={trialHref}>
        <Button 
          variant="outline" 
          size="lg" 
          class="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8 w-full border border-blue-600"
          on:click={() => {
            track('cta_click', { label: 'free_trial' });
          }}
        >
          Prueba gratis
        </Button>
      </a>
    </div>
  </div>

  <!-- Bottom gradient overlay -->
  <div class="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-white/0 via-white/70 to-white pointer-events-none"></div>
</section>

<style>
  /* Animación de deslizamiento hacia arriba */
  .animate-slide-up {
    animation: slideUp 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards;
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(100px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

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
</style> 