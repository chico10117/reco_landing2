<script lang="ts">
  import Navbar from "$lib/components/landing/Navbar.svelte";
  import Footer from "$lib/components/landing/footer.svelte";
  import { languageStore } from '$lib/stores/language.svelte';
  import { t } from '$lib/utils/translations';

  // Create reactive translations
  const currentLang = $derived(languageStore.currentLanguage);
  const tr = (key: Parameters<typeof t>[0]) => t(key, currentLang);
  
  // Make language reactive
</script>

<svelte:head>
  <title>{tr('terms_title')} | Reco</title>
</svelte:head>

<div class="min-h-screen bg-white">
  <!-- Navigation -->
  <Navbar />

  <!-- Content -->
  <div class="pt-20 pb-12">
    <div class="max-w-3xl mx-auto px-4">
      <h1 class="text-3xl font-bold text-gray-900 mb-8 pt-8">{tr('terms_title')}</h1>
      
      <div class="prose prose-blue max-w-none">
        <p class="text-gray-600 mb-6">
          {languageStore.currentLanguage === 'es' ? 'Última actualización' : 'Last updated'}: {new Date().toLocaleDateString(languageStore.currentLanguage === 'es' ? 'es-ES' : 'en-US')}
        </p>

        {#if languageStore.currentLanguage === 'es'}
          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">1. Aceptación de los Términos</h2>
            <p class="text-gray-600 mb-4">
              Al acceder y utilizar los servicios de Reco, usted acepta estar legalmente obligado por estos términos de servicio. Si no está de acuerdo con alguno de estos términos, no debe utilizar nuestros servicios.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">2. Descripción del Servicio</h2>
            <p class="text-gray-600 mb-4">
              Reco proporciona una plataforma de menú digital inteligente con:
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>Recomendaciones personalizadas con IA</li>
              <li>Menús multilingües</li>
              <li>Análisis de datos y preferencias</li>
              <li>Integración mediante códigos QR</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">3. Uso Aceptable</h2>
            <p class="text-gray-600 mb-4">
              Los usuarios deben:
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>Proporcionar información precisa del restaurante</li>
              <li>Mantener actualizado su menú</li>
              <li>Respetar los derechos de propiedad intelectual</li>
              <li>Cumplir con las regulaciones alimentarias locales</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">4. Privacidad y Datos</h2>
            <p class="text-gray-600 mb-4">
              La recopilación y uso de datos se rige por nuestra Política de Privacidad. Reco se compromete a proteger la información de restaurantes y comensales.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">5. Tarifas y Pagos</h2>
            <p class="text-gray-600 mb-4">
              Los planes y precios están disponibles en nuestra página de precios. Las tarifas pueden cambiar con previo aviso de 30 días.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">6. Contacto</h2>
            <p class="text-gray-600 mb-4">
              Para consultas sobre estos términos, contáctenos en:
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>Email: legal@reco.ai</li>
              <li>Formulario de contacto en nuestra web</li>
            </ul>
          </section>
        {:else}
          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p class="text-gray-600 mb-4">
              By accessing and using Reco's services, you agree to be legally bound by these terms of service. If you do not agree with any of these terms, you should not use our services.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">2. Service Description</h2>
            <p class="text-gray-600 mb-4">
              Reco provides an intelligent digital menu platform with:
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>AI-powered personalized recommendations</li>
              <li>Multilingual menus</li>
              <li>Data and preference analytics</li>
              <li>QR code integration</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">3. Acceptable Use</h2>
            <p class="text-gray-600 mb-4">
              Users must:
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>Provide accurate restaurant information</li>
              <li>Keep their menu updated</li>
              <li>Respect intellectual property rights</li>
              <li>Comply with local food regulations</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">4. Privacy and Data</h2>
            <p class="text-gray-600 mb-4">
              Data collection and use is governed by our Privacy Policy. Reco is committed to protecting restaurant and diner information.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">5. Fees and Payments</h2>
            <p class="text-gray-600 mb-4">
              Plans and pricing are available on our pricing page. Fees may change with 30 days notice.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">6. Contact</h2>
            <p class="text-gray-600 mb-4">
              For questions about these terms, contact us at:
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>Email: legal@reco.ai</li>
              <li>Contact form on our website</li>
            </ul>
          </section>
        {/if}
      </div>
    </div>
  </div>

  <!-- Footer -->
  <Footer />
</div>

<style>
  :global(.prose) {
    max-width: 65ch;
    margin: 0 auto;
  }
</style>
