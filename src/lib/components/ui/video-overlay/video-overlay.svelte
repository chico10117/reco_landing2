<!-- VideoOverlay.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';

  let isOpen = $state(false);
  let isLoading = $state(true);
  let iframeElement: HTMLIFrameElement;
  
  // Convert Google Drive link to embed URL
  const videoId = "1K1W-WLbC978iKJSWltMyEoPdxRPS6WLd";
  const embedUrl = `https://drive.google.com/file/d/${videoId}/preview`;

  // Preload iframe in background
  let preloadIframe: HTMLIFrameElement;
  onMount(() => {
    // Create hidden iframe to start loading video
    preloadIframe = document.createElement('iframe');
    preloadIframe.src = embedUrl;
    preloadIframe.style.display = 'none';
    document.body.appendChild(preloadIframe);

    return () => {
      // Cleanup on component destroy
      preloadIframe?.remove();
    };
  });
  
  export function open() {
    isOpen = true;
    isLoading = true;
  }

  export function close() {
    isOpen = false;
  }

  function onIframeLoad() {
    isLoading = false;
  }
</script>

{#if isOpen}
  <div 
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
    transition:fade={{ duration: 200 }}
    on:click={close}
  >
    <div 
      class="relative w-full max-w-4xl aspect-video"
      on:click|stopPropagation
    >
      <button
        class="absolute -top-10 right-0 text-white hover:text-gray-300"
        on:click={close}
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Loading spinner -->
      {#if isLoading}
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      {/if}

      <iframe
        bind:this={iframeElement}
        src={embedUrl}
        class="w-full h-full rounded-lg shadow-xl {isLoading ? 'opacity-0' : 'opacity-100'}"
        allow="autoplay"
        allowfullscreen
        on:load={onIframeLoad}
      ></iframe>
    </div>
  </div>
{/if} 