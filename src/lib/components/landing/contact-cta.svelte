<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { track } from "$lib/utils/analytics";
  import { onMount } from 'svelte';
  import { languageStore } from '$lib/stores/language.svelte';
  import { t } from '$lib/utils/translations';

  // Create reactive translations
  const currentLang = $derived(languageStore.currentLanguage);
  const tr = (key: Parameters<typeof t>[0]) => t(key, currentLang);
  
  // Changed from props to constants since they're not being used as component props
  const salesEmail: string = "sales@reco.chat";
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
  class="relative py-8 md:py-12 overflow-hidden w-full bg-white"
  style="background: radial-gradient(ellipse 60% 40% at 50% 40%, #dbeafe 0%, #e0e7ef 60%, #fff 100%);"
>
  <div id="video-reco" 
    bind:this={contentElement}
    class="relative z-10 w-full text-center"
    class:animate-slide-up={isVisible}
  >
    <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
      <span class="text-black">{tr('contact_cta_title_1')}&nbsp;</span><span class="text-blue-600">{tr('contact_cta_title_2')}</span>
    </h2>
    <p class="text-base md:text-lg text-gray-700 max-w-4xl mx-auto mb-12">
      {tr('contact_cta_description')}
    </p>
    
    <div class="flex flex-col sm:flex-row gap-6 justify-center w-full px-4 sm:px-0">
      <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto">
        <Button 
          size="lg" 
          class="rounded-full px-6 bg-blue-600 hover:bg-blue-700 text-white w-full"
          on:click={() => {
            track('cta_click', { label: 'contact_sales' });
          }}
        >
          {tr('contact_cta_btn')}
        </Button>
      </a>
      
      <a href="https://carta.reco.chat" target="_blank" rel="noopener" class="w-full sm:w-auto">
        <Button 
          variant="outline" 
          size="lg" 
          class="rounded-full px-6 border-blue-600 text-blue-600 hover:bg-blue-50 w-full"
          on:click={() => {
            track('cta_click', { label: 'free_trial' });
          }}
        >
          {tr('free_trial_btn')}
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