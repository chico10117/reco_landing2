<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { track } from "$lib/utils/analytics";
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<div class="min-h-screen bg-white">
  <!-- Navigation -->
  <Navbar />

  <!-- Content -->
  <div class="pt-20 pb-12">
    <div class="max-w-3xl mx-auto px-4">
      <h1 class="text-3xl font-bold text-gray-900 mb-8 pt-8">Términos de Servicio</h1>
      
      <div class="prose prose-red max-w-none">
        <p class="text-gray-600 mb-6">
          Última actualización: {new Date().toLocaleDateString('es-UY')}
        </p>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">1. Aceptación de los Términos</h2>
          <p class="text-gray-600 mb-4">
            Al acceder y utilizar los servicios de FanLatinas, usted acepta estar legalmente obligado por estos términos de servicio. Si no está de acuerdo con alguno de estos términos, no debe utilizar nuestros servicios.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">2. Elegibilidad</h2>
          <p class="text-gray-600 mb-4">
            Para utilizar nuestros servicios, usted debe:
          </p>
          <ul class="list-disc pl-6 text-gray-600 mb-4">
            <li>Ser mayor de 18 años</li>
            <li>Tener capacidad legal para contratar</li>
            <li>Proporcionar información precisa y veraz</li>
            <li>Cumplir con todas las leyes y regulaciones aplicables</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">3. Servicios</h2>
          <p class="text-gray-600 mb-4">
            FanLatinas proporciona una plataforma que permite:
          </p>
          <ul class="list-disc pl-6 text-gray-600 mb-4">
            <li>Crear y gestionar perfiles profesionales</li>
            <li>Publicar contenido y servicios</li>
            <li>Interactuar con usuarios de manera segura</li>
            <li>Gestionar pagos y suscripciones</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">4. Tarifas y Pagos</h2>
          <p class="text-gray-600 mb-4">
            Los precios de nuestros servicios están sujetos a:
          </p>
          <ul class="list-disc pl-6 text-gray-600 mb-4">
            <li>Las tarifas publicadas en nuestra plataforma</li>
            <li>Impuestos aplicables según la legislación uruguaya</li>
            <li>Términos específicos de cada plan de suscripción</li>
            <li>Políticas de reembolso establecidas</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">5. Contenido y Conducta</h2>
          <p class="text-gray-600 mb-4">
            Los usuarios deben cumplir con:
          </p>
          <ul class="list-disc pl-6 text-gray-600 mb-4">
            <li>Las leyes y regulaciones aplicables</li>
            <li>Nuestras políticas de contenido</li>
            <li>Estándares de conducta profesional</li>
            <li>Respeto a los derechos de otros usuarios</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">6. Propiedad Intelectual</h2>
          <p class="text-gray-600 mb-4">
            Todo el contenido de la plataforma está protegido por:
          </p>
          <ul class="list-disc pl-6 text-gray-600 mb-4">
            <li>Derechos de autor</li>
            <li>Marcas registradas</li>
            <li>Otros derechos de propiedad intelectual</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">7. Limitación de Responsabilidad</h2>
          <p class="text-gray-600 mb-4">
            FanLatinas no será responsable por:
          </p>
          <ul class="list-disc pl-6 text-gray-600 mb-4">
            <li>Daños indirectos o consecuentes</li>
            <li>Pérdida de datos o ganancias</li>
            <li>Interrupciones del servicio</li>
            <li>Acciones de terceros</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">8. Modificaciones</h2>
          <p class="text-gray-600 mb-4">
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en la plataforma.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">9. Ley Aplicable</h2>
          <p class="text-gray-600 mb-4">
            Estos términos se rigen por las leyes de la República Oriental del Uruguay. Cualquier disputa será sometida a la jurisdicción exclusiva de los tribunales de Montevideo.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">10. Contacto</h2>
          <p class="text-gray-600 mb-4">
            Para cualquier consulta sobre estos términos, contáctenos en:
          </p>
          <ul class="list-disc pl-6 text-gray-600 mb-4">
            <li>Email: legal@fanlatinas.com</li>
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
          <a href="/privacy" class="text-gray-300 hover:text-red-400 transition-colors">Política de Privacidad</a>
          <a href="/contact" class="text-gray-300 hover:text-red-400 transition-colors">Contacto</a>
        </nav>
      </div>
      <div class="border-t border-gray-800 my-6"></div>
      <p class="text-center text-gray-400 text-sm">&copy; {new Date().getFullYear()} FanLatinas. Todos los derechos reservados.</p>
    </div>
  </footer>
</div>

<style>
  :global(.prose) {
    max-width: 65ch;
    margin: 0 auto;
  }
</style>
