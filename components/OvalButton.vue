<script setup lang="ts">
import { vIntersectionObserver } from '@vueuse/components';

const onIntersect: IntersectionObserverCallback = ([
  { isIntersecting, target },
]) => {
  const oval = target as HTMLElement;
  if (isIntersecting) {
    oval.classList.remove('scale-0');
    oval.classList.add('scale-100');
  }
};
</script>

<template>
  <a
    v-intersection-observer="onIntersect"
    class="grid relative place-items-center scale-0 bounce"
  >
    <div
      class="
        row-start-1
        col-start-1
        row-end-2
        col-end-2
        border
        rounded-[50%]
        h-[35vw]
        md:h-[10vw]
        w-full
        -rotate-12
      "
    ></div>
    <p
      class="
        row-start-1
        col-start-1
        row-end-2
        col-end-2
        text-center text-[5vw]
        max-w-[42vw]
        md:max-w-[12vw] md:text-[1.4vw]
      "
    >
      <slot />
    </p>
  </a>
</template>
