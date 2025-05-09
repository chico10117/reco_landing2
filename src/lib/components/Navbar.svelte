<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { track } from "$lib/utils/analytics";
  import { onMount } from 'svelte';
  
  let isMenuOpen = false;
  let isMobile = false;
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
  
  function closeMenu() {
    isMenuOpen = false;
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

<nav class="bg-white shadow">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <!-- Logo y navegación principal -->
      <div class="flex">
        <div class="flex-shrink-0 flex items-center">
          <a href="/" class="text-2xl font-bold text-primary">Reco</a>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
          <a href="/restaurantes" class="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
            Restaurantes
          </a>
          <a href="/precios" class="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
            Precios
          </a>
          <a href="/noticias" class="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
            Noticias
          </a>
          <a href="/nosotros" class="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
            Nosotros
          </a>
        </div>
      </div>
      
      <!-- Menú móvil -->
      <div class="sm:hidden">
        <button on:click={() => isMenuOpen = !isMenuOpen} type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Abrir menú principal</span>
          {#if isMenuOpen}
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          {:else}
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          {/if}
        </button>
      </div>
    </div>
  </div>

  <!-- Menú móvil, mostrar/ocultar basado en el estado -->
  {#if isMenuOpen}
    <div class="sm:hidden" id="mobile-menu">
      <div class="pt-2 pb-3 space-y-1">
        <a href="/restaurantes" class="text-gray-900 block pl-3 pr-4 py-2 text-base font-medium">
          Restaurantes
        </a>
        <a href="/precios" class="text-gray-900 block pl-3 pr-4 py-2 text-base font-medium">
          Precios
        </a>
        <a href="/noticias" class="text-gray-900 block pl-3 pr-4 py-2 text-base font-medium">
          Noticias
        </a>
        <a href="/nosotros" class="text-gray-900 block pl-3 pr-4 py-2 text-base font-medium">
          Nosotros
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