import { Ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger.js';

export const useLineRevealAnimation = (
  el: Ref<HTMLElement> | HTMLElement | string
) => {
  const animation =
    (elem: HTMLElement | string) => (line: HTMLElement, index: number) =>
      gsap.fromTo(
        line,
        { rotate: 15, y: '150%' },
        {
          transformOrigin: 'top left',
          rotate: 0,
          delay: 0.1 * index,
          y: 0,
          scrollTrigger: {
            trigger: elem,
            start: 'center bottom',
          },
          duration: 1.2,
          ease: 'expo.out',
        }
      );

  tryOnMounted(() => {
    gsap.registerPlugin(ScrollTrigger);
  });

  useSplitText(el, animation(unref(el)), 'lines words', {
    wrapType: 'span',
    wrapClass: 'overflow-hidden block',
  });
};
