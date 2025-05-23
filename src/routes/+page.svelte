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
    const benefitsSection = document.getElementById('benefits');
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: 'smooth' });
    }
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

<div id="explora">
  <HowItWorks />
</div>

<BenefitsSection />

<ChooseRestaurantType />

<!-- <PartnersStrip {partners} /> -->

<ContactCTA /> 