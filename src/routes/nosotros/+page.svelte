<script lang="ts">
  // Miembros del equipo
  const equipo = [
    {
      nombre: 'Francisco Cordero',
      cargo: 'CTO & Co-fundador',
      foto: '/img/team/francisco.jpeg',
      bio: 'Ingeniero electrónico con una década de experiencia liderando proyectos de hardware en Intel. Arquitecto de nuestra plataforma de IA y visionario de la digitalización del sector restaurantero.'
    },
    {
      nombre: 'José Antonio Jiménez Ramos',
      cargo: 'CEO & Co-fundador',
      foto: '/img/team/jose.jpeg',
      bio: 'Emprendedor y especialista en comunicación con experiencia liderando equipos de marketing para marcas de lujo y proyectos digitales en América Latina.'
    },
    {
      nombre: 'Fernando Soto',
      cargo: 'Chief Revenue Officer',
      foto: '/img/team/fernando.jpeg',
      bio: 'Más de 25 años de experiencia en revenue management, marketing y ventas en sectores Telco, Fintech y Hospitality. Experto en transformar desafíos operativos en historias de éxito.'
    },
    {
      nombre: 'Abraham Hernández',
      cargo: 'Head de Producto',
      foto: '/img/team/abraham.jpeg',
      bio: 'Diseñador de producto especializado en experiencia de usuario y estrategia digital. Lidera la evolución del Smart Menu con enfoque en usabilidad y eficiencia.'
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
  <!-- Sección de Historia -->
  <div class="text-center mb-16">
    <h1 class="text-4xl font-bold text-gray-900 mb-4">Nuestra Historia</h1>
    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
      Reco nació de la pasión por la gastronomía y la tecnología. Nuestra misión es transformar 
      la experiencia de comer fuera haciéndola más personal, intuitiva y satisfactoria.
    </p>
  </div>

  <!-- Sección de Valores -->
  <div class="mb-20">
    <h2 class="text-3xl font-bold text-gray-900 mb-10 text-center">Nuestros Valores</h2>
    <div class="grid md:grid-cols-3 gap-10">
      {#each valores as valor}
        <div class="text-center bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <div class="text-5xl mb-5">{valor.icono}</div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">{valor.titulo}</h3>
          <p class="text-gray-600">{valor.descripcion}</p>
        </div>
      {/each}
    </div>
  </div>

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
                
                <div class="mt-8 flex space-x-4">
                  <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                  </div>
                  <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                </div>
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
    <a href="/contact" class="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
      Ver ofertas de trabajo
    </a>
  </div>
</div> 