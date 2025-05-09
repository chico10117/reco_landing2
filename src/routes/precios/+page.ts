import type { PageLoad } from './$types';

export const load = (async () => {
  return {
    meta: {
      title: 'Precios | Reco',
      description: 'Descubre los planes y precios de Reco, el menú digital con asistente de IA.',
      keywords: 'precios, planes, reco, inteligencia artificial, menú digital'
    }
  };
}) satisfies PageLoad; 