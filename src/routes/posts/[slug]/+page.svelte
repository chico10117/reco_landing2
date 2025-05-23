<script lang="ts">
  import { blogPosts } from '$lib/data/blog-posts';
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import BlogPost from '$lib/components/blog/blog-post.svelte';
  
  export let data;
  
  const { post } = data;
  
  // Estados para controlar la visualización
  let isLoading = $state(true);
  let content = $state('');
  
  // Posts relacionados - filtrar por categoría similar
  let relatedPosts = $state([]);
  
  // Cargar el contenido y preparar posts relacionados
  onMount(async () => {
    try {
      // Intentar cargar el contenido del post (aquí podríamos cargar desde una API externa o un backend)
      
      // Por ahora, mostramos un contenido de ejemplo hasta que se implemente la carga completa
      content = `<div class="prose lg:prose-xl">
        <p>Este artículo está disponible en su ubicación original. 
        Puedes <a href="${post.url}" target="_blank" rel="noopener noreferrer">leerlo completo aquí</a>.</p>
      </div>`;
      
      // Encontrar posts relacionados (misma categoría pero diferente post)
      relatedPosts = blogPosts
        .filter(p => 
          p.id !== post.id && 
          p.categories.some(cat => post.categories.includes(cat))
        )
        .slice(0, 3);
      
      isLoading = false;
    } catch (e) {
      console.error('Error cargando contenido:', e);
      isLoading = false;
    }
  });
        <h1 class="text-3xl font-bold mb-6">${post.title}</h1>
        <div class="text-sm text-gray-500 mb-8 flex flex-wrap items-center">
          <span class="mr-4">${post.date}</span>
          <div class="flex flex-wrap gap-2">
            ${post.categories.map(category => 
              `<span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">${category}</span>`
            ).join('')}
          </div>
        </div>
        
        <div class="prose prose-blue max-w-none">
          ${post.excerpt}
          
          <p class="my-8">
            <em>Este artículo se encuentra originalmente en 
            <a href="${post.url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">
              archive.reco.chat
            </a> 
            y está disponible para su consulta completa en el enlace.</em>
          </p>
          
          <div class="my-8">
            <h2 class="text-xl font-bold">¿Quieres saber más?</h2>
            <p class="mt-2">
              Contacta con nuestro equipo para descubrir cómo RECO puede ayudar a tu restaurante a mejorar
              la experiencia de tus clientes y aumentar tus ventas.
            </p>
            
            <a 
              href="/contact" 
              class="inline-flex items-center px-4 py-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg"
            >
              Contactar ahora
            </a>
          </div>
        </div>
      `;
      
      isLoading = false;
    } catch (error) {
      console.error('Error cargando el contenido:', error);
      isLoading = false;
      content = '<p class="text-red-500">Error al cargar el contenido. Por favor, inténtelo de nuevo.</p>';
    }
  }
  
  // Efecto para cargar el contenido cuando cambia el post
  $effect(() => {
    if (post) {
      loadContent();
    }
  });
</script>

<svelte:head>
  {#if post}
    <title>{post.title} | Reco Blog</title>
    <meta name="description" content={post.excerpt} />
    <meta property="og:title" content={post.title} />
    <meta property="og:description" content={post.excerpt} />
    <meta property="og:image" content={post.imageUrl.startsWith('http') ? post.imageUrl : `https://reco.chat${post.imageUrl}`} />
    <meta property="og:type" content="article" />
    <meta property="og:url" content={`https://reco.chat/posts/${post.slug}`} />
  {:else}
    <title>Artículo no encontrado | Reco Blog</title>
    <meta name="description" content="El artículo que estás buscando no está disponible o ha sido movido." />
  {/if}
</svelte:head>

<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
  {#if notFound}
    <div class="text-center py-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Artículo no encontrado</h1>
      <p class="text-lg text-gray-600 mb-8">
        El artículo que estás buscando no está disponible o ha sido movido.
      </p>
      <a href="/posts" class="text-blue-600 hover:underline">
        ← Volver al blog
      </a>
    </div>
  {:else}
    <!-- Imagen destacada -->
    <div class="mb-8 rounded-xl overflow-hidden shadow-lg">
      <img 
        src={post.imageUrl} 
        alt={post.title} 
        class="w-full h-64 object-cover"
      />
    </div>
    
    <!-- Contenido del artículo -->
    <article class="bg-white rounded-xl shadow-lg p-8">
      {#if isLoading}
        <div class="animate-pulse">
          <div class="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
          <div class="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div class="space-y-4">
            <div class="h-4 bg-gray-200 rounded"></div>
            <div class="h-4 bg-gray-200 rounded w-5/6"></div>
            <div class="h-4 bg-gray-200 rounded w-4/6"></div>
            <div class="h-40 bg-gray-200 rounded w-full mt-6"></div>
          </div>
        </div>
      {:else}
        <div class="blog-content">
          {@html content}
        </div>
      {/if}
    </article>
    
    <!-- Enlaces a otros artículos -->
    <div class="mt-12">
      <h3 class="text-2xl font-bold text-gray-900 mb-6">Más artículos</h3>
      <div class="grid sm:grid-cols-2 gap-6">
        {#each blogPosts.filter(p => p.slug !== post.slug).slice(0, 2) as relatedPost}
          <a href={`/posts/${relatedPost.slug}`} class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h4 class="text-lg font-bold text-gray-900 mb-2">{relatedPost.title}</h4>
            <p class="text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
            <span class="inline-flex items-center mt-3 text-blue-600 font-medium">
              Leer más
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        {/each}
      </div>
    </div>
    
    <!-- Volver al blog -->
    <div class="mt-10 text-center">
      <a href="/posts" class="inline-flex items-center text-blue-600 hover:underline">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Volver al blog
      </a>
    </div>
  {/if}
</div>

<style>
  /* Estilos para el contenido del blog */
  :global(.blog-content h1) {
    @apply text-3xl font-bold mb-6;
  }
  
  :global(.blog-content h2) {
    @apply text-2xl font-bold mt-8 mb-4;
  }
  
  :global(.blog-content h3) {
    @apply text-xl font-bold mt-6 mb-3;
  }
  
  :global(.blog-content p) {
    @apply mb-4 text-gray-700 leading-relaxed;
  }
  
  :global(.blog-content a) {
    @apply text-blue-600 hover:underline;
  }
  
  :global(.blog-content ul) {
    @apply list-disc pl-6 mb-4;
  }
  
  :global(.blog-content ol) {
    @apply list-decimal pl-6 mb-4;
  }
  
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
