<script setup lang="ts">
import SaftLogo from 'components/SaftLogo.vue'
</script>

<template>
  <div
    class="
      fixed
      z-50
      grid
      w-screen
      pt-f-28
      md:pt-f-14
      text-white
      grid-cols-12
    "
  >
    <div class="mx-auto flex col-start-6 col-end-8">
      <saft-logo class="flex-none h-8 fill-current md:h-f-12" />
      <h3 class="hidden leading-none uppercase md:block ml-f-4">
        SAFT
        <br />Apologetics
      </h3>
    </div>
    <div class="w-full cursor-pointer self-center justify-self-end col-start-11 col-end-11">
      <div class="line line-1"></div>
      <div class="line line-2"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.line {
  @apply h-px;
  @apply w-6;
  @apply md:w-f-9;
  @apply bg-white;

  &-2 {
    @apply mt-3;
    @apply md:mt-f-4;
  }
}
</style>
