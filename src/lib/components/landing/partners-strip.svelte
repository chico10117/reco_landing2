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

<section class="py-12 bg-white relative overflow-hidden">
  <div class="absolute top-0 left-0 right-0 h-32 bg-gradient-to-t from-white/0 via-white/50 to-white"></div>
  <div class="absolute -right-1/4 top-0 w-1/3 h-3/4">
    <div class="absolute inset-0 bg-[#4169E1] blur-2xl opacity-40 rounded-[40%_60%_60%_40%] animate-pulse"></div>
    <div class="absolute inset-0 bg-[#4169E1] blur-3xl opacity-25 rounded-[40%_60%_60%_40%] transform translate-x-10 animate-pulse" style="animation-delay: 0.5s;"></div>
    <div class="absolute inset-0 bg-[#4169E1] blur-3xl opacity-15 rounded-[40%_60%_60%_40%] transform translate-x-20 animate-pulse" style="animation-delay: 1s;"></div>
  </div>
  <div class="absolute -left-1/4 bottom-0 w-1/3 h-2/3">
    <div class="absolute inset-0 bg-[#4169E1] blur-2xl opacity-40 rounded-[60%_40%_40%_60%] animate-pulse"></div>
    <div class="absolute inset-0 bg-[#4169E1] blur-3xl opacity-25 rounded-[60%_40%_40%_60%] transform -translate-x-10 animate-pulse" style="animation-delay: 0.5s;"></div>
    <div class="absolute inset-0 bg-[#4169E1] blur-3xl opacity-15 rounded-[60%_40%_40%_60%] transform -translate-x-20 animate-pulse" style="animation-delay: 1s;"></div>
  </div>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
  <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-white/0 via-white/50 to-white"></div>
</section> 