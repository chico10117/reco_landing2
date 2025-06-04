import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async () => {
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
    }
  };
}; 