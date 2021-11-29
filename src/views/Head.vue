<script setup lang="ts">
import SlideRevealText from 'components/SlideRevealText.vue'
import SaftLogo from 'components/SaftLogo.vue'
</script>
<template>
  <main>
    <div
      id="head-section"
      class="
        hero
        h-screen
        grid grid-rows-[6vw,auto,auto]
        overflow-hidden
        text-white
        z-10
        pl-f-28
      "
    >
      <div
        data-scroll
        class="flex z-20 col-span-full row-start-1 place-self-center text-white"
      >
        <saft-logo class="fill-current h-f-12" />
        <h2 class="hidden leading-none uppercase md:block ml-f-4">
          SAFT
          <br />Apologetics
        </h2>
      </div>
      <slide-reveal-text
        as="h1"
        data-scroll
        class="col-span-full row-start-2 self-end w-[70vw]"
        :delay="1.2"
        :appear-once="true"
      >
        Seeking Answers, Finding Truth.
      </slide-reveal-text>
      <p class="col-span-full row-start-3 mt-[0]">
        We are a web-based Christian initiative that aims to equip the believer
        defend their faith so that they may effectively evangelise.
      </p>
    </div>

    <div
      id="about-section"
      class="grid place-content-center h-screen text-white"
    >
      <h1 data-scroll>About Us</h1>
    </div>
  </main>
</template>

<style lang="scss" scoped>
#seeking-text {
  @apply text-f-8xl;
  width: vw(100);
  @apply from-blue-400;
  @apply to-white;
  @apply bg-gradient-to-t;
  @apply bg-clip-text;
}
</style>
