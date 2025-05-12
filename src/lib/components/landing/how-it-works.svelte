<script lang="ts">
  import { onMount } from 'svelte';
  
  interface Step {
    title: string;
    description: string;
    icon: string;
  }
  
  const steps: Step[] = [
    {
      title: "Escanea el QR",
      description: "Sin app, acceso directo al menú digital.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
      </svg>`
    },
    {
      title: "Pregunta lo que quieras",
      description: "¿Qué es lo más popular? ¿Soy vegano, qué puedo comer?",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>`
    },
    {
      title: "Decide sin dudar",
      description: "Reco te guía según tus gustos, dieta y bolsillo.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>`
    },
    {
      title: "Pide. Disfruta.",
      description: "Mejor elección, mejor experiencia.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>`
    }
  ];
  
  let visible = $state(Array(steps.length).fill(false));
  
  $effect(() => {
    if (typeof window === 'undefined') return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          visible[index] = true;
        }
      });
    }, { threshold: 0.3 });
    
    const stepElements = document.querySelectorAll('.step-item');
    stepElements.forEach(el => observer.observe(el));
    
    return () => {
      stepElements.forEach(el => observer.unobserve(el));
    };
  });
</script>

<section id="how-it-works" class="py-16 md:py-24 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900">¿Cómo funciona Reco?</h2>
      <p class="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
        Esta parte es para ti, comensal. Sí, tú. El que tiene hambre, dudas o simplemente quiere pedir mejor sin complicarse.
      </p>
    </div>
    
    <div class="max-w-4xl mx-auto">
      <div class="relative">
        <!-- Vertical line -->
        <div class="absolute left-8 inset-y-0 w-0.5 bg-gray-200"></div>
        
        {#each steps as step, i}
          <div 
            class="step-item relative flex items-start mb-12 transition-all duration-500 ease-in-out opacity-0"
            class:opacity-100={visible[i]}
            style="transition-delay: {i * 150}ms;"
            data-index={i}
          >
            <!-- Circle with icon -->
            <div class="z-10 flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg">
              {@html step.icon}
            </div>
            
            <div class="ml-6">
              <h3 class="text-xl font-bold text-gray-900">{step.title}</h3>
              <p class="mt-2 text-gray-600">{step.description}</p>
            </div>
          </div>
        {/each}
      </div>
      
      <div class="mt-12 bg-blue-50 p-6 rounded-lg">
        <p class="text-center text-blue-800">
          <strong>¿Tienes un restaurante?</strong> Descubre cómo Reco transforma estas preguntas en 
          insights que mejoran tu cocina.
        </p>
      </div>
    </div>
  </div>
</section> 