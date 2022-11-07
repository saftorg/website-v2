<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger.js';
import { Mountain, TAPLogo } from '~/images';

useHead({ title: 'SAFT Apologetics' });

type Keys = 'isMobile' | 'isNotMobile';

const fadeInAnimationConstants = {
  autoAlpha: 1,
  y: 0,
  duration: 0.5,
};

const breakpointAnimationValues: {
  [x in Keys]: {
    [y in 'hero']: { [z: string]: string | number | boolean };
  };
} = {
  isMobile: { hero: { y: '50%', scale: 1.3 } },
  isNotMobile: { hero: { x: '-50%', scale: 2 } },
};

const isMobile = computed<Keys>(() =>
  useBreakpoints(breakpointsTailwind).smaller('md') ? 'isMobile' : 'isNotMobile'
);

const computedAnimationValues = computed(
  () => breakpointAnimationValues[isMobile.value]
);

tryOnMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  const tapLogoAnimation = gsap
    .timeline({
      scrollTrigger: { trigger: '#tap-logo', start: 'top top', pin: true },
      paused: true,
    })
    .to('#tap-logo', fadeInAnimationConstants, 0)
    .to('#areopagus-hero', { scale: 1, x: 0 }, 0.5)
    .from('#areopagus-desc', { autoAlpha: 0, y: '-=15%', duration: 0.5 });

  const tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: '#areopagus-screen',
        start: 'center center',
        end: '+=150%',
        anticipatePin: 1,
        pin: true,
        scrub: true,
        onEnter() {
          tapLogoAnimation.kill();
        },
        onLeave() {
          tapLogoAnimation.play();
        },
        onEnterBack() {
          tapLogoAnimation.reverse();
        },
      },
    })
    .set('#areopagus-hero', computedAnimationValues.value.hero)
    .from('#areopagus-mountain', {
      y: '-30%',
      scale: 1.5,
    });
});
</script>

<template>
  <div
    id="areopagus-screen"
    class="place-items-center h-screen mt-[10vw] wrapper"
  >
    <p
      id="areopagus-desc"
      class="row-start-2 md:row-start-1 md:col-start-2 md:col-end-12 col-start-2 col-end-15 text-[#01124F]"
    >
      The Areopagus Project brings together world’s leading Christian speakers
      and India’s leading musicians on one stage for a conference experience
      unlike anything else in India.
    </p>
    <div
      id="areopagus-hero"
      class="flex flex-col row-start-1 md:row-start-1 [&>*]:mx-auto isolate col-start-2 col-end-15 md:col-start-13 md:col-end-23"
    >
      <img
        :src="Mountain"
        id="areopagus-mountain"
        alt="areopagus-mountain"
        class="w-[100%]"
      />
      <img
        :src="TAPLogo"
        id="tap-logo"
        alt="The Areopagus Project Logo"
        class="w-[50vw] md:w-[25vw] md:mt-[-3vw] z-[-1] opacity-0 -translate-y-10"
      />
    </div>
  </div>
</template>
