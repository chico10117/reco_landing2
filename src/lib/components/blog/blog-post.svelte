<script lang="ts">
  import type { BlogPost } from '$lib/data/blog-posts';

  let { post } = $props<{
    post: BlogPost;
  }>();
</script>

<article class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
  <div class="relative">
    <a href={"/" + post.slug} class="relative block overflow-hidden group">
      <img
        src="/{post.featured_media || 'img/lastbksvg.svg'}"
        alt={post.title.rendered}
        class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <div class="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-2 py-1 m-2 rounded">
        {post.author}
      </div>
    </a>
  </div>
  
  <div class="p-6 flex flex-col flex-grow">
    <div class="flex items-center text-sm text-gray-500 mb-2">
      <span>{new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
    </div>
    
    <h2 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2 transition-colors">
      <a href={"/" + post.slug} class="hover:text-blue-600">
        {@html post.title.rendered}
      </a>
    </h2>
    
    <p class="text-gray-600 mb-4 line-clamp-3 flex-grow">
      {@html post.excerpt.rendered}
    </p>
    
    <a 
      href={"/" + post.slug} 
      class="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center mt-auto"
    >
      Leer más
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</article>

<style>
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>