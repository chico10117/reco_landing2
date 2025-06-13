<script lang="ts">
  // Aquí podrías importar un botón o componentes reutilizables si lo deseas
</script>

<svelte:head>
  <title>Restaurante independiente | Reco</title>
  <meta name="description" content="Reco es el camarero digital que apoya a tu equipo y ayuda a tu restaurante independiente a vender más y trabajar mejor." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 flex flex-col items-center font-sans">
  <!-- Hero -->
  <div class="w-full max-w-4xl mx-auto mt-24 mb-4 text-center">
    <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style="letter-spacing:-0.01em;">Sigue siendo el alma de tu restaurante. <span class="text-blue-600">Deja que Reco te ayude con el resto.</span></h1>
    <p class="text-lg md:text-xl text-gray-700 mb-2">Reco es el camarero digital que apoya a tu equipo.</p>
  </div>

  <!-- Subhero -->
  <div class="w-full max-w-3xl mx-auto mb-8 text-center">
    <p class="text-lg md:text-xl text-gray-700">Reco traduce, recomienda y promociona tu menú sin que tengas que imprimir nada ni entrenar a todo el staff.</p>
  </div>

  <!-- El problema -->
  <section class="w-full max-w-4xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="rounded-2xl bg-white/70 shadow-md p-8 border border-blue-100 flex flex-col justify-center">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3">El problema</h2>
      <p class="text-gray-700 mb-2">Staff que cambia. Turistas que no entienden la carta. Platos que quieres promocionar.</p>
      <p class="text-gray-700">Reco es la ayuda invisible que aligera tu trabajo.</p>
    </div>
    <!-- Qué hace Reco -->
    <div class="rounded-2xl bg-white/70 shadow-md p-8 border border-blue-100 flex flex-col justify-center">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3">¿Qué hace Reco?</h2>
      <ol class="text-gray-700 space-y-2 text-left mx-auto max-w-xs list-decimal list-inside">
        <li>Traduce automáticamente tu carta.</li>
        <li>Resalta los platos que quieres impulsar.</li>
        <li>Responde dudas frecuentes de los clientes.</li>
        <li>Ayuda a un staff nuevo a vender como un veterano.</li>
        <li>Te muestra qué platos están funcionando mejor.</li>
      </ol>
    </div>
  </section>

  <!-- Beneficios concretos -->
  <section class="w-full max-w-4xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="rounded-2xl bg-white/80 shadow-md p-8 border border-blue-100 flex flex-col justify-center">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3">Beneficios concretos</h2>
      <ul class="text-gray-700 space-y-2 text-left mx-auto max-w-xs list-disc list-inside">
        <li>Ahorra tiempo en actualizaciones de menú.</li>
        <li>Evita errores de pedidos.</li>
        <li>Mejora la experiencia de los turistas.</li>
        <li>Da tranquilidad a tu staff.</li>
        <li>Te ayuda a tomar decisiones sobre el menú.</li>
        <li>No requiere instalación.</li>
      </ul>
    </div>
    <!-- Cómo funciona -->
    <div class="rounded-2xl bg-white/80 shadow-md p-8 border border-blue-100 flex flex-col justify-center">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3">¿Cómo funciona?</h2>
      <ol class="text-gray-700 space-y-2 text-left mx-auto max-w-xs list-decimal list-inside">
        <li>Subes tu menú a Reco.</li>
        <li>Tus clientes acceden por QR.</li>
        <li>Reco muestra tus platos destacados y responde dudas.</li>
        <li>Tú controlas qué resaltar cada día.</li>
      </ol>
    </div>
  </section>

  <!-- Cierre aspiracional y CTA -->
  <section class="w-full max-w-4xl mx-auto mb-16 text-center">
    <h2 class="text-2xl md:text-3xl font-bold mb-4 text-blue-600">Deja que tus clientes disfruten más.</h2>
    <p class="text-lg text-gray-700 mb-6">Deja que tu equipo trabaje mejor.</p>
    <div class="flex flex-col md:flex-row gap-4 justify-center">
      <a href="#demo" class="rounded-full bg-blue-600 text-white px-8 py-3 font-semibold shadow-md hover:bg-blue-700 transition-all text-lg">👉 Pide una demo para restaurantes independientes</a>
      <a href="#casos" class="rounded-full bg-white/80 text-blue-600 px-8 py-3 font-semibold shadow-md border border-blue-200 hover:bg-blue-50 transition-all text-lg">👉 Ver cómo Reco ayuda a casas como la tuya</a>
    </div>
  </section>
</div> 