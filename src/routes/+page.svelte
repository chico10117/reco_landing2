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
  let lastScrollY = 0;
  let hideNav = false;
  let ticking = false;

  onMount(() => {
    mounted = true;
    
    // Optimized scroll event listener with requestAnimationFrame
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Only change state when necessary to avoid unnecessary re-renders
          if (currentScrollY > lastScrollY && currentScrollY > 50) {
            if (!hideNav) hideNav = true;
          } else {
            if (hideNav) hideNav = false;
          }
          
          lastScrollY = currentScrollY;
          ticking = false;
        });
        
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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

<div class="min-h-screen bg-white text-gray-900 flex flex-col">
  <nav class="bg-white border-b border-gray-100 fixed w-full top-0 z-50 shadow-sm transition-transform duration-300 ease-in-out will-change-transform {hideNav ? '-translate-y-full' : 'translate-y-0'}">
    <div class="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <div class="text-2xl font-bold text-red-600">FanLatinas</div>
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

  <div class="bg-red-500 text-white w-full fixed top-0 z-40 transition-transform duration-300 ease-in-out will-change-transform {hideNav ? '-translate-y-full' : 'translate-y-16'}">
    <div class="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
      <div>
        <h3 class="text-xl font-medium">Anuncia gratis</h3>
        <p class="text-sm text-red-100">Regístrate ahora con seguridad, respeto y empoderamiento</p>
      </div>
      <Button 
        class="bg-white text-red-500 hover:bg-red-100 font-semibold px-6 py-2 rounded-md"
        on:click={() => showModal = true}
      >
        REGÍSTRATE
      </Button>
    </div>
  </div>

  <div class="h-[calc(4rem+4rem)]"></div>

  <div class="flex-grow flex flex-col">
    <header class="pt-20 relative min-h-[90vh] flex items-center">
      <div class="absolute inset-0 z-0">
        <img
          src="/foondo.png"
          alt="Background"
          class="w-full h-full object-cover object-center bg-red-600"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>
      <div class="max-w-6xl mx-auto px-4 py-12 relative z-10 w-full">
        <div class="max-w-4xl mx-auto text-left space-y-8">
          <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Transformando la <span class="text-red-400">industria escort</span> con innovación y calidad
          </h1>
          <p class="text-xl text-gray-200">
            Aprovecha el prelanzamiento y asegura <span class="text-red-400 font-semibold">ventajas exclusivas</span> ahora mismo
          </p>
          <div class="flex flex-col space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center py-8">
              <!-- Free Plan -->
              <div class="bg-white rounded-3xl p-6 shadow-lg overflow-hidden relative cursor-pointer transition-all duration-300 hover:bg-gradient-to-br hover:from-red-500 hover:to-pink-500 group">
                <div class="absolute top-0 left-0 w-12 h-12 bg-red-500 flex items-center justify-center rounded-br-lg">
                  <div class="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                  </div>
                </div>
                <div class="pt-4">
                  <div class="text-gray-600 group-hover:text-white transition-colors">Preinscripción Gratuita</div>
                  <div class="text-3xl font-bold text-gray-900 group-hover:text-white transition-colors">$0</div>
                  <div class="text-sm text-gray-500 group-hover:text-white/80 transition-colors">/month</div>
                  <div class="text-sm text-gray-600 mb-4 group-hover:text-white/80 transition-colors">¡Empieza sin costo!</div>
                  
                  <div class="space-y-3 mt-6 text-left">
                    <div class="flex items-center">
                      <div class="text-red-500 group-hover:text-white mr-2 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                      </div>
                      <span class="text-sm text-gray-700 group-hover:text-white/90 transition-colors">Accede al Plan Básico completamente GRATIS</span>
                    </div>
                    <div class="flex items-center">
                      <div class="text-red-500 group-hover:text-white mr-2 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                      </div>
                      <span class="text-sm text-gray-700 group-hover:text-white/90 transition-colors">Disfruta durante 3 meses</span>
                    </div>
                    <div class="flex items-center">
                      <div class="text-red-500 group-hover:text-white mr-2 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                      </div>
                      <span class="text-sm text-gray-700 group-hover:text-white/90 transition-colors">Participa en el sorteo de 10 planes Platinum</span>
                    </div>
                    <!-- <div class="flex items-center">
                      <div class="text-pink-500 group-hover:text-white mr-2 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                      </div>
                      <span class="text-sm text-gray-700 group-hover:text-white/90 transition-colors">Email support</span>
                    </div> -->
                  </div>
                  
                  <button 
                    class="w-full mt-8 bg-red-500 text-white font-medium py-3 rounded-full group-hover:bg-white group-hover:text-red-600 transition-colors"
                  >
                    Get Started
                  </button>
                </div>
              </div>

              <!-- Basic Plan -->
              <div class="bg-white rounded-3xl p-6 shadow-lg overflow-hidden relative cursor-pointer transition-all duration-300 hover:bg-gradient-to-br hover:from-red-500 hover:to-pink-500 group">
                <div class="absolute top-0 left-0 w-12 h-12 bg-red-500 flex items-center justify-center rounded-br-lg">
                  <div class="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
                  </div>
                </div>
                <div class="pt-4">
                  <div class="text-gray-600 group-hover:text-white transition-colors">Preinscripción Básica</div>
                  <div class="text-3xl font-bold text-gray-900 group-hover:text-white transition-colors">$9.99</div>
                  <div class="text-sm text-gray-500 group-hover:text-white/80 transition-colors">/month</div>
                  <div class="text-sm text-gray-600 mb-4 group-hover:text-white/80 transition-colors">💸 Aprovecha un descuento único</div>
                  
                  <div class="space-y-3 mt-6 text-left">
                    <div class="flex items-center">
                      <div class="text-red-500 group-hover:text-white mr-2 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                      </div>
                      <span class="text-sm text-gray-700 group-hover:text-white/90 transition-colors">Suscríbete al plan que elijas</span>
                    </div>
                    <div class="flex items-center">
                      <div class="text-red-500 group-hover:text-white mr-2 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                      </div>
                      <span class="text-sm text-gray-700 group-hover:text-white/90 transition-colors">Obtén un 50% de descuento por 2 meses</span>
                    </div>
                    <div class="flex items-center">
                      <div class="text-red-500 group-hover:text-white mr-2 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                      </div>
                      <span class="text-sm text-gray-700 group-hover:text-white/90 transition-colors">Participa en el sorteo de 10 planes Platinum</span>
                    </div>
                    <!-- <div class="flex items-center">
                      <div class="text-pink-500 group-hover:text-white mr-2 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                      </div>
                      <span class="text-sm text-gray-700 group-hover:text-white/90 transition-colors">Detailed analytics</span>
                    </div>
                    <div class="flex items-center">
                      <div class="text-pink-500 group-hover:text-white mr-2 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                      </div>
                      <span class="text-sm text-gray-700 group-hover:text-white/90 transition-colors">Priority support</span>
                    </div> -->
                  </div>
                  
                  <button 
                    class="w-full mt-8 bg-red-500 text-white font-medium py-3 rounded-full group-hover:bg-white group-hover:text-red-600 transition-colors"
                  >
                    Subscribe Now
                  </button>
                </div>
              </div>

              <!-- Business Plan -->
              <div class="bg-white rounded-3xl p-6 shadow-lg overflow-hidden relative cursor-pointer transition-all duration-300 hover:bg-gradient-to-br hover:from-red-500 hover:to-pink-500 group"
                on:click={() => window.open('https://wa.me/YOUR_NUMBER?text=Quiero%20información%20del%20plan%20Premium', '_blank')}>
                <div class="absolute top-0 left-0 w-12 h-12 bg-red-500 flex items-center justify-center rounded-br-lg">
                  <div class="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                  </div>
                </div>
                <div class="pt-4">
                  <div class="text-gray-600 group-hover:text-white transition-colors">Preinscripción Premium</div>
                  <div class="text-3xl font-bold text-gray-900 group-hover:text-white transition-colors">$29.99</div>
                  <div class="text-sm text-gray-500 group-hover:text-white/80 transition-colors">/month</div>
                  <div class="text-sm text-gray-600 mb-4 group-hover:text-white/80 transition-colors">Lleva tu perfil al siguiente nivel</div>
                  
                  <div class="space-y-3 mt-6 text-left">
                    <div class="flex items-center">
                      <div class="text-red-500 group-hover:text-white mr-2 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                      </div>
                      <span class="text-sm text-gray-700 group-hover:text-white/90 transition-colors">Disfruta de un 50% de descuento en cualquier plan</span>
                    </div>
                    <div class="flex items-center">
                      <div class="text-red-500 group-hover:text-white mr-2 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                      </div>
                      <span class="text-sm text-gray-700 group-hover:text-white/90 transition-colors">Válido al contratar por 3 o más meses</span>
                    </div>
                    <div class="flex items-center">
                      <div class="text-red-500 group-hover:text-white mr-2 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                      </div>
                      <span class="text-sm text-gray-700 group-hover:text-white/90 transition-colors">Participa en el sorteo de 10 planes Platinum</span>
                    </div>
                    <!-- <div class="flex items-center">
                      <div class="text-pink-500 group-hover:text-white mr-2 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                      </div>
                      <span class="text-sm text-gray-700 group-hover:text-white/90 transition-colors">Advanced analytics</span>
                    </div>
                    <div class="flex items-center">
                      <div class="text-pink-500 group-hover:text-white mr-2 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                      </div>
                      <span class="text-sm text-gray-700 group-hover:text-white/90 transition-colors">24/7 VIP support</span>
                    </div>
                    <div class="flex items-center">
                      <div class="text-pink-500 group-hover:text-white mr-2 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                      </div>
                      <span class="text-sm text-gray-700 group-hover:text-white/90 transition-colors">Featured placement</span>
                    </div> -->
                  </div>
                  
                  <button 
                    class="w-full mt-8 bg-red-500 text-white font-medium py-3 rounded-full group-hover:bg-white group-hover:text-red-600 transition-colors"
                  >
                    Contact us
                  </button>
                </div>
              </div>
            </div>
            <div class="max-w-md mx-auto w-full">
              <Button 
                class="w-full bg-red-600 hover:bg-red-700 text-white font-semibold text-lg py-6 rounded-full shadow-lg transform transition-transform hover:scale-105 backdrop-blur-sm"
                on:click={() => showModal = true}
              >
                Obtén Tu Pre-Suscripción
              </Button>
              <p class="text-sm text-gray-300 mt-2">¡Oferta por tiempo limitado!</p>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main class="w-full max-w-6xl mx-auto px-4">
      <section class="bg-gray-50 py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12">¿Por qué elegir FanLatinas?</h2>
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

      <!-- Video Section -->
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12">Conoce Nuestra Plataforma</h2>
          <div class="max-w-4xl mx-auto">
            <div class="rounded-3xl overflow-hidden shadow-2xl">
              <div class="relative pb-[56.25%] h-0">
                <iframe
                  src="https://drive.google.com/file/d/1oKU0tW90q-buMDj88wiP6Ldwlrg-zM_p/preview"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  class="absolute top-0 left-0 w-full h-full"
                  title="Características de la plataforma"
                ></iframe>
              </div>
            </div>
            <p class="text-center text-gray-600 mt-6">Descubre todas las características que tenemos para ti</p>
          </div>
        </div>
      </section>

      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12">Nuestras Funcionalidades</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <!-- Visuales -->
            <div class="bg-gray-50 rounded-3xl p-8 shadow-lg">
              <h3 class="text-xl font-bold mb-4">Visuales</h3>
              <ul class="space-y-4">
                <li class="flex items-center">
                  <Check class="w-5 h-5 text-red-600 mr-2" />
                  <span>Publicación de historias efímeras</span>
                </li>
                <li class="flex items-center">
                  <Check class="w-5 h-5 text-red-600 mr-2" />
                  <span>Creación de historias destacadas</span>
                </li>
              </ul>
            </div>

            <!-- Gestión de Reservas -->
            <div class="bg-red-50 rounded-3xl p-8 border-2 border-red-600 shadow-lg">
              <h3 class="text-xl font-bold mb-4">Gestión de Reservas</h3>
              <ul class="space-y-4">
                <li class="flex items-center">
                  <Check class="w-5 h-5 text-red-600 mr-2" />
                  <span>Calendario de citas</span>
                </li>
                <li class="flex items-center">
                  <Check class="w-5 h-5 text-red-600 mr-2" />
                  <span>Programación automática</span>
                </li>
                <li class="flex items-center">
                  <Check class="w-5 h-5 text-red-600 mr-2" />
                  <span>Auto-respondedor fuera de línea</span>
                </li>
              </ul>
            </div>

            <!-- Estadísticas y Analíticas -->
            <div class="bg-gray-50 rounded-3xl p-8 shadow-lg">
              <h3 class="text-xl font-bold mb-4">Estadísticas y Analíticas</h3>
              <ul class="space-y-4">
                <li class="flex items-center">
                  <Check class="w-5 h-5 text-red-600 mr-2" />
                  <span>Número de visitas al perfil</span>
                </li>
                <li class="flex items-center">
                  <Check class="w-5 h-5 text-red-600 mr-2" />
                  <span>Clics en el botón de contacto</span>
                </li>
                <li class="flex items-center">
                  <Check class="w-5 h-5 text-red-600 mr-2" />
                  <span>Días y horas de mayor tráfico</span>
                </li>
                <li class="flex items-center">
                  <Check class="w-5 h-5 text-red-600 mr-2" />
                  <span>Análisis completo del rendimiento</span>
                </li>
              </ul>
            </div>

            <!-- Visibilidad -->
            <Card class="rounded-3xl shadow-lg">
              <CardContent class="p-6">
                <h3 class="text-xl font-bold mb-4">Visibilidad</h3>
                <ul class="space-y-2">
                  <li class="flex items-center">
                    <Check class="w-5 h-5 text-red-600 mr-2" />
                    <span>Boost de visibilidad en resultados</span>
                  </li>
                  <li class="flex items-center">
                    <Check class="w-5 h-5 text-red-600 mr-2" />
                    <span>Destacado en página principal</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <!-- Asesoramiento -->
            <Card class="rounded-3xl shadow-lg">
              <CardContent class="p-6">
                <h3 class="text-xl font-bold mb-4">Asesoramiento</h3>
                <ul class="space-y-2">
                  <li class="flex items-center">
                    <Check class="w-5 h-5 text-red-600 mr-2" />
                    <span>Guías legales y tributarias</span>
                  </li>
                  <li class="flex items-center">
                    <Check class="w-5 h-5 text-red-600 mr-2" />
                    <span>Optimización financiera</span>
                  </li>
                  <li class="flex items-center">
                    <Check class="w-5 h-5 text-red-600 mr-2" />
                    <span>Consultas personalizadas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <!-- Soporte Técnico -->
            <Card class="rounded-3xl shadow-lg">
              <CardContent class="p-6">
                <h3 class="text-xl font-bold mb-4">Soporte Técnico</h3>
                <ul class="space-y-2">
                  <li class="flex items-center">
                    <Check class="w-5 h-5 text-red-600 mr-2" />
                    <span>Soporte básico por email</span>
                  </li>
                  <li class="flex items-center">
                    <Check class="w-5 h-5 text-red-600 mr-2" />
                    <span>Soporte prioritario 24h</span>
                  </li>
                  <li class="flex items-center">
                    <Check class="w-5 h-5 text-red-600 mr-2" />
                    <span>Atención VIP personalizada</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
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
  </div>

  <footer class="bg-gray-900 text-gray-100 py-12">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="text-2xl font-bold text-red-400 mb-4 md:mb-0">FanLatinas</div>
        <nav class="space-x-6 mb-4 md:mb-0">
          <a href="/privacy" class="text-gray-300 hover:text-red-400 transition-colors">Política de Privacidad</a>
          <a href="/terms" class="text-gray-300 hover:text-red-400 transition-colors">Términos de Servicio</a>
          <a href="/contact" class="text-gray-300 hover:text-red-400 transition-colors">Contacto</a>
        </nav>
      </div>
      <div class="border-t border-gray-800 my-8"></div>
      <p class="text-center text-gray-400 text-sm">&copy; {new Date().getFullYear()} FanLatinas. Todos los derechos reservados.</p>
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