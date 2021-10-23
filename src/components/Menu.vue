<script setup lang="ts">
import { ref, watch } from 'vue'
import { tryOnMounted, useToggle } from '@vueuse/core'

const [isMenuOpen, toggleIsMenuOpen] = useToggle(false)
const menuLineDisplacement = 4
const lineOneTemplate = `translateY(-${menuLineDisplacement}px)`
const lineTwoTemplate = `translateY(${menuLineDisplacement}px)`

const links: { title: string; href: string }[] = [
  { title: 'Home', href: '#' },
  { title: 'About', href: '#' },
  { title: 'Areopagus', href: '#' },
  { title: 'Podcast', href: '#' },
]
const hasClosingAnimationFinished = ref(true)
tryOnMounted(() => {
  const lineOne = document.querySelector('.line-1') as HTMLElement
  const lineTwo = document.querySelector('.line-2') as HTMLElement
  const { variant: lineOneVariant } = useMotion(lineOne, {
    initial: {
      x: 0,
      y: -menuLineDisplacement,
      width: 20,
      rotate: 0,
    },
    enterIn: {
      width: 40,
      y: 15,
      x: 10,
      rotate: -45,
    },
  })
  const { variant: lineTwoVariant } = useMotion(lineTwo, {
    initial: {
      x: 0,
      y: menuLineDisplacement,
      width: 20,
      rotate: 0,
    },
    enterIn: {
      width: 40,
      y: -15,
      x: 10,
      rotate: 45,
    },
  })

  watch(
    () => !hasClosingAnimationFinished.value,
    (val) => {
      if (val) {
        lineOneVariant.value = 'enterIn'
        lineTwoVariant.value = 'enterIn'
      } else {
        lineOneVariant.value = 'initial'
        lineTwoVariant.value = 'initial'
      }
    }
  )
})
const log = console.log

import SlideRevealText from 'components/SlideRevealText.vue'
import { useMotion } from '@vueuse/motion'
</script>

<template>
  <div
    id="menu-circle"
    class="fixed z-50 left-0 top-0 text-white bg-gray-800 shadow-2xl duration-700 ease-out origin-center"
    :class="!hasClosingAnimationFinished ? 'open' : 'close'"
  ></div>
  <div
    class="
      container
      h-[60%]
      top-[150px]
      lg:top-[300px]
      left-3
      lg:left-[calc(calc(50vw-600px)+0.85rem)]
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
      :delay="index * 0.1"
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
    @click="
      toggleIsMenuOpen();
      if (isMenuOpen) hasClosingAnimationFinished = false
    "
    class="
      line
      w-10
      h-10
      fixed
      z-[53]
      top-10
      left-3
      lg:left-[calc(calc(50vw-600px)+0.85rem)]
      grid
      place-content-center
      cursor-pointer
    "
  >
    <div class="line-1"></div>
    <div class="line-2"></div>
  </div>
  <div
    :class="{
      'absolute inset-0 linear duration-500': true,
      'bg-black/50 z-[49]': isMenuOpen,
      'z-[-1]': !isMenuOpen,
    }"
  ></div>
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
  &.open {
    @apply rounded-none;
    @apply rotate-0;
    @apply w-screen h-screen;

    @screen lg {
      width: 50vw;
    }
  }

  &.close {
    border-radius: 50%;
    @apply w-10 h-10;
    @apply duration-300;
    transform: translateX(0.75rem) translateY(2.5rem);

    @screen lg {
      --x: calc(calc(50vw - 600px) + 0.85rem);
      transform: translateX(var(--x)) translateY(2.5rem) rotate(45deg);
    }
  }
}
</style>
