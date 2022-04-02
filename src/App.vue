<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Vitesse',
  meta: [{ name: 'description', content: 'Opinionated Vite Starter Template' }],
})
</script>

<template>
  <router-view />
</template>

<style lang="scss">
html.has-scroll-smooth {
  overflow: hidden;
}

html.has-scroll-dragging {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.has-scroll-smooth body {
  overflow: hidden;
}

.has-scroll-smooth [data-scroll-container] {
  min-height: 100vh;
}

[data-scroll-direction='horizontal'] [data-scroll-container] {
  height: 100vh;
  display: inline-block;
  white-space: nowrap;
}

[data-scroll-direction='horizontal'] [data-scroll-section] {
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  height: 100%;
}

.c-scrollbar {
  position: absolute;
  right: 0;
  top: 0;
  width: 11px;
  height: 100%;
  transform-origin: center right;
  transition: transform 0.3s, opacity 0.3s;
  opacity: 0;
}
.c-scrollbar:hover {
  transform: scaleX(1.45);
}
.c-scrollbar:hover,
.has-scroll-scrolling .c-scrollbar,
.has-scroll-dragging .c-scrollbar {
  opacity: 1;
}
[data-scroll-direction='horizontal'] .c-scrollbar {
  width: 100%;
  height: 10px;
  top: auto;
  bottom: 0;
  transform: scaleY(1);
}
[data-scroll-direction='horizontal'] .c-scrollbar:hover {
  transform: scaleY(1.3);
}

.c-scrollbar_thumb {
  position: absolute;
  top: 0;
  right: 0;
  background-color: black;
  opacity: 0.5;
  width: 7px;
  border-radius: 10px;
  margin: 2px;
  cursor: -webkit-grab;
  cursor: grab;
}
.has-scroll-dragging .c-scrollbar_thumb {
  cursor: -webkit-grabbing;
  cursor: grabbing;
}
[data-scroll-direction='horizontal'] .c-scrollbar_thumb {
  right: auto;
  bottom: 0;
}
.ease {
  &-in-sine {
    transition-timing-function: cubic-bezier(0.12, 0, 0.39, 0);
  }
  &-out-sine {
    transition-timing-function: cubic-bezier(0.61, 1, 0.88, 1);
  }
  &-in-out-sine {
    transition-timing-function: cubic-bezier(0.37, 0, 0.63, 1);
  }
  &-in-quad {
    transition-timing-function: cubic-bezier(0.11, 0, 0.5, 0);
  }
  &-out-quad {
    transition-timing-function: cubic-bezier(0.5, 1, 0.89, 1);
  }
  &-in-out-quad {
    transition-timing-function: cubic-bezier(0.45, 0, 0.55, 1);
  }
  &-in-cubic {
    transition-timing-function: cubic-bezier(0.32, 0, 0.67, 0);
  }
  &-out-cubic {
    transition-timing-function: cubic-bezier(0.33, 1, 0.68, 1);
  }
  &-in-out-cubic {
    transition-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
  }
  &-in-quart {
    transition-timing-function: cubic-bezier(0.5, 0, 0.75, 0);
  }
  &-out-quart {
    transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
  }
  &-in-out-quart {
    transition-timing-function: cubic-bezier(0.76, 0, 0.24, 1);
  }
  &-in-quint {
    transition-timing-function: cubic-bezier(0.64, 0, 0.78, 0);
  }
  &-out-quint {
    transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
  }
  &-in-out-quint {
    transition-timing-function: cubic-bezier(0.83, 0, 0.17, 1);
  }
  &-in-expo {
    transition-timing-function: cubic-bezier(0.7, 0, 0.84, 0);
  }
  &-out-expo {
    transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  }
  &-in-out-expo {
    transition-timing-function: cubic-bezier(0.87, 0, 0.13, 1);
  }
  &-in-circ {
    transition-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
  }
  &-out-circ {
    transition-timing-function: cubic-bezier(0, 0.55, 0.45, 1);
  }
  &-in-out-circ {
    transition-timing-function: cubic-bezier(0.85, 0, 0.15, 1);
  }
  &-in-back {
    transition-timing-function: cubic-bezier(0.36, 0, 0.66, -0.56);
  }
  &-out-back {
    transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  &-in-out-back {
    transition-timing-function: cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }
}

.grid-cols {
  &-16 {
    grid-template-columns:
      minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(0vw, 1fr) minmax(0vw, 1.1fr)
      minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(0vw, 1fr) minmax(0vw, 1.1fr)
      minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(0vw, 1fr) minmax(0vw, 1.1fr)
      minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(0vw, 1fr);
  }
  &-24 {
    grid-template-columns:
      minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr)
      minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr)
      minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr)
      minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr)
      minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr)
      minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr);
  }
}

h1 {
}

h2 {
  font-size: 9vw !important;
}

h3 {
}

h4 {
}

a {
  @apply cursor-pointer;
}

.wrapper {
  @apply w-screen;
  @apply grid;
  @apply grid-rows-auto;
  @apply gap-y-3.9vw;
  grid-template-columns:
    minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(0vw, 1fr) minmax(0vw, 1.1fr)
    minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(0vw, 1fr) minmax(0vw, 1.1fr)
    minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(0vw, 1fr) minmax(0vw, 1.1fr)
    minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(0vw, 1fr);
}

@media screen and (min-width: 1024px) {
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
      minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr)
      minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr)
      minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr)
      minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr)
      minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr)
      minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr);
  }
}
</style>
