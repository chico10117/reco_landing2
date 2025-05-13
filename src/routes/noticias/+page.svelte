<script lang="ts">
  const noticias = [
    {
      fecha: '15 de Marzo, 2024',
      titulo: 'Reco se expande a nuevos mercados',
      resumen: 'Nuestra plataforma de menús digitales inteligentes ahora está disponible en más países.',
      imagen: '/img/Background.svg'
    },
    {
      fecha: '1 de Marzo, 2024',
      titulo: 'Nueva función: Recomendaciones personalizadas por IA',
      resumen: 'Mejoramos nuestro sistema de recomendaciones con inteligencia artificial más avanzada.',
      imagen: '/img/lastbksvg.svg'
    },
    {
      fecha: '15 de Febrero, 2024',
      titulo: 'Alianza estratégica con cadenas de restaurantes',
      resumen: 'Reco firma acuerdos con importantes cadenas para mejorar la experiencia de sus clientes.',
      imagen: '/img/Background.svg'
    }
  ];
</script>

<svelte:head>
  <title>Noticias | Reco</title>
  <meta name="description" content="Últimas noticias y actualizaciones de Reco." />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
  <h1 class="text-4xl font-bold text-gray-900 mb-8">Noticias y Actualizaciones</h1>

  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each noticias as noticia}
      <article class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img 
          src={noticia.imagen} 
          alt={noticia.titulo}
          class="w-full h-48 object-cover"
        />
        <div class="p-6">
          <p class="text-sm text-gray-500 mb-2">{noticia.fecha}</p>
          <h2 class="text-xl font-bold text-gray-900 mb-3">{noticia.titulo}</h2>
          <p class="text-gray-600">{noticia.resumen}</p>
        </div>
      </article>
    {/each}
  </div>

  <div class="mt-12 text-center">
    <p class="text-gray-600">
      ¿Quieres estar al día de nuestras novedades? 
      <a href="/contact" class="text-blue-600 hover:underline">Suscríbete a nuestro newsletter</a>
    </p>
  </div>
</div> 