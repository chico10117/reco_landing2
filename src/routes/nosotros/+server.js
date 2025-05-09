export function GET() {
  // Este archivo asegura que la ruta /nosotros exista como endpoint
  return new Response('Redirect to nosotros page', {
    status: 303,
    headers: {
      Location: '/nosotros'
    }
  });
} 