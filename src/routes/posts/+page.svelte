<script lang="ts">
  import BlogList from '$lib/components/blog/blog-list.svelte';
  const { posts } = $props<{ posts: any[] }>();
</script>

<svelte:head>
  <title>Blog | Reco</title>
  <meta name="description" content="Artículos, noticias y recursos para restaurantes y hostelería." />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
  <div class="mb-8">
    <h1 class="text-4xl font-bold text-gray-900 mb-4">Blog de RECO</h1>
    <p class="text-lg text-gray-600">
      Descubre consejos, estrategias y análisis sobre cartas digitales, experiencia del cliente 
      y optimización de restaurantes.
    </p>
  </div>

  <BlogList />

  <div class="mt-24 bg-gray-50 py-12 px-6 rounded-xl text-center shadow-inner">
    <h3 class="text-2xl font-bold text-gray-900 mb-3">¿Quieres estar al día de nuestras novedades?</h3>
    <p class="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
      Suscríbete a nuestro newsletter y recibe contenido exclusivo sobre innovación en la industria de la restauración.
    </p>
    <a 
      href="https://calendly.com/fernando-lqrb/15min" 
      target="_blank" 
      rel="noopener noreferrer"
      class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
    >
      Suscríbete ahora
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  </div>
</div>