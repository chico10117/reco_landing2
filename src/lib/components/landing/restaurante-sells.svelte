<script lang="ts">
  import ScrollTransition from '$lib/components/ui/scroll-transition.svelte';
  // Puedes importar los íconos y datos igual que en choose-restaurant-type.svelte si lo deseas reutilizar
  const restaurantTypes = [
    {
      icon: `<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-8 w-8\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 11a3 3 0 11-6 0 3 3 0 016 0z\"/></svg>`,
      title: "Restaurante turístico",
      description: "Menús multilingües y recomendaciones adaptadas a cada idioma y cultura. Tus clientes se sienten como en casa.",
      iconColor: "text-blue-600"
    },
    {
      icon: `<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-8 w-8\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z\"/></svg>`,
      title: "Gastrobar o autor",
      description: "Destaca tus platos especiales y maridajes. Reco ayuda a tus clientes a descubrir tu propuesta gastronómica única.",
      iconColor: "text-green-600"
    },
    {
      icon: `<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-8 w-8\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z\"/></svg>`,
      title: "Fast-casual o franquicia",
      description: "Agiliza los pedidos y maximiza las ventas. Reco sugiere complementos y optimiza el ticket medio automáticamente.",
      iconColor: "text-purple-600"
    },
    {
      icon: `<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-8 w-8\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z\"/></svg>`,
      title: "Casa de comidas o menú del día",
      description: "Gestiona fácilmente los menús diarios y sugerencias. Reco mantiene tu carta siempre actualizada y atractiva.",
      iconColor: "text-orange-600"
    }
  ];
</script>

<section class="py-8 md:py-12 bg-white relative overflow-hidden" style="background: radial-gradient(ellipse 60% 40% at 50% 40%, #dbeafe 0%, #e0e7ef 60%, #fff 100%);">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <ScrollTransition>
      <div class="mb-12 md:mb-16 text-left">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          <span class="text-black">Para ti, restaurador:&nbsp;</span><span class="text-blue-600">más ventas, menos errores</span>
        </h1>
        <div class="mt-6 md:flex md:items-start md:space-x-8">
          <div class="md:w-3/5 lg:w-1/2">
            <blockquote class="text-base md:text-lg text-gray-700 italic border-l-4 border-blue-500 pl-4 py-2 max-w-3xl">
              "Tu staff se enfoca en lo humano. Reco, en todo lo demás."
            </blockquote>
            <ul class="mt-4 text-sm md:text-base text-gray-600 max-w-3xl space-y-2">
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Aumenta el ticket medio con recomendaciones inteligentes
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Reduce errores de pedido (Mejor experiencia del cliente = mejores reseñas)
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Funciona con un QR. Sin instalaciones, sin formaciones eternas
              </li>
            </ul>
            <a href="#pricing" class="mt-4 inline-block text-blue-600 hover:text-blue-700 font-medium">Conoce los precios flexibles de Reco →</a>
          </div>
          <div class="md:w-2/5 lg:w-1/2 mt-6 md:mt-0 flex justify-center">
            <div class="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-blue-200">
              <img src="/Isabel.webp" alt="Isabel, Casa Ramos" class="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover border-2 border-blue-200 shrink-0">
              <div>
                <p class="text-base sm:text-lg font-medium text-gray-800 italic leading-tight">"Reco no reemplaza a mi equipo. Lo hace mejor."</p>
                <p class="text-xs sm:text-sm text-gray-600 mt-1">- Isabel, Casa Ramos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollTransition>
    <ScrollTransition>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        {#each restaurantTypes as type}
          <div class="relative bg-white rounded-2xl border border-blue-200 shadow-[0_8px_32px_0_rgba(33,93,255,0.08)] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-400/20 cursor-pointer">
            <div class="absolute top-2 right-2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 via-blue-300 to-blue-200 opacity-60 blur-sm animate-pulse"></div>
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 flex items-center justify-center mb-6 shadow-inner">
              <div class={type.iconColor}>
                {@html type.icon}
              </div>
            </div>
            <h3 class="text-blue-600 text-2xl font-bold mb-2">{type.title}</h3>
            <p class="text-gray-700 text-base">{type.description}</p>
          </div>
        {/each}
      </div>
    </ScrollTransition>
  </div>
</section> 