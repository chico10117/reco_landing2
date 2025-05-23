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

<section class="py-28 md:py-40 bg-white relative overflow-hidden">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <ScrollTransition>
      <div class="text-left mb-24">
        <h2 class="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-600 leading-tight mb-12 text-center">
          Para Comensales, La Mejor Experiencia De La Industria.
        </h2>
        <p class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 leading-tight text-center w-full">
          Reco no es solo un menú digital. <br>
          Es tu cómplice foodie en la mesa.
          Foodie en la mesa.
        </p>
        
        <div class="mt-6 md:flex md:items-start md:space-x-8">
          <div class="md:w-3/5 lg:w-1/2">
            <blockquote class="text-xl text-gray-700 italic border-l-4 border-blue-500 pl-4 py-2 max-w-3xl">
              "La Unica Experiencia Super Personalizada En El Mundo Para Comensales."
            </blockquote>
    
            <ul class="mt-4 text-lg text-gray-600 max-w-3xl space-y-2">
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Recomienda Platos Según Gustos, Alergias, Antojos Y Patrones De Consumo.
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Responde Todas Las Dudas En Degundos (Sin Molestar Al Camarero).
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Reco Conoce A Tus Comensales Mejor Que Nadie.
              </li>
            </ul>
          </div>
          <div class="md:w-2/5 lg:w-1/2 mt-6 md:mt-0">
            <div class="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-slate-50 rounded-lg shadow-sm border border-slate-200">
              <img src="/Isabel.webp" alt="Isabel, Casa Ramos" class="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover border-2 border-blue-200 shrink-0">
              <div>
                <p class="text-base sm:text-lg font-medium text-gray-800 italic leading-tight">"Reco no reemplaza a mi equipo. Lo hace mejor."</p>
                <p class="text-xs sm:text-sm text-gray-600 mt-1">- Isabel, Casa Ramos</p>
              </div>
            </div>
          </div>
        </div>

        <a href="#pricing" class="mt-8 inline-block text-blue-600 hover:text-blue-700 font-medium">
          Conoce los precios flexibles de Reco →
        </a>
      </div>
    </ScrollTransition>

    <ScrollTransition delay={100}>
      <div class="mb-12 md:mb-16 text-left">
        <h2 class="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-600 leading-tight mb-4 whitespace-nowrap">
          ¿Tu carta vende o solo decora?
        </h2>
        <div class="mt-6 md:flex md:items-start md:space-x-8">
          <div class="md:w-3/5 lg:w-1/2">
            <blockquote class="text-xl text-gray-700 italic border-l-4 border-blue-500 pl-4 py-2 max-w-3xl">
              Una carta profesional no es solo bonita. Es clara, útil y estratégica.
            </blockquote>
            <ul class="mt-4 text-lg text-gray-600 max-w-3xl space-y-2">
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Con Reco sabes qué platos funcionan y cuáles no
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Reco aprende y propone mejoras
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Vende como un camarero experto
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Habla todos los idiomas
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Se adapta al perfil de cada cliente
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Esto no es diseño. Es ingeniería de carta — con IA incluida.
              </li>
            </ul>
          </div>
          <div class="md:w-2/5 lg:w-1/2 mt-6 md:mt-0">
            <div class="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-slate-50 rounded-lg shadow-sm border border-slate-200">
              <img src="/Andres.webp" alt="Andrés, Fonda Muñoz" class="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover border-2 border-blue-200 shrink-0">
              <div>
                <p class="text-base sm:text-lg font-medium text-gray-800 italic leading-tight">"Reco convirtió mi carta en mi mejor vendedor."</p>
                <p class="text-xs sm:text-sm text-gray-600 mt-1">- Andrés, Fonda Muñoz</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollTransition>
  </div>
  <div class="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-white/0 via-white/70 to-white pointer-events-none"></div>
</section>

<section class="py-20 md:py-32 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      {#each restaurantTypes as type, i}
        <ScrollTransition delay={i * 200}>
          <div class="bg-white rounded-xl shadow-xl p-8 transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] cursor-pointer">
            <div class="w-16 h-16 {type.iconBgColor} rounded-xl mb-6 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-110">
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