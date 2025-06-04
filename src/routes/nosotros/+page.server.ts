import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async () => {
  return {
    meta: {
      title: 'Nosotros | Reco',
      description: 'Conoce al equipo detrás de Reco.',
      canonical: 'https://reco.chat/nosotros',
      openGraph: {
        title: 'Nosotros | Reco',
        description: 'Conoce al equipo detrás de Reco.',
        image: 'https://reco.chat/img/og-image.jpg',
        url: 'https://reco.chat/nosotros',
        type: 'website'
      }
    }
  };
}; 