<script lang="ts">
  // Miembros del equipo
  const equipo = [
    {
      nombre: 'Francisco Cordero',
      cargo: 'CTO & Co-fundador',
      foto: '/img/team/francisco.jpeg',
      bio: 'Ingeniero electrónico con una década de experiencia liderando proyectos de hardware en Intel. Arquitecto de nuestra plataforma de IA y visionario de la digitalización del sector restaurantero.',
      linkedin: 'https://www.linkedin.com/in/francisco-cordero-reco/'
    },
    {
      nombre: 'José Antonio Jiménez Ramos',
      cargo: 'CEO & Co-fundador',
      foto: '/img/team/jose.jpeg',
      bio: 'Emprendedor y especialista en comunicación con experiencia liderando equipos de marketing para marcas de lujo y proyectos digitales en América Latina.',
      linkedin: 'https://www.linkedin.com/in/joseantoniojimenezramos/'
    },
    {
      nombre: 'Fernando Soto',
      cargo: 'Chief Revenue Officer',
      foto: '/img/team/fernando.jpeg',
      bio: 'Más de 25 años de experiencia en revenue management, marketing y ventas en sectores Telco, Fintech y Hospitality. Experto en transformar desafíos operativos en historias de éxito.',
      linkedin: 'https://www.linkedin.com/in/fernandosotojaimes/'
    },
    {
      nombre: 'Abraham Hernández',
      cargo: 'Head de Producto',
      foto: '/img/team/abraham.jpeg',
      bio: 'Diseñador de producto especializado en experiencia de usuario y estrategia digital. Lidera la evolución del Smart Menu con enfoque en usabilidad y eficiencia.',
      linkedin: 'https://www.linkedin.com/in/dogcalas/'
    }
  ];

  const valores = [
    {
      titulo: 'Innovación',
      descripcion: 'Buscamos constantemente nuevas formas de mejorar la experiencia gastronómica.',
      icono: '🚀'
    },
    {
      titulo: 'Calidad',
      descripcion: 'Nos comprometemos con la excelencia en cada aspecto de nuestro servicio.',
      icono: '⭐'
    },
    {
      titulo: 'Sostenibilidad',
      descripcion: 'Trabajamos por un futuro más sostenible para la industria de la restauración.',
      icono: '🌱'
    }
  ];

  // Carousel controls
  // @ts-ignore - Svelte 5 runes
  let activeMember = $state(0);
  // @ts-ignore - Svelte 5 runes
  let isHovering = $state(false);
  let interval: ReturnType<typeof setInterval> | null = null;
  
  // Avanza al siguiente miembro cada 4 segundos
  function startCarousel(): void {
    interval = setInterval(() => {
      if (!isHovering) {
        activeMember = (activeMember + 1) % equipo.length;
      }
    }, 4000);
  }
  
  function pauseCarousel(): void {
    isHovering = true;
  }
  
  function resumeCarousel(): void {
    isHovering = false;
  }
  
  function selectMember(index: number): void {
    activeMember = index;
    // Reset timer when manually changing
    if (interval) {
      clearInterval(interval);
      startCarousel();
    }
  }
  
  // Lifecycle
  if (typeof window !== 'undefined') {
    // Solo ejecutar en el cliente, no en SSR
    setTimeout(() => {
      startCarousel();
      
      // Limpiar al desmontar
      window.addEventListener('beforeunload', () => {
        if (interval) clearInterval(interval);
      });
    }, 100);
  }
</script>

<style>
  .team-tab {
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .team-tab:after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0;
    height: 3px;
    background-color: #2563eb;
    transition: width 0.3s ease;
  }
  
  .team-tab.active {
    color: #2563eb;
  }
  
  .team-tab.active:after {
    width: 100%;
  }
  
  .member-card {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
    position: absolute;
    width: 100%;
    pointer-events: none;
  }
  
  .member-card.active {
    opacity: 1;
    transform: translateY(0);
    position: relative;
    pointer-events: auto;
  }
  
  .team-photo {
    transition: transform 0.3s ease;
    border-radius: 8px;
  }
  
  .team-photo:hover {
    transform: scale(1.02);
  }
  
  .carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, 0.8);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
  }
  
  .carousel-control:hover {
    background-color: rgba(255, 255, 255, 0.95);
  }
  
  .carousel-control.prev {
    left: 10px;
  }
  
  .carousel-control.next {
    right: 10px;
  }
  
  @media (max-width: 768px) {
    .carousel-control {
      width: 30px;
      height: 30px;
    }
  }
</style>

<svelte:head>
  <title>Nosotros | Reco</title>
  <meta name="description" content="Conoce al equipo detrás de Reco." />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
  <!-- Sección de Historia y Valores eliminadas -->

  <!-- Sección del Equipo -->
  <div class="mb-20">
    <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Nuestro Equipo</h2>
    
    <!-- Team Navigation Tabs -->
    <div class="flex justify-center mb-12">
      <div class="flex space-x-8 border-b border-gray-200 pb-2">
        {#each equipo as miembro, i}
          <button 
            class="team-tab text-lg font-medium pb-2 {i === activeMember ? 'active' : ''}"
            onclick={() => selectMember(i)}
          >
            {miembro.nombre.split(' ')[0]}
          </button>
        {/each}
      </div>
    </div>
    
    <!-- Team Member Cards Carousel -->
    <div 
      class="relative min-h-[500px]" 
      role="region"
      aria-label="Carrusel de miembros del equipo"
      onmouseenter={pauseCarousel} 
      onmouseleave={resumeCarousel}
      ontouchstart={pauseCarousel}
      ontouchend={resumeCarousel}
    >
      <!-- Carousel Controls -->
      <button 
        class="carousel-control prev" 
        onclick={() => selectMember((activeMember - 1 + equipo.length) % equipo.length)}
        aria-label="Miembro anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
          <path d="M15 18l-6-6 6-6"></path>
        </svg>
      </button>
      
      <button 
        class="carousel-control next"
        onclick={() => selectMember((activeMember + 1) % equipo.length)}
        aria-label="Siguiente miembro"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
          <path d="M9 18l6-6-6-6"></path>
        </svg>
      </button>
      
      {#each equipo as miembro, i}
        <div class="member-card {i === activeMember ? 'active' : ''}" data-index={i}>
          <div class="bg-white rounded-xl shadow-xl overflow-hidden">
            <div class="md:flex">
              <div class="md:w-1/3">
                <div class="h-80 md:h-full overflow-hidden">
                  <img 
                    src={miembro.foto} 
                    alt={miembro.nombre}
                    class="team-photo w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <div class="md:w-2/3 p-8 md:p-10">
                <div class="mb-6">
                  <h3 class="text-3xl font-bold text-gray-900 mb-2">{miembro.nombre}</h3>
                  <p class="text-blue-600 text-xl mb-6">{miembro.cargo}</p>
                  <p class="text-gray-600 text-lg leading-relaxed">{miembro.bio}</p>
                </div>
                
                {#if miembro.linkedin}
                <div class="mt-8">
                  <a 
                    href={miembro.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                    aria-label={`Ver perfil de LinkedIn de ${miembro.nombre}`}
                  >
                    <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <span class="text-sm font-medium">Ver perfil de LinkedIn</span>
                  </a>
                </div>
                {/if}
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
    
    <!-- Mobile Navigation Dots -->
    <div class="flex justify-center mt-6">
      {#each equipo as _, i}
        <button 
          class="mx-1 w-3 h-3 rounded-full {i === activeMember ? 'bg-blue-600' : 'bg-gray-300'}"
          aria-label={`Ver ${equipo[i].nombre}`}
          onclick={() => selectMember(i)}
        ></button>
      {/each}
    </div>
  </div>

  <!-- Sección de CTA -->
  <div class="mt-16 text-center bg-blue-50 p-10 rounded-xl shadow-sm">
    <h3 class="text-2xl font-bold text-gray-900 mb-4">¿Quieres formar parte de nuestro equipo?</h3>
    <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
      Estamos buscando personas apasionadas por la tecnología y la gastronomía que quieran transformar el sector restaurantero.
    </p>
    <a href="https://calendly.com/fernando-lqrb/15min" target="_blank" rel="noopener noreferrer" class="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
      Ver ofertas de trabajo
    </a>
  </div>
</div> 