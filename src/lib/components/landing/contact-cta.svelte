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
  class="relative py-16 md:py-24 text-white overflow-hidden w-full"
>
  <div class="absolute inset-0 z-0">
    <div 
      class="w-screen h-full" 
      style="
        background-image: url('/img/lastbksvg.svg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        margin-left: calc(-50vw + 50%);
        margin-right: calc(-50vw + 50%);
        width: 100vw;
      "
    ></div>
    <div class="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent"></div>
  </div>

  <div 
    bind:this={contentElement}
    class="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 text-center"
    class:animate-slide-up={isVisible}
  >
    <h2 class="text-4xl md:text-5xl font-bold mb-8 text-white">Transforma la experiencia de tus clientes con Reco</h2>
    
    <p class="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12">
      Potencia tu restaurante con recomendaciones inteligentes, pagos más rápidos y clientes más satisfechos.
      Descubre cómo Reco puede ayudarte a crecer.
    </p>
    
    <div class="flex flex-col sm:flex-row gap-6 justify-center">
      <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
        <Button 
          size="lg" 
          class="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8 w-full"
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
          class="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8 w-full"
          on:click={() => {
            track('cta_click', { label: 'free_trial' });
          }}
        >
          Prueba gratis
        </Button>
      </a>
    </div>
  </div>
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
</style> 