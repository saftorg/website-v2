<script setup lang="ts">
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger.js';
import { BrianAutenImg, AlisaChildersImg, TysonImg } from '~/images';

const isAnimating = ref(false);
const endorsements = ref<
  {
    title: string;
    subTitle: string;
    img: any;
    description: string;
  }[]
>([
  {
    title: 'Alisa Childers',
    img: AlisaChildersImg,
    subTitle: 'Author - Another Gospel?',
    description:
      'I have been so impressed with the work SAFT team has been doing to bring apologetics awareness to India! It has been a joy to follow them and pray for them as they fulfill the Great Commission by bringing reasoned arguments in defense of the Christian faith.',
  },
  {
    title: 'Brian Auten',
    img: BrianAutenImg,
    subTitle: 'Apologetics315',
    description:
      "SAFT Apologetics has risen to the challenges of skepticism and doubt in today's culture by giving thoughtful answers and meaningful response through their excellent ministry. The team at SAFT has a heart for the Gospel, a passion for the truth, and compassion for our world which is evident in their gracious engagement. They are building a great resource and a much-needed ministry.",
  },
  {
    title: 'Tyson James',
    img: TysonImg,
    subTitle: 'GLOBAL CHAPTERS DIRECTOR, REASONABLE FAITH',
    description: `The world needs more SAFT Apologetics! As the Global Chapters Director for Reasonable Faith, I'm thrilled to see such a dedicated and exuberant team putting out great content and regularly hosting interviews with amazing scholars. I give this ministry my full recommendation! Subscribe, watch, like, and share!`,
  },
]);
const endorsementIndex = ref(0);
const setIndex = (n = 0) => {
  const offset = endorsementIndex.value + n;
  const length = endorsements.value.length;
  const val = ((offset % length) + length) % length;
  return val;
};
const nextEndorsement = () => {
  if (isAnimating.value) return;
  isAnimating.value = true;
  gsap
    .timeline({
      force3D: true,
      onComplete() {
        isAnimating.value = false;
        this.time(0).kill();
        endorsementIndex.value = setIndex(1);
      },
    })
    .fromTo(
      '#endorsement-cards > div:nth-child(1)',
      {
        y: '-1.75rem',
        scale: 0.95,
        autoAlpha: 1,
      },
      {
        y: '-2.25rem',
        scale: 0.9,
        autoAlpha: 0,
        ease: 'expo.out',
      },
      0
    )
    .fromTo(
      '#endorsement-cards > div:nth-child(2)',
      {
        y: 0,
        scale: 1,
        autoAlpha: 1,
      },
      {
        y: '-1.75rem',
        scale: 0.95,
        ease: 'expo.out',
      },
      0.1
    )
    .fromTo(
      '#endorsement-cards > div:nth-child(3)',
      {
        y: '1.75rem',
        scale: 1.05,
        autoAlpha: 0,
        zIndex: 1,
      },
      {
        y: 0,
        scale: 1,
        autoAlpha: 1,
        ease: 'expo.out',
      },
      0.2
    );
};
const prevEndorsement = () => {
  if (isAnimating.value) return;
  isAnimating.value = true;
  gsap
    .timeline({
      force3D: true,
      onComplete() {
        isAnimating.value = false;
        endorsementIndex.value = setIndex(-1);
        this.time(0).kill();
      },
    })
    .fromTo(
      '#endorsement-cards > div:nth-child(1)',
      {
        y: '-1.75rem',
        scale: 0.95,
      },
      {
        y: 0,
        scale: 1,
        autoAlpha: 1,
        ease: 'expo.out',
      },
      0
    )
    .fromTo(
      '#endorsement-cards > div:nth-child(2)',
      {
        y: 0,
        scale: 1,
        autoAlpha: 1,
      },
      {
        y: '1.75rem',
        scale: 1.05,
        autoAlpha: 0,
        ease: 'expo.out',
      },
      0.1
    )
    .fromTo(
      '#endorsement-cards > div:nth-child(3)',
      {
        y: '-2.25rem',
        scale: 0.9,
        autoAlpha: 0,
        zIndex: -1,
      },
      {
        y: '-1.75rem',
        scale: 0.95,
        autoAlpha: 1,
        ease: 'expo.out',
      },
      0.2
    );
};
tryOnMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  const marqueeElements = [
    {
      name: '.marquee-inner.forward',
      scrollOffset: '+=10%',
      x: { from: '-25%', to: '-58.55%', duration: 18 },
    },
    {
      name: '.marquee-inner.reverse',
      scrollOffset: '-=10%',
      x: { to: '-25%', from: '-58.55%', duration: 18 },
    },
  ];
  marqueeElements.forEach((el) => {
    gsap.fromTo(
      el.name,
      { x: el.x.from },
      { x: el.x.to, repeat: -1, duration: 18, ease: 'linear' }
    );
    gsap.to(el.name, {
      x: el.scrollOffset,
      scrollTrigger: {
        trigger: el.name,
        scrub: 0.5,
      },
    });
  });
});
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
              elem.classList.add('active-text-anim');
            });
          },
        },
        duration: 0.5,
        ease: 'expo.out',
      }
    ),
  'lines words'
);
useLineRevealAnimation('#trust');
</script>

<template>
  <section>
    <section class="mt-[10vh] wrapper">
      <p
        id="main-desc"
        class="font-light text-left px-[5vw] text-[9vw] leading-relaxed md:text-[6vw] md:leading-snug col-span-full row-start-1"
      >
        Be it English or non-English, churches or youth gatherings, podcasts or
        videos, closed settings or national conferences, at
        <span class="thicken">SAFT</span> we venture into diverse spaces
        proclaiming the <span class="thicken">Good News</span> with intellectual
        vigour, grace and meekness calling all unto the free gift of
        <span class="thicken">salvation.</span>
      </p>

      <oval-button
        class="col-start-2 col-end-15 md:col-start-18 md:col-end-23 row-start-2 mt-[3vw]"
      >
        Learn about us
      </oval-button>

      <div
        class="col-span-full row-start-3 uppercase -rotate-3 marquee text-[7.2vw] mt-[13vw]"
      >
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
      <h2
        id="trust"
        class="col-span-full md:col-span-5 md:col-start-4 text-left mt-[5vw]"
      >
        Here's what people who <span class="font-serif italic">trust</span> us
        have to say
      </h2>

      <oval-button
        class="col-start-2 col-end-15 row-start-4 md:col-start-4 md:col-span-6 md:row-start-2 mt-[3vw]"
      >
        See all endorsements
      </oval-button>

      <div
        class="col-span-full row-start-3 mt-[10vw] md:mt-0 mb-[30vw] md:col-span-11 md:col-start-11 md:row-start-1 md:row-end-3 md:mb-0 relative [&>*]:absolute [&>*]:origin-top isolate h-[70vh] md:h-[45vw] [&>*]:md:h-[45vw] [&>*]:h-[70vh]"
        id="endorsement-cards"
      >
        <div class="scale-95 -translate-y-7">
          <endorsement-card
            :src="endorsements[setIndex(-1)].img"
            :alt="endorsements[setIndex(-1)].title"
          >
            <template #name>{{ endorsements[setIndex(-1)].title }}</template>
            <template #sub-title>
              {{ endorsements[setIndex(-1)].subTitle }}
            </template>
            <template #body>
              {{ endorsements[setIndex(-1)].description }}
            </template>
          </endorsement-card>
        </div>

        <div>
          <endorsement-card
            :src="endorsements[setIndex()].img"
            :alt="endorsements[setIndex()].title"
          >
            <template #name>{{ endorsements[setIndex()].title }}</template>
            <template #sub-title>
              {{ endorsements[setIndex()].subTitle }}
            </template>
            <template #body>{{
              endorsements[setIndex()].description
            }}</template>
          </endorsement-card>
        </div>

        <div
          class="scale-105 translate-y-7"
          :style="{ opacity: 0 }"
        >
          <endorsement-card
            :src="endorsements[setIndex(1)].img"
            :alt="endorsements[setIndex(1)].title"
          >
            <template #name>{{ endorsements[setIndex(1)].title }}</template>
            <template #sub-title>
              {{ endorsements[setIndex(1)].subTitle }}
            </template>
            <template #body>{{
              endorsements[setIndex(1)].description
            }}</template>
          </endorsement-card>
        </div>
      </div>
      <div
        class="md:mt-[8vw] row-start-2 md:row-start-3 col-span-full md:col-start-11 md:col-end-22 flex justify-center"
      >
        <button
          @click="prevEndorsement"
          class="rounded-[50%] aspect-square h-14 p-2 border border-white bounce"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="aspect-square h-fit"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
        </button>

        <button
          @click="nextEndorsement"
          class="ml-4 cursor-pointer rounded-[50%] aspect-square h-14 p-2 border border-white bounce"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="rotate-180 aspect-square h-fit"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
        </button>
      </div>
    </section>
  </section>
</template>

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
#main-desc {
  font-family: 'Manrope VF';
  font-variation-settings: 'wght' 200;
  div {
    @apply transition-all;
    transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
    @apply duration-1000;
  }
}
</style>
