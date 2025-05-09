<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/landing/footer.svelte";
</script>

<svelte:head>
  <title>Restaurantes | Reco</title>
  <meta name="description" content="Descubre los restaurantes que utilizan Reco." />
</svelte:head>

<div class="min-h-screen bg-white text-gray-900 flex flex-col">
  <Navbar />
  
  <main class="flex-grow">
    <section class="container mx-auto px-4 py-16">
      <h1 class="text-4xl font-bold mb-8">Restaurantes</h1>
      <p class="text-lg mb-4">Información sobre restaurantes estará disponible pronto.</p>
    </section>
  </main>

  <Footer />
</div> 