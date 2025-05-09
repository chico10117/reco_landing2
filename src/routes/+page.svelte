<script lang="ts">
  import { onMount } from 'svelte';
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
  
  // Importar componentes necesarios
  import { page } from '$app/stores';
  
  // Importar componentes de secciones
  import RestaurantesContent from './restaurantes/+page.svelte';
  import PreciosContent from './precios/+page.svelte';
  import NoticiasContent from './noticias/+page.svelte';
  import NosotrosContent from './nosotros/+page.svelte';
  
  export let data;
  
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
  
  // Estado para la página actual
  let currentPage = '';
  
  onMount(() => {
    // Track page view
    track('page_view', { page: 'home' });
    
    // Obtener el parámetro de la URL
    const urlParams = new URLSearchParams(window.location.search);
    currentPage = urlParams.get('page') || '';
    
    // Si hay un parámetro, actualizar la URL sin recargar la página
    if (currentPage) {
      window.history.replaceState(
        {}, 
        document.title, 
        `/${currentPage}`
      );
    }
  });
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta name="description" content={data.meta.description} />
  <link rel="canonical" href={data.meta.canonical} />
  
  <!-- Open Graph -->
  <meta property="og:title" content={data.meta.openGraph.title} />
  <meta property="og:description" content={data.meta.openGraph.description} />
  <meta property="og:image" content={data.meta.openGraph.image} />
  <meta property="og:url" content={data.meta.openGraph.url} />
  <meta property="og:type" content={data.meta.openGraph.type} />
</svelte:head>

{#if currentPage === 'restaurantes'}
  <RestaurantesContent />
{:else if currentPage === 'precios'}
  <PreciosContent />
{:else if currentPage === 'noticias'}
  <NoticiasContent />
{:else if currentPage === 'nosotros'}
  <NosotrosContent />
{:else}
  <div class="min-h-screen bg-white text-gray-900 flex flex-col">
    <Navbar />

    <main class="flex-grow">
      <HeroSection 
        onDiscoverClick={handleDiscoverClick} 
        onRestaurantClick={handleRestaurantClick} 
      />
      
      <BenefitsSection />
      
      <HowItWorks />
      
      <PartnersStrip {partners} />
      
      <ContactCTA />
    </main>

    <Footer />
  </div>
{/if} 