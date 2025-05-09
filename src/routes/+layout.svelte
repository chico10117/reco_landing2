<script>
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/landing/footer.svelte';
</script>

<div class="flex flex-col min-h-screen">
  <Navbar />
  <main class="flex-grow">
    <slot />
  </main>
  <Footer />
</div> 