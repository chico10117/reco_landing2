<script lang="ts">
  // Aquí podrías importar un botón o componentes reutilizables si lo deseas
</script>

<svelte:head>
  <title>Restaurantes de autor | Reco</title>
  <meta name="description" content="Lleva tu storytelling gastronómico al menú digital y haz que tu carta cuente tu historia con Reco." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 flex flex-col items-center font-sans">
  <!-- Hero -->
  <div class="w-full max-w-4xl mx-auto mt-24 mb-4 text-center">
    <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style="letter-spacing:-0.01em;">Tu carta es parte de tu arte. <span class="text-blue-600">Reco te ayuda a que se lea, se entienda y se disfrute como tú quieres.</span></h1>
    <p class="text-lg md:text-xl text-gray-700 mb-2">Lleva tu storytelling gastronómico al menú digital.</p>
  </div>

  <!-- Subhero -->
  <div class="w-full max-w-3xl mx-auto mb-8 text-center">
    <p class="text-lg md:text-xl text-gray-700">Reco potencia tu carta como extensión de la experiencia del restaurante.</p>
  </div>

  <!-- El problema -->
  <section class="w-full max-w-4xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="rounded-2xl bg-white/70 shadow-md p-8 border border-blue-100 flex flex-col justify-center">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3">El problema</h2>
      <p class="text-gray-700 mb-2">Tu cocina tiene personalidad. Tu menú también debería tenerla.<br>Menús QR genéricos no reflejan tu narrativa. Los camareros no siempre cuentan bien la historia. Los clientes a veces no entienden qué hace especial tu propuesta.</p>
      <p class="text-gray-700">Reco es el menú digital que no aplana tu experiencia: <span class="font-semibold text-blue-600">la amplifica.</span></p>
    </div>
    <!-- Qué hace Reco -->
    <div class="rounded-2xl bg-white/70 shadow-md p-8 border border-blue-100 flex flex-col justify-center">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3">¿Qué hace Reco?</h2>
      <ul class="text-gray-700 space-y-2 text-left mx-auto max-w-xs list-disc list-inside">
        <li>Te da control total de diseño visual y storytelling.</li>
        <li>Añade descripciones narrativas de platos.</li>
        <li>Sugiere maridajes, acompañamientos.</li>
        <li>Resalta creaciones de temporada.</li>
        <li>Te da feedback inmediato de qué platos conectan más.</li>
      </ul>
    </div>
  </section>

  <!-- Beneficios concretos -->
  <section class="w-full max-w-4xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="rounded-2xl bg-white/80 shadow-md p-8 border border-blue-100 flex flex-col justify-center">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3">Beneficios concretos</h2>
      <ul class="text-gray-700 space-y-2 text-left mx-auto max-w-xs list-disc list-inside">
        <li>Una carta que respira tu identidad creativa.</li>
        <li>Storytelling que el staff no siempre puede contar.</li>
        <li>Mayor descubrimiento de platos especiales.</li>
        <li>Mejor experiencia para clientes internacionales.</li>
        <li>Incremento en maridajes y ventas complementarias.</li>
        <li>Feedback inmediato sobre nuevas creaciones.</li>
      </ul>
    </div>
    <!-- Cómo funciona -->
    <div class="rounded-2xl bg-white/80 shadow-md p-8 border border-blue-100 flex flex-col justify-center">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3">¿Cómo funciona?</h2>
      <ol class="text-gray-700 space-y-2 text-left mx-auto max-w-xs list-decimal list-inside">
        <li>Personalizas tu menú en Reco.</li>
        <li>Clientes acceden vía QR.</li>
        <li>Reco sugiere maridajes y resalta tus estrellas.</li>
        <li>Tú recibes feedback en tiempo real.</li>
      </ol>
    </div>
  </section>

  <!-- Cierre aspiracional y CTA -->
  <section class="w-full max-w-4xl mx-auto mb-16 text-center">
    <h2 class="text-2xl md:text-3xl font-bold mb-4 text-blue-600">Convierte cada menú en un recorrido emocional por tu cocina.</h2>
    <p class="text-lg text-gray-700 mb-6">Haz que tu historia llegue a la mesa como tú quieres.</p>
    <div class="flex flex-col md:flex-row gap-4 justify-center">
      <a href="#explora" class="rounded-full bg-blue-600 text-white px-8 py-3 font-semibold shadow-md hover:bg-blue-700 transition-all text-lg">👉 Explora cómo Reco puede elevar tu carta</a>
      <a href="#ejemplos" class="rounded-full bg-white/80 text-blue-600 px-8 py-3 font-semibold shadow-md border border-blue-200 hover:bg-blue-50 transition-all text-lg">👉 Ver ejemplos de storytelling gastronómico con Reco</a>
    </div>
  </section>
</div> 