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
  <Loading v-if="!imgsAreLoaded"/>
  <div>
    <Menu />

    <Home />
  </div>
</template>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;
@import './assets/fonts/joyride/stylesheet.css';
@import './assets/fonts/manrope/stylesheet.css';

@layer base {
  h1 {
    @apply text-4xl;
    @apply font-joyride;
    @apply leading-tight;
  }

  h2 {
    @apply text-2xl;
    @apply font-joyride;
    @apply leading-none;
  }

  p {
    @apply font-manrope;
    @apply max-w-prose;
    @apply text-base;
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
  font-size: 14px;
  @apply antialiased;
  @apply text-gray-800;
  @apply overflow-x-hidden;
}

body {@apply bg-blue-100;}

</style>
