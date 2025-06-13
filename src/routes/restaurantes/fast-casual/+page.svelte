<script lang="ts">
  // Aquí podrías importar un botón o componentes reutilizables si lo deseas
</script>

<svelte:head>
  <title>Fast-casual | Reco</title>
  <meta name="description" content="Convierte tu menú en un motor de ingresos para tu cadena fast-casual con Reco." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 flex flex-col items-center font-sans">
  <!-- Hero -->
  <div class="w-full max-w-4xl mx-auto mt-24 mb-4 text-center">
    <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style="letter-spacing:-0.01em;">Convierte tu menú en un motor de ingresos. <span class="text-blue-600">Sin apps. Sin fricción.</span></h1>
    <p class="text-lg md:text-xl text-gray-700 mb-2">Optimiza cada pedido, cada turno y cada local con <span class="font-semibold text-blue-600">Reco</span>.</p>
  </div>

  <!-- Subhero -->
  <div class="w-full max-w-3xl mx-auto mb-8 text-center">
    <p class="text-lg md:text-xl text-gray-700">Reco es la capa inteligente que potencia tus menús QR. Personaliza la experiencia, aumenta el ticket medio<br>y aligera la operación.</p>
  </div>

  <!-- El problema -->
  <section class="w-full max-w-4xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="rounded-2xl bg-white/70 shadow-md p-8 border border-blue-100 flex flex-col justify-center">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3">El problema</h2>
      <p class="text-gray-700 mb-2">Dirigir una cadena fast-casual hoy es una batalla constante entre velocidad, eficiencia y experiencia.<br>Tu equipo rota. Los clientes esperan inmediatez. Los márgenes son estrechos. Y aunque tienes datos... no siempre se convierten en decisiones de menú claras.</p>
      <p class="text-gray-700">El menú es la herramienta que todos tus clientes tocan — pero que aún no te ayuda a vender mejor. <span class="font-semibold text-blue-600">Reco lo cambia.</span></p>
    </div>
    <!-- Qué hace Reco -->
    <div class="rounded-2xl bg-white/70 shadow-md p-8 border border-blue-100 flex flex-col justify-center">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3">¿Qué hace Reco?</h2>
      <ul class="text-gray-700 space-y-2 text-left mx-auto max-w-xs list-disc list-inside">
        <li>Promociona automáticamente platos de alta rentabilidad.</li>
        <li>Ajusta la experiencia del menú por franja horaria o tipo de cliente.</li>
        <li>Sugiere cross-selling y up-selling personalizados.</li>
        <li>Te alerta de qué platos están cayendo en ventas.</li>
        <li>Alivia la presión de tus equipos en horas pico.</li>
      </ul>
    </div>
  </section>

  <!-- Beneficios concretos -->
  <section class="w-full max-w-4xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="rounded-2xl bg-white/80 shadow-md p-8 border border-blue-100 flex flex-col justify-center">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3">Beneficios concretos</h2>
      <ul class="text-gray-700 space-y-2 text-left mx-auto max-w-xs list-disc list-inside">
        <li><span class="font-bold text-blue-600">+10-20%</span> en ticket medio gracias a recomendaciones inteligentes.</li>
        <li>Reducción del error humano en pedidos.</li>
        <li>Consistencia en upselling, sin depender del staff.</li>
        <li>Datos accionables sobre preferencias de cliente y desempeño de producto.</li>
        <li>Integración fluida: no requiere hardware ni app.</li>
        <li>Despliegue y control centralizado para toda la cadena.</li>
      </ul>
    </div>
    <!-- Cómo funciona -->
    <div class="rounded-2xl bg-white/80 shadow-md p-8 border border-blue-100 flex flex-col justify-center">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3">¿Cómo funciona?</h2>
      <ol class="text-gray-700 space-y-2 text-left mx-auto max-w-xs list-decimal list-inside">
        <li>Subes tu menú a Reco.</li>
        <li>Tus clientes acceden vía QR.</li>
        <li>Reco personaliza las recomendaciones.</li>
        <li>Tú ves resultados en un panel simple.</li>
        <li>Ajustas el menú y las promociones.</li>
      </ol>
    </div>
  </section>

  <!-- Cierre aspiracional y CTA -->
  <section class="w-full max-w-4xl mx-auto mb-16 text-center">
    <h2 class="text-2xl md:text-3xl font-bold mb-4 text-blue-600">Más ingresos. Menos fricción. Más agilidad en cada local.</h2>
    <p class="text-lg text-gray-700 mb-6">Reco convierte tu menú en tu mejor vendedor, 24/7.</p>
    <div class="flex flex-col md:flex-row gap-4 justify-center">
      <a href="#demo" class="rounded-full bg-blue-600 text-white px-8 py-3 font-semibold shadow-md hover:bg-blue-700 transition-all text-lg">👉 Solicita una demo para tu cadena fast-casual</a>
      <a href="#casos-exito" class="rounded-full bg-white/80 text-blue-600 px-8 py-3 font-semibold shadow-md border border-blue-200 hover:bg-blue-50 transition-all text-lg">👉 Ver casos de éxito con cadenas como la tuya</a>
    </div>
  </section>
</div> 