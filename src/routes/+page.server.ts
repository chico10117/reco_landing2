import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async () => {
  return {
    meta: {
      title: 'Reco - Pide mejor. Disfruta más.',
      description: 'Reco es un menú digital inteligente que personaliza la experiencia de cada comensal. Te recomienda el plato perfecto según tu antojo, tu bolsillo y tu dieta en tu idioma y sin líos.',
      canonical: 'https://reco.chat',
      openGraph: {
        title: 'Reco - Pide mejor. Disfruta más.',
        description: 'Reco es un menú digital inteligente que personaliza la experiencia de cada comensal. Te recomienda el plato perfecto según tu antojo, tu bolsillo y tu dieta en tu idioma y sin líos.',
        image: 'https://reco.chat/img/og-image.jpg',
        url: 'https://reco.chat',
        type: 'website'
      }
    }
  };
}; 