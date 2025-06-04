/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  // Procesar la solicitud normalmente
  const response = await resolve(event);
  return response;
} 