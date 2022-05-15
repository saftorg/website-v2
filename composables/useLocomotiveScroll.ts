import { Ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger.js'

export const useLocomotiveScroll = (
  elem: Ref<HTMLElement> | HTMLElement,
  options?: object
) => {
  gsap.registerPlugin(ScrollTrigger)

  const el = unref(elem)
  const scroll = inject('LocomotiveScroll')({
    el,
    smooth: true,
    ...options,
  })

  scroll.on('scroll', ScrollTrigger.update)

  ScrollTrigger.scrollerProxy(el, {
    scrollTop(value: number) {
      return arguments.length
        ? scroll.scrollTo(value, 0, 0)
        : scroll.scroll.instance.scroll.y
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      }
    },
    pinType: el.style.transform ? 'transform' : 'fixed',
  })

  ScrollTrigger.defaults({})

  ScrollTrigger.addEventListener('refresh', () => scroll.update())

  return scroll
}
