<script lang="ts">
  import Navbar from "$lib/components/landing/Navbar.svelter.svelte";
</script>

<div class="min-h-screen bg-white">
  <!-- Navigation -->
  <Navbar />

  <!-- Content -->
  <div class="pt-20 pb-12">
    <div class="max-w-3xl mx-auto px-4">
      <h1 class="text-3xl font-bold text-gray-900 mb-8 pt-8">Política de Privacidad</h1>
      
      <div class="prose prose-red max-w-none">
        <p class="text-gray-600 mb-6">
          Última actualización: {new Date().toLocaleDateString('es-UY')}
        </p>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">1. Introducción</h2>
          <p class="text-gray-600 mb-4">
            En FanLatinas, nos tomamos muy en serio la privacidad de nuestros usuarios. Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos su información personal.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">2. Información que Recopilamos</h2>
          <p class="text-gray-600 mb-4">
            Recopilamos la siguiente información:
          </p>
          <ul class="list-disc pl-6 text-gray-600 mb-4">
            <li>Nombre</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de WhatsApp</li>
            <li>Preferencias de newsletter</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">3. Uso de la Información</h2>
          <p class="text-gray-600 mb-4">
            Utilizamos su información para:
          </p>
          <ul class="list-disc pl-6 text-gray-600 mb-4">
            <li>Proporcionar y mantener nuestros servicios</li>
            <li>Notificarle sobre cambios en nuestros servicios</li>
            <li>Permitirle participar en funciones interactivas</li>
            <li>Proporcionar atención al cliente</li>
            <li>Detectar y prevenir fraudes</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">4. Protección de Datos</h2>
          <p class="text-gray-600 mb-4">
            Implementamos medidas de seguridad adecuadas para proteger su información personal contra acceso, alteración, divulgación o destrucción no autorizada, de acuerdo con la Ley N° 18.331 de Protección de Datos Personales de Uruguay.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">5. Sus Derechos</h2>
          <p class="text-gray-600 mb-4">
            De acuerdo con la ley uruguaya, usted tiene derecho a:
          </p>
          <ul class="list-disc pl-6 text-gray-600 mb-4">
            <li>Acceder a sus datos personales</li>
            <li>Rectificar sus datos personales</li>
            <li>Cancelar sus datos personales</li>
            <li>Oponerse al tratamiento de sus datos personales</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">6. Contacto</h2>
          <p class="text-gray-600 mb-4">
            Si tiene preguntas sobre esta Política de Privacidad, puede contactarnos a través de:
          </p>
          <ul class="list-disc pl-6 text-gray-600 mb-4">
            <li>Email: privacy@fanlatinas.com</li>
            <li>WhatsApp: [Número de Contacto]</li>
          </ul>
        </section>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-gray-900 text-gray-100 py-8">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="text-2xl font-bold text-red-400 mb-4 md:mb-0">FanLatinas</div>
        <nav class="space-x-6">
          <a href="/terms" class="text-gray-300 hover:text-red-400 transition-colors">Términos de Servicio</a>
          <a href="https://calendly.com/fernando-lqrb/15min" class="text-gray-300 hover:text-red-400 transition-colors">Contacto</a>
        </nav>
      </div>
      <div class="border-t border-gray-800 my-6"></div>
      <p class="text-center text-gray-400 text-sm">&copy; {new Date().getFullYear()} FanLatinas. Todos los derechos reservados.</p>
    </div>
  </footer>
</div>

<style>
  /* Add any custom styles here */
  :global(.prose) {
    max-width: 65ch;
    margin: 0 auto;
  }
</style> 