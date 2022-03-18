<script setup lang="ts">
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger.js'

const bgRef = ref<HTMLElement>()
const loading = ref<HTMLElement>()

const loadIn = () => {
  gsap
    .timeline()
    .to(loading.value!, {
      strokeDashoffset: 0,
      duration: 2,
      ease: 'power4.out',
      autoRound: false,
    })
    .to(loading.value!, {
      strokeWidth: 0,
      duration: 0.8,
      ease: 'power4.out',
      autoRound: false,
    })
    .to(
      '.header-blob',
      {
        opacity: 1,
        duration: 4,
        ease: 'power2.out',
      },
      2.5
    )
    .to(
      '#tag-line span',
      {
        className: 'stretch',
        stagger: 0.6,
        duration: 2,
        ease: 'power4.inOut',
      },
      3
    )
}

tryOnMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  loadIn()
})
</script>

<template>
  <div ref="bgRef" class="fixed -z-1 w-screen h-screen top-0 left-0 bg-#0F6CAF">
    <div id="noise"></div>
  </div>

  <svg
    class="fixed w-full h-full pointer-events-none stroke-1 z-49 fill-none stroke-white"
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <path
      ref="loading"
      class="[stroke-dasharray:1] [stroke-dashoffset:1]"
      pathLength="1"
      d="M 0 0 H 100 V 100 H 0 Z"
    />
  </svg>

  <header class="grid relative w-screen h-screen isolate">
    <img
      src="../assets/medium-purple.png"
      class="header-blob absolute -top-50vh -z-1 -left-30vw w-90% opacity-0 blur-2xl"
    />
    <img
      src="../assets/light-blue.png"
      class="header-blob absolute -z-1 top-40vh left-50vw w-90% opacity-0 blur-2xl"
    />
    <h1
      data-rellax
      data-rellax-speed="1.6"
      id="tag-line"
      class="place-self-center"
    >
      Equipping the <span>believer</span> to <span>defend</span> their
      <span>faith</span><br />
      <span>anytime, anywhere</span>.
    </h1>

    <img
      src="../assets/3d-circle.svg"
      alt="3d-circle"
      class="absolute 3d-circle -bottom-5vh left-10vw w-17vw"
    />
    <img
      src="../assets/3d-circle.svg"
      alt="3d-circle"
      class="absolute 3d-circle w-6vw bottom-26vh left-20vw"
    />
    <img
      src="../assets/3d-circle.svg"
      alt="3d-circle"
      class="absolute 3d-circle top-30vh -right-5vw w-17vw -rotate-130"
    />
    <img
      src="../assets/3d-circle.svg"
      alt="3d-circle"
      class="absolute 3d-circle w-6vw top-55vh right-10vw -rotate-135"
    />
  </header>
</template>

<style lang="scss" scoped>
#tag-line {
  @apply text-8vw md:(text-3.5vw w-80vw) leading-9 md:leading-none mx-auto;
  font-family: 'Joyride VF';

  span {
    @apply transition-all;
    transition-timing-function: cubic-bezier(0.45, 0, 0.55, 1);
    @apply duration-1000;
    font-variation-settings: 'wdth' 100;

    &.stretch {
      font-variation-settings: 'wdth' 115;
    }
  }
}

#noise {
  background: url('~/assets/noise.svg') repeat;
  @apply w-full;
  @apply h-full;
  @apply mix-blend-multiply;
}
</style>
