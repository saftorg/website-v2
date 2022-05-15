<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

@import 'assets/joyride-vf.css';
@import 'assets/manrope/manrope-vf.css';
@import 'assets/joyride/stylesheet.css';

h1 {
  @apply text-[20vw];
  @apply uppercase;
  font-family: 'Joyride STD Outline';
}

h2 {
  font-size: 9vw !important;
}

h3 {}

h4 {}

a {
  @apply cursor-pointer;
}

.wrapper {
  @apply w-screen;
  @apply grid;
  @apply grid-rows-[auto];
  @apply gap-y-[3.9vw];
  grid-template-columns:
    minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(0vw, 1fr);
}


@screen md {
  h1 {
    @apply text-[5vw];
  }
}

@screen lg {
  h1 {}

  h2 {
    font-size: 3.8vw !important;
  }

  h3 {}

  h4 {}

  .wrapper {
    @apply gap-y-0;
    grid-template-columns:
      minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr);
  }


}
</style>
