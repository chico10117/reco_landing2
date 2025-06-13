<script lang="ts">
  import { TrendingUp, Settings, Users, CheckCircle, ArrowRight, Info, LayoutDashboard, Sparkles, Globe, Clock, UserCheck, BarChart2 } from 'lucide-svelte';
</script>

<svelte:head>
  <title>Fast-casual | Reco</title>
  <meta name="description" content="Convierte tu menú en un motor de ingresos para tu cadena fast-casual con Reco." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 flex flex-col items-center font-sans px-4 sm:px-6">
  <!-- Hero -->
  <div class="w-full max-w-4xl mx-auto mt-12 md:mt-24 mb-4 md:mb-8 text-center">
    <h1 class="text-4xl md:text-5xl font-bold mb-4 max-w-full mx-auto" style="letter-spacing:-0.01em;">
      <span class="text-gray-900 font-bold inline">Convierte tu menú en un motor de ingresos.&nbsp;</span><span class="text-blue-600 font-bold inline">Sin apps. Sin fricción.</span>
    </h1>
    <p class="text-lg md:text-xl text-gray-700 mb-2 flex items-center justify-center gap-2 max-w-xl mx-auto">
      <TrendingUp class="inline w-6 h-6 text-blue-500" />
      Optimiza cada pedido, cada turno y cada local con <span class="font-semibold text-blue-600"> Reco</span>.
    </p>
  </div>

  <!-- Subhero -->
  <div class="w-full max-w-3xl mx-auto mb-8 text-center px-2">
    <p class="text-lg md:text-xl text-gray-700 flex items-center justify-center gap-2 max-w-xl mx-auto">
      <Info class="inline w-5 h-5 text-blue-400" />
      Reco es la capa inteligente que potencia tus menús QR. Personaliza la experiencia, aumenta el ticket medio<br>y aligera la operación.
    </p>
  </div>

  <!-- El problema y Qué hace Reco -->
  <div class="w-full max-w-4xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-8">
    <div class="rounded-2xl bg-white/70 shadow-2xl p-8 border border-blue-100 flex flex-col justify-center backdrop-blur-md">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
        <Users class="w-6 h-6 text-blue-500" /> El problema
      </h2>
      <p class="text-gray-700 mb-2">Dirigir una cadena fast-casual hoy es una batalla constante entre velocidad, eficiencia y experiencia.<br>Tu equipo rota. Los clientes esperan inmediatez. Los márgenes son estrechos. Y aunque tienes datos... no siempre se convierten en decisiones de menú claras.</p>
      <p class="text-gray-700">El menú es la herramienta que todos tus clientes tocan — pero que aún no te ayuda a vender mejor. <span class="font-semibold text-blue-600">Reco lo cambia.</span></p>
    </div>
    <div class="rounded-2xl bg-white/70 shadow-2xl p-8 border border-blue-100 flex flex-col justify-center backdrop-blur-md">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
        <Settings class="w-6 h-6 text-blue-500" /> ¿Qué hace Reco?
      </h2>
      <ul class="text-gray-700 space-y-2 text-left mx-auto max-w-xs list-disc list-inside">
        <li class="flex items-center gap-2"><CheckCircle class="w-5 h-5 text-green-500" />Promociona automáticamente platos de alta rentabilidad.</li>
        <li class="flex items-center gap-2"><Clock class="w-5 h-5 text-blue-400" />Ajusta la experiencia del menú por franja horaria o tipo de cliente.</li>
        <li class="flex items-center gap-2"><ArrowRight class="w-5 h-5 text-blue-400" />Sugiere cross-selling y up-selling personalizados.</li>
        <li class="flex items-center gap-2"><BarChart2 class="w-5 h-5 text-blue-400" />Te alerta de qué platos están cayendo en ventas.</li>
        <li class="flex items-center gap-2"><UserCheck class="w-5 h-5 text-blue-400" />Alivia la presión de tus equipos en horas pico.</li>
      </ul>
    </div>
  </div>

  <!-- Beneficios concretos y Cómo funciona -->
  <div class="w-full max-w-4xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-8">
    <div class="rounded-2xl bg-white/80 shadow-2xl p-8 border border-blue-100 flex flex-col justify-center backdrop-blur-md">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
        <TrendingUp class="w-6 h-6 text-green-500" /> Beneficios concretos
      </h2>
      <ul class="text-gray-700 space-y-2 text-left mx-auto max-w-xs list-disc list-inside">
        <li class="flex items-center gap-2"><CheckCircle class="w-5 h-5 text-green-500" /><span class="font-bold text-blue-600">+10-20%</span> en ticket medio gracias a recomendaciones inteligentes.</li>
        <li class="flex items-center gap-2"><CheckCircle class="w-5 h-5 text-green-500" />Reducción del error humano en pedidos.</li>
        <li class="flex items-center gap-2"><CheckCircle class="w-5 h-5 text-green-500" />Consistencia en upselling, sin depender del staff.</li>
        <li class="flex items-center gap-2"><CheckCircle class="w-5 h-5 text-green-500" />Datos accionables sobre preferencias de cliente y desempeño de producto.</li>
        <li class="flex items-center gap-2"><CheckCircle class="w-5 h-5 text-green-500" />Integración fluida: no requiere hardware ni app.</li>
        <li class="flex items-center gap-2"><CheckCircle class="w-5 h-5 text-green-500" />Despliegue y control centralizado para toda la cadena.</li>
      </ul>
    </div>
    <div class="rounded-2xl bg-white/80 shadow-2xl p-8 border border-blue-100 flex flex-col justify-center backdrop-blur-md">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
        <LayoutDashboard class="w-6 h-6 text-blue-500" /> ¿Cómo funciona?
      </h2>
      <ol class="text-gray-700 space-y-2 text-left mx-auto max-w-xs list-decimal list-inside">
        <li class="flex items-center gap-2"><Globe class="w-5 h-5 text-blue-400" />Subes tu menú a Reco.</li>
        <li class="flex items-center gap-2"><Users class="w-5 h-5 text-blue-400" />Tus clientes acceden vía QR.</li>
        <li class="flex items-center gap-2"><Sparkles class="w-5 h-5 text-blue-400" />Reco personaliza las recomendaciones.</li>
        <li class="flex items-center gap-2"><BarChart2 class="w-5 h-5 text-blue-400" />Tú ves resultados en un panel simple.</li>
        <li class="flex items-center gap-2"><Settings class="w-5 h-5 text-blue-400" />Ajustas el menú y las promociones.</li>
      </ol>
    </div>
  </div>

  <!-- Cierre aspiracional y CTA -->
  <section class="w-full max-w-4xl mx-auto mb-12 md:mb-16 text-center px-2">
    <h2 class="text-2xl md:text-3xl font-bold mb-4 text-blue-600 flex items-center justify-center gap-2 md:gap-4 max-w-xl mx-auto">
      <TrendingUp class="w-7 h-7 text-blue-600" /> Más ingresos. Menos fricción. Más agilidad en cada local.
    </h2>
    <p class="text-lg text-gray-700 mb-6 max-w-xl mx-auto">Reco convierte tu menú en tu mejor vendedor, 24/7.</p>
    <div class="flex flex-col md:flex-row gap-3 md:gap-4 justify-center">
      <a href="#demo" class="w-full md:w-auto rounded-full bg-blue-600 text-white px-8 py-3 font-semibold shadow-md hover:bg-blue-700 transition-all text-lg flex items-center gap-2 justify-center"><ArrowRight class="w-5 h-5" /> Solicita una demo para tu cadena fast-casual</a>
      <a href="#casos-exito" class="w-full md:w-auto rounded-full bg-white/80 text-blue-600 px-8 py-3 font-semibold shadow-md border border-blue-200 hover:bg-blue-50 transition-all text-lg flex items-center gap-2 justify-center"><Info class="w-5 h-5" /> Ver casos de éxito con cadenas como la tuya</a>
    </div>
  </section>
</div> 