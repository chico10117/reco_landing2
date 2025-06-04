import type { LayoutLoad } from './$types';

// Configuración de SvelteKit
export const trailingSlash = 'never';

// Configuración de SSR
export const ssr = true;

// Configuración de prerendering
export const prerender = true;

interface MetaData {
  meta?: {
    title: string;
    description: string;
    canonical: string;
    openGraph: {
      title: string;
      description: string;
      image: string;
      url: string;
      type: string;
    };
  };
}

export const load: LayoutLoad = async ({ data }: { data: MetaData }) => {
  return {
    meta: data?.meta || {
      title: 'Reco - Pide mejor. Disfruta más.',
      description: 'Reco es un menú digital inteligente que personaliza la experiencia de cada comensal.',
      canonical: 'https://reco.chat',
      openGraph: {
        title: 'Reco - Pide mejor. Disfruta más.',
        description: 'Reco es un menú digital inteligente que personaliza la experiencia de cada comensal.',
        image: 'https://reco.chat/img/og-image.jpg',
        url: 'https://reco.chat',
        type: 'website'
      }
    }
  };
}; 