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
  import { partners } from '$lib/data/partners';
  
  const handleDiscoverClick = () => {
    const howItWorksSection = document.getElementById('how-it-works');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleRestaurantClick = () => {
    const benefitsSection = document.getElementById('benefits');
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
</script>

<svelte:head>
  <title>Reco - Pide mejor. Disfruta más.</title>
  <meta name="description" content="Reco es un menú digital inteligente que personaliza la experiencia de cada comensal. Te recomienda el plato perfecto según tu antojo, tu bolsillo y tu dieta en tu idioma y sin líos." />
</svelte:head>

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