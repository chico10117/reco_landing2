/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  // Rutas específicas que queremos manejar de manera especial
  const specialRoutes = ['/restaurantes', '/precios', '/noticias', '/nosotros'];
  const path = event.url.pathname;
  
  // Si la ruta está en nuestra lista de rutas especiales
  if (specialRoutes.includes(path)) {
    console.log(`Manejo especial para ruta: ${path}`);
    
    // Redirigir a la página principal con el parámetro correspondiente
    const pageName = path.substring(1); // Elimina el '/' inicial
    return new Response('Redirect', {
      status: 302,
      headers: {
        location: `/?page=${pageName}`
      }
    });
  }
  
  // Comportamiento por defecto para otras rutas
  return await resolve(event);
} 