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
  <title>Reco - Pide mejor. Disfruta más.</title>
  <meta name="description" content="El menú ya no es solo una lista de platos. Es el mejor amigo de tu cliente… que trabaja para ti." />
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