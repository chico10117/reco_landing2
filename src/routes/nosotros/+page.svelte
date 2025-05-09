<script lang="ts">
  const equipo = [
    {
      nombre: 'Ana García',
      cargo: 'CEO & Co-fundadora',
      foto: '/img/team/ana.jpg',
      bio: 'Experta en tecnología y restauración con más de 10 años de experiencia.'
    },
    {
      nombre: 'Carlos Rodríguez',
      cargo: 'CTO & Co-fundador',
      foto: '/img/team/carlos.jpg',
      bio: 'Ingeniero de software especializado en IA y experiencia de usuario.'
    },
    {
      nombre: 'Laura Martínez',
      cargo: 'Directora de Producto',
      foto: '/img/team/laura.jpg',
      bio: 'Especialista en diseño de productos digitales y experiencia de usuario.'
    }
  ];

  const valores = [
    {
      titulo: 'Innovación',
      descripcion: 'Buscamos constantemente nuevas formas de mejorar la experiencia gastronómica.',
      icono: '🚀'
    },
    {
      titulo: 'Calidad',
      descripcion: 'Nos comprometemos con la excelencia en cada aspecto de nuestro servicio.',
      icono: '⭐'
    },
    {
      titulo: 'Sostenibilidad',
      descripcion: 'Trabajamos por un futuro más sostenible para la industria de la restauración.',
      icono: '🌱'
    }
  ];
</script>

<svelte:head>
  <title>Nosotros | Reco</title>
  <meta name="description" content="Conoce al equipo detrás de Reco." />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
  <!-- Sección de Historia -->
  <div class="text-center mb-16">
    <h1 class="text-4xl font-bold text-gray-900 mb-4">Nuestra Historia</h1>
    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
      Reco nació de la pasión por la gastronomía y la tecnología. Nuestra misión es transformar 
      la experiencia de comer fuera haciéndola más personal, intuitiva y satisfactoria.
    </p>
  </div>

  <!-- Sección de Valores -->
  <div class="mb-16">
    <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Nuestros Valores</h2>
    <div class="grid md:grid-cols-3 gap-8">
      {#each valores as valor}
        <div class="text-center">
          <div class="text-4xl mb-4">{valor.icono}</div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{valor.titulo}</h3>
          <p class="text-gray-600">{valor.descripcion}</p>
        </div>
      {/each}
    </div>
  </div>

  <!-- Sección del Equipo -->
  <div>
    <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Nuestro Equipo</h2>
    <div class="grid md:grid-cols-3 gap-8">
      {#each equipo as miembro}
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src={miembro.foto} 
            alt={miembro.nombre}
            class="w-full h-64 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-1">{miembro.nombre}</h3>
            <p class="text-blue-600 mb-3">{miembro.cargo}</p>
            <p class="text-gray-600">{miembro.bio}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Sección de CTA -->
  <div class="mt-16 text-center">
    <p class="text-gray-600">
      ¿Quieres formar parte de nuestro equipo? 
      <a href="/contact" class="text-blue-600 hover:underline">Revisa nuestras ofertas de trabajo</a>
    </p>
  </div>
</div> 