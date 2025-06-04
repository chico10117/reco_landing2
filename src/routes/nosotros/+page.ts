import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  return {
    title: 'Nosotros | Reco',
    description: 'Conoce al equipo detrás de Reco.'
  };
}; 