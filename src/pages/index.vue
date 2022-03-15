<script setup lang="ts">
import gsap from 'gsap'

tryOnMounted(() => {
  gsap.to('#tag-line span', {
    fontStretch: '115%',
    stagger: 0.6,
    duration: 2,
    ease: 'power4.inOut',
  })
})
</script>

<template>
  <div class="fixed -z-1 w-screen h-screen top-0 left-0 bg-#0F6CAF">
    <div id="noise"></div>
  </div>
  <header class="grid relative w-screen h-screen isolate">
    <blurry-circle
      fill="#9A1FCD"
      class="absolute opacity-90 scale-120 -z-1 -top-20vw -left-10vw"
    />
    <div class="absolute -z-1 top-40vh left-60vw scale-200">
      <blurry-circle
        fill="#59B4E8"
        class="opacity-90 scale-120"
      />
    </div>
    <h1 id="tag-line" class="place-self-center">
      Equipping the <span>believer</span> to <span>defend</span> their
      <span>faith</span><br />
      <span>anytime, anywhere</span>.
    </h1>

    <div class="absolute">
      <svg
        class="scale-50"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:svgjs="http://svgjs.dev/svgjs"
        viewBox="0 0 800 800"
      >
        <defs>
          <radialGradient id="sssurface-grad-dark" r="86%" cx="20%" cy="20%">
            <stop
              offset="0%"
              stop-color="hsla(220, 79%, 86%, 1)"
              stop-opacity="0"
            ></stop>
            <stop offset="100%" stop-color="#334767" stop-opacity="1"></stop>
          </radialGradient>
          <radialGradient id="sssurface-grad-light" r="49%" cx="30%" cy="30%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.75"></stop>
            <stop
              offset="100%"
              stop-color="hsla(220, 79%, 86%, 1)"
              stop-opacity="0"
            ></stop>
          </radialGradient>
        </defs>
        <g>
          <circle
            r="150"
            cx="400"
            cy="400"
            fill="hsla(220, 79%, 86%, 1)"
          ></circle>
          <circle
            r="150"
            cx="400"
            cy="400"
            fill="url(#sssurface-grad-dark)"
          ></circle>
          <circle
            r="150"
            cx="400"
            cy="400"
            fill="url(#sssurface-grad-light)"
          ></circle>
        </g>
      </svg>
    </div>
  </header>
</template>

<style lang="scss" scoped>
#tag-line {
  @apply text-8vw md:(text-3.5vw w-80vw) leading-9 md:leading-none mx-auto;
  font-family: 'Joyride VF';
}

#noise {
  background: url('~/assets/noise.svg') repeat;
  @apply w-full;
  @apply h-full;
  @apply mix-blend-multiply;
}
</style>

<route lang="yaml">
meta:
  layout: default
</route>
