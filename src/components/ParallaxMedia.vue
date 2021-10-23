<script setup lang="ts">
import { ref, reactive, computed, Ref } from 'vue'
import { useParallax } from '@vueuse/core'

const target: Ref<HTMLElement | null> = ref(null)
const isOutside = ref(true)
const parallax = reactive(useParallax(target))

const initialCardStyle =
  'transform: perspective(500px) scale(1,1) rotateY(0deg) rotateX(0deg);'
const cardStyle = computed(() =>
  isOutside.value
    ? initialCardStyle
    : `transform: perspective(500px) scale(${
        1 + Math.abs(parallax.tilt * 0.017)
      }, ${1 + Math.abs(parallax.roll * 0.017)})
       rotateY(${parallax.tilt * 12}deg) rotateX(${parallax.roll * 12}deg);
   `
)

const props = defineProps({
  class: String,
})
</script>

<template>
  <div
    ref="target"
    class="transition-transform duration-300 ease-out transform-gpu will-change-transform shadow-3xl"
    :class="props.class"
    @mouseleave="isOutside = true"
    @mouseover="isOutside = false"
    :style="cardStyle"
  >
    <slot />
  </div>
</template>
