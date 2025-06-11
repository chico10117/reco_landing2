<!-- VideoOverlay.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';

  let isOpen = $state(false);
  let isLoading = $state(true);
  let iframeElement: HTMLIFrameElement;
  
    // Cloudflare Stream embed URL with autoplay enabled
  const embedUrl = "https://customer-e5khuengb89dqab3.cloudflarestream.com/d4ccc59cb861eb870cf53490ba8a1a4e/iframe?preload=true&poster=https%3A%2F%2Fcustomer-e5khuengb89dqab3.cloudflarestream.com%2Fd4ccc59cb861eb870cf53490ba8a1a4e%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&autoplay=true";

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
    role="dialog"
    aria-modal="true"
    tabindex="0"
    on:click={close}
    on:keydown={(e) => {
      if (e.key === 'Escape') {
        close();
      }
    }}
  >
    <div 
      class="relative w-full max-w-4xl aspect-video"
      role="document"
      on:click|stopPropagation
    >
      <button
        class="absolute -top-10 right-0 text-white hover:text-gray-300"
        on:click={close}
        aria-label="Close video"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {#if isLoading}
        <div class="absolute inset-0 flex items-center justify-center bg-black/50">
          <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      {/if}

      <iframe
        bind:this={iframeElement}
        src={embedUrl}
        title="Video player"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowfullscreen
        on:load={onIframeLoad}
        style="border: none;"
      ></iframe>
    </div>
  </div>
{/if}