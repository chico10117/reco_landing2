export function GET() {
  // Este archivo asegura que la ruta /restaurantes exista como endpoint
  return new Response('Redirect to restaurantes page', {
    status: 303,
    headers: {
      Location: '/restaurantes'
    }
  });
} 