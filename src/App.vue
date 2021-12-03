<script setup lang="ts">
import { ref } from 'vue'
import Home from 'views/Home.vue'
import Menu from './components/Menu.vue'
import imagesLoaded from 'imagesloaded'
import Loading from 'views/Loading.vue'
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
  <Menu />
  <Home />
</template>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;
@import './assets/fonts/joyride/stylesheet.css';
@import './assets/fonts/manrope/stylesheet.css';

@layer base {
  h1,
  .h1 {
    @apply text-[14vw];
    @apply leading-[1.1];
    @apply md:text-f-8xl;
    @apply font-joyride;
  }

  .grid-cols-24 {
    grid-template-columns:
      minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr)
      minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(
        0vw,
        1fr
      )
      minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(
        0vw,
        1.3fr
      )
      minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(
        0vw,
        1fr
      )
      minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr);
  }

  h2,
  .h2 {
    @apply text-[6.5vw];
    @apply md:text-f-4xl;
    @apply font-manrope;
    @apply font-semibold;
  }

  h3,
  .h3 {
    @apply text-f-2xl;
    @apply font-joyride;
  }

  p,
  .p {
    @apply font-manrope;
    @apply font-semibold;
    @apply text-[4.5vw];
    @apply md:text-f-2xl;
    @apply max-w-prose;
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
    @apply mx-f-24;
  }

  .wrapper {
    @apply mx-f-24;
    @apply grid;
    @apply grid-cols-12;
    @apply grid-rows-[auto];
    grid-row-gap: 3.888888888888889vw;
    grid-template-columns:
      minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(
        0vw,
        1fr
      )
      minmax(0vw, 1.1fr) minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(0vw, 1fr) minmax(
        0vw,
        1.1fr
      )
      minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(0vw, 1fr);
    @screen md {
      grid-row-gap: 0px;
      grid-template-columns:
        minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr)
        minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(
          0vw,
          1fr
        )
        minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(
          0vw,
          1.3fr
        )
        minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(
          0vw,
          1fr
        )
        minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr);
    }
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
