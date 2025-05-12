<script lang="ts">
  interface Partner {
    name: string;
    logoUrl: string;
  }
  
  let { partners = [
    { name: "Yelmo", logoUrl: "/img/logo-yelmo.svg" },
    { name: "VIPS", logoUrl: "/img/logo-vips.svg" },
    { name: "Honest Greens", logoUrl: "/img/logo-honest-greens.svg" },
    { name: "TGB", logoUrl: "/img/logo-tgb.svg" },
    { name: "FoodBox", logoUrl: "/img/logo-foodbox.svg" }
  ] } = $props<{partners?: Partner[]}>();
</script>

<section class="py-12 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-8">
      <h3 class="text-lg font-medium text-gray-900">Empresas que confían en Reco</h3>
    </div>
    
    <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16">
      {#each partners as partner}
        <div class="flex items-center justify-center">
          <img 
            src={partner.logoUrl} 
            alt={partner.name} 
            class="h-8 md:h-12 max-w-[120px] md:max-w-[160px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
          />
        </div>
      {/each}
    </div>
  </div>
</section> 