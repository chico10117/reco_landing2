<script lang="ts">
  import { onMount } from 'svelte';

  let {
    text = "",
    texts = [],
    speed = 100,
    delay = 0,
    pauseDuration = 2000,
    showCursor = true,
    cursorChar = "|",
    class: className = "",
    element = "h1"
  } = $props<{
    text?: string;
    texts?: string[];
    speed?: number;
    delay?: number;
    pauseDuration?: number;
    showCursor?: boolean;
    cursorChar?: string;
    class?: string;
    element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  }>();

  let displayText = $state("");
  let showCursorState = $state(false);
  let isTyping = $state(false);
  let currentIndex = $state(0);

  // Use texts array if provided, otherwise use single text
  const textArray = texts.length > 0 ? texts : [text];

  onMount(() => {
    const typeText = (textToType: string) => {
      return new Promise<void>((resolve) => {
        isTyping = true;
        let i = 0;
        
        const typeInterval = setInterval(() => {
          if (i < textToType.length) {
            displayText = textToType.slice(0, i + 1);
            i++;
          } else {
            clearInterval(typeInterval);
            isTyping = false;
            resolve();
          }
        }, speed);
      });
    };

    const eraseText = () => {
      return new Promise<void>((resolve) => {
        isTyping = true;
        let i = displayText.length;
        
        const eraseInterval = setInterval(() => {
          if (i > 0) {
            displayText = displayText.slice(0, i - 1);
            i--;
          } else {
            clearInterval(eraseInterval);
            isTyping = false;
            resolve();
          }
        }, speed / 2); // Erase faster than typing
      });
    };

    const startAnimation = async () => {
      showCursorState = showCursor;
      
      if (textArray.length === 1) {
        // Single text mode - just type once
        await typeText(textArray[0]);
      } else {
        // Multiple texts mode - cycle through them
        while (true) {
          await typeText(textArray[currentIndex]);
          await new Promise(resolve => setTimeout(resolve, pauseDuration));
          await eraseText();
          await new Promise(resolve => setTimeout(resolve, 300)); // Short pause before next text
          currentIndex = (currentIndex + 1) % textArray.length;
        }
      }
    };

    if (delay > 0) {
      setTimeout(startAnimation, delay);
    } else {
      startAnimation();
    }
  });
</script>

{#if element === "h1"}
  <h1 class={className}>
    {displayText}<span class="cursor" class:blink={showCursorState && !isTyping} class:visible={showCursorState}>{cursorChar}</span>
  </h1>
{:else if element === "h2"}
  <h2 class={className}>
    {displayText}<span class="cursor" class:blink={showCursorState && !isTyping} class:visible={showCursorState}>{cursorChar}</span>
  </h2>
{:else if element === "h3"}
  <h3 class={className}>
    {displayText}<span class="cursor" class:blink={showCursorState && !isTyping} class:visible={showCursorState}>{cursorChar}</span>
  </h3>
{:else if element === "h4"}
  <h4 class={className}>
    {displayText}<span class="cursor" class:blink={showCursorState && !isTyping} class:visible={showCursorState}>{cursorChar}</span>
  </h4>
{:else if element === "h5"}
  <h5 class={className}>
    {displayText}<span class="cursor" class:blink={showCursorState && !isTyping} class:visible={showCursorState}>{cursorChar}</span>
  </h5>
{:else if element === "h6"}
  <h6 class={className}>
    {displayText}<span class="cursor" class:blink={showCursorState && !isTyping} class:visible={showCursorState}>{cursorChar}</span>
  </h6>
{:else if element === "p"}
  <p class={className}>
    {displayText}<span class="cursor" class:blink={showCursorState && !isTyping} class:visible={showCursorState}>{cursorChar}</span>
  </p>
{:else}
  <span class={className}>
    {displayText}<span class="cursor" class:blink={showCursorState && !isTyping} class:visible={showCursorState}>{cursorChar}</span>
  </span>
{/if}

<style>
  .cursor {
    opacity: 0;
    transition: opacity 0.1s;
  }
  
  .cursor.visible {
    opacity: 1;
  }
  
  .cursor.blink {
    animation: blink 1s infinite;
  }
  
  @keyframes blink {
    0%, 50% {
      opacity: 1;
    }
    51%, 100% {
      opacity: 0;
    }
  }
</style> 