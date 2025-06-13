<script lang="ts">
  import { Users, CheckCircle, ArrowRight, Info, LayoutDashboard, Sparkles, Globe, MessageCircle, UserCheck, BarChart2, ShieldCheck, Settings, Star } from 'lucide-svelte';
</script>

<svelte:head>
  <title>Restaurante turístico | Reco</title>
  <meta name="description" content="Reco es el camarero digital que apoya a tu equipo y ayuda a tu restaurante turístico a vender más y trabajar mejor." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 flex flex-col items-center font-sans px-4 sm:px-6">
  <!-- Hero -->
  <div class="w-full max-w-4xl mx-auto mt-12 md:mt-24 mb-4 md:mb-8 text-center">
    <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2 md:gap-3 max-w-xl mx-auto" style="letter-spacing:-0.01em;">
      <ShieldCheck class="inline w-8 h-8 text-blue-600" />
      Haz que cada turista se sienta como en casa. <span class="text-blue-600">Reco traduce y recomienda por ti.</span>
    </h1>
    <p class="text-lg md:text-xl text-gray-700 mb-2 flex items-center justify-center gap-2 max-w-xl mx-auto">
      <Users class="inline w-6 h-6 text-blue-500" />
      Reco es el camarero digital que apoya a tu equipo.
    </p>
  </div>

  <!-- Subhero -->
  <div class="w-full max-w-3xl mx-auto mb-8 text-center px-2">
    <p class="text-lg md:text-xl text-gray-700 flex items-center justify-center gap-2 max-w-xl mx-auto">
      <Info class="inline w-5 h-5 text-blue-400" />
      Reco traduce, recomienda y promociona tu menú sin que tengas que imprimir nada ni entrenar a todo el staff.
    </p>
  </div>

  <!-- El problema y Qué hace Reco -->
  <div class="w-full max-w-4xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-8">
    <div class="rounded-2xl bg-white/70 shadow-2xl p-8 border border-blue-100 flex flex-col justify-center backdrop-blur-md">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
        <Users class="w-6 h-6 text-blue-500" /> El problema
      </h2>
      <p class="text-gray-700 mb-2">Clientes de todo el mundo, idiomas distintos, expectativas variadas.</p>
      <p class="text-gray-700">Reco es la ayuda invisible que traduce y recomienda en tiempo real.</p>
    </div>
    <div class="rounded-2xl bg-white/70 shadow-2xl p-8 border border-blue-100 flex flex-col justify-center backdrop-blur-md">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
        <Sparkles class="w-6 h-6 text-blue-500" /> ¿Qué hace Reco?
      </h2>
      <ol class="text-gray-700 space-y-2 text-left mx-auto max-w-xs list-decimal list-inside">
        <li class="flex items-center gap-2"><Globe class="w-5 h-5 text-blue-400" />Traduce automáticamente tu carta.</li>
        <li class="flex items-center gap-2"><ArrowRight class="w-5 h-5 text-blue-400" />Resalta los platos que quieres impulsar.</li>
        <li class="flex items-center gap-2"><MessageCircle class="w-5 h-5 text-blue-400" />Responde dudas frecuentes de los clientes.</li>
        <li class="flex items-center gap-2"><UserCheck class="w-5 h-5 text-blue-400" />Ayuda a un staff nuevo a vender como un veterano.</li>
        <li class="flex items-center gap-2"><BarChart2 class="w-5 h-5 text-blue-400" />Te muestra qué platos están funcionando mejor.</li>
      </ol>
    </div>
  </div>

  <!-- Beneficios concretos y Cómo funciona -->
  <div class="w-full max-w-4xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-8">
    <div class="rounded-2xl bg-white/80 shadow-2xl p-8 border border-blue-100 flex flex-col justify-center backdrop-blur-md">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
        <CheckCircle class="w-6 h-6 text-green-500" /> Beneficios concretos
      </h2>
      <ul class="text-gray-700 space-y-2 text-left mx-auto max-w-xs list-disc list-inside">
        <li class="flex items-center gap-2"><CheckCircle class="w-5 h-5 text-green-500" />Ahorra tiempo en actualizaciones de menú.</li>
        <li class="flex items-center gap-2"><CheckCircle class="w-5 h-5 text-green-500" />Evita errores de pedidos.</li>
        <li class="flex items-center gap-2"><CheckCircle class="w-5 h-5 text-green-500" />Mejora la experiencia de los turistas.</li>
        <li class="flex items-center gap-2"><CheckCircle class="w-5 h-5 text-green-500" />Da tranquilidad a tu staff.</li>
        <li class="flex items-center gap-2"><CheckCircle class="w-5 h-5 text-green-500" />Te ayuda a tomar decisiones sobre el menú.</li>
        <li class="flex items-center gap-2"><CheckCircle class="w-5 h-5 text-green-500" />No requiere instalación.</li>
      </ul>
    </div>
    <div class="rounded-2xl bg-white/80 shadow-2xl p-8 border border-blue-100 flex flex-col justify-center backdrop-blur-md">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
        <LayoutDashboard class="w-6 h-6 text-blue-500" /> ¿Cómo funciona?
      </h2>
      <ol class="text-gray-700 space-y-2 text-left mx-auto max-w-xs list-decimal list-inside">
        <li class="flex items-center gap-2"><Globe class="w-5 h-5 text-blue-400" />Subes tu menú a Reco.</li>
        <li class="flex items-center gap-2"><Users class="w-5 h-5 text-blue-400" />Tus clientes acceden por QR.</li>
        <li class="flex items-center gap-2"><Star class="w-5 h-5 text-yellow-400" />Reco muestra tus platos destacados y responde dudas.</li>
        <li class="flex items-center gap-2"><Settings class="w-5 h-5 text-blue-400" />Tú controlas qué resaltar cada día.</li>
      </ol>
    </div>
  </div>

  <!-- Cierre aspiracional y CTA -->
  <section class="w-full max-w-4xl mx-auto mb-12 md:mb-16 text-center px-2">
    <h2 class="text-2xl md:text-3xl font-bold mb-4 text-blue-600 flex items-center justify-center gap-2 md:gap-4 max-w-xl mx-auto">
      <Sparkles class="w-7 h-7 text-blue-600" /> Deja que tus clientes disfruten más.
    </h2>
    <p class="text-lg text-gray-700 mb-6 max-w-xl mx-auto">Deja que tu equipo trabaje mejor.</p>
    <div class="flex flex-col md:flex-row gap-3 md:gap-4 justify-center">
      <a href="#demo" class="w-full md:w-auto rounded-full bg-blue-600 text-white px-8 py-3 font-semibold shadow-md hover:bg-blue-700 transition-all text-lg flex items-center gap-2 justify-center"><ArrowRight class="w-5 h-5" /> Pide una demo para restaurantes turísticos</a>
      <a href="#casos" class="w-full md:w-auto rounded-full bg-white/80 text-blue-600 px-8 py-3 font-semibold shadow-md border border-blue-200 hover:bg-blue-50 transition-all text-lg flex items-center gap-2 justify-center"><Info class="w-5 h-5" /> Ver cómo Reco ayuda a casas como la tuya</a>
    </div>
  </section>
</div> 