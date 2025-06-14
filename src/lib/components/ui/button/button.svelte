<!-- svelte-options runes={true} -->
<script lang="ts">
  import type { Snippet } from 'svelte';
  import { cn } from "$lib/utils";
  import { buttonVariants, type ButtonVariants } from "./variants";

  // Use runes for props
  let {
    variant = "default",
    size = "default",
    class: className,
    children,
    onclick,
    ...attrs
  } = $props<{
    variant?: ButtonVariants["variant"];
    size?: ButtonVariants["size"];
    class?: string;
    children?: Snippet; // Explicit children prop
    onclick?: (event: MouseEvent) => void;
    [key: string]: any;
  }>();
</script>

<button
  class={cn(buttonVariants({ variant, size }), className)}
  {onclick}
  {...attrs}
>
  {@render children?.()}
</button> 