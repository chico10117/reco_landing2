<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/landing/footer.svelte";
</script>

<svelte:head>
  <title>Precios | Reco</title>
  <meta name="description" content="Conoce nuestros planes y precios." />
</svelte:head>

<div class="min-h-screen bg-white text-gray-900 flex flex-col">
  <Navbar />
  
  <main class="flex-grow">
    <section class="container mx-auto px-4 py-16">
      <h1 class="text-4xl font-bold mb-8">Precios</h1>
      <p class="text-lg mb-4">Información sobre precios estará disponible pronto.</p>
    </section>
  </main>

  <Footer />
</div> 