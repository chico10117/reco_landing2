<script lang="ts">
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>{$page.status} | Reco</title>
</svelte:head>

<div class="flex flex-col items-center justify-center min-h-[70vh] px-4">
  <h1 class="text-6xl font-bold text-blue-600 mb-4">{$page.status}</h1>
  <p class="text-xl text-gray-600 mb-8">{$page.error?.message || 'Página no encontrada'}</p>
  <a 
    href="/" 
    class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
  >
    Volver al inicio
  </a>
</div> 