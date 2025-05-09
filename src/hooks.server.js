/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  // Rutas específicas que queremos manejar de manera especial
  const specialRoutes = ['/restaurantes', '/precios', '/noticias', '/nosotros'];
  
  // Si la ruta está en nuestra lista de rutas especiales
  if (specialRoutes.some(route => event.url.pathname === route || event.url.pathname.startsWith(`${route}/`))) {
    console.log(`Manejo especial para ruta: ${event.url.pathname}`);
    
    // Si la ruta termina con una barra, redirigir a la versión sin barra
    if (event.url.pathname.endsWith('/') && event.url.pathname !== '/') {
      return new Response('Redirect', {
        status: 301,
        headers: {
          location: event.url.pathname.slice(0, -1) + event.url.search
        }
      });
    }
  }
  
  // Intentar resolver con opciones específicas para permitir rutas personalizadas
  const response = await resolve(event, {
    transformPageChunk: ({ html }) => html,
    filterSerializedResponseHeaders: (name) => name.toLowerCase() === 'content-type'
  });
  
  return response;
} 