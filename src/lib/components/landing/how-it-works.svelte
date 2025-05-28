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

<section id="how-it-works" class="py-16 md:py-24 bg-white relative overflow-hidden">
  <div class="absolute -left-1/4 top-1/4 w-1/3 h-3/4">
    <div class="absolute inset-0 bg-[#4169E1] blur-2xl opacity-30 rounded-[40%_60%_60%_40%] animate-pulse"></div>
    <div class="absolute inset-0 bg-[#4169E1] blur-3xl opacity-20 rounded-[40%_60%_60%_40%] transform translate-x-10 animate-pulse" style="animation-delay: 0.5s;"></div>
    <div class="absolute inset-0 bg-[#4169E1] blur-3xl opacity-10 rounded-[40%_60%_60%_40%] transform translate-x-20 animate-pulse" style="animation-delay: 1s;"></div>
  </div>
  <div class="absolute -right-1/4 bottom-0 w-1/3 h-2/3">
    <div class="absolute inset-0 bg-[#4169E1] blur-2xl opacity-30 rounded-[60%_40%_40%_60%] animate-pulse"></div>
    <div class="absolute inset-0 bg-[#4169E1] blur-3xl opacity-20 rounded-[60%_40%_40%_60%] transform -translate-x-10 animate-pulse" style="animation-delay: 0.5s;"></div>
    <div class="absolute inset-0 bg-[#4169E1] blur-3xl opacity-10 rounded-[60%_40%_40%_60%] transform -translate-x-20 animate-pulse" style="animation-delay: 1s;"></div>
  </div>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <ScrollTransition>
      <div class="text-left mb-16">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-600 leading-tight">
          Para comensales: pedir sin dudas, comer mejor
        </h1>
        
        <div class="mt-6 md:flex md:items-start md:space-x-8">
          <div class="md:w-3/5 lg:w-1/2">
            <p class="text-xl text-gray-600 max-w-3xl space-y-2">
              <span class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Piden sin miedo a equivocarse
              </span>
              <span class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Pueden preguntar lo que quieran (y Reco responde)
              </span>
              <span class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Reciben sugerencias según su dieta, tiempo y bolsillo
              </span>
            </p>
          </div>
          <div class="md:w-2/5 lg:w-1/2 mt-6 md:mt-0">
            <div class="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-slate-50 rounded-lg shadow-sm border border-slate-200">
              <img src="https://placehold.co/400x400/547EF7/FFFFFF/png?text=Marta" alt="Marta, comensal" class="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover border-2 border-blue-200 shrink-0">
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

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each benefits as benefit, i}
        <ScrollTransition delay={i * 200}>
          <div class="bg-white rounded-xl shadow-xl p-8 transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] cursor-pointer">
            <div class="w-16 h-16 {benefit.iconBgColor} rounded-xl mb-6 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-110">
              <div class={benefit.iconColor}>
                {@html benefit.icon}
              </div>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
            <p class="text-gray-600">{benefit.description}</p>
          </div>
        </ScrollTransition>
      {/each}
    </div>
  </div>
  <div class="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-white/0 via-white/70 to-white pointer-events-none"></div>
</section> 