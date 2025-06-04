import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  return {
    title: 'Restaurantes | Reco',
    description: 'Descubre los restaurantes que utilizan Reco.'
  };
}; 