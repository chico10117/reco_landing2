import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async () => {
  return {
    meta: {
      title: 'Noticias | Reco',
      description: 'Últimas noticias y actualizaciones de Reco.',
      canonical: 'https://reco.chat/noticias',
      openGraph: {
        title: 'Noticias | Reco',
        description: 'Últimas noticias y actualizaciones de Reco.',
        image: 'https://reco.chat/img/og-image.jpg',
        url: 'https://reco.chat/noticias',
        type: 'website'
      }
    }
  };
}; 