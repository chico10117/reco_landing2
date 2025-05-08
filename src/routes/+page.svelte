<script lang="ts">
  import { onMount } from 'svelte';
  import { Button } from "$lib/components/ui/button";
  import { track } from "$lib/utils/analytics";
  
  // Import landing page components
  import HeroSection from "$lib/components/landing/hero-section.svelte";
  import BenefitsSection from "$lib/components/landing/benefits-section.svelte";
  import HowItWorks from "$lib/components/landing/how-it-works.svelte";
  import PartnersStrip from "$lib/components/landing/partners-strip.svelte";
  import ContactCTA from "$lib/components/landing/contact-cta.svelte";
  import Footer from "$lib/components/landing/footer.svelte";
  
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
  
  onMount(() => {
    // Track page view
    track('page_view', { page: 'home' });
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

<div class="min-h-screen bg-baby-blue text-gray-900 flex flex-col">
  <nav class="bg-white border-b border-gray-100 fixed w-full top-0 z-50 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <a href="/" class="flex items-center">
        <img src="/img/reco-logo.svg" alt="Reco" class="h-10" />
      </a>
      <div class="flex items-center space-x-4">
        <a href="https://calendly.com/fernando-lqrb/15min" target="_blank" rel="noopener noreferrer">
          <Button 
            variant="outline" 
            class="text-dark-blue border-dark-blue hover:bg-blue-purple hover:text-white hover:border-blue-purple ml-4"
            on:click={() => {
              track('nav_click', { label: 'contact' });
            }}
          >
            Contacto
          </Button>
        </a>
      </div>
    </div>
  </nav>

  <div class="h-20"></div> <!-- Spacer for fixed nav -->

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