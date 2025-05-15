import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async () => {
  return {
    meta: {
      title: 'Reco - Pide mejor. Disfruta más.',
      description: 'El menú ya no es solo una lista de platos. Es el mejor amigo de tu cliente… que trabaja para ti.',
      canonical: 'https://reco.chat',
      openGraph: {
        title: 'Reco - Pide mejor. Disfruta más.',
        description: 'El menú ya no es solo una lista de platos. Es el mejor amigo de tu cliente… que trabaja para ti.',
        image: 'https://reco.chat/img/og-image.jpg',
        url: 'https://reco.chat',
        type: 'website'
      }
    }
  };
}; 