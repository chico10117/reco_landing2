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
  <title>{tr('privacy_title')} | Reco</title>
</svelte:head>

<div class="min-h-screen bg-white">
  <!-- Navigation -->
  <Navbar />

  <!-- Content -->
  <div class="pt-20 pb-12">
    <div class="max-w-3xl mx-auto px-4">
      <h1 class="text-3xl font-bold text-gray-900 mb-8 pt-8">{tr('privacy_title')}</h1>
      
      <div class="prose prose-blue max-w-none">
        <p class="text-gray-600 mb-6">
          {languageStore.currentLanguage === 'es' ? 'Última actualización' : 'Last updated'}: {new Date().toLocaleDateString(languageStore.currentLanguage === 'es' ? 'es-ES' : 'en-US')}
        </p>

        {#if languageStore.currentLanguage === 'es'}
          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">1. Información que Recopilamos</h2>
            <p class="text-gray-600 mb-4">
              Reco recopila información para proporcionar mejores servicios a restaurantes y comensales. Esto incluye:
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>Información del restaurante (nombre, menú, precios)</li>
              <li>Preferencias de comensales (idioma, restricciones dietéticas)</li>
              <li>Datos de uso y analíticas (platos populares, horarios pico)</li>
              <li>Información técnica (tipo de dispositivo, navegador)</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">2. Cómo Usamos la Información</h2>
            <p class="text-gray-600 mb-4">
              Utilizamos la información recopilada para:
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>Personalizar recomendaciones de menú</li>
              <li>Proporcionar análisis valiosos a restaurantes</li>
              <li>Mejorar nuestros servicios</li>
              <li>Comunicarnos con usuarios cuando sea necesario</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">3. Protección de Datos</h2>
            <p class="text-gray-600 mb-4">
              Implementamos medidas de seguridad para proteger la información contra acceso no autorizado, alteración o destrucción. Esto incluye encriptación, acceso restringido y auditorías regulares de seguridad.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">4. Compartir Información</h2>
            <p class="text-gray-600 mb-4">
              No vendemos ni compartimos información personal con terceros, excepto:
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>Con el consentimiento explícito del usuario</li>
              <li>Para cumplir con requisitos legales</li>
              <li>Con proveedores de servicios que nos ayudan a operar</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">5. Sus Derechos</h2>
            <p class="text-gray-600 mb-4">
              Los usuarios tienen derecho a:
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>Acceder a su información personal</li>
              <li>Corregir datos inexactos</li>
              <li>Solicitar la eliminación de sus datos</li>
              <li>Oponerse al procesamiento de sus datos</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">6. Contacto</h2>
            <p class="text-gray-600 mb-4">
              Para consultas sobre privacidad, contáctenos en:
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>Email: privacy@reco.ai</li>
              <li>Formulario de contacto en nuestra web</li>
            </ul>
          </section>
        {:else}
          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
            <p class="text-gray-600 mb-4">
              Reco collects information to provide better services to restaurants and diners. This includes:
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>Restaurant information (name, menu, prices)</li>
              <li>Diner preferences (language, dietary restrictions)</li>
              <li>Usage data and analytics (popular dishes, peak hours)</li>
              <li>Technical information (device type, browser)</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Information</h2>
            <p class="text-gray-600 mb-4">
              We use collected information to:
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>Personalize menu recommendations</li>
              <li>Provide valuable insights to restaurants</li>
              <li>Improve our services</li>
              <li>Communicate with users when necessary</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">3. Data Protection</h2>
            <p class="text-gray-600 mb-4">
              We implement security measures to protect information against unauthorized access, alteration, or destruction. This includes encryption, restricted access, and regular security audits.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">4. Sharing Information</h2>
            <p class="text-gray-600 mb-4">
              We do not sell or share personal information with third parties, except:
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>With explicit user consent</li>
              <li>To comply with legal requirements</li>
              <li>With service providers who help us operate</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">5. Your Rights</h2>
            <p class="text-gray-600 mb-4">
              Users have the right to:
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>Access their personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of their data</li>
              <li>Object to processing of their data</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">6. Contact</h2>
            <p class="text-gray-600 mb-4">
              For privacy inquiries, contact us at:
            </p>
            <ul class="list-disc pl-6 text-gray-600 mb-4">
              <li>Email: privacy@reco.ai</li>
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