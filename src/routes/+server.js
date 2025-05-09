import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
  console.log('Solicitud recibida para:', url.pathname);
  
  // Lista de rutas válidas
  const validRoutes = ['/restaurantes', '/precios', '/noticias', '/nosotros'];
  
  // Si la URL es una de nuestras rutas válidas, redirigir a la misma
  if (validRoutes.includes(url.pathname)) {
    console.log('Ruta válida encontrada, manteniendo en:', url.pathname);
    return new Response('', {
      status: 200
    });
  }
  
  // Si no es una ruta que queremos manejar específicamente, continuar con el flujo normal
  return new Response('Not found', { status: 404 });
} 