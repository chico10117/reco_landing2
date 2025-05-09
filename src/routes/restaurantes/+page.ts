import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  return {
    meta: {
      title: 'Restaurantes | Reco',
      description: 'Descubre los restaurantes que utilizan Reco, el menú digital con asistente de IA.',
      keywords: 'restaurantes, reco, inteligencia artificial, menú digital'
    }
  };
}; 