import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async () => {
  return {
    meta: {
      title: 'Precios | Reco',
      description: 'Conoce nuestros planes y precios.',
      canonical: 'https://reco.chat/precios',
      openGraph: {
        title: 'Precios | Reco',
        description: 'Conoce nuestros planes y precios.',
        image: 'https://reco.chat/img/og-image.jpg',
        url: 'https://reco.chat/precios',
        type: 'website'
      }
    }
  };
}; 