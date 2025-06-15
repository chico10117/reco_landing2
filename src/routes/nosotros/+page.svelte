<script lang="ts">
  import { onMount } from 'svelte';
  import ContactCta from '$lib/components/landing/contact-cta.svelte';

  // Miembros del equipo
  const equipo = [
    {
      nombre: 'José Antonio Jiménez Ramos',
      cargo: 'CEO & Co-fundador',
      foto: '/img/team/jose.jpeg',
      bio: 'Emprendedor y especialista en comunicación con experiencia liderando equipos de marketing para marcas de lujo y proyectos digitales en América Latina.',
      linkedin: 'https://www.linkedin.com/in/joseantoniojimenezramos/',
      skills: ['Marketing Digital', 'Estrategia', 'Liderazgo']
    },
    {
      nombre: 'Francisco Cordero',
      cargo: 'CTO & Co-fundador',
      foto: '/img/team/francisco.jpeg',
      bio: 'Ingeniero electrónico con una década de experiencia liderando proyectos de hardware en Intel. Arquitecto de nuestra plataforma de IA y visionario de la digitalización del sector restaurantero.',
      linkedin: 'https://www.linkedin.com/in/francisco-cordero-reco/',
      skills: ['IA & Machine Learning', 'Arquitectura de Software', 'Hardware']
    },
    {
      nombre: 'Fernando Soto',
      cargo: 'Chief Revenue Officer',
      foto: '/img/team/fernando.jpeg',
      bio: 'Más de 25 años de experiencia en revenue management, marketing y ventas en sectores Telco, Fintech y Hospitality. Experto en transformar desafíos operativos en historias de éxito.',
      linkedin: 'https://www.linkedin.com/in/fernandosotojaimes/',
      skills: ['Revenue Management', 'Ventas B2B', 'Fintech']
    },
    {
      nombre: 'Abraham Hernández',
      cargo: 'Senior Lead Developer',
      foto: '/img/team/abraham.jpeg',
      bio: 'Diseñador de producto especializado en experiencia de usuario y estrategia digital. Lidera la evolución del Smart Menu con enfoque en usabilidad y eficiencia.',
      linkedin: 'https://www.linkedin.com/in/dogcalas/',
      skills: ['UX/UI Design', 'Desarrollo Frontend', 'Product Strategy']
    }
  ];

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>Nosotros | Reco - Conoce al equipo detrás de la revolución digital de restaurantes</title>
  <meta name="description" content="Conoce al equipo de expertos detrás de Reco. Líderes en IA, desarrollo de producto y estrategia digital transformando la industria restaurantera." />
</svelte:head>

<!-- Animated background elements -->
<div class="fixed inset-0 -z-10 overflow-hidden">
  <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
  <div class="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style="animation-delay: 2s;"></div>
  <div class="absolute top-1/2 left-3/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse" style="animation-delay: 4s;"></div>
</div>

<div class="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-white">
  <!-- Hero Section -->
  <section class="relative pt-32 pb-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <div class="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8 backdrop-blur-sm">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          Equipo de clase mundial
        </div>
        
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Conoce al equipo que está
          <span class="text-blue-600">
            revolucionando
          </span>
          la industria restaurantera
        </h1>
        
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Somos un equipo de expertos en tecnología, producto y negocio, unidos por la misión de 
          transformar la experiencia gastronómica a través de la inteligencia artificial.
        </p>
      </div>
    </div>
  </section>

  <!-- Team Section -->
  <section class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
        {#each equipo as miembro, i}
          <div 
            class="team-card group relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-[0_8px_32px_0_rgba(33,93,255,0.08)] hover:shadow-[0_20px_60px_0_rgba(33,93,255,0.15)] transition-all duration-500 ease-out"
            class:animate-in={mounted}
            style="animation-delay: {i * 200}ms"
          >
            <!-- Glassmorphism overlay -->
            <div class="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div class="relative z-10">
              <!-- Photo and basic info -->
              <div class="flex items-start space-x-6 mb-6">
                <div class="relative">
                  <div class="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden ring-4 ring-white/50 group-hover:ring-blue-200/50 transition-all duration-300">
                    <img 
                      src={miembro.foto} 
                      alt={miembro.nombre}
                      class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white flex items-center justify-center">
                    <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                <div class="flex-1 min-w-0">
                  <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    {miembro.nombre}
                  </h3>
                  <p class="text-blue-600 font-medium mb-3">
                    {miembro.cargo}
                  </p>
                  
                  <!-- Skills tags -->
                  <div class="flex flex-wrap gap-2">
                    {#each miembro.skills as skill}
                      <span class="px-3 py-1 text-xs font-medium bg-blue-100/80 text-blue-700 rounded-full border border-blue-200/50 backdrop-blur-sm">
                        {skill}
                      </span>
                    {/each}
                  </div>
                </div>
              </div>
              
              <!-- Bio -->
              <p class="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                {miembro.bio}
              </p>
              
              <!-- LinkedIn -->
              <div class="flex justify-between items-center">
                <a 
                  href={miembro.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium text-sm transition-all duration-200 transform hover:scale-105 focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
                  aria-label={`Ver perfil de LinkedIn de ${miembro.nombre}`}
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                
                <div class="flex items-center text-gray-400">
                  <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-sm">Remoto</span>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Values Section -->
  <section class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Nuestros valores
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Los principios que guían cada decisión y nos mantienen enfocados en nuestro propósito.
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        <div class="text-center group">
          <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Innovación</h3>
          <p class="text-gray-600">Buscamos constantemente nuevas formas de mejorar la experiencia gastronómica.</p>
        </div>
        
        <div class="text-center group">
          <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Calidad</h3>
          <p class="text-gray-600">Nos comprometemos con la excelencia en cada aspecto de nuestro servicio.</p>
        </div>
        
        <div class="text-center group">
          <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Servicio al cliente</h3>
          <p class="text-gray-600">Nos enfocamos en brindar el mejor servicio y soporte a nuestros restaurantes aliados.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact CTA -->
  <div class="mt-20 md:mt-32">
    <ContactCta />
  </div>

<!--   CTA Section - Job Offers -->
  <!--
  <section class="py-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-center overflow-hidden">
        
        <div class="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div class="absolute top-0 left-0 w-40 h-40 bg-white/20 rounded-full -translate-x-20 -translate-y-20"></div>
        <div class="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full translate-x-20 translate-y-20"></div>
        
        <div class="relative z-10">
          <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Quieres formar parte de nuestro equipo?
          </h3>
          <p class="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Estamos buscando personas apasionadas por la tecnología y la gastronomía que quieran transformar el sector restaurantero.
          </p>
          <a 
            href="https://calendly.com/fernando-lqrb/15min" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 focus:ring-4 focus:ring-white/50 shadow-xl"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 6V9a2 2 0 00-2-2H8a2 2 0 00-2 2v3m8 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Ver ofertas de trabajo
          </a>
        </div>
      </div>
    </div>
  </section> -->
</div>

<style>
  @keyframes animate-in {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-in {
    animation: animate-in 0.6s ease-out forwards;
  }
  
  .team-card {
    opacity: 0;
  }
  
  .team-card.animate-in {
    opacity: 1;
  }
  
  .team-card:hover {
    transform: translateY(-8px) scale(1.02);
  }
  
  .team-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 1.5rem;
    padding: 1px;
    background: linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05));
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    pointer-events: none;
  }
</style>