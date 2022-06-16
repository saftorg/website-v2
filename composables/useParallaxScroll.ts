import { Ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger.js';

export const useParallaxScroll = (
  el: Ref<HTMLElement> | HTMLElement | null = null
) => {
  gsap.registerPlugin(ScrollTrigger);

  tryOnMounted(() => {
    unref(el ?? document)
      .querySelectorAll('[data-scroll]')
      .forEach((scrollEl: HTMLElement) => {
        const speed = parseFloat(
          scrollEl.getAttribute('data-scroll-speed') ?? '1'
        );

        console.log(speed, scrollEl.tagName);
        const rate = 100;

        gsap.set(scrollEl, { y: 0 });
        gsap.to(scrollEl, {
          y: rate * speed,
          scrollTrigger: {
            start: 'top 50%',
            trigger: scrollEl,
            scrub: 0.5,
          },
          ease: 'none',
        });
      });
  });
};
