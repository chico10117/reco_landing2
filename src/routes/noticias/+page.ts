import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  return {
    title: 'Noticias | Reco',
    description: 'Últimas noticias y actualizaciones de Reco.'
  };
}; 