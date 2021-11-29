<script setup lang="ts"></script>

<template>
  <div
    class="
      fixed
      grid
      place-content-center
      left-0
      inset-y-0
      w-[4vw]
      border-white border-l-[0.05vw] border-r-[0.05vw]
      z-40
    "
  >
    <div class="line line-1"></div>
    <div class="line line-2"></div>
  </div>
</template>

<style lang="scss" scoped>
.line {
  height: vw(0.075);
  width: vw(1.5);
  @apply bg-white;

  &-2 {
    margin-top: vw(0.75);
  }
}
</style>
