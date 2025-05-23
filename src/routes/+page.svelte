<script lang="ts">
  import HeroSection from '$lib/components/landing/hero-section.svelte';
  import BenefitsSection from '$lib/components/landing/benefits-section.svelte';
  import HowItWorks from '$lib/components/landing/how-it-works.svelte';
  import PartnersStrip from '$lib/components/landing/partners-strip.svelte';
  import ContactCTA from '$lib/components/landing/contact-cta.svelte';
  import ChooseRestaurantType from '$lib/components/landing/choose-restaurant-type.svelte';
  import { partners } from '$lib/data/partners';

  const handleDiscoverClick = () => {
    const howItWorksSection = document.getElementById('how-it-works');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRestaurantClick = () => {
    // Open WhatsApp chat with a predefined message
    const whatsappNumber = "34603114264"; // Replace with your actual WhatsApp number
    const message = "Hola, me gustaría obtener más información sobre Reco para mi restaurante.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
</script>

<svelte:head>
  <title>Reco: Carta Inteligente</title>
  <!-- <meta name="description" content="Descubre Reco, la carta inteligente con IA que revoluciona la experiencia en restaurantes. Ayuda a tus clientes a pedir mejor y disfrutar más, optimizando tu menú." /> -->
  <meta name="description" content="Descubre Reco, la carta inteligente con IA que revoluciona la experiencia en restaurantes. Ayuda a tus clientes a pedir mejor y disfrutar más!" />
</svelte:head>

<HeroSection 
  onDiscoverClick={handleDiscoverClick} 
  onRestaurantClick={handleRestaurantClick} 
/>

<BenefitsSection />

<div id="explora">
  <HowItWorks />
</div>

<ChooseRestaurantType />

<!-- <PartnersStrip {partners} /> -->

<ContactCTA />