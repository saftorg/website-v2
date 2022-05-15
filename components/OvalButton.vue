<script setup lang="ts">
import { vIntersectionObserver } from '@vueuse/components'


const onIntersect: IntersectionObserverCallback = ([{ isIntersecting, target }]) => {
  const oval = target as HTMLElement
  if (isIntersecting) {
    oval.classList.remove('scale-0')
    oval.classList.add('scale-100')
  }
}
</script>

<template>
  <a v-intersection-observer="onIntersect"
    class="flex relative justify-center content-center scale-0 transition-ease-back hover:scale-[1.15]">
    <div class="relative border rounded-[50%] h-[35vw] md:h-[10vw] w-screen -rotate-12"></div>
    <p class="absolute top-[13vw] text-[5vw] md:top-[4vw] md:text-[1.4vw]">
      <slot />
    </p>
  </a>
</template>

<style lang="scss" scoped>
.transition-ease-back {
  @apply transition-transform;
  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1)
    /* ease out back */
  ;
  @apply duration-300;
}
</style>
