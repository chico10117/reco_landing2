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
      Reco hace que cada turista entienda, aprecie… <span class="text-blue-600">y recomiende tu cocina.</span>
    </h1>
    <p class="text-lg md:text-xl text-gray-700 mb-2 flex items-center justify-center gap-2 max-w-xl mx-auto">
      <Users class="inline w-6 h-6 text-blue-500" />
      Sin que tú pierdas tu tiempo ni la esencia de tu restaurante.
    </p>
  </div>

  <!-- Subhero -->
  <div class="w-full max-w-3xl mx-auto mb-8 text-center px-2">
    <p class="text-lg md:text-xl text-gray-700 flex items-center justify-center gap-2 max-w-xl mx-auto">
      <Info class="inline w-5 h-5 text-blue-400" />
      Cuando el 75% de tus clientes son turistas, la experiencia empieza por un menú que se entiende.
    </p>
  </div>

  <!-- El problema y Qué hace Reco -->
  <div class="w-full max-w-4xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-8">
    <div class="rounded-2xl bg-white/70 shadow-2xl p-8 border border-blue-100 flex flex-col justify-center backdrop-blur-md">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
        <Users class="w-6 h-6 text-blue-500" /> El problema
      </h2>
      <p class="text-gray-700 mb-2">Cada día recibes clientes de todo el mundo. Muchos no entienden bien la carta. A veces se frustran.</p>
      <p class="text-gray-700">Reco hace que tu menú hable el idioma de tus clientes.</p>
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
        <li class="flex items-center gap-2"><CheckCircle class="w-5 h-5 text-green-500" />Menos malentendidos.</li>
        <li class="flex items-center gap-2"><CheckCircle class="w-5 h-5 text-green-500" />Aumento de venta en platos de margen alto.</li>
        <li class="flex items-center gap-2"><CheckCircle class="w-5 h-5 text-green-500" />Mejores reseñas online.</li>
        <li class="flex items-center gap-2"><CheckCircle class="w-5 h-5 text-green-500" />Staff más confiado.</li>
        <li class="flex items-center gap-2"><CheckCircle class="w-5 h-5 text-green-500" />Setup sencillo.</li>
      </ul>
    </div>
    <div class="rounded-2xl bg-white/80 shadow-2xl p-8 border border-blue-100 flex flex-col justify-center backdrop-blur-md">
      <h2 class="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
        <LayoutDashboard class="w-6 h-6 text-blue-500" /> ¿Cómo funciona?
      </h2>
      <ol class="text-gray-700 space-y-2 text-left mx-auto max-w-xs list-decimal list-inside">
        <li class="flex items-center gap-2"><Globe class="w-5 h-5 text-blue-400" />Subimos tu carta a Reco.</li>
        <li class="flex items-center gap-2"><Users class="w-5 h-5 text-blue-400" />Los clientes acceden vía QR.</li>
        <li class="flex items-center gap-2"><Star class="w-5 h-5 text-yellow-400" />Reco responde dudas y sugiere los platos.</li>
        <li class="flex items-center gap-2"><Settings class="w-5 h-5 text-blue-400" />Tú puedes cambiar lo que quieras.</li>
      </ol>
    </div>
  </div>

  <!-- Cierre aspiracional y CTA -->
  <section class="w-full max-w-4xl mx-auto mb-12 md:mb-16 text-center px-2">
    <h2 class="text-2xl md:text-3xl font-bold mb-4 text-blue-600 flex items-center justify-center gap-2 md:gap-4 max-w-xl mx-auto">
      <Sparkles class="w-7 h-7 text-blue-600" /> Haz que cada turista entienda el valor de tu cocina.
    </h2>
    <p class="text-lg text-gray-700 mb-6 max-w-xl mx-auto">Haz que tu equipo trabaje con más confianza.</p>
    <div class="flex flex-col md:flex-row gap-3 md:gap-4 justify-center">
      <a href="#demo" class="w-full md:w-auto rounded-full bg-blue-600 text-white px-8 py-3 font-semibold shadow-md hover:bg-blue-700 transition-all text-lg flex items-center gap-2 justify-center"><ArrowRight class="w-5 h-5" /> Ver demo para restaurantes en zonas turísticas</a>
      <a href="#gratis" class="w-full md:w-auto rounded-full bg-white/80 text-blue-600 px-8 py-3 font-semibold shadow-md border border-blue-200 hover:bg-blue-50 transition-all text-lg flex items-center gap-2 justify-center"><Info class="w-5 h-5" /> Empieza gratis y mide el impacto en tus reseñas</a>
    </div>
  </section>
</div> 