import { Ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger.js';
import { breakpointsTailwind } from '@vueuse/core';

export const useParallaxScroll = (
  el: Ref<HTMLElement> | HTMLElement | null = null
) => {
  const isMobile = useBreakpoints(breakpointsTailwind).smaller('md');

  tryOnMounted(() => {
    gsap.registerPlugin(ScrollTrigger);
    unref(el ?? document)
      .querySelectorAll('[data-scroll]')
      .forEach((scrollEl: HTMLElement) => {
        const speed = parseFloat(
          isMobile.value &&
            scrollEl.getAttribute('data-scroll-speed-mobile') !== null
            ? scrollEl.getAttribute('data-scroll-speed-mobile')
            : scrollEl.getAttribute('data-scroll-speed') ?? '1'
        );

        const rate = 100;

        gsap.set(scrollEl, { y: 0 });
        gsap.to(scrollEl, {
          y: rate * speed,
          scrollTrigger: {
            start: scrollEl.getAttribute('data-scroll-start') ?? 'top 50%',
            trigger: scrollEl,
            scrub: 0.5,
          },
          ease: 'none',
        });
      });
  });
};
