<script lang="ts">
  import { cn } from "$lib/utils";

  let { class: className = "" } = $props<{
    class?: string;
  }>();
</script>

<div class={cn("p-6 pt-0", className)}>
  {@render $$slots.default?.()}
</div> 