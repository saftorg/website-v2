<script lang="ts">
import { watch, ref, h } from "vue"
import { tryOnMounted, useIntersectionObserver } from "@vueuse/core"
import anime from 'animejs'
import Splitting from "splitting";

export default {
  props: {
    delay: Number,
    duration: {
      type: Number,
      default: 500,
    },
    as: { type: String, default: "h1" },
    class: { type: String, default: "" },
    triggeredByScroll: Boolean,
    appearOnce: Boolean,
    exit: Boolean,
    enter: Boolean,
    onCompleteEnter: Function,
    onCompleteExit: Function,
    characterSize: {
      type: Number,
      default: 1.1,
    },
    staggerDelay: {
      type: Number,
      default: 15,
    }
  },
  setup(props, { slots, attrs }) {
    const uniqueId = `data-splitting-${Math.floor(Math.random() * 10000)}`
    const hasAppeared = ref(false)

    tryOnMounted(() => {
      const el = document.querySelector(`#${uniqueId}`)
      const enterAnimation = () => {
        el!.classList.remove("invisible")
        anime({
          targets: `#${uniqueId} .word .char`,
          translateY: [`${props.characterSize}ch`, 0],
          rotate: [10, 0],
          delay: anime.stagger(props.staggerDelay, { start: props.delay }),
          duration: props.duration,
          easing: "easeOutExpo",
          complete: () => props.onCompleteEnter !== undefined ? props.onCompleteEnter() : undefined
        })
      }

      const exitAnimation = () => {
        anime({
          targets: `#${uniqueId} .word .char`,
          translateY: [0, `-${props.characterSize + .1}ch`],
          rotate: [0, -10],
          delay: anime.stagger(props.staggerDelay, { start: props.delay, direction: 'reverse' }),
          duration: props.duration,
          easing: "easeInExpo",
          complete: () => {
            el!.classList.add("invisible");
            props.onCompleteExit !== undefined ? props.onCompleteExit() : undefined;

          }
        })
      }
      el!.classList.add("invisible")
      Splitting({
        target: `#${uniqueId}`,
        by: "chars",
      });
      document.querySelectorAll(`#${uniqueId} .word`).forEach((el => {
        el.classList.add("clip")
      }))
      if (props.triggeredByScroll) {
        useIntersectionObserver(
          el as HTMLElement,
          ([{ isIntersecting }]) => {
            el!.classList.remove("invisible")
            if ((isIntersecting && !hasAppeared.value) || (isIntersecting && !props.appearOnce)) {
              if (props.appearOnce)
                hasAppeared.value = true
              enterAnimation()
            }
          },
        )
      } else if (!props.enter) {
        enterAnimation()
      }
      watch(() => props.enter, (val) => { if (val) enterAnimation() })
      watch(() => props.exit, (val) => { if (val) exitAnimation() })
    })

    return () => h(props.as, {
      id: uniqueId, class: props.class, ...attrs
    }, slots.default())
  }
}
</script>
