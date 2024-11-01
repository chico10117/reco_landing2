<script lang="ts">
  import { cn } from "$lib/utils";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { buttonVariants, type ButtonVariants } from "./variants";

  interface $$Props extends HTMLButtonAttributes {
    variant?: ButtonVariants["variant"];
    size?: ButtonVariants["size"];
    class?: string;
  }

  let className: string | undefined = undefined;
  export let variant: $$Props["variant"] = "default";
  export let size: $$Props["size"] = "default";
  export { className as class };
</script>

<button
  class={cn(buttonVariants({ variant, size, className }))}
  {...$$restProps}
>
  <slot />
</button> 