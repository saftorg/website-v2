<script setup lang="ts">
import { ref, watch } from 'vue'
import { useStore } from '@nanostores/vue'
import * as store from '../store'
import gsap from 'gsap'

const isMenuOpen = useStore(store.isMenuOpen)
const toggleIsMenuOpen = store.toggleIsMenuOpen
const hasClosingAnimationFinished = ref(true)
const menuLineDisplacement = 4
const lineOneTemplate = `translateY(-${menuLineDisplacement}px)`
const lineTwoTemplate = `translateY(${menuLineDisplacement}px)`

const links: { title: string; href: string }[] = [
  { title: 'Home', href: '#' },
  { title: 'About', href: '#' },
  { title: 'Areopagus', href: '#' },
  { title: 'Podcast', href: '#' },
]
const lineOne = '.line-1'
const lineTwo = '.line-2'

const linesEnter = () => {
  gsap.to(lineOne, {
    y: 15,
    x: 10,
    scaleX: 2,
    rotate: -45,
    ease: 'power2',
    duration: 1.2,
  })
  gsap.to(lineTwo, {
    y: -15,
    x: 10,
    scaleX: 2,
    rotate: 45,
    ease: 'power2',
    duration: 1.2,
  })
}
const linesExit = () => {
  gsap.to(lineOne, {
    x: 0,
    y: -menuLineDisplacement,
    scaleX: 1,
    rotate: 0,
    ease: 'power2',
    duration: 0.3,
  })
  gsap.to(lineTwo, {
    x: 0,
    y: menuLineDisplacement,
    scaleX: 1,
    rotate: 0,
    ease: 'power2',
    duration: 0.3,
  })
}

watch(
  () => !hasClosingAnimationFinished.value,
  (val) => {
    if (val) {
      linesEnter()
    } else {
      linesExit()
    }
  }
)

const toggleMenuButton = () => {
  toggleIsMenuOpen()
  if (isMenuOpen) hasClosingAnimationFinished.value = false
}

import SlideRevealText from 'components/SlideRevealText.vue'
</script>

<template>
  <div
    id="menu-circle"
    class="fixed z-50 text-white shadow-2xl bg-gray-800/95"
    :class="{
      open: !hasClosingAnimationFinished,
      close: hasClosingAnimationFinished,
    }"
  ></div>
  <div
    class="
      container
      h-[60%]
      top-[150px]
      xl:top-[300px]
      left-3
      xl:left-[calc(calc(50vw-600px)+0.85rem)]
      grid grid-rows-4
      content-center
      fixed
      z-[-1]
    "
    :class="{
      'z-[51]': !hasClosingAnimationFinished,
    }"
  >
    <slide-reveal-text
      v-for="({ title, href }, index) in links"
      :key="title"
      as="a"
      :href="href"
      class="link"
      :delay="index * 0.1 + 0.3"
      :is-visible="isMenuOpen"
      :on-complete-exit="
        () => {
          if (index == links.length - 1) hasClosingAnimationFinished = true
        }
      "
      >{{ title }}</slide-reveal-text
    >
  </div>
  <div
    id="menu-button"
    @click="toggleMenuButton"
    class="
      line
      w-10
      h-10
      fixed
      z-[53]
      top-10
      left-3
      xl:left-[calc(calc(50vw-600px)+0.85rem)]
      grid
      place-content-center
      cursor-pointer
    "
  >
    <div class="line-1"></div>
    <div class="line-2"></div>
  </div>
</template>

<style lang="scss" scoped>
a.link {
  @apply text-4xl;
  @apply font-joyride;
  @apply text-white;
}

.line {
  &-1,
  &-2 {
    width: 20px;
    @apply h-px;
    @apply bg-white;
  }

  &-1 {
    transform: v-bind(lineOneTemplate);
    @apply origin-top-left;
  }
  &-2 {
    transform: v-bind(lineTwoTemplate);
    @apply origin-bottom-left;
  }
}

#menu-circle {
  @apply rotate-0;
  @apply w-screen h-screen;
  @apply backdrop-blur-md;
  clip-path: circle(100%);
  transition: clip-path 0.8s cubic-bezier(0.87, 0, 0.13, 1);

  &.close {
    clip-path: circle(1.25rem at 2rem 3.75rem);
    transition: clip-path 0.6s cubic-bezier(0.45, 0, 0.55, 1);

    @screen xl {
      clip-path: circle(1.25rem at calc(calc(50vw - 600px) + 2.1rem) 3.75rem);
    }
  }
}
</style>
