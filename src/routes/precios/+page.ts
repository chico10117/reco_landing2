import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  return {
    title: 'Precios | Reco',
    description: 'Conoce nuestros planes y precios.'
  };
}; 