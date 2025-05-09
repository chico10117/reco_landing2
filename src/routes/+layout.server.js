export function load({ url }) {
  // Detectar rutas especiales
  const path = url.pathname;
  const isSpecialRoute = ['/restaurantes', '/precios', '/noticias', '/nosotros'].includes(path);
  
  return {
    currentPath: path,
    isSpecialRoute
  };
} 