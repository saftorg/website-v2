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
@import 'assets/locomotive-scroll.css';
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@0;1&family=Manrope:wght@300;400;500;600;700&display=swap');

body {
  @apply font-['Manrope'];
}

h1 {
  @apply text-[15vw];
  @apply w-fit;
  @apply uppercase;
  font-family: 'Joyride STD Outline';
  @apply mx-auto;
}

h2 {
  font-size: 9vw !important;
}

h3 {
}

h4 {
}

p {
  @apply text-[6vw];
  @apply font-normal;
  @apply text-left;
}

small {
}

a {
  @apply cursor-pointer;
}

.font-serif {
  font-family: 'Libre Baskerville', serif;
}

.animation-reverse {
  animation-direction: reverse !important;
}

.font-joyride {
  font-family: 'Joyride STD';
}

.font-joyride-out {
  font-family: 'Joyride STD Outline';
}

.font-joyride-ext {
  font-family: 'Joyride EXT';
}

.font-joyride-ext-out {
  font-family: 'Joyride EXT Outline';
}

.active-text-anim {
  @apply transition-all;
  transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
  @apply duration-1000;
  @apply delay-500;
}

.thicken {
  &.active-text-anim {
    font-variation-settings: 'wght' 700;
  }
}

.wrapper {
  @apply w-screen;
  @apply grid;
  @apply grid-rows-[auto];
  @apply gap-y-[3.9vw];
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
}

.bounce {
  @apply transition-transform;
  @apply ease-out-back;
  @apply duration-300;

  &:hover {
    @apply scale-110;
  }
}

@screen md {
  h1 {
    @apply text-[13vw];
  }

  p {
    @apply text-[2.4vw];
  }

  small {
    @apply text-[1vw];
  }
}

@screen lg {
  h1 {
  }

  h2 {
    font-size: 3.8vw !important;
  }

  h3 {
  }

  h4 {
  }

  .wrapper {
    @apply gap-y-0;
    grid-template-columns:
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
      minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(
        0vw,
        1.3fr
      )
      minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr);
  }
}
</style>
