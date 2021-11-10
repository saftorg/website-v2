<script setup lang="ts">
import { ref } from 'vue'
import Home from 'views/Home.vue'
import Menu from 'components/Menu.vue'
import imagesLoaded from 'imagesloaded'
import Loading from './views/Loading.vue'
import { tryOnMounted } from '@vueuse/core'

const imgsAreLoaded = ref(false)

tryOnMounted(() => {
  imagesLoaded(
    document.querySelectorAll('img'),
    { background: true },
    () => (imgsAreLoaded.value = true)
  )
})
</script>

<template>
  <Loading v-if="!imgsAreLoaded" />
  <div>
    <Menu />

    <Home />
  </div>
</template>

<style lang="scss">
@use 'sass:math';
@tailwind base;
@tailwind components;
@tailwind utilities;
@import './assets/fonts/joyride/stylesheet.css';
@import './assets/fonts/manrope/stylesheet.css';

$font-size: 14;
@mixin vw($size, $leading) {
  $screen-size: 1800;
  font-size: max(#{$size}rem, #{math.div($size * $font-size, $screen-size) * 100vw});
  line-height: max(#{$leading}rem, #{math.div($leading * $font-size, $screen-size) * 100vw});
}

@layer base {
  h1 {
    @include vw(2.25, 1.25);
    @apply font-joyride;
  }

  h2 {
    @include vw(1.5, 1);
    @apply font-joyride;
  }

  p {
    @apply font-manrope;
    @apply max-w-prose;
    @include vw(1, 1.5);
  }

  .clip {
    @apply overflow-hidden;
  }
}

@layer components {
  .container {
    @apply mx-auto;
    @apply px-3;
    width: Min(1200px, 100%);
  }

  .hero {
    @apply px-3;
    @apply w-screen;
  }
}

@layer utilities {
  .will-change-transform {
    will-change: transform;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: #{$font-size}px;
  @apply antialiased;
  @apply text-gray-800;
  @apply overflow-x-hidden;
}

body {
  @apply bg-blue-100;
}
</style>
