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

  // Carousel variables
  let carouselContainer: HTMLElement;
  let cardWidth = 0;
  let currentIndex = 0;
  const totalSlides = 6; // Total number of testimonial cards
  
  function calculateCardWidth() {
    if (carouselContainer) {
      const containerWidth = carouselContainer.parentElement?.clientWidth || 0;
      cardWidth = containerWidth / 3; // Show 3 cards at a time
    }
  }
  
  function nextSlide() {
    if (currentIndex < totalSlides - 3) {
      currentIndex++;
    }
  }
  
  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
    }
  }
  
  function goToSlide(index: number) {
    currentIndex = index;
  }

  onMount(() => {
    mounted = true;
    
    // Calculate initial card width
    calculateCardWidth();
    
    // Recalculate on window resize
    const handleResize = () => {
      calculateCardWidth();
    };
    
    window.addEventListener('resize', handleResize);
    
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
      window.removeEventListener('resize', handleResize);
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

  let submitting = false;
  let submitError = '';
  let submitSuccess = false;

  let whatsappError = '';
  
  function validateWhatsApp(value: string) {
    // Clear previous error
    whatsappError = '';
    
    // Validate Uruguayan phone number (starts with 9, total 8 digits)
    if (value && !/^9\d{7}$/.test(value)) {
      whatsappError = 'Ingresa un número válido de Uruguay (debe comenzar con 9 y tener 8 dígitos)';
      return false;
    }
    return true;
  }
  
  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    console.log('Form submitted');
    console.log('Form values:', { name, email, whatsapp, newsletter });
    
    // Validate WhatsApp number first
    if (!validateWhatsApp(whatsapp)) {
      return; // Stop form submission if validation fails
    }
    
    submitting = true;
    submitError = '';
    submitSuccess = false;

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          whatsapp,
          newsletter
        })
      });

      console.log('Response received:', response);
      const result = await response.json();
      console.log('Response data:', result);

      if (result.success) {
        submitSuccess = true;
        // Clear form
        name = '';
        email = '';
        whatsapp = '';
        newsletter = false;
        // Close modal after short delay
        setTimeout(() => {
          showModal = false;
          submitSuccess = false;
        }, 2000);
      } else {
        submitError = result.error || 'Failed to submit form. Please try again.';
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      submitError = 'An error occurred. Please try again.';
    } finally {
      submitting = false;
    }
  }

  // Add this to your existing script section
  let pricingContainer: HTMLElement;
  let isDraggingPricing = false;
  let startXPricing = 0;
  let scrollLeftPricing = 0;
  let currentPricingIndex = 0;
  
  onMount(() => {
    // ... existing onMount code ...
    
    // Initialize pricing container scroll functionality
    pricingContainer = document.getElementById('pricing-container');
    
    if (pricingContainer) {
      // Mouse events for pricing container
      pricingContainer.addEventListener('mousedown', handlePricingMouseDown);
      window.addEventListener('mousemove', handlePricingMouseMove);
      window.addEventListener('mouseup', handlePricingMouseUp);
      
      // Touch events for pricing container
      pricingContainer.addEventListener('touchstart', handlePricingTouchStart);
      pricingContainer.addEventListener('touchmove', handlePricingTouchMove);
      pricingContainer.addEventListener('touchend', handlePricingMouseUp);
      
      // Listen for scroll events to update dots
      pricingContainer.addEventListener('scroll', updatePricingDots);
    }
    
    return () => {
      // ... existing cleanup code ...
      
      // Clean up pricing container event listeners
      if (pricingContainer) {
        pricingContainer.removeEventListener('mousedown', handlePricingMouseDown);
        window.removeEventListener('mousemove', handlePricingMouseMove);
        window.removeEventListener('mouseup', handlePricingMouseUp);
        
        pricingContainer.removeEventListener('touchstart', handlePricingTouchStart);
        pricingContainer.removeEventListener('touchmove', handlePricingTouchMove);
        pricingContainer.removeEventListener('touchend', handlePricingMouseUp);
        
        pricingContainer.removeEventListener('scroll', updatePricingDots);
      }
    };
  });
  
  function handlePricingMouseDown(e: MouseEvent) {
    isDraggingPricing = true;
    startXPricing = e.pageX - pricingContainer.offsetLeft;
    scrollLeftPricing = pricingContainer.scrollLeft;
    pricingContainer.style.cursor = 'grabbing';
  }
  
  function handlePricingMouseMove(e: MouseEvent) {
    if (!isDraggingPricing) return;
    
    const x = e.pageX - pricingContainer.offsetLeft;
    const walk = (x - startXPricing) * 2;
    pricingContainer.scrollLeft = scrollLeftPricing - walk;
    e.preventDefault();
  }
  
  function handlePricingMouseUp() {
    isDraggingPricing = false;
    if (pricingContainer) {
      pricingContainer.style.cursor = 'grab';
      
      // Snap to nearest card
      const cardWidth = pricingContainer.offsetWidth * 0.85; // 85vw
      const scrollPosition = pricingContainer.scrollLeft;
      const cardIndex = Math.round(scrollPosition / cardWidth);
      
      pricingContainer.scrollTo({
        left: cardIndex * cardWidth,
        behavior: 'smooth'
      });
      
      currentPricingIndex = cardIndex;
      updatePricingDots();
    }
  }
  
  function handlePricingTouchStart(e: TouchEvent) {
    isDraggingPricing = true;
    startXPricing = e.touches[0].pageX - pricingContainer.offsetLeft;
    scrollLeftPricing = pricingContainer.scrollLeft;
  }
  
  function handlePricingTouchMove(e: TouchEvent) {
    if (!isDraggingPricing) return;
    
    const x = e.touches[0].pageX - pricingContainer.offsetLeft;
    const walk = (x - startXPricing) * 2;
    pricingContainer.scrollLeft = scrollLeftPricing - walk;
  }
  
  function updatePricingDots() {
    const dots = document.querySelectorAll('#pricing-dots .dot');
    if (dots.length > 0) {
      dots.forEach((dot, index) => {
        if (index === currentPricingIndex) {
          dot.classList.add('bg-red-600');
          dot.classList.remove('bg-gray-300');
        } else {
          dot.classList.add('bg-gray-300');
          dot.classList.remove('bg-red-600');
        }
      });
    }
  }

  // Variables for mobile testimonials
  let testimonialsContainer;
  let currentTestimonialIndex = 0;
  
  onMount(() => {
    // ... existing onMount code ...
    
    // Initialize mobile testimonials container
    testimonialsContainer = document.getElementById('testimonials-container');
    
    if (testimonialsContainer) {
      // Update dots on scroll
      testimonialsContainer.addEventListener('scroll', () => {
        const scrollPosition = testimonialsContainer.scrollLeft;
        const cardWidth = testimonialsContainer.clientWidth;
        const newIndex = Math.round(scrollPosition / cardWidth);
        
        if (newIndex !== currentTestimonialIndex) {
          currentTestimonialIndex = newIndex;
          updateTestimonialDots();
        }
      });
    }
    
    return () => {
      // ... existing cleanup code ...
      
      if (testimonialsContainer) {
        testimonialsContainer.removeEventListener('scroll', updateTestimonialDots);
      }
    };
  });
  
  function updateTestimonialDots() {
    const dots = document.querySelectorAll('#testimonials-dots .dot');
    if (dots.length > 0) {
      dots.forEach((dot, index) => {
        if (index === currentTestimonialIndex) {
          dot.classList.add('bg-red-600');
          dot.classList.remove('bg-gray-300');
        } else {
          dot.classList.add('bg-gray-300');
          dot.classList.remove('bg-red-600');
        }
      });
    }
  }
</script>

<div class="min-h-screen bg-white text-gray-900 flex flex-col">
  <nav class="bg-white border border-gray-300 fixed w-full top-0 z-50 shadow-sm transition-transform duration-300 ease-in-out will-change-transform {hideNav ? '-translate-y-full' : 'translate-y-0'}">
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

  <div class="bg-red-500 text-white w-full fixed top-0 z-40 border-b border-red-600 transition-transform duration-300 ease-in-out will-change-transform {hideNav ? '-translate-y-full' : 'translate-y-16'}" 
       style="transition-delay: {hideNav ? '0ms' : '150ms'}">
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
          src="/fondo.png"
          alt="Background"
          class="w-full h-full object-cover object-center bg-red-600"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>
      <div class="max-w-6xl mx-auto px-4 py-12 relative z-10 w-full">
        <div class="max-w-4xl mx-auto md:text-center text-left space-y-8">
          <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Transformando la <span class="text-red-400">industria escort</span> con innovación y calidad
          </h1>
          <p class="text-xl text-gray-200">
            Aprovecha el prelanzamiento y asegura <span class="text-red-400 font-semibold">ventajas exclusivas</span> ahora mismo
          </p>
          <div class="flex flex-col space-y-4">
            <div class="max-w-md mx-auto w-full">
              <Button 
                class="w-full bg-red-600 hover:bg-red-700 text-white font-semibold text-lg py-6 rounded-full shadow-lg transform transition-transform hover:scale-105 backdrop-blur-sm"
                on:click={() => showModal = true}
              >
                Obtén Tu Pre-Suscripción
              </Button>
              <p class="text-sm text-gray-300 text-center mt-2">¡Oferta por tiempo limitado!</p>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section class="w-full bg-gray-100 py-10">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">Ofertas de Preinscripción Exclusivas</h2>
        
        <!-- Desktop view (hidden on mobile) -->
        <div class="hidden md:grid md:grid-cols-3 md:gap-4 md:text-center">
          <!-- Free Plan -->
          <div class="bg-white rounded-3xl p-6 shadow-lg overflow-hidden relative cursor-pointer transition-all duration-300 hover:bg-gradient-to-br hover:from-red-500 hover:to-pink-500 group flex flex-col">
            <div class="absolute top-0 left-0 w-12 h-12 bg-red-500 flex items-center justify-center rounded-br-lg">
              <div class="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
              </div>
            </div>
            <div class="pt-4 flex-grow">
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
              </div>
            </div>
            
            <button 
              class="w-full mt-8 bg-red-500 text-white font-medium py-3 rounded-full group-hover:bg-white group-hover:text-red-600 transition-colors"
              on:click={() => showModal = true}
            >
              Empezar
            </button>
          </div>

          <!-- Basic Plan -->
          <div class="bg-white rounded-3xl p-6 shadow-lg overflow-hidden relative cursor-pointer transition-all duration-300 hover:bg-gradient-to-br hover:from-red-500 hover:to-pink-500 group flex flex-col">
            <div class="absolute top-0 left-0 w-12 h-12 bg-red-500 flex items-center justify-center rounded-br-lg">
              <div class="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
              </div>
            </div>
            <div class="pt-4 flex-grow">
              <div class="text-gray-600 group-hover:text-white transition-colors">Preinscripción Básica</div>
              <div class="text-3xl font-bold text-gray-900 group-hover:text-white transition-colors">$990.00</div>
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
              </div>
            </div>
            
            <button 
              class="w-full mt-8 bg-red-500 text-white font-medium py-3 rounded-full group-hover:bg-white group-hover:text-red-600 transition-colors"
              on:click={() => showModal = true}
            >
              Suscribirse Ahora
            </button>
          </div>

          <!-- Premium Plan -->
          <div class="bg-white rounded-3xl p-6 shadow-lg overflow-hidden relative cursor-pointer transition-all duration-300 hover:bg-gradient-to-br hover:from-red-500 hover:to-pink-500 group flex flex-col"
            on:click={() => window.open('https://wa.me/YOUR_NUMBER?text=Quiero%20información%20del%20plan%20Premium', '_blank')}>
            <div class="absolute top-0 left-0 w-12 h-12 bg-red-500 flex items-center justify-center rounded-br-lg">
              <div class="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </div>
            </div>
            <div class="pt-4 flex-grow">
              <div class="text-gray-600 group-hover:text-white transition-colors">Preinscripción Premium</div>
              <div class="text-3xl font-bold text-gray-900 group-hover:text-white transition-colors">$4.990</div>
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
              </div>
            </div>
            
            <button 
              class="w-full mt-8 bg-red-500 text-white font-medium py-3 rounded-full group-hover:bg-white group-hover:text-red-600 transition-colors"
            >
              Contáctanos
            </button>
          </div>
        </div>
        
        <!-- Mobile view (hidden on desktop) -->
        <div class="md:hidden text-center">
          <div class="flex overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar" id="pricing-container">
            <!-- Free Plan (Mobile) -->
            <div class="min-w-[85vw] px-2 flex-shrink-0 snap-center">
              <div class="bg-white rounded-3xl p-6 shadow-lg overflow-hidden relative cursor-pointer transition-all duration-300 hover:bg-gradient-to-br hover:from-red-500 hover:to-pink-500 group flex flex-col h-full">
                <div class="absolute top-0 left-0 w-12 h-12 bg-red-500 flex items-center justify-center rounded-br-lg">
                  <div class="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                  </div>
                </div>
                <div class="pt-4 flex-grow">
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
                  </div>
                </div>
                
                <button 
                  class="w-full mt-8 bg-red-500 text-white font-medium py-3 rounded-full group-hover:bg-white group-hover:text-red-600 transition-colors"
                  on:click={() => showModal = true}
                >
                  Empezar
                </button>
              </div>
            </div>

            <!-- Basic Plan (Mobile) -->
            <div class="min-w-[85vw] px-2 flex-shrink-0 snap-center">
              <div class="bg-white rounded-3xl p-6 shadow-lg overflow-hidden relative cursor-pointer transition-all duration-300 hover:bg-gradient-to-br hover:from-red-500 hover:to-pink-500 group flex flex-col h-full">
                <div class="absolute top-0 left-0 w-12 h-12 bg-red-500 flex items-center justify-center rounded-br-lg">
                  <div class="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
                  </div>
                </div>
                <div class="pt-4 flex-grow">
                  <div class="text-gray-600 group-hover:text-white transition-colors">Preinscripción Básica</div>
                  <div class="text-3xl font-bold text-gray-900 group-hover:text-white transition-colors">$990.00</div>
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
                  </div>
                </div>
                
                <button 
                  class="w-full mt-8 bg-red-500 text-white font-medium py-3 rounded-full group-hover:bg-white group-hover:text-red-600 transition-colors"
                  on:click={() => showModal = true}
                >
                  Suscribirse Ahora
                </button>
              </div>
            </div>

            <!-- Premium Plan (Mobile) -->
            <div class="min-w-[85vw] px-2 flex-shrink-0 snap-center">
              <div class="bg-white rounded-3xl p-6 shadow-lg overflow-hidden relative cursor-pointer transition-all duration-300 hover:bg-gradient-to-br hover:from-red-500 hover:to-pink-500 group flex flex-col h-full"
                on:click={() => window.open('https://wa.me/YOUR_NUMBER?text=Quiero%20información%20del%20plan%20Premium', '_blank')}>
                <div class="absolute top-0 left-0 w-12 h-12 bg-red-500 flex items-center justify-center rounded-br-lg">
                  <div class="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                  </div>
                </div>
                <div class="pt-4 flex-grow">
                  <div class="text-gray-600 group-hover:text-white transition-colors">Preinscripción Premium</div>
                  <div class="text-3xl font-bold text-gray-900 group-hover:text-white transition-colors">$4.990</div>
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
                  </div>
                </div>
                
                <button 
                  class="w-full mt-8 bg-red-500 text-white font-medium py-3 rounded-full group-hover:bg-white group-hover:text-red-600 transition-colors"
                >
                  Contáctanos
                </button>
              </div>
            </div>
          </div>
          
          <!-- Scroll indicator dots (mobile only) -->
          <div class="flex justify-center mt-4" id="pricing-dots">
            <div class="w-2 h-2 rounded-full bg-red-600 mx-1 dot"></div>
            <div class="w-2 h-2 rounded-full bg-gray-300 mx-1 dot"></div>
            <div class="w-2 h-2 rounded-full bg-gray-300 mx-1 dot"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Section -->
    <section class="py-10 bg-white w-full">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Conoce Nuestra Plataforma</h2>
        <div class="max-w-4xl mx-auto">
          <div class="rounded-3xl overflow-hidden shadow-2xl">
            <div style="position: relative; overflow: hidden; aspect-ratio: 1920/1080"><iframe src="https://drive.google.com/file/d/17hrQfXeOfaET97eJud-DF0jnI8FoHPNR/preview" loading="lazy" title="Fanlatinas- Intro" allowfullscreen allow="; fullscreen;" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0; overflow:hidden;"></iframe></div>
          </div>
          <p class="text-center text-gray-600 mt-6">Descubre todas las características que tenemos para ti</p>
        </div>
      </div>
    </section>

    <section class="py-10 bg-gray-50 w-full">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Nuestras Funcionalidades</h2>
        
        <div class="max-w-5xl mx-auto overflow-x-auto">
          <div class="bg-gray-50 shadow-lg p-6">
            <table class="w-full border-collapse">
              <thead>
                <tr class="border-b bg-red-200 border-gray-200">
                  <th class="py-4 px-4 text-left font-bold rounded-tl-lg text-gray-700">Funcionalidad</th>
                  <th class="py-4 px-4 text-center font-bold text-gray-700">Gratuito</th>
                  <th class="py-4 px-4 text-center font-bold text-gray-700">Básico</th>
                  <th class="py-4 px-4 text-center font-bold text-gray-700">Gold</th>
                  <th class="py-4 px-4 text-center font-bold rounded-tr-lg text-gray-700">Platinum</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-200">
                  <td class="py-3 px-4 font-medium">Historias</td>
                  <td class="py-3 px-4 text-center text-green-600">✓</td>
                  <td class="py-3 px-4 text-center text-green-600">✓</td>
                  <td class="py-3 px-4 text-center text-green-600">✓</td>
                  <td class="py-3 px-4 text-center text-green-600">✓</td>
                </tr>
                <tr class="border-b bg-red-50 border-gray-200">
                  <td class="py-3 px-4 font-medium">Historias destacadas</td>
                  <td class="py-3 px-4 text-center text-red-500">-</td>
                  <td class="py-3 px-4 text-center">3 máx.</td>
                  <td class="py-3 px-4 text-center">Ilimitado</td>
                  <td class="py-3 px-4 text-center">Ilimitado</td>
                </tr>
                <tr class="border-b border-gray-200">
                  <td class="py-3 px-4 font-medium">Calendario de citas</td>
                  <td class="py-3 px-4 text-center">Limitado (10 citas)</td>
                  <td class="py-3 px-4 text-center">Limitado</td>
                  <td class="py-3 px-4 text-center">Ilimitado</td>
                  <td class="py-3 px-4 text-center">Integrado con apps externas</td>
                </tr>
                <tr class="border-b bg-red-50 border-gray-200">
                  <td class="py-3 px-4 font-medium">Programación automática</td>
                  <td class="py-3 px-4 text-center text-red-500">-</td>
                  <td class="py-3 px-4 text-center">5/mes</td>
                  <td class="py-3 px-4 text-center">15/mes</td>
                  <td class="py-3 px-4 text-center">Ilimitado</td>
                </tr>
                <tr class="border-b border-gray-200">
                  <td class="py-3 px-4 font-medium">Auto-respondedor fuera de línea</td>
                  <td class="py-3 px-4 text-center text-red-500">-</td>
                  <td class="py-3 px-4 text-center">Básico (1 mensaje)</td>
                  <td class="py-3 px-4 text-center">Avanzado (3 mensajes)</td>
                  <td class="py-3 px-4 text-center">Avanzado (3 mensajes)</td>
                </tr>
                <tr class="border-b bg-red-50 border-gray-200">
                  <td class="py-3 px-4 font-medium">Estadísticas básicas</td>
                  <td class="py-3 px-4 text-center text-green-600">✓</td>
                  <td class="py-3 px-4 text-center text-green-600">✓</td>
                  <td class="py-3 px-4 text-center text-green-600">✓</td>
                  <td class="py-3 px-4 text-center text-green-600">✓</td>
                </tr>
                <tr class="border-b border-gray-200">
                  <td class="py-3 px-4 font-medium">Estadísticas avanzadas</td>
                  <td class="py-3 px-4 text-center text-red-500">-</td>
                  <td class="py-3 px-4 text-center text-green-600">✓</td>
                  <td class="py-3 px-4 text-center text-green-600">✓</td>
                  <td class="py-3 px-4 text-center text-green-600">✓</td>
                </tr>
                <tr class="border-b bg-red-50 border-gray-200">
                  <td class="py-3 px-4 font-medium">Mapas de calor de actividad</td>
                  <td class="py-3 px-4 text-center text-red-500">-</td>
                  <td class="py-3 px-4 text-center text-red-500">-</td>
                  <td class="py-3 px-4 text-center text-green-600">✓</td>
                  <td class="py-3 px-4 text-center text-green-600">✓</td>
                </tr>
                <tr class="border-b border-gray-200">
                  <td class="py-3 px-4 font-medium">Boost de visibilidad</td>
                  <td class="py-3 px-4 text-center text-red-500">-</td>
                  <td class="py-3 px-4 text-center">1x/mes (12 horas)</td>
                  <td class="py-3 px-4 text-center">2x/mes (24 horas)</td>
                  <td class="py-3 px-4 text-center">3x/mes (48 horas)</td>
                </tr>
                <tr class="border-b bg-red-50 border-gray-200">
                  <td class="py-3 px-4 font-medium">Asesoramiento legal y financiero</td>
                  <td class="py-3 px-4 text-center text-red-500">-</td>
                  <td class="py-3 px-4 text-center text-red-500">-</td>
                  <td class="py-3 px-4 text-center text-red-500">-</td>
                  <td class="py-3 px-4 text-center">✓ (Personalizado)</td>
                </tr>
                <tr class="border-b border-gray-200">
                  <td class="py-3 px-4 font-medium">Soporte técnico</td>
                  <td class="py-3 px-4 text-center">Básico</td>
                  <td class="py-3 px-4 text-center">Básico</td>
                  <td class="py-3 px-4 text-center">Prioritario</td>
                  <td class="py-3 px-4 text-center">VIP</td>
                </tr>
                <tr>
                  <td class="py-4 px-4 font-bold">Precio</td>
                  <td class="py-4 px-4 text-center font-bold">GRATIS</td>
                  <td class="py-4 px-4 text-center font-bold">$ 990</td>
                  <td class="py-4 px-4 text-center font-bold">$ 2.990</td>
                  <td class="py-4 px-4 text-center font-bold">$ 4.990</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="mt-12 text-center">
          <Button 
            class="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transform transition-transform hover:scale-105"
            on:click={() => showModal = true}
          >
            Obtén Tu Pre-Suscripción Ahora
          </Button>
          <p class="text-sm text-gray-500 mt-2">Precios promocionales por tiempo limitado</p>
      </div>
    </section>


<section class="bg-white py-10 w-full">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12">Lo que dicen nuestros usuarios VIP</h2>
    
    <!-- Desktop view (hidden on mobile) -->
    <div class="hidden md:block relative max-w-5xl mx-auto">
      <!-- Carousel container for desktop -->
      <div class="overflow-hidden pb-4">
        <div class="flex transition-transform duration-300 ease-in-out" bind:this={carouselContainer} style="transform: translateX({-currentIndex * cardWidth}px)">
          <div class="min-w-[calc(33.333%-0.2rem)] px-2 pb-2">
            <Card class="rounded-3xl shadow-md hover:shadow-lg transition-shadow h-[240px] flex flex-col">
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
          </div>
          
          <div class="min-w-[calc(33.333%-0.2rem)] px-2 pb-2">
            <Card class="rounded-3xl shadow-md hover:shadow-lg transition-shadow h-[240px] flex flex-col">
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
          </div>
          
          <div class="min-w-[calc(33.333%-0.2rem)] px-2 pb-2">
            <Card class="rounded-3xl shadow-md hover:shadow-lg transition-shadow h-[240px] flex flex-col">
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
          
          <div class="min-w-[calc(33.333%-0.2rem)] px-2 pb-2">
            <Card class="rounded-3xl shadow-md hover:shadow-lg transition-shadow h-[240px] flex flex-col">
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
          
          <div class="min-w-[calc(33.333%-0.2rem)] px-2 pb-2">
            <Card class="rounded-3xl shadow-md hover:shadow-lg transition-shadow h-[240px] flex flex-col">
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
                <p class="text-gray-600 mb-4">"El servicio al cliente es excepcional. Siempre responden rápido a mis consultas."</p>
                <p class="font-semibold">Ana P.</p>
              </CardContent>
            </Card>
          </div>
          
          <div class="min-w-[calc(33.333%-0.2rem)] px-2 pb-2">
            <Card class="rounded-3xl shadow-md hover:shadow-lg transition-shadow h-[240px] flex flex-col">
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
                <p class="text-gray-600 mb-4">"La plataforma es muy fácil de usar y el contenido se actualiza constantemente."</p>
                <p class="font-semibold">Roberto G.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <!-- Navigation buttons (desktop only) -->
      <button 
        class="absolute left-0 top-1/2 -translate-y-1/2 -ml-10 bg-transparent p-2 z-10 transition-opacity duration-200 {currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}"
        on:click={prevSlide}
        disabled={currentIndex === 0}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>
      
      <button 
        class="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-transparent p-2 z-10 transition-opacity duration-200 {currentIndex >= totalSlides - 3 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}"
        on:click={nextSlide}
        disabled={currentIndex >= totalSlides - 3}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-700"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>
    </div>
    
    <!-- Mobile view (hidden on desktop) -->
    <div class="md:hidden max-w-5xl mx-auto">
      <div class="overflow-x-auto snap-x snap-mandatory hide-scrollbar" id="testimonials-container">
        <div class="flex">
          <!-- Mobile testimonial cards -->
          <div class=" px-2 flex-shrink-0 snap-center flex">
            <Card class="rounded-3xl shadow-md hover:shadow-lg transition-shadow h-[240px] flex flex-col">
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
                <p class="text-gray-600 mb-4">"El mejor contenido que he encontrado. <br> Las creadoras son increíbles <br> y el contenido es de primera."</p>
                <p class="font-semibold">Carlos M.</p>
              </CardContent>
            </Card>
          </div>
          
          <div class="px-2 flex-shrink-0 snap-center">
            <Card class="rounded-3xl shadow-md hover:shadow-lg transition-shadow h-[240px] flex flex-col">
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
                <p class="text-gray-600 mb-4">"La privacidad y discreción son excelentes. <br> El contenido exclusivo vale <br> totalmente la pena."</p>
                <p class="font-semibold">Miguel R.</p>
              </CardContent>
            </Card>
          </div>
          
          <div class="px-2 flex-shrink-0 snap-center">
            <Card class="rounded-3xl shadow-md hover:shadow-lg transition-shadow h-[240px] flex flex-col">
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
                <p class="text-gray-600 mb-4">"Increíble variedad de contenido <br> y las creadoras son muy interactivas. <br> ¡Altamente recomendado!"</p>
                <p class="font-semibold">Juan D.</p>
              </CardContent>
            </Card>
          </div>
          
          <div class="px-2 flex-shrink-0 snap-center">
            <Card class="rounded-3xl shadow-md hover:shadow-lg transition-shadow h-[240px] flex flex-col">
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
                <p class="text-gray-600 mb-4">"El servicio al cliente es excepcional. <br> Siempre responden rápido a <br> mis consultas."</p>
                <p class="font-semibold">Ana P.</p>
              </CardContent>
            </Card>
          </div>
          
          <div class="px-2 flex-shrink-0 snap-center">
            <Card class="rounded-3xl shadow-md hover:shadow-lg transition-shadow h-[240px] flex flex-col">
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
                <p class="text-gray-600 mb-4">"La plataforma es muy fácil de usar <br> y el contenido se actualiza <br> constantemente."</p>
                <p class="font-semibold">Roberto G.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <!-- Indicator dots for mobile -->
      <div class="flex justify-center mt-4" id="testimonials-dots">
        <div class="w-2 h-2 rounded-full bg-red-600 mx-1 dot"></div>
        <div class="w-2 h-2 rounded-full bg-gray-300 mx-1 dot"></div>
        <div class="w-2 h-2 rounded-full bg-gray-300 mx-1 dot"></div>
        <div class="w-2 h-2 rounded-full bg-gray-300 mx-1 dot"></div>
        <div class="w-2 h-2 rounded-full bg-gray-300 mx-1 dot"></div>
      </div>
    </div>
  </div>
</section>

    <section class="py-16 bg-red-600 text-white w-full">
      <div class="max-w-6xl mx-auto px-4 text-center">
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
      <!-- Name input -->
      <div class="space-y-2">
        <input
          type="text"
          placeholder="Tu Nombre"
          bind:value={name}
          required
          disabled={submitting}
          class="w-full rounded-full px-6 py-3 shadow-sm border border-gray-300"
        />
      </div>

      <!-- Email input -->
      <div class="space-y-2">
        <input
          type="email"
          placeholder="Tu Email"
          bind:value={email}
          required
          disabled={submitting}
          class="w-full rounded-full px-6 py-3 shadow-sm border border-gray-300"
        />
      </div>

      <!-- WhatsApp input -->
      <div class="space-y-2">
        <input
          type="tel"
          placeholder="Número WhatsApp (ej: 99629864)"
          bind:value={whatsapp}
          required
          disabled={submitting}
          class="w-full rounded-full px-6 py-3 shadow-sm border border-gray-300 {whatsappError ? 'border-red-500' : ''}"
          on:input={() => {
            // Remove any non-digit characters
            whatsapp = whatsapp.replace(/\D/g, '');
            validateWhatsApp(whatsapp);
          }}
        />
        {#if whatsappError}
          <p class="text-red-600 text-xs px-2">{whatsappError}</p>
        {/if}
      </div>

      <!-- Newsletter checkbox -->
      <div class="flex items-center space-x-2">
        <input
          type="checkbox"
          id="newsletter-modal"
          bind:checked={newsletter}
          disabled={submitting}
          class="rounded-full"
        />
        <label for="newsletter-modal" class="text-sm">
          Quiero recibir contenido exclusivo y ofertas especiales
        </label>
      </div>
      
      {#if submitError}
        <p class="text-red-600 text-sm text-center">{submitError}</p>
      {/if}
      
      {#if submitSuccess}
        <p class="text-green-600 text-sm text-center">¡Registro exitoso! Redirigiendo...</p>
      {/if}
      
      <button 
        type="submit" 
        disabled={submitting}
        class="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 text-lg rounded-full shadow-lg transform transition-transform hover:scale-105"
      >
        {#if submitting}
          Procesando...
        {:else}
          Obtener Mi Acceso VIP
        {/if}
      </button>
      
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
    
    /* Hide scrollbar but keep functionality */
    .hide-scrollbar {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
    
    .hide-scrollbar::-webkit-scrollbar {
      display: none;  /* Chrome, Safari and Opera */
    }
    
    /* Add smooth scrolling */
    #pricing-container {
      scroll-behavior: smooth;
      -webkit-overflow-scrolling: touch;
    }

    #testimonials-container {
      scroll-behavior: smooth;
      -webkit-overflow-scrolling: touch;
      padding-bottom: 1rem;
    }
  </style>
</div> 