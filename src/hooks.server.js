/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  // Rutas específicas que queremos manejar de manera especial
  const specialRoutes = ['/restaurantes', '/precios', '/noticias', '/nosotros'];
  const path = event.url.pathname;
  
  // Si la ruta está en nuestra lista de rutas especiales
  if (specialRoutes.some(route => path === route || path.startsWith(`${route}/`))) {
    console.log(`Manejo especial para ruta: ${path}`);
    
    try {
      // Forzar modo fallback para estas rutas si es necesario
      event.isDataRequest = false;
      
      // Si la ruta termina con una barra, redirigir a la versión sin barra
      if (path.endsWith('/') && path !== '/') {
        return new Response('Redirect', {
          status: 301,
          headers: {
            location: path.slice(0, -1) + event.url.search
          }
        });
      }
      
      // Intentar resolver con opciones específicas
      return await resolve(event, {
        transformPageChunk: ({ html }) => html
      });
    } catch (error) {
      console.error('Error procesando ruta especial:', path, error);
      
      // En caso de error, intentar una redirección que fuerza a recargar la página
      return new Response('Redirect', {
        status: 302,
        headers: {
          location: path + '?' + new Date().getTime()
        }
      });
    }
  }
  
  // Comportamiento por defecto para otras rutas
  return await resolve(event);
} 