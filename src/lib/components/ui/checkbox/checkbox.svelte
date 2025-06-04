<script lang="ts">
  import { cn } from "$lib/utils";
  import { Check } from "lucide-svelte";

  interface $$Props {
    checked?: boolean;
    class?: string;
    id?: string;
  }

  let className: string | undefined = undefined;
  export let checked = false;
  export { className as class };
</script>

<div
  class={cn(
    "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
    className
  )}
  data-state={checked ? "checked" : "unchecked"}
>
  {#if checked}
    <div class="flex items-center justify-center text-current">
      <Check class="h-4 w-4" />
    </div>
  {/if}
  <input
    type="checkbox"
    bind:checked
    class="absolute h-4 w-4 opacity-0"
    {...$$restProps}
  />
</div> 