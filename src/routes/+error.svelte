<script>
  import { page } from '$app/stores';
</script>

<div class="flex flex-col items-center justify-center h-screen bg-gray-50">
  <h1 class="text-4xl font-bold mb-4">Error {$page.status}</h1>
  <p class="text-lg mb-8">{$page.error?.message || 'Página no encontrada'}</p>
  <a href="/" class="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
    Volver al inicio
  </a>
</div> 