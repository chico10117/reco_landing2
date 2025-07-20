import type { PageServerLoad } from './$types';

export const prerender = false; // Changed to false to handle query parameters

export const load: PageServerLoad = async ({ url }) => {
  // Handle query parameters if needed
  const page = url.searchParams.get('page');
  
  return {
    meta: {
      title: 'Restaurantes | Reco',
      description: 'Descubre los restaurantes que utilizan Reco.',
      canonical: 'https://reco.chat/restaurantes',
      openGraph: {
        title: 'Restaurantes | Reco',
        description: 'Descubre los restaurantes que utilizan Reco.',
        image: 'https://reco.chat/img/og-image.jpg',
        url: 'https://reco.chat/restaurantes',
        type: 'website'
      }
    },
    page: page ? parseInt(page) : 1
  };
}; 