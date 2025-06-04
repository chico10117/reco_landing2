<script lang="ts">
  import ScrollTransition from '$lib/components/ui/scroll-transition.svelte';

  interface Benefit {
    icon: string;
    title: string;
    description: string;
    iconBgColor: string;
    iconColor: string;
  }

  const benefits: Benefit[] = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>`,
      title: "Menús en tu idioma",
      description: "Ver el menú en tu idioma preferido, sin complicaciones. Adaptado automáticamente para que te sientas como en casa.",
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>`,
      title: "Recomendaciones personalizadas",
      description: "Obtén recomendaciones inteligentes basadas en tus preferencias, dieta, y presupuesto. Como tener un experto gastronómico personal.",
      iconBgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>`,
      title: "Pide y paga desde el móvil",
      description: "Simplifica tu experiencia pagando directamente desde tu dispositivo. Sin esperas, sin complicaciones, solo disfruta.",
      iconBgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ];
</script>

<section id="how-it-works" class="py-16 md:py-24 bg-white relative overflow-hidden" style="background: radial-gradient(ellipse 60% 40% at 50% 40%, #dbeafe 0%, #e0e7ef 60%, #fff 100%);">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <ScrollTransition>
      <div class="mb-12 md:mb-16 text-left">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          <span class="text-black">Para comensales:&nbsp;</span><span class="text-blue-600">pedir sin dudas, comer mejor</span>
        </h1>
        <div class="mt-6 md:flex md:items-start md:space-x-8">
          <div class="md:w-3/5 lg:w-1/2">
            <blockquote class="text-base md:text-lg text-gray-700 italic border-l-4 border-blue-500 pl-4 py-2 max-w-3xl">
              "Reco me salvó de pedir un plato con mariscos (¡alérgica!)"
            </blockquote>
            <ul class="mt-4 text-sm md:text-base text-gray-600 max-w-3xl space-y-2">
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Piden sin miedo a equivocarse
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Pueden preguntar lo que quieran (y Reco responde)
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Reciben sugerencias según su dieta, tiempo y bolsillo
              </li>
            </ul>
          </div>
          <div class="md:w-2/5 lg:w-1/2 mt-6 md:mt-0">
            <div class="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-blue-200">
              <img src="/Marta.jpg" alt="Marta, comensal" class="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover border-2 border-blue-200 shrink-0">
              <div>
                <p class="text-base sm:text-lg font-medium text-gray-800 italic leading-tight">"Reco me salvó de pedir un plato con mariscos (¡alérgica!)"</p>
                <p class="text-xs sm:text-sm text-gray-600 mt-1">- Marta, comensal en Barcelona</p>
              </div>
            </div>
          </div>
        </div>
        <a href="#benefits" class="mt-8 inline-block text-blue-600 hover:text-blue-700 font-medium">
          Soy un restaurante → Ver beneficios para mi negocio
        </a>
      </div>
    </ScrollTransition>
    <ScrollTransition>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {#each benefits as benefit, i}
          <div class="relative bg-white rounded-2xl border border-blue-200 shadow-[0_8px_32px_0_rgba(33,93,255,0.08)] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-400/20 cursor-pointer">
            <div class="absolute top-2 right-2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 via-blue-300 to-blue-200 opacity-60 blur-sm animate-pulse"></div>
            <div class="w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-inner bg-blue-50">
              <div class={benefit.iconColor}>
                {@html benefit.icon}
              </div>
            </div>
            <h3 class="text-blue-600 text-2xl font-bold mb-2">{benefit.title}</h3>
            <p class="text-gray-700 text-base">{benefit.description}</p>
          </div>
        {/each}
      </div>
    </ScrollTransition>
  </div>
</section> 