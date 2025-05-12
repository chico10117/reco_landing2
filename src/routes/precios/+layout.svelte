<script lang="ts">
  // Este layout es específico para la sección de precios
  import type { Snippet } from 'svelte';

  let { children } = $props<{ children?: Snippet }>();
</script>

{@render children?.()} 