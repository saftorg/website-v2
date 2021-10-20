<script setup lang="ts">
import Home from 'views/Home.vue'
import Menu from 'components/Menu.vue'
</script>

<template>
  <Menu />

  <Home />
</template>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  @apply antialiased;
  @apply text-gray-800;
  @apply overflow-x-hidden;
}
</style>
