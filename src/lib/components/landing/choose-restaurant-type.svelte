<script lang="ts">
  import ScrollTransition from '$lib/components/ui/scroll-transition.svelte';

  interface RestaurantType {
    icon: string;
    title: string;
    description: string;
    iconBgColor: string;
    iconColor: string;
  }

  const restaurantTypes: RestaurantType[] = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>`,
      title: "Restaurante turístico",
      description: "Menús multilingües y recomendaciones adaptadas a cada idioma y cultura. Tus clientes se sienten como en casa.",
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"/>
      </svg>`,
      title: "Gastrobar o autor",
      description: "Destaca tus platos especiales y maridajes. Reco ayuda a tus clientes a descubrir tu propuesta gastronómica única.",
      iconBgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
      </svg>`,
      title: "Fast-casual o franquicia",
      description: "Agiliza los pedidos y maximiza las ventas. Reco sugiere complementos y optimiza el ticket medio automáticamente.",
      iconBgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>`,
      title: "Casa de comidas o menú del día",
      description: "Gestiona fácilmente los menús diarios y sugerencias. Reco mantiene tu carta siempre actualizada y atractiva.",
      iconBgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    }
  ];
</script>

<section class="py-16 md:py-24 bg-[#F8F7FF]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <ScrollTransition>
      <div class="text-left mb-16">
        <h2 class="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-600 leading-tight">
          Elige tu tipo de restaurante...<br>
          ¡y haz que cada mesa<br>
          funcione mejor!
        </h2>
        
        <p class="mt-6 text-xl text-gray-600 max-w-3xl">
          Sabemos que cada restaurante es distinto.
          Por eso, Reco se adapta a tu tipo de servicio, carta y clientela.
        </p>

        <p class="mt-4 text-xl text-gray-600 max-w-3xl">
          Desde bares con menú del día hasta gastrobares con maridaje — tu operación fluye, tu equipo respira, y tus clientes repiten.
        </p>

        <a href="#pricing" class="mt-4 inline-block text-blue-600 hover:text-blue-700 font-medium">
          Conoce los precios flexibles de Reco →
        </a>
      </div>
    </ScrollTransition>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      {#each restaurantTypes as type, i}
        <ScrollTransition delay={i * 200}>
          <div class="bg-white rounded-xl shadow-xl p-8">
            <div class="w-16 h-16 {type.iconBgColor} rounded-xl mb-6 flex items-center justify-center">
              <div class={type.iconColor}>
                {@html type.icon}
              </div>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
            <p class="text-gray-600">{type.description}</p>
          </div>
        </ScrollTransition>
      {/each}
    </div>
  </div>
</section> 