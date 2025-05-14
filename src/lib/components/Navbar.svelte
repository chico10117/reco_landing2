<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { track } from "$lib/utils/analytics";
  import { onMount } from 'svelte';
  
  let isMenuOpen = $state(false);
  let isMobile = $state(false);
  let isScrolled = $state(false);
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
  
  function closeMenu() {
    isMenuOpen = false;
  }
  
  function trackNavClick(label: string) {
    track('nav_click', { label });
  }
  
  onMount(() => {
    const checkMobile = () => {
      isMobile = window.innerWidth < 1024;
    };
    
    const handleScroll = () => {
      isScrolled = window.scrollY > 20;
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<nav class="fixed w-full top-0 z-50 transition-all duration-300" class:shadow-lg={isScrolled}>
  <div class="absolute inset-0 z-0 transition-opacity duration-300">
    <div class="w-full h-full" style="background-image: url('/img/Background.svg'); background-size: cover; background-position: top center; background-repeat: no-repeat;"></div>
  </div>

  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
    <div class="flex items-center justify-between w-full">
      <div class="flex items-center space-x-24">
        <a href="/" class="flex items-center">
          <img 
            src="/img/RECOIMAGE.svg" 
            alt="Reco" 
            class="h-8 md:h-10 w-auto" 
          />
        </a>
        
        <!-- Menú de navegación para escritorio -->
        <div class="hidden lg:flex lg:items-center">
          <div class="flex items-center space-x-16">
            <a href="/restaurantes" class="text-white hover:text-white/80 flex items-center space-x-2 px-2 text-base font-medium">
              <span>Restaurantes</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </a>
            <a href="/precios" class="text-white hover:text-white/80 px-2 text-base font-medium">Precios</a>
            <a href="/noticias" class="text-white hover:text-white/80 px-2 text-base font-medium">Noticias</a>
            <a href="/nosotros" class="text-white hover:text-white/80 flex items-center space-x-2 px-2 text-base font-medium">
              <span>Nosotros</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Parte derecha - Botones de acción -->
      <div class="flex items-center">
        <div class="hidden lg:flex lg:items-center space-x-16">
          <a href="https://carta.reco.chat/login" class="text-white hover:text-white/80 flex items-center whitespace-nowrap px-6 text-base font-medium" onclick={() => trackNavClick('restaurant_login')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span class="flex-nowrap">Restaurantes | Login</span>
          </a>
          <a href="/contact">
            <Button 
              variant="default" 
              class="bg-white text-blue-600 hover:bg-white/90 font-medium rounded-md px-10 py-2 whitespace-nowrap text-base"
              onclick={() => trackNavClick('contact_sales')}
            >
              Contáctanos
            </Button>
          </a>
        </div>
        
        <!-- Menú hamburguesa para móviles -->
        <button 
          class="text-white ml-4 lg:hidden" 
          onclick={toggleMenu}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {#if isMenuOpen}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          {:else}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          {/if}
        </button>
      </div>
    </div>
  </div>

  <!-- Menú móvil desplegable -->
  {#if isMenuOpen}
    <div class="relative z-10 lg:hidden">
      <div class="py-4 px-4">
        <div class="flex flex-col space-y-4">
          <a href="/restaurantes" class="text-white hover:text-white/80 flex items-center space-x-1" onclick={closeMenu}>
            <span>Restaurantes</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </a>
          <a href="/precios" class="text-white hover:text-white/80" onclick={closeMenu}>Precios</a>
          <a href="/noticias" class="text-white hover:text-white/80" onclick={closeMenu}>Noticias</a>
          <a href="/nosotros" class="text-white hover:text-white/80 flex items-center space-x-1" onclick={closeMenu}>
            <span>Nosotros</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </a>
          <div class="pt-2 border-t border-white/20">
            <a href="https://carta.reco.chat/login" class="text-white hover:text-white/80 flex items-center whitespace-nowrap" onclick={closeMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span class="flex-shrink-0">Restaurantes | Login</span>
            </a>
          </div>
          <a href="/contact" class="block w-full" onclick={closeMenu}>
            <Button 
              variant="default" 
              class="bg-white text-blue-600 hover:bg-white/90 font-medium rounded-md px-5 py-2 w-full"
              onclick={() => trackNavClick('contact_sales')}
            >
              Contáctanos
            </Button>
          </a>
        </div>
      </div>
    </div>
  {/if}
</nav>

<div class="h-16"></div> <!-- Espaciador para el navbar fijo -->

<style>
  /* Asegura que la transición del menú sea suave */
  nav {
    transition: all 0.3s ease;
  }
</style> 