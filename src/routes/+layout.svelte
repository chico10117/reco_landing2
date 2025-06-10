<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/components/landing/Navbar.svelte';
  import Footer from '$lib/components/landing/footer.svelte';
  import WhatsappButton from '$lib/components/whatsapp-button.svelte';

  // Access route children via snippet prop instead of legacy slots
  import type { Snippet } from 'svelte';

  let { children } = $props<{ children?: Snippet }>();
</script>

<div class="min-h-screen bg-white text-gray-900 flex flex-col overflow-x-hidden">
  <Navbar />
  
  <main class="flex-grow">
    {@render children?.()}
  </main>

  <Footer />
  <WhatsappButton />
</div> 