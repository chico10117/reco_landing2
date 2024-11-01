<script lang="ts">
  import { cn } from "$lib/utils";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { buttonVariants, type ButtonVariants } from "./variants";
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  interface $$Props extends HTMLButtonAttributes {
    variant?: ButtonVariants["variant"];
    size?: ButtonVariants["size"];
    class?: string;
  }

  let className: string | undefined = undefined;
  export let variant: $$Props["variant"] = "default";
  export let size: $$Props["size"] = "default";
  export { className as class };

  function handleClick(event: MouseEvent) {
    console.log('Button clicked');
    dispatch('click', event);
  }
</script>

<button
  class={cn(buttonVariants({ variant, size, className }))}
  on:click={handleClick}
  {...$$restProps}
>
  <slot />
</button> 