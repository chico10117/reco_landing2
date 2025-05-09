/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  // Rutas específicas que queremos manejar de manera especial
  const specialRoutes = ['/restaurantes', '/precios'];
  
  if (specialRoutes.includes(event.url.pathname)) {
    console.log(`Manejo especial para ruta: ${event.url.pathname}`);
    // Continuamos con el procesamiento normal, pero ya tenemos un log para depuración
  }
  
  return await resolve(event);
} 