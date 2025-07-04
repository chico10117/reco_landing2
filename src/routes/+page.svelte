<script lang="ts">
  import HeroSection from '$lib/components/landing/hero-section.svelte';
  import BenefitsSection from '$lib/components/landing/benefits-section.svelte';
  import HowItWorks from '$lib/components/landing/how-it-works.svelte';
  import PartnersStrip from '$lib/components/landing/partners-strip.svelte';
  import ContactCTA from '$lib/components/landing/contact-cta.svelte';
  import ChooseRestaurantType from '$lib/components/landing/choose-restaurant-type.svelte';
  import RestauranteSells from '$lib/components/landing/restaurante-sells.svelte';
  import { partners } from '$lib/data/partners';
  import { languageStore } from '$lib/stores/language.svelte';
  import { t } from '$lib/utils/translations';

  // Create reactive translations
  const currentLang = $derived(languageStore.currentLanguage);
  const tr = (key: Parameters<typeof t>[0]) => t(key, currentLang);

  const handleRestaurantClick = () => {
    // Open WhatsApp chat with a predefined message
    const whatsappNumber = "34603114264"; // Replace with your actual WhatsApp number
    const message = t('whatsapp_message');
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
</script>

<svelte:head>
  <title>{tr('page_title')}</title>
  <meta name="description" content={tr('page_description')} />
</svelte:head>

<HeroSection 
  onRestaurantClick={handleRestaurantClick} 
/>

<ChooseRestaurantType />
<RestauranteSells />

<!-- <BenefitsSection /> -->

<div id="explora">
  <HowItWorks />
</div>



<!-- <PartnersStrip {partners} /> -->

<ContactCTA />