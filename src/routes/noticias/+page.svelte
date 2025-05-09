<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/landing/footer.svelte";
</script>

<svelte:head>
  <title>Noticias | Reco</title>
  <meta name="description" content="Últimas noticias y actualizaciones de Reco." />
</svelte:head>

<div class="min-h-screen bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-4xl font-bold text-gray-900 mb-8">Noticias</h1>
    <p class="text-lg text-gray-600">
      Mantente al día con las últimas noticias y actualizaciones de Reco.
    </p>
  </div>
</div>

<Footer /> 