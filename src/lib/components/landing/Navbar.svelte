<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { track } from "$lib/utils/analytics";
  import { onMount } from 'svelte';
  import { page } from '$app/stores'; // For active link highlighting if needed

  let isMenuOpen = $state(false);
  let isMobile = $state(false);
  let isScrolled = $state(false);
  let isRestaurantMenuOpen = $state(false);

  let restaurantDropdownRef: HTMLElement | undefined = $state();
  let restaurantButtonRef: HTMLElement | undefined = $state(); // Ref for the desktop button
  let mobileRestaurantButtonRef: HTMLElement | undefined = $state(); // Ref for the mobile button

  const restaurantTypes = [
    { name: 'Cafeterías', href: '/restaurantes?tipo=cafeterias', icon: '☕' },
    { name: 'Pubs', href: '/restaurantes?tipo=pubs', icon: '🍸' },
    { name: 'Hamburgueserías', href: '/restaurantes?tipo=hamburgueserias', icon: '🍔' },
    { name: 'Discotecas', href: '/restaurantes?tipo=discotecas', icon: '🌐' },
    { name: 'Pizzerías', href: '/restaurantes?tipo=pizzerias', icon: '🍕' },
    { name: 'Heladerías', href: '/restaurantes?tipo=heladerias', icon: '🍦' },
    { name: 'Kebabs', href: '/restaurantes?tipo=kebabs', icon: '🌯' },
    { name: 'Hoteles', href: '/restaurantes?tipo=hoteles', icon: '🏨' },
    { name: 'Cervecerías', href: '/restaurantes?tipo=cervecerias', icon: '🍺' },
    { name: 'Chiringuitos', href: '/restaurantes?tipo=chiringuitos', icon: '🍹' }
  ];

  function toggleMainMobileMenu() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      isRestaurantMenuOpen = false; // Close restaurant dropdown if opening main mobile menu
    }
  }

  function toggleRestaurantSubMenu() {
    isRestaurantMenuOpen = !isRestaurantMenuOpen;
  }

  function closeAllMenus() {
    isMenuOpen = false;
    isRestaurantMenuOpen = false;
  }

  function trackNavClick(label: string) {
    track('nav_click', { label });
  }

  onMount(() => {
    const checkMobile = () => {
      const currentlyMobile = window.innerWidth < 1024;
      if (isMobile !== currentlyMobile) {
        isMobile = currentlyMobile;
        closeAllMenus(); // Close all menus on breakpoint change
      }
    };

    const handleScroll = () => {
      isScrolled = window.scrollY > 20;
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (!isRestaurantMenuOpen) return;
      const target = event.target as Node;

      // Desktop dropdown check
      if (!isMobile && restaurantButtonRef && !restaurantButtonRef.contains(target) && restaurantDropdownRef && !restaurantDropdownRef.contains(target)) {
        isRestaurantMenuOpen = false;
      }
      // Mobile dropdown check (it's part of the main mobile menu flow)
      // The mobile list itself is within the main mobile menu, clicks inside it are handled by item clicks calling closeAllMenus
      // This mainly helps if one clicks on the mobileRestaurantButtonRef again to close it, or outside the entire mobile nav panel.
      if (isMobile && mobileRestaurantButtonRef && !mobileRestaurantButtonRef.contains(target)) {
        // If the click is outside the mobile toggle button, and also not inside the expanded list (which is not explicitly bound to restaurantDropdownRef for mobile)
        // A general click outside the main mobile menu (if that menu is open) would be handled by the main mobile menu's own click-outside logic if it had one, or by items within it.
        // For now, if isRestaurantMenuOpen is true on mobile, and click is not on its toggle, we can close it.
        // This is a bit tricky as the restaurant list is *inside* the main mobile menu.
        // A simpler approach for mobile is that items in the list call closeAllMenus.
        // The toggleRestaurantSubMenu handles opening/closing via the button itself.
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside, true); // Capture phase

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside, true);
    };
  });
</script>

<nav class="fixed w-full top-0 z-50 transition-all duration-300 bg-[#547EF7]" class:shadow-lg={isScrolled}>
  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
    <div class="flex items-center justify-between w-full">
      <div class="flex items-center space-x-24">
        <a href="/" class="flex items-center" onclick={closeAllMenus}>
          <img 
            src="/img/RECOIMAGE.svg" 
            alt="Reco" 
            class="h-8 md:h-10 w-auto object-contain max-w-[160px] md:max-w-[180px]" 
            style="aspect-ratio: auto;"
          />
        </a>
        
        <!-- Menú de navegación para escritorio -->
        <div class="hidden lg:flex lg:items-center">
          <div class="flex items-center space-x-12">
            <div class="relative">
              <button 
                type="button" 
                bind:this={restaurantButtonRef} 
                class="text-white hover:text-white/80 flex items-center space-x-2 px-2 text-base font-medium"
                aria-expanded={isRestaurantMenuOpen && !isMobile}
                onclick={(e) => { e.stopPropagation(); toggleRestaurantSubMenu(); }}
              >
                <span>Restaurantes</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 transition-transform duration-200 {isRestaurantMenuOpen && !isMobile ? 'rotate-180' : ''}"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              {#if isRestaurantMenuOpen && !isMobile}
                <div 
                  bind:this={restaurantDropdownRef}
                  class="absolute -left-4 mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none py-2 px-2 z-20"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="desktop-restaurant-menu-button"
                  onclick={(e) => e.stopPropagation()} 
                >
                  <div class="grid grid-cols-2 gap-2">
                    {#each restaurantTypes as item}
                      <a 
                        href={item.href} 
                        class="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md" 
                        role="menuitem"
                        onclick={closeAllMenus}
                      >
                        <span class="mr-3 text-lg">{item.icon}</span>
                        {item.name}
                      </a>
                    {/each}
                  </div>
                </div>
              {/if}
            </div>
            <a href="/precios" class="text-white hover:text-white/80 px-2 text-base font-medium" onclick={closeAllMenus}>Precios</a>
            <a href="/posts" class="text-white hover:text-white/80 px-2 text-base font-medium" onclick={closeAllMenus}>Blog</a>
            <a href="/nosotros" class="text-white hover:text-white/80 flex items-center space-x-2 px-2 text-base font-medium" onclick={closeAllMenus}>
              <span>Nosotros</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Parte derecha - Botones de acción -->
      <div class="flex items-center">
        <div class="hidden lg:flex lg:items-center">
          <a href="https://carta.reco.chat/login" class="text-white hover:text-white/80 flex items-center whitespace-nowrap px-6 text-base font-medium" onclick={() => { trackNavClick('restaurant_login'); closeAllMenus(); }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span class="flex-nowrap">Restaurantes | Login</span>
          </a>
          <a href="/contact" class="inline-block" onclick={closeAllMenus}>
            <Button 
              variant="default" 
              class="bg-white text-blue-600 hover:bg-white/90 font-medium rounded-xl px-5 py-2 whitespace-nowrap text-base"
              onclick={() => { trackNavClick('contact_sales'); /* closeAllMenus is on parent <a> */ }}
            >
              Contáctanos
            </Button>
          </a>
        </div>
        
        <!-- Menú hamburguesa para móviles -->
        <button 
          class="text-white ml-4 lg:hidden" 
          onclick={(e) => { e.stopPropagation(); toggleMainMobileMenu(); }}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {#if isMenuOpen}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          {:else}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          {/if}
        </button>
      </div>
    </div>
  </div>

  <!-- Menú móvil desplegable -->
  {#if isMenuOpen && isMobile}
    <div class="absolute top-full left-0 right-0 z-20 lg:hidden" onclick={(e) => e.stopPropagation()}>
      <div class="py-4 px-4 bg-[#547EF7] shadow-lg">
        <div class="flex flex-col space-y-2">
          <div>
            <button 
              type="button" 
              bind:this={mobileRestaurantButtonRef}
              class="text-white hover:text-white/80 flex items-center justify-between w-full space-x-1 py-2 text-base"
              aria-expanded={isRestaurantMenuOpen && isMobile}
              onclick={(e) => { e.stopPropagation(); toggleRestaurantSubMenu(); }} 
            >
              <span>Restaurantes</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 transition-transform duration-200 {isRestaurantMenuOpen && isMobile ? 'rotate-180' : ''}"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            {#if isRestaurantMenuOpen && isMobile}
              <div class="mt-1 space-y-1 pl-4 border-l-2 border-white/30">
                {#each restaurantTypes as item}
                  <a 
                    href={item.href} 
                    class="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded-md" 
                    onclick={closeAllMenus}
                  >
                    <span class="mr-2">{item.icon}</span>{item.name}
                  </a>
                {/each}
              </div>
            {/if}
          </div>
          
          <a href="/precios" class="text-white hover:text-white/80 block py-2 text-base" onclick={closeAllMenus}>Precios</a>
          <a href="/posts" class="text-white hover:text-white/80 block py-2 text-base" onclick={closeAllMenus}>Blog</a>
          <a href="/nosotros" class="text-white hover:text-white/80 flex items-center space-x-1 py-2 text-base" onclick={closeAllMenus}>
            <span>Nosotros</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </a>
          <div class="pt-2 border-t border-white/20">
            <a href="https://carta.reco.chat/login" class="text-white hover:text-white/80 flex items-center whitespace-nowrap py-2 text-base" onclick={closeAllMenus}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span class="flex-shrink-0">Restaurantes | Login</span>
            </a>
          </div>
          <a href="/contact" class="inline-block pt-2" onclick={closeAllMenus}>
            <Button 
              variant="default" 
              class="bg-white text-blue-600 hover:bg-white/90 font-medium rounded-2xl px-5 py-2 whitespace-nowrap w-full text-base"
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
  /* Add any specific styles for the dropdown if Tailwind isn't enough */
</style> 