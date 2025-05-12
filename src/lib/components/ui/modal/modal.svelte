<script lang="ts">
  import { fade } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  // Props
  let { 
    open = false, 
    title = '', 
    showCloseButton = true 
  } = $props<{
    open?: boolean;
    title?: string;
    showCloseButton?: boolean;
  }>();

  function closeModal() {
    dispatch('close');
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && open) {
      closeModal();
    }
  }

  // Listen for keydown events
  $effect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeydown);
      return () => {
        window.removeEventListener('keydown', handleKeydown);
      };
    }
  });
</script>

{#if open}
  <div class="fixed inset-0 z-50 flex items-center justify-center">
    <!-- Backdrop -->
    <div class="fixed inset-0 bg-black/50" transition:fade={{ duration: 200 }} onclick={closeModal}></div>
    
    <!-- Modal content -->
    <div class="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 z-10" transition:fade={{ duration: 150 }}>
      {#if title}
        <div class="flex justify-between items-center p-5 border-b">
          <h3 class="text-xl font-semibold">{title}</h3>
          {#if showCloseButton}
            <button 
              class="text-gray-500 hover:text-gray-700" 
              onclick={closeModal}
              aria-label="Close modal"
            >
              ×
            </button>
          {/if}
        </div>
      {/if}
      
      <div class="p-5">
        {@render $$slots.default?.()}
      </div>
    </div>
  </div>
{/if} 