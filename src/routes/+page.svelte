<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Checkbox } from "$lib/components/ui/checkbox";
  import { Card, CardContent } from "$lib/components/ui/card";
  import Modal from "$lib/components/ui/modal/modal.svelte";
  import { Search, Star, Play, Twitter, Instagram, Linkedin, Check } from "lucide-svelte";
  import { onMount } from 'svelte';

  let showModal = false;
  let mounted = false;

  onMount(() => {
    mounted = true;
  });

  $: {
    if (mounted) {
      console.log('showModal changed:', showModal);
    }
  }

  let searchQuery = '';
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

<div class="min-h-screen bg-white text-gray-900">
  <nav class="bg-white border-b border-gray-100 fixed w-full top-0 z-50 shadow-sm">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <div class="text-2xl font-bold text-red-600">SaborFans</div>
      <div class="flex items-center space-x-4">
        <Button 
          variant="ghost" 
          class="text-gray-700 hover:text-red-600 rounded-full px-6"
          on:click={() => showModal = true}
        >
          Acceso Anticipado
        </Button>
      </div>
    </div>
  </nav>

  <header class="pt-20 relative min-h-[90vh] flex items-center">
    <div class="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1469237559036-c4645cda1a05?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3"
        alt="Background"
        class="w-full h-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
    </div>
    <div class="container mx-auto px-4 py-12 relative z-10">
      <div class="max-w-4xl mx-auto text-center space-y-8">
        <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-white">
          La mayor plataforma de <span class="text-red-400">contenido exclusivo</span> en Latinoamérica
        </h1>
        <p class="text-xl text-gray-200">
          Regístrate ahora y obtén <span class="text-red-400 font-semibold">30 días de acceso VIP gratis</span>
        </p>
        <div class="flex flex-col space-y-4">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-8">
            <div class="bg-black/30 backdrop-blur-sm rounded-3xl p-6">
              <div class="text-xl font-bold text-white">+20 millones</div>
              <div class="text-gray-300">de usuarios</div>
            </div>
            <div class="bg-black/30 backdrop-blur-sm rounded-3xl p-6">
              <div class="text-xl font-bold text-white">+50 mil</div>
              <div class="text-gray-300">creadoras</div>
            </div>
            <div class="bg-black/30 backdrop-blur-sm rounded-3xl p-6">
              <div class="text-xl font-bold text-white">+600 mil</div>
              <div class="text-gray-300">videos</div>
            </div>
            <div class="bg-black/30 backdrop-blur-sm rounded-3xl p-6">
              <div class="text-xl font-bold text-white">+70 mil</div>
              <div class="text-gray-300">reseñas</div>
            </div>
          </div>
          <div class="max-w-md mx-auto w-full">
            <Button 
              class="w-full bg-red-600 hover:bg-red-700 text-white font-semibold text-lg py-6 rounded-full shadow-lg transform transition-transform hover:scale-105 backdrop-blur-sm"
              on:click={() => showModal = true}
            >
              Obtén Tu Acceso VIP Gratis
            </Button>
            <p class="text-sm text-gray-300 mt-2">¡Oferta por tiempo limitado!</p>
          </div>
        </div>
      </div>
    </div>
  </header>

  <main>
    <section class="bg-gray-50 py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">¿Por qué elegir SaborFans?</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <Card class="rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
            <CardContent class="p-6 text-center">
              <Star class="w-8 h-8 text-red-600 mx-auto mb-4" />
              <h3 class="font-semibold mb-2">Contenido Exclusivo</h3>
              <p class="text-gray-600">Acceso a contenido que no encontrarás en ningún otro lugar</p>
            </CardContent>
          </Card>
          <Card class="rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
            <CardContent class="p-6 text-center">
              <Play class="w-8 h-8 text-red-600 mx-auto mb-4" />
              <h3 class="font-semibold mb-2">Videos HD</h3>
              <p class="text-gray-600">Disfruta del mejor contenido en alta calidad</p>
            </CardContent>
          </Card>
          <Card class="rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
            <CardContent class="p-6 text-center">
              <Search class="w-8 h-8 text-red-600 mx-auto mb-4" />
              <h3 class="font-semibold mb-2">Creadoras Locales</h3>
              <p class="text-gray-600">Encuentra creadoras cerca de ti</p>
            </CardContent>
          </Card>
          <Card class="rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
            <CardContent class="p-6 text-center">
              <Check class="w-8 h-8 text-red-600 mx-auto mb-4" />
              <h3 class="font-semibold mb-2">100% Privado</h3>
              <p class="text-gray-600">Tu privacidad es nuestra prioridad</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Beneficios VIP</h2>
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-gray-50 rounded-3xl p-8 shadow-lg">
              <h3 class="text-xl font-bold mb-4">Acceso Gratuito</h3>
              <ul class="space-y-4">
                <li class="flex items-center">
                  <Check class="w-5 h-5 text-red-600 mr-2" />
                  <span>Contenido básico</span>
                </li>
                <li class="flex items-center">
                  <Check class="w-5 h-5 text-red-600 mr-2" />
                  <span>Búsqueda limitada</span>
                </li>
                <li class="flex items-center">
                  <Check class="w-5 h-5 text-red-600 mr-2" />
                  <span>Vista previa de videos</span>
                </li>
              </ul>
            </div>
            <div class="bg-red-50 rounded-3xl p-8 border-2 border-red-600 shadow-lg relative overflow-hidden">
              <div class="absolute top-0 right-0 bg-red-600 text-white px-6 py-2 rounded-bl-2xl shadow-md">
                ¡GRATIS por 30 días!
              </div>
              <h3 class="text-xl font-bold mb-4">Acceso VIP</h3>
              <ul class="space-y-4">
                <li class="flex items-center">
                  <Check class="w-5 h-5 text-red-600 mr-2" />
                  <span>Contenido exclusivo sin límites</span>
                </li>
                <li class="flex items-center">
                  <Check class="w-5 h-5 text-red-600 mr-2" />
                  <span>Chat directo con creadoras</span>
                </li>
                <li class="flex items-center">
                  <Check class="w-5 h-5 text-red-600 mr-2" />
                  <span>Videos completos en HD</span>
                </li>
                <li class="flex items-center">
                  <Check class="w-5 h-5 text-red-600 mr-2" />
                  <span>Contenido personalizado</span>
                </li>
              </ul>
              <Button 
                class="w-full bg-red-600 hover:bg-red-700 text-white font-semibold mt-6 py-4 rounded-full shadow-md transform transition-transform hover:scale-105"
                on:click={() => showModal = true}
              >
                Obtener Acceso VIP
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray-50 py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Lo que dicen nuestros usuarios VIP</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card class="rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
            <CardContent class="p-6">
              <div class="flex items-center mb-4">
                <div class="flex text-red-600">
                  <Star class="w-4 h-4 fill-current" />
                  <Star class="w-4 h-4 fill-current" />
                  <Star class="w-4 h-4 fill-current" />
                  <Star class="w-4 h-4 fill-current" />
                  <Star class="w-4 h-4 fill-current" />
                </div>
              </div>
              <p class="text-gray-600 mb-4">"El mejor contenido que he encontrado. Las creadoras son increíbles y el contenido es de primera."</p>
              <p class="font-semibold">Carlos M.</p>
            </CardContent>
          </Card>
          <Card class="rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
            <CardContent class="p-6">
              <div class="flex items-center mb-4">
                <div class="flex text-red-600">
                  <Star class="w-4 h-4 fill-current" />
                  <Star class="w-4 h-4 fill-current" />
                  <Star class="w-4 h-4 fill-current" />
                  <Star class="w-4 h-4 fill-current" />
                  <Star class="w-4 h-4 fill-current" />
                </div>
              </div>
              <p class="text-gray-600 mb-4">"La privacidad y discreción son excelentes. El contenido exclusivo vale totalmente la pena."</p>
              <p class="font-semibold">Miguel R.</p>
            </CardContent>
          </Card>
          <Card class="rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
            <CardContent class="p-6">
              <div class="flex items-center mb-4">
                <div class="flex text-red-600">
                  <Star class="w-4 h-4 fill-current" />
                  <Star class="w-4 h-4 fill-current" />
                  <Star class="w-4 h-4 fill-current" />
                  <Star class="w-4 h-4 fill-current" />
                  <Star class="w-4 h-4 fill-current" />
                </div>
              </div>
              <p class="text-gray-600 mb-4">"Increíble variedad de contenido y las creadoras son muy interactivas. ¡Altamente recomendado!"</p>
              <p class="font-semibold">Juan D.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <section class="py-16 bg-red-600 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-8">¡No pierdas esta oportunidad!</h2>
        <p class="text-xl mb-8">Regístrate ahora y obtén 30 días de acceso VIP completamente gratis</p>
        <Button 
          class="bg-white text-red-600 hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-full shadow-lg transform transition-transform hover:scale-105"
          on:click={() => showModal = true}
        >
          Obtener Mi Acceso VIP
        </Button>
        <p class="text-sm mt-4 text-red-200">Sin compromiso - Cancela cuando quieras</p>
      </div>
    </section>
  </main>

  <footer class="bg-white border-t border-gray-100 py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="text-2xl font-bold text-red-600 mb-4 md:mb-0">SaborFans</div>
        <nav class="space-x-4 mb-4 md:mb-0">
          <a href="/privacy" class="text-gray-600 hover:text-red-600">Política de Privacidad</a>
          <a href="/terms" class="text-gray-600 hover:text-red-600">Términos de Servicio</a>
          <a href="/contact" class="text-gray-600 hover:text-red-600">Contacto</a>
        </nav>
      </div>
      <p class="text-center text-gray-600 mt-8">&copy; {new Date().getFullYear()} SaborFans. Todos los derechos reservados.</p>
    </div>
  </footer>

  <Modal bind:showModal>
    <div class="text-center mb-6">
      <h3 class="text-2xl font-bold mb-2">¡Obtén tu Acceso VIP Gratis!</h3>
      <p class="text-gray-600">Regístrate ahora y disfruta de 30 días de contenido premium sin costo</p>
    </div>
    <form on:submit={handleSubmit} class="space-y-4">
      <Input
        type="text"
        placeholder="Tu Nombre"
        bind:value={name}
        required
        class="rounded-full px-6 py-3 shadow-sm"
      />
      <Input
        type="email"
        placeholder="Tu Email"
        bind:value={email}
        required
        class="rounded-full px-6 py-3 shadow-sm"
      />
      <Input
        type="tel"
        placeholder="Tu WhatsApp"
        bind:value={whatsapp}
        required
        class="rounded-full px-6 py-3 shadow-sm"
      />
      <div class="flex items-center space-x-2">
        <Checkbox
          id="newsletter-modal"
          bind:checked={newsletter}
          class="rounded-full"
        />
        <label for="newsletter-modal" class="text-sm">
          Quiero recibir contenido exclusivo y ofertas especiales
        </label>
      </div>
      <Button type="submit" class="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 text-lg rounded-full shadow-lg transform transition-transform hover:scale-105">
        Obtener Mi Acceso VIP
      </Button>
      <p class="text-xs text-gray-500 text-center mt-2">
        Al registrarte, aceptas nuestros Términos de Servicio y Política de Privacidad
      </p>
    </form>
  </Modal>

  <style>
    :global(.rounded-3xl) {
      border-radius: 1.5rem;
    }
    
    :global(.shadow-lg) {
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
    
    :global(.shadow-xl) {
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
    
    :global(.transition-shadow) {
      transition: box-shadow 0.3s ease-in-out;
    }
    
    :global(.transition-transform) {
      transition: transform 0.3s ease-in-out;
    }
    
    :global(.hover\:scale-105:hover) {
      transform: scale(1.05);
    }
  </style>
</div> 