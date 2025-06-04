<script lang="ts">
  import { onMount } from 'svelte';
  import { blogPosts } from '$lib/data/blog-posts';
  import BlogPost from './blog-post.svelte';

  // Estado para controlar la visualización masonry
  let columns: number = typeof window !== 'undefined' && window.innerWidth < 640 ? 1 : 3;
  let columnGap: number = 28; // 1.75rem equivalente a gap-7 en Tailwind
  let containerElement: HTMLElement;
  let isLoaded = $state(false);
  let visiblePosts = $state([...blogPosts]); // Mostrar todos los posts por defecto
  
  // Filtros
  let selectedLanguage: 'all' | 'es' | 'en' = $state('all');
  let selectedCategory: string = $state('all');
  
  // Lista única de categorías para el filtro
  let categories = $derived(() => {
    const allCategories = blogPosts.flatMap(post => post.categories);
    return ['all', ...Array.from(new Set(allCategories))];
  });

  // Aplicar filtros
  function applyFilters() {
    // Helper para obtener idioma de Yoast schema
    const getPostLanguage = (post: any) => {
      const graph = post.yoast_head_json?.schema?.['@graph'] || [];
      const article = graph.find((node: any) => node['@type'] === 'Article');
      return (article?.inLanguage as string) || 'es';
    };
    visiblePosts = blogPosts.filter(post => {
      const lang = getPostLanguage(post);
      const matchLanguage = selectedLanguage === 'all' || lang === selectedLanguage;
      const matchCategory = selectedCategory === 'all' || post.categories.includes(selectedCategory);
      
      return matchLanguage && matchCategory;
    });
  }
  
  // Redimensionar columnas según el ancho de la ventana
  function handleResize() {
    if (!containerElement) return;
    
    // Usar window.innerWidth en lugar del ancho del contenedor para mejor detección
    const width = window.innerWidth;
    
    console.log('Window width:', width); // Debug log
    
    if (width < 640) {
      columns = 1;
      console.log('Setting to 1 column (mobile)');
    } else if (width < 1024) {
      columns = 2;
      console.log('Setting to 2 columns (tablet)');
    } else {
      columns = 3;
      console.log('Setting to 3 columns (desktop)');
    }
  }
  
  // Inicializar
  onMount(() => {
    // Ejecutar handleResize inmediatamente y después de un pequeño delay
    handleResize();
    setTimeout(handleResize, 100);
    
    window.addEventListener('resize', handleResize);
    isLoaded = true;
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  
  // Reactivo a cambios en los filtros
  $effect(() => {
    if (selectedLanguage || selectedCategory) {
      applyFilters();
    }
  });

  // Efecto para asegurar que columns se actualice correctamente
  $effect(() => {
    console.log('Current columns:', columns);
  });
</script>

<div class="blog-container w-full px-4 sm:px-6 lg:px-8" bind:this={containerElement}>
  <!-- Filtros -->
  <div class="mb-6 sm:mb-8 flex flex-col sm:flex-row gap-4 justify-between">
    <h2 class="text-2xl sm:text-3xl font-bold text-gray-900">Artículos y recursos</h2>
    

  </div>
  
  <!-- Contenedor Masonry -->
  <div 
    class="masonry-container w-full transition-opacity duration-500" 
    class:opacity-0={!isLoaded}
    class:opacity-100={isLoaded}
    class:mobile-view={columns === 1}
  >
    <!-- Verificar si debe mostrar vista móvil usando tanto JS como CSS -->
    {#if columns === 1 || (typeof window !== 'undefined' && window.innerWidth < 640)}
      <!-- Vista móvil: una columna simple -->
      <div class="flex flex-col gap-4 sm:gap-7 w-full mobile-single-column">
        {#each visiblePosts as post}
          <div class="masonry-item w-full">
            <BlogPost {post} />
          </div>
        {/each}
      </div>
    {:else}
      <!-- Vista de escritorio: múltiples columnas -->
      <div class="masonry-columns desktop-view" style="--columns: {columns}; --gap: {columnGap}px;">
        {#each Array(columns) as _, colIndex}
          <div class="masonry-column">
            {#each visiblePosts.filter((_, index) => index % columns === colIndex) as post}
              <div class="masonry-item">
                <BlogPost {post} />
              </div>
            {/each}
          </div>
        {/each}
      </div>
    {/if}
    
    <!-- Mensaje cuando no hay resultados -->
    {#if visiblePosts.length === 0}
      <div class="flex flex-col items-center justify-center py-12 sm:py-20 px-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 sm:h-12 sm:w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="mt-4 text-base sm:text-lg font-medium text-gray-900 text-center">No se encontraron artículos</h3>
        <p class="mt-1 text-sm sm:text-base text-gray-500 text-center">Prueba con otros filtros</p>
      </div>
    {/if}
  </div>
</div>

<style>
  .blog-container {
    width: 100%;
    max-width: 100%;
  }
  
  .masonry-container {
    width: 100%;
  }
  
  .masonry-columns {
    display: grid;
    grid-template-columns: repeat(var(--columns), 1fr);
    gap: var(--gap);
  }
  
  .masonry-column {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
  }
  
  .masonry-item {
    break-inside: avoid;
    margin-bottom: var(--gap);
    width: 100%;
  }
  
  .masonry-column .masonry-item:last-child {
    margin-bottom: 0;
  }
  
  /* Asegurar que en móvil ocupe todo el ancho */
  @media (max-width: 640px) {
    .masonry-item {
      width: 100% !important;
      margin-bottom: 1rem;
    }
    
    /* Forzar vista de columna única en móvil */
    .masonry-columns,
    .desktop-view {
      display: none !important;
    }
    
    .mobile-single-column {
      display: flex !important;
    }
  }
  
  /* Asegurar que la vista móvil se muestre correctamente */
  .mobile-view .masonry-columns {
    display: none;
  }
  
  @media (min-width: 641px) {
    .mobile-single-column {
      display: none;
    }
  }
</style>