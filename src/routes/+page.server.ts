import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
  const path = url.pathname;
  
  // Determinar qué contenido mostrar basado en la ruta
  let pageContent = {
    title: 'Reco | Menú Digital con IA',
    description: 'Reco es un menú digital inteligente que utiliza IA para mejorar la experiencia del cliente.',
    currentPage: ''
  };

  switch (path) {
    case '/restaurantes':
      pageContent = {
        title: 'Restaurantes | Reco',
        description: 'Descubre los restaurantes que utilizan Reco.',
        currentPage: 'restaurantes'
      };
      break;
    case '/precios':
      pageContent = {
        title: 'Precios | Reco',
        description: 'Conoce nuestros planes y precios.',
        currentPage: 'precios'
      };
      break;
    case '/noticias':
      pageContent = {
        title: 'Noticias | Reco',
        description: 'Últimas noticias y actualizaciones de Reco.',
        currentPage: 'noticias'
      };
      break;
    case '/nosotros':
      pageContent = {
        title: 'Nosotros | Reco',
        description: 'Conoce más sobre el equipo detrás de Reco.',
        currentPage: 'nosotros'
      };
      break;
  }

  return pageContent;
}; 