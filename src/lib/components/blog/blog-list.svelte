<script lang="ts">
  import { onMount } from 'svelte';
  import { blogPosts } from '$lib/data/blog-posts';
  import BlogPost from './blog-post.svelte';

  // Estado para controlar la visualización masonry
  let columns: number = 3;
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
    visiblePosts = blogPosts.filter(post => {
      const matchLanguage = selectedLanguage === 'all' || post.language === selectedLanguage;
      const matchCategory = selectedCategory === 'all' || post.categories.includes(selectedCategory);
      
      return matchLanguage && matchCategory;
    });
  }
  
  // Redimensionar columnas según el ancho de la ventana
  function handleResize() {
    if (!containerElement) return;
    
    const width = containerElement.offsetWidth;
    
    if (width < 640) {
      columns = 1;
    } else if (width < 768) {
      columns = 2;
    } else {
      columns = 3;
    }
  }
  
  // Inicializar
  onMount(() => {
    handleResize();
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
</script>

<div class="blog-container" bind:this={containerElement}>
  <!-- Filtros -->
  <div class="mb-8 flex flex-col sm:flex-row gap-4 justify-between">
    <h2 class="text-3xl font-bold text-gray-900">Artículos y recursos</h2>
    
    <div class="flex flex-wrap gap-3">
      <div class="relative">
        <select 
          bind:value={selectedLanguage}
          class="appearance-none block w-full bg-white border border-gray-300 rounded-lg py-2 pl-3 pr-8 text-sm focus:outline-none focus:border-blue-500"
        >
          <option value="all">Todos los idiomas</option>
          <option value="es">Español</option>
          <option value="en">Inglés</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      
      <div class="relative">
        <select 
          bind:value={selectedCategory}
          class="appearance-none block w-full bg-white border border-gray-300 rounded-lg py-2 pl-3 pr-8 text-sm focus:outline-none focus:border-blue-500"
        >
          <option value="all">Todas las categorías</option>
          {#each categories as category}
            {#if category !== 'all'}
              <option value={category}>{category}</option>
            {/if}
          {/each}
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Contenedor Masonry -->
  <div 
    class="masonry-container transition-opacity duration-500" 
    class:opacity-0={!isLoaded}
    class:opacity-100={isLoaded}
  >
    {#if columns === 1}
      <!-- Vista móvil: una columna simple -->
      <div class="flex flex-col gap-7">
        {#each visiblePosts as post}
          <div class="masonry-item">
            <BlogPost {post} />
          </div>
        {/each}
      </div>
    {:else}
      <!-- Vista de escritorio: múltiples columnas -->
      <div class="masonry-columns" style="--columns: {columns}; --gap: {columnGap}px;">
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
      <div class="flex flex-col items-center justify-center py-20">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="mt-4 text-lg font-medium text-gray-900">No se encontraron artículos</h3>
        <p class="mt-1 text-gray-500">Prueba con otros filtros</p>
      </div>
    {/if}
  </div>
</div>

<style>
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
  }
  
  .masonry-column .masonry-item:last-child {
    margin-bottom: 0;
  }
</style>