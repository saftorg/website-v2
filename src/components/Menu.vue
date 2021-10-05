<script setup lang="ts">
import anime from 'animejs';
import { computed, ref, watch } from 'vue';
import { useWindowSize } from "@vueuse/core"

const { width } = useWindowSize()

const isMenuOpen = ref(false)
const menuLineDisplacement = 4
const lineOneTemplate = `translateY(-${menuLineDisplacement}px)`
const lineTwoTemplate = `translateY(${menuLineDisplacement}px)`

const links: { title: string, href: string }[] = [
  { title: "Home", href: "#" },
  { title: "About", href: "#" },
  { title: "Areopagus", href: "#" },
  { title: "Podcast", href: "#" },
]
const hasClosingAnimationFinished = ref(true)

watch(() => !hasClosingAnimationFinished.value, (val) => {
  if (val) {
    anime.timeline({
      easing: 'easeOutExpo',
      duration: 700,
    }).add({
      targets: ".line-1",
      width: 40,
      translateY: [-menuLineDisplacement, 15],
      translateX: "0.75rem",
      rotate: -45,
    }, 50).add({
      targets: ".line-3",
      width: 40,
      translateY: [menuLineDisplacement, -15],
      translateX: "0.75rem",
      rotate: 45,
    }, 50)

  } else {
    anime.timeline({
      easing: 'easeOutExpo',
      duration: 500,
    }).add({
      targets: ".line-1",
      width: 20,
      translateY: [15, -menuLineDisplacement],
      translateX: 0,
      rotate: 0,
    }, 0).add({
      targets: ".line-3",
      width: 20,
      translateY: [-15, menuLineDisplacement],
      translateX: 0,
      rotate: 0,
    }, 0)
  }
})

const menuStyle = computed(() => {
  if (!hasClosingAnimationFinished.value) {
    if (width.value >= 1200) {
      return {
        borderRadius: 0, rotate: "0deg", top: 0, left: 0, width: "50vw", height: "100vh", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
      }
    } else {
      return {
        borderRadius: 0, rotate: "0deg", top: 0, left: 0, width: "100vw", height: "100vh", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
      }
    }
  } else {
    return {
      borderRadius: "50%",
      rotate: "45deg",
      top: "2.5rem",
      left: width.value >= 1200 ? `${0.5 * width.value - 586.5}px` : "0.75rem", width: "2.5rem",
      height: "2.5rem",
      transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    }
  }
})

const log = console.log

import SlideRevealText from "components/SlideRevealText.vue"
</script>

<template>
  <div
    id="menu-circle"
    class="w-10 h-10 rounded-[50%] fixed bg-gray-800 text-white shadow-2xl z-50 ease-out duration-700 origin-center"
    :style="menuStyle"
  ></div>
  <div
    :class="{
      'container h-[60%] top-[150px] lg:top-[300px] left-3 lg:left-[calc(calc(50vw-600px)+0.75rem)] grid grid-rows-4 content-center fixed z-[-1]': true,
      'z-[51]': !hasClosingAnimationFinished
    }"
  >
    <slide-reveal-text
      v-for="({ title, href }, index) in links"
      as="a"
      :href="href"
      class="link"
      :delay="index * 100"
      :enter="isMenuOpen"
      :exit="!isMenuOpen"
      :on-complete-exit="() => { if (index == links.length - 1) hasClosingAnimationFinished = true }"
    >{{ title }}</slide-reveal-text>
  </div>
  <div
    id="menu-button"
    @click="isMenuOpen = !isMenuOpen; if (isMenuOpen) hasClosingAnimationFinished = false"
    class="line w-10 h-10 fixed z-[53] top-10 left-3 lg:left-[calc(calc(50vw-600px)+0.75rem)] grid place-content-center cursor-pointer"
  >
    <div class="line-1"></div>
    <div class="line-3"></div>
  </div>
  <div
    :class="{ 'absolute inset-0 linear duration-500': true, 'bg-black/50 z-[49]': isMenuOpen, 'z-[-1]': !isMenuOpen }"
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
  &-3 {
    width: 20px;
    @apply h-px;
    @apply bg-white;
  }

  &-1 {
    transform: v-bind(lineOneTemplate);
    @apply origin-top-left;
  }
  &-3 {
    transform: v-bind(lineTwoTemplate);
    @apply origin-bottom-left;
  }
}
</style>
