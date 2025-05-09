import type { PageServerLoad } from './$types';

export const prerender = true;

type PageData = {
  [key: string]: {
    title: string;
    description: string;
  };
};

export const load: PageServerLoad = async ({ url }) => {
  const currentPage = url.searchParams.get('page') || '';
  
  // Títulos y descripciones específicos para cada página
  const pageData: PageData = {
    restaurantes: {
      title: 'Restaurantes | Reco',
      description: 'Descubre los restaurantes que utilizan Reco.'
    },
    precios: {
      title: 'Precios | Reco',
      description: 'Conoce nuestros planes y precios.'
    },
    noticias: {
      title: 'Noticias | Reco',
      description: 'Últimas noticias y actualizaciones de Reco.'
    },
    nosotros: {
      title: 'Nosotros | Reco',
      description: 'Conoce al equipo detrás de Reco.'
    },
    default: {
      title: 'Reco - Pide mejor. Disfruta más.',
      description: 'Reco es un menú digital inteligente que personaliza la experiencia de cada comensal. Te recomienda el plato perfecto según tu antojo, tu bolsillo y tu dieta en tu idioma y sin líos.'
    }
  };

  const { title, description } = pageData[currentPage] || pageData.default;
  
  return {
    currentPage,
    title,
    description
  };
}; 