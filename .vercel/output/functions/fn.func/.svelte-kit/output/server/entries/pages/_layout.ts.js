const trailingSlash = "never";
const ssr = true;
const prerender = true;
const load = async ({ data }) => {
  return {
    meta: data?.meta || {
      title: "Reco - Pide mejor. Disfruta más.",
      description: "Reco es un menú digital inteligente que personaliza la experiencia de cada comensal.",
      canonical: "https://reco.chat",
      openGraph: {
        title: "Reco - Pide mejor. Disfruta más.",
        description: "Reco es un menú digital inteligente que personaliza la experiencia de cada comensal.",
        image: "https://reco.chat/img/og-image.jpg",
        url: "https://reco.chat",
        type: "website"
      }
    }
  };
};
export {
  load,
  prerender,
  ssr,
  trailingSlash
};
