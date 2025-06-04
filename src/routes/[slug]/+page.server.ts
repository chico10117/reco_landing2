import type { PageServerLoad } from './$types';
import { blogPosts } from '$lib/data/blog-posts';
import { error } from '@sveltejs/kit';

export const prerender = false; // Cambiar a false para permitir carga dinámica

export const load: PageServerLoad = async ({ params, url }) => {
  const { slug } = params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    throw error(404, {
      message: 'Post no encontrado'
    });
  }

  // Compute related posts basado en categorías similares
  const relatedPosts = blogPosts
    .filter(p => {
      // Excluir el post actual
      if (p.slug === slug) return false;
      
      // Priorizar posts con categorías similares si existen
      if (p.categories && post.categories) {
        const hasCommonCategory = p.categories.some((cat: number) => 
          post.categories.includes(cat)
        );
        return hasCommonCategory;
      }
      
      return true; // Si no hay categorías, incluir todos
    })
    .slice(0, 2);
  
  // Si no hay suficientes posts relacionados por categoría, completar con otros
  if (relatedPosts.length < 2) {
    const additionalPosts = blogPosts
      .filter(p => p.slug !== slug && !relatedPosts.includes(p))
      .slice(0, 2 - relatedPosts.length);
    
    relatedPosts.push(...additionalPosts);
  }

  return {
    post,
    relatedPosts,
    meta: {
      title: `${post.title.rendered} | Reco Blog`,
      description: post.excerpt.rendered.replace(/<[^>]+>/g, ''),
      canonical: `https://reco.chat/${post.slug}`,
      openGraph: {
        title: post.title.rendered,
        description: post.excerpt.rendered.replace(/<[^>]+>/g, ''),
        image: post.featured_media_url || 'https://reco.chat/img/og-image.jpg',
        url: `https://reco.chat/${post.slug}`,
        type: 'article'
      }
    }
  };
};
