<script lang="ts">
  import { fade } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';
  
  export let showModal: boolean;
  
  const dispatch = createEventDispatcher();
  
  $: {
    console.log('Modal showModal value changed:', showModal);
  }
  
  function closeModal() {
    console.log('Closing modal...');
    showModal = false;
    dispatch('close');
  }
</script>

{#if showModal}
  <div 
    class="fixed inset-0 bg-black/50 z-[100]"
    transition:fade
    on:click={closeModal}
  >
    <div 
      class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg w-full max-w-lg"
      on:click|stopPropagation
    >
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold">Únete a la Lista de Espera</h2>
        <button 
          class="text-gray-500 hover:text-gray-700"
          on:click={closeModal}
        >
          ✕
        </button>
      </div>
      <slot />
    </div>
  </div>
{:else}
  <div class="hidden">Modal is closed</div>
{/if} 