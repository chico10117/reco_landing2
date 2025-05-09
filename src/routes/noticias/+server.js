export function GET() {
  // Este archivo asegura que la ruta /noticias exista como endpoint
  return new Response('Redirect to noticias page', {
    status: 303,
    headers: {
      Location: '/noticias'
    }
  });
} 