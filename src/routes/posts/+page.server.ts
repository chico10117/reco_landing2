import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async () => {
  return {
    meta: {
      title: 'Blog - Artículos y Recursos | Reco',
      description: 'Descubre consejos, estrategias y análisis sobre cartas digitales, experiencia del cliente y optimización de restaurantes.',
      canonical: 'https://reco.chat/posts',
      openGraph: {
        title: 'Blog - Artículos y Recursos | Reco',
        description: 'Descubre consejos, estrategias y análisis sobre cartas digitales, experiencia del cliente y optimización de restaurantes.',
        image: 'https://reco.chat/img/og-image.jpg',
        url: 'https://reco.chat/posts',
        type: 'website'
      }
    }
  };
};