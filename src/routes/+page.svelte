<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Checkbox } from "$lib/components/ui/checkbox";
  import { Card, CardContent } from "$lib/components/ui/card";
  import Modal from "$lib/components/ui/modal/modal.svelte";
  import { DollarSign, Globe, Shield, Play, Twitter, Instagram, Linkedin, Check } from "lucide-svelte";
  import { onMount } from 'svelte';

  let showModal = false;
  let mounted = false;

  onMount(() => {
    mounted = true;
    console.log('Component mounted');
  });

  $: {
    if (mounted) {
      console.log('showModal changed:', showModal);
    }
  }

  let name = '';
  let email = '';
  let whatsapp = '';
  let newsletter = false;

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    console.log({ name, email, whatsapp, newsletter });
    showModal = false;
  }
</script>

<div class="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900">
  <header class="relative bg-black text-white min-h-[80vh]">
    <div class="absolute inset-0 z-0">
      <!-- <img
        src="https://media.fashionnetwork.com/cdn-cgi/image/format=auto/m/26fe/feb9/7ddc/56d4/f480/443f/deb7/a804/5bae/268b/268b.jpg"
        alt="Background"
        class="object-cover w-full h-full opacity-40"
        style="object-position: center 30%;"
      /> -->
    </div>
    <div class="relative z-10 container mx-auto px-4 py-24 md:py-32 min-h-[80vh] flex items-center">
      <div class="max-w-4xl mx-auto text-center space-y-8">
        <h1 class="text-4xl md:text-6xl font-bold tracking-tight">
          Revoluciona tu Presencia Digital con <span class="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">ConectArte</span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-200">
          Únete a una comunidad donde tu contenido brilla y se conecta globalmente.
        </p>
        <div class="flex justify-center">
          <button 
            class="bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-md text-lg"
            on:click={() => {
              console.log('Opening modal...');
              showModal = true;
            }}
          >
            Únete a la Lista de Espera Ahora
          </button>
        </div>
      </div>
    </div>
    <div class="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50 z-[1]"></div>
  </header>

  <main>
    <section class="container mx-auto px-4 py-16">
      <h2 class="text-3xl font-bold text-center mb-12">Características Clave</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardContent class="flex flex-col items-center p-6">
            <DollarSign class="w-12 h-12 text-red-600 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Sin Comisiones</h3>
            <p class="text-center">Quédate con el 100% de tus ganancias</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent class="flex flex-col items-center p-6">
            <Globe class="w-12 h-12 text-red-600 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Alcance Global</h3>
            <p class="text-center">Conéctate con una audiencia mundial</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent class="flex flex-col items-center p-6">
            <Shield class="w-12 h-12 text-red-600 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Seguro y Privado</h3>
            <p class="text-center">Tu seguridad es nuestra prioridad</p>
          </CardContent>
        </Card>
      </div>
    </section>

    <!-- Video section -->
    <section class="bg-black text-white py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">Mira Cómo Funciona</h2>
        <div class="relative aspect-video max-w-3xl mx-auto">
          <iframe
            src="https://www.youtube.com/embed/kmD9Y8w887k"
            title="ConectArte Video"
            class="w-full h-full rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>

    <!-- Benefits section -->
    <section class="container mx-auto px-4 py-16 pb-8">
      <h2 class="text-3xl font-bold text-center mb-8">Beneficios Exclusivos de Prelanzamiento</h2>
      <ul class="max-w-2xl mx-auto space-y-4 text-lg">
        <li class="flex items-center">
          <Check class="w-6 h-6 text-red-600 mr-2 flex-shrink-0" />
          50% de descuento en tu primera suscripción anual
        </li>
        <li class="flex items-center">
          <Check class="w-6 h-6 text-red-600 mr-2 flex-shrink-0" />
          Acceso anticipado a funciones premium
        </li>
        <li class="flex items-center">
          <Check class="w-6 h-6 text-red-600 mr-2 flex-shrink-0" />
          Sesión de incorporación personalizada con nuestro equipo
        </li>
        <li class="flex items-center">
          <Check class="w-6 h-6 text-red-600 mr-2 flex-shrink-0" />
          Talleres exclusivos de creación de contenido y marketing digital
        </li>
        <li class="flex items-center">
          <Check class="w-6 h-6 text-red-600 mr-2 flex-shrink-0" />
          Perfil verificado y distintivo especial de miembro fundador
        </li>
        <li class="flex items-center">
          <Check class="w-6 h-6 text-red-600 mr-2 flex-shrink-0" />
          Prioridad en el soporte técnico 24/7
        </li>
        <li class="flex items-center">
          <Check class="w-6 h-6 text-red-600 mr-2 flex-shrink-0" />
          Acceso a eventos y networking exclusivos de la comunidad
        </li>
        <li class="flex items-center">
          <Check class="w-6 h-6 text-red-600 mr-2 flex-shrink-0" />
          Herramientas premium de análisis y métricas de audiencia
        </li>
      </ul>
    </section>

    <!-- Form section -->
    <section class="container mx-auto px-4 py-8">
      <h2 class="text-3xl font-bold text-center mb-8">Únete a la Lista de Espera</h2>
      <form on:submit={handleSubmit} class="max-w-md mx-auto space-y-4">
        <Input
          type="text"
          placeholder="Tu Nombre"
          bind:value={name}
          required
        />
        <Input
          type="email"
          placeholder="Tu Email"
          bind:value={email}
          required
        />
        <Input
          type="tel"
          placeholder="Tu WhatsApp"
          bind:value={whatsapp}
          required
        />
        <div class="flex items-center space-x-2">
          <Checkbox
            id="newsletter"
            bind:checked={newsletter}
          />
          <label for="newsletter" class="text-sm">
            Suscríbete a nuestro boletín para recibir actualizaciones
          </label>
        </div>
        <Button type="submit" class="w-full bg-red-700 hover:bg-red-800 text-white font-semibold">
          Unirse a la Lista de Espera
        </Button>
      </form>
    </section>
  </main>

  <footer class="bg-black text-white py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <nav class="space-x-4 mb-4 md:mb-0">
          <a href="/privacy" class="hover:text-red-400">Política de Privacidad</a>
          <a href="/terms" class="hover:text-red-400">Términos de Servicio</a>
          <a href="/contact" class="hover:text-red-400">Contáctanos</a>
        </nav>
        <div class="flex space-x-4">
          <a href="https://twitter.com/conectarte" aria-label="Twitter">
            <Twitter class="w-6 h-6" />
          </a>
          <a href="https://instagram.com/conectarte" aria-label="Instagram">
            <Instagram class="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/company/conectarte" aria-label="LinkedIn">
            <Linkedin class="w-6 h-6" />
          </a>
        </div>
      </div>
      <p class="text-center mt-8">&copy; {new Date().getFullYear()} ConectArte. Todos los derechos reservados.</p>
    </div>
  </footer>

  <Modal bind:showModal>
    <form on:submit={handleSubmit} class="space-y-4">
      <Input
        type="text"
        placeholder="Tu Nombre"
        bind:value={name}
        required
      />
      <Input
        type="email"
        placeholder="Tu Email"
        bind:value={email}
        required
      />
      <Input
        type="tel"
        placeholder="Tu WhatsApp"
        bind:value={whatsapp}
        required
      />
      <div class="flex items-center space-x-2">
        <Checkbox
          id="newsletter-modal"
          bind:checked={newsletter}
        />
        <label for="newsletter-modal" class="text-sm">
          Suscríbete a nuestro boletín para recibir actualizaciones
        </label>
      </div>
      <Button type="submit" class="w-full bg-red-700 hover:bg-red-800 text-white font-semibold">
        Unirse a la Lista de Espera
      </Button>
    </form>
  </Modal>
</div> 