<script lang="ts">
  // Aquí podrías importar un botón o componentes reutilizables si lo deseas
</script>

<svelte:head>
  <title>Restaurante turístico | Reco</title>
  <meta name="description" content="Reco hace que cada turista entienda, aprecie y recomiende tu cocina. Sin que pierdas tiempo ni la esencia de tu restaurante." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 flex flex-col items-center font-sans">
  <!-- Hero -->
  <div class="w-full max-w-4xl mx-auto mt-24 mb-4 text-center">
    <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style="letter-spacing:-0.01em;">Reco hace que cada turista entienda, aprecie… <span class="text-blue-600">y recomiende tu cocina.</span></h1>
    <p class="text-lg md:text-xl text-gray-700 mb-2">Sin que tú pierdas tu tiempo ni la esencia de tu restaurante.</p>
  </div>

  <!-- Subhero -->
  <div class="w-full max-w-3xl mx-auto mb-8 text-center">
    <p class="text-lg md:text-xl text-gray-700">Cuando el 75% de tus clientes son turistas, la experiencia empieza por un menú que se entiende.</p>
  </div>

  <!-- El problema -->
  <section class="w-full max-w-4xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="rounded-2xl bg-white/70 shadow-md p-8 border border-blue-100 flex flex-col justify-center">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3">El problema</h2>
      <p class="text-gray-700 mb-2">Cada día recibes clientes de todo el mundo. Muchos no entienden bien la carta. A veces se frustran.</p>
      <p class="text-gray-700">Reco hace que tu menú hable el idioma de tus clientes.</p>
    </div>
    <!-- Qué hace Reco -->
    <div class="rounded-2xl bg-white/70 shadow-md p-8 border border-blue-100 flex flex-col justify-center">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3">¿Qué hace Reco?</h2>
      <ul class="text-gray-700 space-y-2 text-left mx-auto max-w-xs list-disc list-inside">
        <li>Traduce automáticamente tu carta.</li>
        <li>Añade contexto cultural a los platos.</li>
        <li>Promociona tus platos especiales.</li>
        <li>Ayuda a tu staff a explicar mejor el menú.</li>
        <li>Reduce errores y mejora las reseñas.</li>
      </ul>
    </div>
  </section>

  <!-- Beneficios concretos -->
  <section class="w-full max-w-4xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="rounded-2xl bg-white/80 shadow-md p-8 border border-blue-100 flex flex-col justify-center">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3">Beneficios concretos</h2>
      <ul class="text-gray-700 space-y-2 text-left mx-auto max-w-xs list-disc list-inside">
        <li>Menos malentendidos.</li>
        <li>Aumento de venta en platos de margen alto.</li>
        <li>Mejores reseñas online.</li>
        <li>Staff más confiado.</li>
        <li>Setup sencillo.</li>
      </ul>
    </div>
    <!-- Cómo funciona -->
    <div class="rounded-2xl bg-white/80 shadow-md p-8 border border-blue-100 flex flex-col justify-center">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3">¿Cómo funciona?</h2>
      <ol class="text-gray-700 space-y-2 text-left mx-auto max-w-xs list-decimal list-inside">
        <li>Subimos tu carta a Reco.</li>
        <li>Los clientes acceden vía QR.</li>
        <li>Reco responde dudas y sugiere los platos.</li>
        <li>Tú puedes cambiar lo que quieras.</li>
      </ol>
    </div>
  </section>

  <!-- Cierre aspiracional y CTA -->
  <section class="w-full max-w-4xl mx-auto mb-16 text-center">
    <h2 class="text-2xl md:text-3xl font-bold mb-4 text-blue-600">Haz que cada turista entienda el valor de tu cocina.</h2>
    <p class="text-lg text-gray-700 mb-6">Haz que tu equipo trabaje con más confianza.</p>
    <div class="flex flex-col md:flex-row gap-4 justify-center">
      <a href="#demo" class="rounded-full bg-blue-600 text-white px-8 py-3 font-semibold shadow-md hover:bg-blue-700 transition-all text-lg">👉 Ver demo para restaurantes en zonas turísticas</a>
      <a href="#gratis" class="rounded-full bg-white/80 text-blue-600 px-8 py-3 font-semibold shadow-md border border-blue-200 hover:bg-blue-50 transition-all text-lg">👉 Empieza gratis y mide el impacto en tus reseñas</a>
    </div>
  </section>
</div> 