<script setup lang="ts">
import { Ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger.js'
import { useMainStore } from '~/stores/main'
import { useSplitText } from '~/composables/splitText'

const mainStore = useMainStore()

const loading = ref<HTMLElement>()
const circleGroup = ref<HTMLElement>()
const headerSection = ref<HTMLElement>()
const descSection = ref<HTMLElement>()

const loadIn = () => {
  const onCompleteLoad = () => {
    mainStore.isMenuVisible = true
  }

  document
    .querySelector('html')!
    .classList.add('overflow-y-hidden', 'touch-none')

  const tl = gsap
    .timeline()
    .to(loading.value!, {
      strokeDashoffset: 0,
      duration: 2,
      ease: 'power4.out',
      autoRound: false,
      onComplete: onCompleteLoad,
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
    .fromTo(
      circleGroup.value!,
      { scale: 2, rotate: -35, opacity: 0 },
      {
        rotate: 0,
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: 'expo.out',
        onComplete() {
          circleGroup.value!.classList.add('animate-spin-long')
        },
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
      4
    )

  tl.eventCallback('onComplete', () => {
    document
      .querySelector('html')!
      .classList.remove('overflow-y-hidden', 'touch-none')
  })

  return
}

const bgSections: {
  backgroundColor: string
  trigger: Ref<HTMLElement | undefined>
}[] = [
  {
    backgroundColor: '#0F6CAF',
    trigger: headerSection,
  },
  { backgroundColor: '#5B14CE', trigger: descSection },
]

bgSections.forEach(({ backgroundColor, trigger }) => {
  useIntersectionObserver(trigger, ([{ isIntersecting }]) => {
    if (isIntersecting) mainStore.bgColor = backgroundColor
  })
})

tryOnMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  loadIn()
})

useSplitText(
  '#main-desc',
  (line: HTMLElement) =>
    gsap.fromTo(
      line,
      { rotate: -3, y: '150%', opacity: 0 },
      {
        transformOrigin: 'bottom left',
        rotate: 0,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: line,
          start: 'center bottom',
          onEnter() {
            line.querySelectorAll('.thicken').forEach((elem) => {
              ;(elem as HTMLElement).style.fontVariationSettings = "'wght' 700"
              ;(elem as HTMLElement).style.transition =
                'font-variation-settings cubic-bezier(0.25, 1, 0.5, 1) 1s .5s'
            })
          },
        },
        duration: 0.5,
        ease: 'expo.out',
      }
    ),
  'lines words',
  undefined
)
</script>

<template>
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
  <header
    ref="headerSection"
    class="grid relative w-screen h-screen pointer-events-none isolate"
  >
    <img
      src="../assets/medium-purple.png"
      class="header-blob absolute -top-30vh -left-40vw md:-top-50vh -z-1 md:-left-30vw w-150% md:w-90% opacity-0"
    />
    <img
      src="../assets/light-blue.png"
      class="header-blob absolute -z-1 top-40vh left-50vw w-150% md:w-90% opacity-0"
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

    <div
      ref="circleGroup"
      class="grid absolute h-screen w-screen pointer-events-none aspect-square -z-1 md:(grid-cols-6 grid-rows-6 aspect-none)"
    >
      <img
        src="../assets/3d-circle.svg"
        alt="3d-circle"
        class="col-start-2 row-start-6 threed-circle big"
      />
      <img
        src="../assets/3d-circle.svg"
        alt="3d-circle"
        class="col-start-2 row-start-5 place-self-end threed-circle small"
      />
      <img
        src="../assets/3d-circle.svg"
        alt="3d-circle"
        class="col-start-6 row-start-3 threed-circle -rotate-130 big"
      />
      <img
        src="../assets/3d-circle.svg"
        alt="3d-circle"
        class="col-start-5 row-start-3 justify-self-end self-start threed-circle -rotate-135 small"
      />
    </div>
  </header>

  <section ref="descSection" class="mt-10vh">
    <p
      id="main-desc"
      class="font-light text-left px-5vw text-9vw leading-relaxed md:(text-7vw leading-snug)"
    >
      Be it English or non-English, churches or youth gatherings, podcasts or
      videos, closed settings or national conferences, at SAFT we venture into
      diverse spaces proclaiming the <span class="thicken">Good News</span> with
      intellectual vigour, grace and meekness calling all unto the free gift of
      <span class="thicken">salvation.</span>
    </p>
  </section>

  <section class="min-h-screen"></section>
</template>

style

<style lang="scss" scoped>
#tag-line {
  @apply text-8vw md:(text-3.5vw w-80vw) leading-9 md:leading-none mx-auto;
  font-family: 'Joyride VF';

  span {
    @apply transition-all;
    transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
    @apply duration-1000;
    font-variation-settings: 'wdth' 100;

    &.stretch {
      font-variation-settings: 'wdth' 115;
    }
  }
}

#main-desc {
  font-family: 'Manrope VF';
  font-variation-settings: 'wght' 200;
  div {
    @apply transition-all;
    transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
    @apply duration-1000;
  }

  .thicken {
    &.active {
      font-variation-settings: 'wght' 700;
    }
  }
}

.threed-circle {
  @apply relative;

  &.big {
    @apply w-32vw md:w-17vw;
  }
  &.small {
    @apply w-12vw md:w-6vw;
  }
}

.animate-spin-long {
  animation: spin 60s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
