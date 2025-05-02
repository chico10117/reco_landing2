<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { onMount } from 'svelte';

  // WhatsApp number - replace with your actual number
  const whatsappNumber = "9813631408";
  const whatsappMessage = "Hola! Me gustaría obtener más información sobre FanLatinas";
  
  // Function to redirect to WhatsApp
  function redirectToWhatsApp() {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  }

  // Auto-redirect after a short delay
  onMount(() => {
    setTimeout(redirectToWhatsApp, 1000);
  });
</script>

<div class="min-h-screen bg-white">
  <!-- Navigation -->
  <nav class="bg-white border-b border-gray-100 fixed w-full top-0 z-50 shadow-sm">
    <div class="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <a href="/" class="text-2xl font-bold text-red-600">FanLatinas</a>
      <div class="flex items-center space-x-4">
        <Button 
          variant="ghost" 
          class="text-gray-700 hover:text-red-600 rounded-full px-6"
          href="/"
        >
          Volver al Inicio
        </Button>
      </div>
    </div>
  </nav>

  <!-- Content -->
  <div class="pt-20 pb-12 flex items-center justify-center min-h-[60vh]">
    <div class="max-w-md mx-auto px-4 text-center">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">Contacto</h1>
      
      <div class="bg-white rounded-3xl shadow-lg p-8 space-y-6">
        <div class="text-6xl mb-6">💬</div>
        <p class="text-gray-600 mb-6">
          Redirigiendo a WhatsApp...
        </p>
        
        <Button 
          class="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-full shadow-lg transform transition-all hover:scale-105"
          on:click={redirectToWhatsApp}
        >
          Abrir WhatsApp
        </Button>
        
        <p class="text-sm text-gray-500 mt-4">
          Si no eres redirigido automáticamente, haz clic en el botón de arriba.
        </p>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-gray-900 text-gray-100 py-8 fixed bottom-0 w-full">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="text-2xl font-bold text-red-400 mb-4 md:mb-0">FanLatinas</div>
        <nav class="space-x-6">
          <a href="/privacy" class="text-gray-300 hover:text-red-400 transition-colors">Política de Privacidad</a>
          <a href="/terms" class="text-gray-300 hover:text-red-400 transition-colors">Términos de Servicio</a>
        </nav>
      </div>
      <div class="border-t border-gray-800 my-6"></div>
      <p class="text-center text-gray-400 text-sm">&copy; {new Date().getFullYear()} FanLatinas. Todos los derechos reservados.</p>
    </div>
  </footer>
</div>

<style>
  /* Add any custom styles here */
  .shadow-lg {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
</style>
