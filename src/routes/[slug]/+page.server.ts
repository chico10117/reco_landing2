import type { PageServerLoad } from './$types';
import { blogPosts } from '$lib/data/blog-posts';
import { error } from '@sveltejs/kit';

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
  const { slug } = params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    throw error(404, {
      message: 'Post no encontrado'
    });
  }

  // Compute related posts
  const relatedPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 2);

  return {
    post,
    relatedPosts,
    meta: {
      title: `${post.title} | Reco Blog`,
      description: post.excerpt,
      canonical: `https://reco.chat/${post.slug}`,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        image: 'https://reco.chat/img/og-image.jpg',
        url: `https://reco.chat/${post.slug}`,
        type: 'article'
      }
    }
  };
};
