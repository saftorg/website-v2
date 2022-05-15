<script setup lang="ts">
import { Ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger.js'

import BrianAutenImg from '~/assets/brian-auten.jpg'

const mainStore = useMainStore();

const loading = ref<HTMLElement>();
const circleGroup = ref<HTMLElement>();
const headerSection = ref<HTMLElement>();
const descSection = ref<HTMLElement>();

const loadIn = (isLocked: Ref<boolean>) => {
  const onCompleteLoad = () => {
    mainStore.value.isMenuVisible = true
  }

  isLocked.value = true

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
    isLocked.value = false
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
    if (isIntersecting) mainStore.value.bgColor = backgroundColor
  })
})

tryOnMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  const isLocked = useScrollLock(document.querySelector('html'))
  loadIn(isLocked)
  gsap.from('#tag-line', {
    y: '-200%',
    scrollTrigger: {
      trigger: '#tag-line',
      scrub: 0.5,
    },
    ease: 'none',
  })
  gsap.to('.marquee-inner.forward', {
    x: '+=10%',
    scrollTrigger: { trigger: '.marquee-inner.forward', scrub: true },
  })
  gsap.to('.marquee-inner.reverse', {
    x: '-=10%',
    scrollTrigger: { trigger: '.marquee-inner.reverse', scrub: true },
  })
  gsap.fromTo(
    '.marquee-inner.forward',
    { x: '-25%' },
    { x: '-58.55%', repeat: -1, duration: 18, ease: 'linear' }
  )
  gsap.fromTo(
    '.marquee-inner.reverse',
    { x: '-58.55%' },
    { x: '-25%', repeat: -1, duration: 18, ease: 'linear' }
  )
})

useSplitText(
  '#main-desc',
  (line: HTMLElement) =>
    gsap.fromTo(
      line,
      { rotate: 6, y: '150%', opacity: 0 },
      {
        rotate: 0,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: line,
          start: 'center bottom',
          onEnter() {
            line.querySelectorAll('.thicken').forEach((elem) => {
              elem.classList.add('active-text-anim')
            })
          },
        },
        duration: 0.5,
        ease: 'expo.out',
      }
    ),
  'lines words'
)

useSplitText(
  '#trust',
  (line: HTMLElement) =>
    gsap.fromTo(
      line,
      { rotate: 15, y: '150%' },
      {
        transformOrigin: 'top left',
        rotate: 0,
        y: 0,
        scrollTrigger: {
          trigger: line,
          start: 'center bottom',
        },
        duration: 1.2,
        ease: 'expo.out',
      }
    ),
  'lines words',
  { wrapType: 'span', wrapClass: 'overflow-hidden block' }
)
</script>

<template>
  <div class="scroller">
    <svg class="fixed w-full h-full pointer-events-none stroke-1 z-[49] fill-[none] stroke-white" width="100%"
      height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path ref="loading" class="[stroke-dasharray:1] [stroke-dashoffset:1]" pathLength="1"
        d="M 0 0 H 100 V 100 H 0 Z" />
    </svg>
    <header ref="headerSection" class="grid relative w-screen h-screen pointer-events-none isolate z-[-1]">
      <img src="../assets/medium-purple.png"
        class="header-blob absolute top-[-30vh] left-[-40vw] md:top-[-50vh] z-[-1] md:-left-[30vw] w-[150%] md:w-[90%] opacity-0" />
      <img src="../assets/light-blue.png"
        class="header-blob absolute z-[-1] top-[40vh] left-[50vw] w-[150%] md:w-[90%] opacity-0" />
      <h1 id="tag-line" class="place-self-center">
        Equipping the <span>believer</span> to <span>defend</span> their
        <span>faith</span><br />
        <span>anytime, anywhere</span>.
      </h1>

      <div ref="circleGroup"
        class="grid absolute h-screen w-screen pointer-events-none aspect-square z-[-1] md:grid-cols-6 md:grid-rows-6 md:aspect-none"
        data-scroll data-scroll-speed="-1">
        <img src="../assets/3d-circle.svg" alt="3d-circle" class="col-start-2 row-start-6 threed-circle big" />
        <img src="../assets/3d-circle.svg" alt="3d-circle"
          class="col-start-2 row-start-5 place-self-end threed-circle small" />
        <img src="../assets/3d-circle.svg" alt="3d-circle"
          class="col-start-6 row-start-3 threed-circle rotate-[-130] big" />
        <img src="../assets/3d-circle.svg" alt="3d-circle"
          class="col-start-5 row-start-3 justify-self-end self-start threed-circle rotate-[-135] small" />
      </div>
    </header>

    <section ref="descSection" class="mt-[10vh] wrapper">
      <p id="main-desc"
        class="font-light text-left px-[5vw] text-[9vw] leading-relaxed md:text-[6vw] md:leading-snug col-span-full row-start-1">
        Be it English or non-English, churches or youth gatherings, podcasts or
        videos, closed settings or national conferences, at
        <span class="thicken">SAFT</span> we venture into diverse spaces
        proclaiming the <span class="thicken">Good News</span> with intellectual
        vigour, grace and meekness calling all unto the free gift of
        <span class="thicken">salvation.</span>
      </p>

      <oval-button class="col-start-2 col-end-15 md:col-start-18 md:col-end-23 row-start-2 mt-[3vw]">Learn about us
      </oval-button>

      <div class="col-span-full row-start-3 uppercase -rotate-3 marquee text-[7.2vw] mt-[13vw]">
        <div class="marquee-inner forward font-joyride-ext-out">
          Seeking Answers Finding Truth Seeking Answers Finding Truth Seeking
          Answers Finding Truth
        </div>
        <div class="marquee-inner reverse font-joyride-ext">
          Seeking Answers Finding Truth Seeking Answers Finding Truth Seeking
          Answers Finding Truth
        </div>
      </div>
    </section>

    <section class="md:px-0 px-[5vw] wrapper my-[13vw]">
      <h2 id="trust" class="col-span-full md:col-span-5 md:col-start-4 text-left mt-[5vw]">
        Here’s what people who <span class="font-serif italic">trust</span> us
        have to say
      </h2>
      <oval-button class="col-start-2 col-end-15 row-start-3 md:col-start-4 md:col-span-6 md:row-start-2 mt-[3vw]">
        See
        all
        endorsements
      </oval-button>
      <div
        class="row-start-2 col-span-full h-[70vh] mb-[42vw] md:col-span-11 md:col-start-11 md:row-start-1 md:row-end-3 md:h-[45vw] md:mb-0">
        <endorsement-card :src="BrianAutenImg" alt="Brian Auten">
          <template #name>Brian Auten</template>
          <template #sub-title>Apologetics315</template>
          <template #body>SAFT Apologetics has risen to the challenges of skepticism and
            doubt in today's culture by giving thoughtful answers and meaningful
            response through their excellent ministry. The team at SAFT has a
            heart for the Gospel, a passion for the truth, and compassion for
            our world which is evident in their gracious engagement. They are
            building a great resource and a much-needed ministry.</template>
        </endorsement-card>
        <div class=""></div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
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
</style>

<style lang="scss" scoped>
.marquee {
  @apply relative;
  @apply overflow-hidden;

  &-inner {
    @apply relative;
    @apply w-max;
    @apply h-[7.8vw];
    transform: translate3d(-25%, 0, 0);
    animation: marquee 18s linear infinite;
  }
}

.animation-delay {
  animation: marquee 12.5s linear infinite;
}

/*
@keyframes marquee {
  0% {
    transform: translate3d(-25%, 0, 0);
  }

  100% {
    transform: translate3d(-58.55%, 0, 0);
  }
}
*/

#tag-line {
  @apply text-[8vw] leading-9 mx-auto;
  perspective: 10px;
  transform: translateZ(5px);
  font-family: 'Joyride VF';

  span {
    @apply transition-all;
    @apply ease-in-out-expo;
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
}

.threed-circle {
  @apply relative;

  &.big {
    @apply w-[32vw];
  }

  &.small {
    @apply w-[12vw];
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

@screen md {
  #tag-line {
    @apply text-[3.5vw] w-[80vw] leading-none;
  }

  .threed-circle {
    @apply relative;

    &.big {
      @apply w-[17vw];
    }

    &.small {
      @apply w-[6vw];
    }
  }
}
</style>
