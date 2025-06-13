<script lang="ts">
  // Aquí podrías importar un botón o componentes reutilizables si lo deseas
</script>

<svelte:head>
  <title>Restaurante nuevo | Reco</title>
  <meta name="description" content="Tu primer menú digital. Fácil. Bonito. Sin complicarte. Reco te da una carta que vende mejor y te hace quedar bien desde el primer día." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 flex flex-col items-center font-sans">
  <!-- Hero -->
  <div class="w-full max-w-4xl mx-auto mt-24 mb-4 text-center">
    <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style="letter-spacing:-0.01em;">Tu primer menú digital. <span class="text-blue-600">Fácil. Bonito. Sin complicarte.</span></h1>
    <p class="text-lg md:text-xl text-gray-700 mb-2">Reco te da una carta que vende mejor — y que te hace quedar bien desde el primer día.</p>
  </div>

  <!-- Subhero -->
  <div class="w-full max-w-3xl mx-auto mb-8 text-center">
    <p class="text-lg md:text-xl text-gray-700">Reco es la forma más simple de tener un menú que enamora, que cuenta tu historia.</p>
  </div>

  <!-- El problema -->
  <section class="w-full max-w-4xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="rounded-2xl bg-white/70 shadow-md p-8 border border-blue-100 flex flex-col justify-center">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3">El problema</h2>
      <p class="text-gray-700 mb-2">Empezar un restaurante es un reto enorme.</p>
      <p class="text-gray-700">Reco te da un menú profesional, adaptable, con storytelling.</p>
    </div>
    <!-- Qué hace Reco -->
    <div class="rounded-2xl bg-white/70 shadow-md p-8 border border-blue-100 flex flex-col justify-center">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3">¿Qué hace Reco?</h2>
      <ul class="text-gray-700 space-y-2 text-left mx-auto max-w-xs list-disc list-inside">
        <li>Te ayuda a crear tu primer menú digital.</li>
        <li>Te permite añadir la historia de tus platos.</li>
        <li>Hace que turistas y locales entiendan bien tu propuesta.</li>
        <li>Te da flexibilidad para cambiar precios, platos o textos.</li>
        <li>Puede ser también la base para tu futura web.</li>
      </ul>
    </div>
  </section>

  <!-- Beneficios concretos -->
  <section class="w-full max-w-4xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="rounded-2xl bg-white/80 shadow-md p-8 border border-blue-100 flex flex-col justify-center">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3">Beneficios concretos</h2>
      <ul class="text-gray-700 space-y-2 text-left mx-auto max-w-xs list-disc list-inside">
        <li>Un menú digital profesional desde el día uno.</li>
        <li>Ahorro en costes de impresión.</li>
        <li>Flexibilidad total.</li>
        <li>Mejora en la experiencia de cliente.</li>
        <li>No necesitas ser experto.</li>
      </ul>
    </div>
    <!-- Cómo funciona -->
    <div class="rounded-2xl bg-white/80 shadow-md p-8 border border-blue-100 flex flex-col justify-center">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3">¿Cómo funciona?</h2>
      <ol class="text-gray-700 space-y-2 text-left mx-auto max-w-xs list-decimal list-inside">
        <li>Subimos tu carta básica en Reco.</li>
        <li>Personalizas cuando quieras.</li>
        <li>Los clientes acceden vía QR.</li>
        <li>Puedes cambiar lo que necesites.</li>
        <li>Empiezas a tener feedback y datos.</li>
      </ol>
    </div>
  </section>

  <!-- Cierre aspiracional y CTA -->
  <section class="w-full max-w-4xl mx-auto mb-16 text-center">
    <h2 class="text-2xl md:text-3xl font-bold mb-4 text-blue-600">Empieza con un menú que refleja tu pasión.</h2>
    <p class="text-lg text-gray-700 mb-6">Haz que cada cliente entienda lo que has creado.</p>
  </section>
</div> 