<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { track } from "$lib/utils/analytics";
  import { onMount } from 'svelte';
  
  let isMenuOpen = $state(false);
  let isMobile = $state(false);
  
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
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  });
</script>

<nav class="bg-blue-600 fixed w-full top-0 z-50 shadow-sm">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
    <!-- Logo y enlaces de navegación -->
    <div class="flex items-center lg:space-x-16">
      <a href="/" class="flex items-center">
        <img src="/img/reco-logo.svg" alt="Reco" class="h-8" />
      </a>
      
      <!-- Menú de navegación para escritorio -->
      <div class="hidden lg:flex lg:items-center">
        <a href="/restaurantes" class="text-white hover:text-white/80 flex items-center space-x-1 mx-6 px-6">
          <span>Restaurantes</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </a>
        <a href="/precios" class="text-white hover:text-white/80 mx-6 px-6">Precios</a>
        <a href="/noticias" class="text-white hover:text-white/80 mx-6 px-6">Noticias</a>
        <a href="/nosotros" class="text-white hover:text-white/80 flex items-center space-x-1 mx-6 px-6">
          <span>Nosotros</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </a>
      </div>
    </div>
    
    <!-- Parte derecha - Botones de acción y menú hamburguesa -->
    <div class="flex items-center">
      <!-- Enlaces de acción para escritorio -->
      <div class="hidden lg:flex lg:items-center lg:space-x-4">
        <a href="https://carta.reco.chat/login" class="text-white hover:text-white/80 flex items-center space-x-1 px-4" onclick={() => trackNavClick('restaurant_login')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span>Restaurantes | Login</span>
        </a>
        <a href="/contact">
          <Button 
            variant="default" 
            class="bg-white text-blue-600 hover:bg-white/90 font-medium rounded-md px-5 py-2"
            onclick={() => trackNavClick('contact_sales')}
          >
            Contáctanos
          </Button>
        </a>
      </div>
      
      <!-- Menú hamburguesa para móviles - ahora a la derecha -->
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

  <!-- Menú móvil desplegable -->
  {#if isMenuOpen}
    <div class="bg-blue-600 py-4 px-4 lg:hidden">
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
        <div class="pt-2 border-t border-blue-500">
          <a href="https://carta.reco.chat/login" class="text-white hover:text-white/80 flex items-center space-x-1" onclick={closeMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>Restaurantes | Login</span>
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
  {/if}
</nav>

<div class="h-16"></div> <!-- Espaciador para el navbar fijo -->

<style>
  /* Asegura que la transición del menú sea suave */
  nav div {
    transition: all 0.3s ease;
  }
</style> 