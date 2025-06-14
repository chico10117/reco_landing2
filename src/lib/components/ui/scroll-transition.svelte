<script lang="ts">
  import { onMount } from 'svelte';

  import type { Snippet } from 'svelte';
  
  type Direction = 'up' | 'down' | 'left' | 'right';

  let { delay = 0, direction = 'up' as Direction, children } = $props<{
    delay?: number;
    direction?: Direction;
    children?: Snippet;
  }>();

  let visible = $state(false);
  let element: HTMLElement;

  const getTransformValue = (visible: boolean) => {
    const distance = '30px';
    const transforms: Record<Direction, string> = {
      up: `translateY(${visible ? '0' : distance})`,
      down: `translateY(${visible ? '0' : `-${distance}`})`,
      left: `translateX(${visible ? '0' : distance})`,
      right: `translateX(${visible ? '0' : `-${distance}`})`
    };
    return transforms[direction as Direction];
  };

  onMount(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            visible = true;
          } else {
            visible = false;
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  });
</script>

<div
  bind:this={element}
  class="transition-all duration-1000"
  style="
    transform: {getTransformValue(visible)};
    opacity: {visible ? 1 : 0};
    transition-delay: {delay}ms;
  "
>
  <slot />
</div> 