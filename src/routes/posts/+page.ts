import type { PageLoad } from './$types';
import {blogPosts} from '$lib/data/blog-posts';

export const load: PageLoad = async () => {
  return {
    title: 'Blog | Reco',
    description: 'Últimas entradas y actualizaciones de Reco.',
    posts: blogPosts
  };
};