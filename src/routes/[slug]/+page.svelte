<script lang="ts">
  import type { PageData } from './$types';
  const { data } = $props<{ data: PageData }>();
  const { post, relatedPosts } = data;
</script>

<svelte:head>
  {#if post}
    <title>{post.title.rendered} | Reco Blog</title>
    <meta name="description" content={post.excerpt.rendered.replace(/<[^>]+>/g, '')} />
    <meta property="og:title" content={post.title.rendered} />
    <meta property="og:description" content={post.excerpt.rendered.replace(/<[^>]+>/g, '')} />
    <meta property="og:image" content={post.featured_media_url || post.image?.url || ''} />
    <meta property="og:type" content="article" />
    <meta property="og:url" content={`https://reco.chat/${post.slug}`} />
  {:else}
    <title>Artículo no encontrado | Reco Blog</title>
    <meta name="description" content="El artículo que estás buscando no está disponible o ha sido movido." />
  {/if}
</svelte:head>

<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
  {#if !post}
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
    <!-- Featured image -->
    <div class="mb-8 rounded-xl overflow-hidden shadow-lg">
      <img 
        src="/{post.featured_media || 'img/lastbksvg.svg'}"
        alt={post.title.rendered} 
        class="w-full h-64 object-cover"
      />
    </div>
    
    <!-- Article content -->
    <article class="bg-white rounded-xl shadow-lg p-8">
      <!-- Article header -->
      <header class="mb-8 border-b border-gray-200 pb-8">
        <h1 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          {@html post.title.rendered}
        </h1>
        
        <!-- Article metadata -->
        <div class="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Por {post.author}</span>
          </div>
          
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          </div>
          
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{post.yoast_head_json?.twitter_misc?.['Tiempo de lectura'] || '2 minutos'}</span>
          </div>
        </div>
        
        <!-- Tags from yoast schema -->
        {#if post.yoast_head_json?.schema?.['@graph']}
          {@const article = post.yoast_head_json.schema['@graph'].find(node => node['@type'] === 'Article')}
          {#if article?.articleSection}
            <div class="flex flex-wrap gap-2">
              {#each article.articleSection as tag}
                <span class="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {tag}
                </span>
              {/each}
            </div>
          {/if}
        {/if}
      </header>
      
      <div class="prose lg:prose-xl">
        {@html post.content.rendered}
      </div>
    </article>
    
    <!-- Related posts -->
    <div class="mt-12">
      <h3 class="text-2xl font-bold text-gray-900 mb-6">Más artículos</h3>
      <div class="grid sm:grid-cols-2 gap-6">
        {#each relatedPosts as relatedPost}
           <a href={`/${relatedPost.slug}`} class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h4 class="text-lg font-bold text-gray-900 mb-2">{@html relatedPost.title.rendered}</h4>
            <p class="text-gray-600 line-clamp-2">{@html relatedPost.excerpt.rendered}</p>
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
     
     <!-- Back to blog -->
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
