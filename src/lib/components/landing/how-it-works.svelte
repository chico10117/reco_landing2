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
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>`,
      title: "Más ingresos",
      description: "Reco recomienda platos que suben el ticket medio — sin que el staff diga una palabra.",
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>`,
      title: "Menos presión para el equipo",
      description: "Reco responde dudas frecuentes, sugiere maridajes y libera al personal para lo humano.",
      iconBgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>`,
      title: "Datos útiles al instante",
      description: "Descubre qué platos triunfan, qué falla y cómo mejorar — todo desde la carta.",
      iconBgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ];
</script>

<section id="how-it-works" class="py-16 md:py-24 bg-white relative overflow-hidden">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <ScrollTransition>
      <div class="text-left mb-16">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-600 leading-tight text-center">
          ¿Tu Carta Vende O Solo Decora?
        </h1>
        <br>
        <p class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 leading-tight text-center w-full">
          Una Carta Profesional No Es Solo Bonita.<br>
          Es Clara, Útil Y Estratégica.
        </p>
        <div class="mt-6 md:flex md:items-start md:space-x-8">
          <div class="md:w-3/5 lg:w-1/2">
            <p class="text-xl text-gray-600 max-w-3xl space-y-2 font-bold mb-2">Con Reco:</p>
            <div class="text-xl text-gray-600 max-w-3xl space-y-2">
              <span class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Sabes qué platos funcionan y cuáles no.
              </span>
              <span class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Reco aprende y propone mejoras.
              </span>
              <span class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Vende como un camarero experto.
              </span>
              <span class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Habla todos los idiomas.
              </span>
              <span class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Se adapta al perfil de cada cliente.
              </span>
            </div>
          </div>
          <div class="md:w-2/5 lg:w-1/2 mt-6 md:mt-0">
            <div class="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-slate-50 rounded-lg shadow-sm border border-slate-200">
              <img src="https://placehold.co/400x400/547EF7/FFFFFF/png?text=Marta" alt="Marta, comensal" class="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover border-2 border-blue-200 shrink-0">
              <div>
                <p class="text-base sm:text-lg font-medium text-gray-800 italic leading-tight">"Reco me salvó de pedir algo con mariscos (¡alérgica!)"</p>
                <p class="text-xs sm:text-sm text-gray-600 mt-1">- Marta, comensal en Barcelona</p>
              </div>
            </div>
          </div>
        </div>
<br>
        <p class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 leading-tight text-center w-full mt-8">
          No Es Solo Diseño. Es Ingeniería De Carta — Con IA Incluida.
        </p>
      </div>
    </ScrollTransition>

    <div class="w-full h-8 md:h-12"></div>
    <div class="w-full border-t border-gray-200 mb-12"></div>

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