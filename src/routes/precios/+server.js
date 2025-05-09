export function GET() {
  // Este archivo asegura que la ruta /precios exista como endpoint
  return new Response('Redirect to precios page', {
    status: 303,
    headers: {
      Location: '/precios'
    }
  });
} 