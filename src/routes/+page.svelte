<script lang="ts">
  import { page } from '$app/stores';
  import { Button } from "$lib/components/ui/button";
  import { track } from "$lib/utils/analytics";
  
  // Import landing page components
  import Navbar from "$lib/components/Navbar.svelte";
  import HeroSection from "$lib/components/landing/hero-section.svelte";
  import BenefitsSection from "$lib/components/landing/benefits-section.svelte";
  import HowItWorks from "$lib/components/landing/how-it-works.svelte";
  import PartnersStrip from "$lib/components/landing/partners-strip.svelte";
  import ContactCTA from "$lib/components/landing/contact-cta.svelte";
  import Footer from "$lib/components/landing/footer.svelte";
  
  // Function handlers for hero section
  const handleDiscoverClick = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleRestaurantClick = () => {
    document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Dynamic partner logos
  const partners = [
    { name: "Yelmo", logoUrl: "/img/logo-yelmo.svg" },
    { name: "VIPS", logoUrl: "/img/logo-vips.svg" },
    { name: "Honest Greens", logoUrl: "/img/logo-honest-greens.svg" },
    { name: "TGB", logoUrl: "/img/logo-tgb.svg" }
  ];

  export let data;
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content={data.description} />
</svelte:head>

<div class="min-h-screen bg-white text-gray-900 flex flex-col">
  <Navbar />

  <main class="flex-grow">
    {#if data.currentPage === 'restaurantes'}
      <section class="container mx-auto px-4 py-16">
        <h1 class="text-4xl font-bold mb-8">Restaurantes</h1>
        <p class="text-lg mb-4">Información sobre restaurantes estará disponible pronto.</p>
      </section>
    {:else if data.currentPage === 'precios'}
      <section class="container mx-auto px-4 py-16">
        <h1 class="text-4xl font-bold mb-8">Precios</h1>
        <p class="text-lg mb-4">Información sobre precios estará disponible pronto.</p>
      </section>
    {:else if data.currentPage === 'noticias'}
      <section class="container mx-auto px-4 py-16">
        <h1 class="text-4xl font-bold mb-8">Noticias</h1>
        <p class="text-lg mb-4">Próximamente publicaremos noticias y actualizaciones sobre Reco.</p>
      </section>
    {:else if data.currentPage === 'nosotros'}
      <section class="container mx-auto px-4 py-16">
        <h1 class="text-4xl font-bold mb-8">Nosotros</h1>
        <p class="text-lg mb-4">Conoce más sobre el equipo detrás de Reco próximamente.</p>
      </section>
    {:else}
      <HeroSection 
        onDiscoverClick={handleDiscoverClick} 
        onRestaurantClick={handleRestaurantClick} 
      />
      
      <BenefitsSection />
      
      <HowItWorks />
      
      <PartnersStrip {partners} />
      
      <ContactCTA />
    {/if}
  </main>

  <Footer />
</div> 