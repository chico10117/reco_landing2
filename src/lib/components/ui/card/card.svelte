<script lang="ts">
  import { cn } from "$lib/utils";

  let { class: className = "" } = $props<{
    class?: string;
  }>();
</script>

<div class={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}>
  {@render $$slots.default?.()}
</div> 