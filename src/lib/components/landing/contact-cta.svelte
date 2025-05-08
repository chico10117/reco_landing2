<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { track } from "$lib/utils/analytics";
  
  export let salesEmail: string = "sales@reco.chat";
  export let trialHref: string = "/contact";
  export let calendlyUrl: string = "https://calendly.com/fernando-lqrb/15min";
</script>

<section class="py-16 md:py-24 bg-gradient-to-br from-dark-blue to-blue-purple text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-6">Transforma la experiencia de tus clientes con Reco</h2>
    
    <p class="text-xl text-baby-blue max-w-3xl mx-auto mb-10">
      Potencia tu restaurante con recomendaciones inteligentes, pagos más rápidos y clientes más satisfechos.
      Descubre cómo Reco puede ayudarte a crecer.
    </p>
    
    <div class="flex flex-col sm:flex-row gap-6 justify-center">
      <a href="https://calendly.com/fernando-lqrb/15min" target="_blank" rel="noopener noreferrer">
        <Button 
          size="lg" 
          class="bg-white text-dark-blue hover:bg-baby-blue rounded-full px-8 w-full"
          on:click={() => {
            track('cta_click', { label: 'contact_sales' });
          }}
        >
          Contacta con ventas
        </Button>
      </a>
      
      <a href="/contact">
        <Button 
          variant="outline" 
          size="lg" 
          class="border-white text-white hover:bg-blue-purple hover:text-white rounded-full px-8 w-full"
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